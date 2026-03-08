mod assets;
mod templates;

use masochist_lib::content::{self, ContentBody, ContentItem, ContentType, TimestampMap};
use masochist_lib::git::GitRepo;
use masochist_lib::index::SiteIndex;
use rayon::prelude::*;
use std::collections::HashMap;
use std::fs;
use std::io::Write as _;
use std::path::Path;
use std::time::Instant;

fn main() {
    let repo_path = std::env::args().nth(1).unwrap_or_else(|| ".".to_string());
    let output_dir = std::env::args()
        .nth(2)
        .unwrap_or_else(|| "public".to_string());

    let total_start = Instant::now();

    // Phase 1: Read content and timestamps in parallel.
    let (timestamps, files, contents) = load_from_git(&repo_path);

    // Phase 2: Parse content files.
    let start = Instant::now();
    let (items, redirects) = parse_all_files(&files, &contents, &timestamps);
    eprintln!(
        "  parse: {} items, {} redirects in {:?}",
        items.len(),
        redirects.len(),
        start.elapsed()
    );

    // Phase 3: Build indices.
    let start = Instant::now();
    let index = SiteIndex::build(&items);
    eprintln!("  index: built in {:?}", start.elapsed());

    // Phase 4: Render Markdown to HTML.
    let start = Instant::now();
    let rendered = render_markdown(&items);
    eprintln!("  markdown: rendered in {:?}", start.elapsed());

    // Phase 5: Generate static site.
    let start = Instant::now();
    generate_site(&output_dir, &items, &index, &rendered, &redirects);
    eprintln!("  generate: wrote site in {:?}", start.elapsed());

    // Write hashed CSS/JS asset files.
    write_assets(&output_dir);

    // Extract images from the content branch.
    extract_images(&repo_path, &output_dir);

    // Extract static files (icons, legacy pages, favicon, etc.) from the content branch.
    extract_static_files(&repo_path, &output_dir);

    eprintln!("Total: {:?}", total_start.elapsed());
}

fn load_from_git(
    repo_path: &str,
) -> (TimestampMap, Vec<(String, String)>, HashMap<String, String>) {
    let repo_path_clone = repo_path.to_string();
    let timestamps_handle = std::thread::spawn(move || {
        let start = Instant::now();
        let repo = GitRepo::new(&repo_path_clone);
        let ts = repo.extract_timestamps(
            "content",
            &[
                "content/blog",
                "content/wiki",
                "content/snippets",
                "content/pages",
            ],
        );
        eprintln!("  timestamps: {} files in {:?}", ts.len(), start.elapsed());
        ts
    });

    let repo_path_owned = repo_path.to_string();
    let contents_handle = std::thread::spawn(move || {
        let repo = GitRepo::new(&repo_path_owned);

        let start = Instant::now();
        let mut files = Vec::new();
        for subdir in [
            "content/blog",
            "content/wiki",
            "content/snippets",
            "content/pages",
        ] {
            files.extend(repo.ls_tree("content", subdir));
        }
        eprintln!("  ls-tree: {} files in {:?}", files.len(), start.elapsed());

        let start = Instant::now();
        let num_workers = 4;
        let chunk_size = files.len().div_ceil(num_workers);
        let chunks: Vec<_> = files.chunks(chunk_size).collect();

        let all_contents: Vec<HashMap<String, String>> = chunks
            .into_par_iter()
            .map(|chunk| {
                let worker_repo = GitRepo::new(repo.path());
                let objects: Vec<_> = chunk
                    .iter()
                    .map(|(hash, path)| (hash.clone(), path.clone()))
                    .collect();
                worker_repo.cat_file_batch(objects)
            })
            .collect();

        let mut contents = HashMap::with_capacity(files.len());
        for map in all_contents {
            contents.extend(map);
        }
        eprintln!(
            "  cat-file: {} files in {:?}",
            contents.len(),
            start.elapsed()
        );

        (files, contents)
    });

    let timestamps = timestamps_handle
        .join()
        .expect("timestamps thread panicked");
    let (files, contents) = contents_handle.join().expect("contents thread panicked");
    (timestamps, files, contents)
}

struct Redirect {
    content_type: ContentType,
    id: String,
    target: String,
}

fn parse_all_files(
    files: &[(String, String)],
    contents: &HashMap<String, String>,
    timestamps: &TimestampMap,
) -> (Vec<ContentItem>, Vec<Redirect>) {
    enum ParseResult {
        Item(ContentItem),
        Redirect(Redirect),
    }

    let parsed: Vec<_> = files
        .par_iter()
        .filter_map(|(_, path)| {
            let relative = path.strip_prefix("content/")?;
            let slash = relative.find('/')?;
            let dir = &relative[..slash];
            let filename = &relative[slash + 1..];
            let content_type = ContentType::from_directory(dir)?;
            let raw = contents.get(path)?;

            let (fm, body) = content::parse_frontmatter(raw);

            let id = if let Some(dot) = filename.rfind('.') {
                &filename[..dot]
            } else {
                filename
            };

            let ext = filename.rsplit('.').next().unwrap_or("md");

            if let Some(target) = fm.redirect {
                return Some(ParseResult::Redirect(Redirect {
                    content_type,
                    id: id.to_string(),
                    target,
                }));
            }

            let tags = fm.tag_list();
            let title = fm.title.unwrap_or_else(|| match content_type {
                ContentType::Snippet => format!("Snippet #{id}"),
                _ => id.to_string(),
            });

            let ts = timestamps
                .get(path)
                .cloned()
                .unwrap_or(content::Timestamps {
                    created_at: 0,
                    updated_at: 0,
                });

            let content_body = if ext == "md" {
                ContentBody::Markdown(body.to_string())
            } else {
                ContentBody::Raw {
                    body: body.to_string(),
                    format: ext.to_string(),
                }
            };

            Some(ParseResult::Item(ContentItem {
                content_type,
                id: id.to_string(),
                title,
                tags,
                body: content_body,
                timestamps: ts,
                description: fm.description,
            }))
        })
        .collect();

    let mut items = Vec::new();
    let mut redirects = Vec::new();
    for result in parsed {
        match result {
            ParseResult::Item(item) => items.push(item),
            ParseResult::Redirect(r) => redirects.push(r),
        }
    }
    (items, redirects)
}

fn render_markdown(items: &[ContentItem]) -> Vec<String> {
    items
        .par_iter()
        .map(|item| match &item.body {
            ContentBody::Markdown(md) => markdown_to_html(md),
            ContentBody::Raw { body, .. } => {
                format!("<pre><code>{}</code></pre>", html_escape(body))
            }
            ContentBody::Redirect(_) => String::new(),
        })
        .collect()
}

fn markdown_to_html(md: &str) -> String {
    use comrak::adapters::{HeadingAdapter, HeadingMeta};
    use comrak::nodes::Sourcepos;
    use comrak::{ComrakPlugins, Options, markdown_to_html_with_plugins};

    struct HeadingLevelAdapter;

    impl HeadingAdapter for HeadingLevelAdapter {
        fn enter(
            &self,
            output: &mut dyn std::io::Write,
            heading: &HeadingMeta,
            _sourcepos: Option<Sourcepos>,
        ) -> std::io::Result<()> {
            let level = std::cmp::min(6, heading.level + 1);
            write!(output, "<h{level}>")
        }

        fn exit(
            &self,
            output: &mut dyn std::io::Write,
            heading: &HeadingMeta,
        ) -> std::io::Result<()> {
            let level = std::cmp::min(6, heading.level + 1);
            write!(output, "</h{level}>")
        }
    }

    let mut options = Options::default();
    options.extension.table = true;
    options.extension.autolink = true;
    options.extension.strikethrough = true;
    options.extension.footnotes = true;
    options.render.unsafe_ = true;

    let adapter = HeadingLevelAdapter;
    let plugins = ComrakPlugins {
        render: comrak::RenderPlugins {
            heading_adapter: Some(&adapter),
            codefence_syntax_highlighter: None,
        },
    };

    markdown_to_html_with_plugins(md, &options, &plugins)
}

fn html_escape(s: &str) -> String {
    s.replace('&', "&amp;")
        .replace('<', "&lt;")
        .replace('>', "&gt;")
}

fn generate_site(
    output_dir: &str,
    items: &[ContentItem],
    index: &SiteIndex,
    rendered: &[String],
    redirects: &[Redirect],
) {
    let out = Path::new(output_dir);

    // Create output directories.
    for dir in &["blog", "wiki", "snippets", "pages", "tags", "icons"] {
        fs::create_dir_all(out.join(dir)).expect("failed to create output directory");
    }

    // Individual content pages (parallel).
    let pages: Vec<(String, String)> = items
        .par_iter()
        .enumerate()
        .filter_map(|(i, item)| {
            let html = match item.content_type {
                ContentType::Blog => {
                    let blog_pos = index.blog.iter().position(|&idx| idx == i);
                    // prev (←) = newer post, next (→) = older post.
                    // Blog index is sorted newest-first, so p-1 is
                    // newer and p+1 is older.
                    let prev = blog_pos.and_then(|p| {
                        if p > 0 {
                            Some(&items[index.blog[p - 1]])
                        } else {
                            None
                        }
                    });
                    let next = blog_pos.and_then(|p| {
                        if p + 1 < index.blog.len() {
                            Some(&items[index.blog[p + 1]])
                        } else {
                            None
                        }
                    });
                    templates::blog_post(item, &rendered[i], prev, next)
                }
                ContentType::Wiki => templates::wiki_article(item, &rendered[i]),
                ContentType::Snippet => {
                    let snippet_pos = index.snippets.iter().position(|&idx| idx == i);
                    let prev = snippet_pos.and_then(|p| {
                        if p > 0 {
                            Some(&items[index.snippets[p - 1]])
                        } else {
                            None
                        }
                    });
                    let next = snippet_pos.and_then(|p| {
                        if p + 1 < index.snippets.len() {
                            Some(&items[index.snippets[p + 1]])
                        } else {
                            None
                        }
                    });
                    templates::snippet_page(item, &rendered[i], prev, next)
                }
                ContentType::Page => templates::generic_page(item, &rendered[i]),
            };

            let path = match item.content_type {
                ContentType::Blog => format!("blog/{}.html", item.id),
                ContentType::Wiki => format!("wiki/{}.html", item.id.replace(' ', "_")),
                ContentType::Snippet => format!("snippets/{}.html", item.id),
                ContentType::Page => format!("pages/{}.html", item.id),
            };

            Some((path, html.into_string()))
        })
        .collect();

    for (path, html) in &pages {
        let full_path = out.join(path);
        if let Some(parent) = full_path.parent() {
            fs::create_dir_all(parent).ok();
        }
        fs::write(&full_path, html).expect("failed to write page");
    }

    // Raw snippet files (for /snippets/foo.sh etc).
    for item in items {
        if item.content_type != ContentType::Snippet {
            continue;
        }
        if let ContentBody::Raw { body, format } = &item.body {
            let path = out.join(format!("snippets/{}.{}", item.id, format));
            fs::write(&path, body).expect("failed to write raw snippet");
        }
    }

    // Search index for the search server.
    // Format: type\tid\ttitle\tcreated_at\tupdated_at\ttag1 tag2 ...
    let mut index_data = String::new();
    for item in items {
        let escaped_title = item.title.replace(['\t', '\n'], " ");
        let tags = item.tags.join(" ");
        index_data.push_str(&format!(
            "{}\t{}\t{}\t{}\t{}\t{}\n",
            item.content_type.label(),
            item.id,
            escaped_title,
            item.timestamps.created_at,
            item.timestamps.updated_at,
            tags,
        ));
    }
    fs::write(out.join("_search_index.tsv"), &index_data).expect("failed to write search index");

    // Index pages.
    write_page(
        out,
        "index.html",
        &templates::blog_landing(items, &index.blog, rendered),
    );
    write_page(
        out,
        "blog/index.html",
        &templates::blog_landing(items, &index.blog, rendered),
    );
    write_page(
        out,
        "blog/all.html",
        &templates::blog_archive(items, &index.blog),
    );
    write_page(
        out,
        "wiki/index.html",
        &templates::wiki_index(items, &index.wiki),
    );
    write_page(
        out,
        "snippets/index.html",
        &templates::snippets_landing(items, &index.snippets, rendered),
    );
    write_page(
        out,
        "snippets/all.html",
        &templates::snippets_archive(items, &index.snippets),
    );
    write_page(out, "tags/index.html", &templates::tags_index(&index.tags));
    write_page(out, "search/index.html", &templates::search_page());
    write_page(out, "404.html", &templates::not_found());

    // Per-tag pages.
    for tag in &index.tags {
        if let Some(indices) = index.items_by_tag.get(&tag.name) {
            let html = templates::tag_page(&tag.name, items, indices);
            write_page(out, &format!("tags/{}.html", tag.name), &html);
        }
    }

    // Redirect file for Caddy.
    let mut caddy_redirects = String::new();
    for r in redirects {
        let source = match r.content_type {
            ContentType::Wiki => format!("/wiki/{}", r.id.replace(' ', "_")),
            _ => format!("/{}/{}", r.content_type.label(), r.id),
        };
        // Redirect target can be:
        // - A wiki title in [[brackets]]: "[[Some Article Title]]"
        // - A plain path: "/products/clipper"
        // - A full URL: "https://github.com/..."
        let target = if r.target.starts_with("[[") && r.target.ends_with("]]") {
            let title = &r.target[2..r.target.len() - 2];
            format!("/wiki/{}", title.replace(' ', "_"))
        } else {
            r.target.clone()
        };
        caddy_redirects.push_str(&format!("redir {source} {target} permanent\n"));
    }
    fs::write(out.join("_redirects.caddy"), &caddy_redirects).expect("failed to write redirects");

    eprintln!(
        "    {} content pages, {} tag pages, {} raw snippets, {} redirects",
        pages.len(),
        index.tags.len(),
        items
            .iter()
            .filter(|i| matches!(i.body, ContentBody::Raw { .. }))
            .count(),
        redirects.len(),
    );
}

fn write_page(out: &Path, path: &str, markup: &maud::Markup) {
    let full_path = out.join(path);
    if let Some(parent) = full_path.parent() {
        fs::create_dir_all(parent).ok();
    }
    fs::write(&full_path, markup.0.as_bytes()).expect("failed to write page");
}

fn write_assets(output_dir: &str) {
    let out = Path::new(output_dir);
    let assets_dir = out.join("_assets");
    fs::create_dir_all(&assets_dir).expect("failed to create _assets directory");

    let css_file = assets_dir.join(assets::css_filename());
    fs::write(&css_file, assets::css()).expect("failed to write CSS asset");
    eprintln!(
        "  assets: {} ({} bytes)",
        assets::css_filename(),
        assets::css().len()
    );

    let js_file = assets_dir.join(assets::js_filename());
    fs::write(&js_file, assets::js()).expect("failed to write JS asset");
    eprintln!(
        "  assets: {} ({} bytes)",
        assets::js_filename(),
        assets::js().len()
    );

    let manifest = format!("{}\n{}\n", assets::css_path(), assets::js_path());
    fs::write(out.join("_assets_manifest"), &manifest).expect("failed to write asset manifest");
}

fn git_archive_extract(repo_path: &str, git_path: &str, strip: usize, dest: &Path) {
    use std::process::Command;

    fs::create_dir_all(dest).ok();

    let archive = Command::new("git")
        .arg("-C")
        .arg(repo_path)
        .args(["archive", "content", "--", git_path])
        .output()
        .expect("failed to run git archive");

    if !archive.status.success() {
        eprintln!(
            "  git archive failed for {git_path}: {}",
            String::from_utf8_lossy(&archive.stderr)
        );
        return;
    }

    let mut tar = Command::new("tar")
        .args(["xf", "-", &format!("--strip-components={strip}"), "-C"])
        .arg(dest)
        .stdin(std::process::Stdio::piped())
        .spawn()
        .expect("failed to spawn tar");

    tar.stdin
        .as_mut()
        .expect("failed to open tar stdin")
        .write_all(&archive.stdout)
        .expect("failed to write to tar");

    let status = tar.wait().expect("tar failed");
    if !status.success() {
        eprintln!("  tar extraction failed for {git_path}");
    }
}

fn extract_images(repo_path: &str, output_dir: &str) {
    let images_dir = Path::new(output_dir).join("images");
    git_archive_extract(repo_path, "content/images/", 2, &images_dir);

    let count = fs::read_dir(&images_dir)
        .map(|entries| entries.count())
        .unwrap_or(0);
    eprintln!("  images: extracted {count} files");
}

fn extract_static_files(repo_path: &str, output_dir: &str) {
    let start = Instant::now();
    let out = Path::new(output_dir);

    // content/static/ -> public/ (strip "content/static/" = 2 components)
    git_archive_extract(repo_path, "content/static/", 2, out);

    let count = walkdir(out);
    eprintln!("  static: extracted {count} files in {:?}", start.elapsed());
}

fn walkdir(dir: &Path) -> usize {
    let mut count = 0;
    if let Ok(entries) = fs::read_dir(dir) {
        for entry in entries.flatten() {
            let path = entry.path();
            if path.is_dir() {
                count += walkdir(&path);
            } else {
                count += 1;
            }
        }
    }
    count
}
