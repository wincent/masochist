mod assets;
mod templates;

use masochist_lib::content::{self, ContentBody, ContentItem, ContentType, TimestampMap};
use masochist_lib::git::{GitRepo, TreeEntry};
use masochist_lib::index::SiteIndex;
use rayon::prelude::*;
use std::collections::HashMap;
use std::fs;
use std::io::Write as _;
use std::path::{Path, PathBuf};
use std::time::Instant;

fn main() {
    let repo_path = std::env::args().nth(1).unwrap_or_else(|| ".".to_string());
    let output_dir = std::env::args()
        .nth(2)
        .unwrap_or_else(|| "public".to_string());

    let total_start = Instant::now();

    // Build into a fresh staging directory, then sync to output.
    let staging_dir = std::env::temp_dir().join(format!("masochist-build-{}", std::process::id()));
    fs::create_dir_all(&staging_dir).expect("failed to create staging directory");
    let staging = staging_dir
        .to_str()
        .expect("staging path is not valid UTF-8");

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
    generate_site(staging, &items, &index, &rendered, &redirects);
    eprintln!("  generate: wrote site in {:?}", start.elapsed());

    // Write hashed CSS/JS asset files.
    write_assets(staging);

    // Extract images from the content branch.
    extract_images(&repo_path, staging);

    // Extract static files (icons, legacy pages, favicon, etc.) from the content branch.
    extract_static_files(&repo_path, staging);

    // Sync staging to output, removing stale files but preserving _assets/.
    sync_to_output(staging, &output_dir);

    // Prune old hashed assets, keeping the 10 most recent of each type
    // and any introduced within the last 7 days.
    prune_assets(&output_dir);

    fs::remove_dir_all(&staging_dir).ok();

    eprintln!("Total: {:?}", total_start.elapsed());
}

fn load_from_git(repo_path: &str) -> (TimestampMap, Vec<TreeEntry>, HashMap<String, String>) {
    let ts_repo_path = repo_path.to_string();
    let timestamps_handle = std::thread::spawn(move || {
        let start = Instant::now();
        let repo = GitRepo::new(&ts_repo_path);
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

    let content_repo_path = repo_path.to_string();
    let contents_handle = std::thread::spawn(move || {
        let repo = GitRepo::new(&content_repo_path);

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
                    .map(|entry| (entry.hash.clone(), entry.path.clone()))
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
    files: &[TreeEntry],
    contents: &HashMap<String, String>,
    timestamps: &TimestampMap,
) -> (Vec<ContentItem>, Vec<Redirect>) {
    enum ParseResult {
        Item(ContentItem),
        Redirect(Redirect),
    }

    let parsed: Vec<_> = files
        .par_iter()
        .filter_map(|entry| {
            let path = &entry.path;
            let relative = path.strip_prefix("content/")?;
            let slash = relative.find('/')?;
            let dir = &relative[..slash];
            let filename = &relative[slash + 1..];
            let content_type = ContentType::from_directory(dir)?;

            let id = if let Some(dot) = filename.rfind('.') {
                &filename[..dot]
            } else {
                filename
            };

            // Symlinks represent redirects: the blob content is the target filename.
            if entry.is_symlink {
                let raw = contents.get(path)?;
                let target_filename = raw.trim();
                let target_id = target_filename
                    .strip_suffix(".md")
                    .unwrap_or(target_filename);
                let target = match content_type {
                    ContentType::Wiki => {
                        format!("/wiki/{}", content::encode_wiki_id_for_url(target_id))
                    }
                    _ => format!("/{}/{}", content_type.directory(), target_id),
                };
                return Some(ParseResult::Redirect(Redirect {
                    content_type,
                    id: id.to_string(),
                    target,
                }));
            }

            let raw = contents.get(path)?;
            let (fm, body) = content::parse_frontmatter(raw);

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
    use comrak::{Options, markdown_to_html_with_plugins, options::Plugins};
    use std::collections::HashMap;

    struct HeadingLevelAdapter;

    impl HeadingAdapter for HeadingLevelAdapter {
        fn enter(
            &self,
            output: &mut dyn std::fmt::Write,
            heading: &HeadingMeta,
            _sourcepos: Option<Sourcepos>,
        ) -> std::fmt::Result {
            let level = std::cmp::min(6, heading.level + 1);
            write!(output, "<h{level}>")
        }

        fn exit(
            &self,
            output: &mut dyn std::fmt::Write,
            heading: &HeadingMeta,
        ) -> std::fmt::Result {
            let level = std::cmp::min(6, heading.level + 1);
            write!(output, "</h{level}>")
        }
    }

    let mut options = Options::default();
    options.extension.table = true;
    options.extension.autolink = true;
    options.extension.strikethrough = true;
    options.extension.footnotes = true;
    options.render.r#unsafe = true;

    let adapter = HeadingLevelAdapter;
    let plugins = Plugins {
        render: comrak::options::RenderPlugins {
            heading_adapter: Some(&adapter),
            codefence_syntax_highlighter: None,
            codefence_renderers: HashMap::new(),
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
            item.content_type.directory(),
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
    write_page(out, "400.html", &templates::bad_request());
    write_page(out, "404.html", &templates::not_found());
    write_page(out, "429.html", &templates::too_many_requests());

    let rss = generate_rss(items, &index.blog, rendered);
    fs::write(out.join("blog.rss"), &rss).expect("failed to write RSS feed");

    // Per-tag pages.
    for tag in &index.tags {
        if let Some(indices) = index.items_by_tag.get(&tag.name) {
            let html = templates::tag_page(&tag.name, items, indices);
            write_page(out, &format!("tags/{}.html", tag.name), &html);
        }
    }

    // Redirect file for Caddy.
    let mut caddy_redirects = String::new();
    let mut has_invalid_redirects = false;
    for r in redirects {
        let source = match r.content_type {
            ContentType::Wiki => format!("/wiki/{}", content::encode_wiki_id_for_url(&r.id)),
            _ => format!("/{}/{}", r.content_type.directory(), r.id),
        };
        if !is_valid_caddy_value(&source) {
            eprintln!(
                "error: redirect source contains invalid characters: {source:?} (id={:?})",
                r.id
            );
            has_invalid_redirects = true;
        }
        if !is_valid_caddy_value(&r.target) {
            eprintln!(
                "error: redirect target contains invalid characters: {:?} (id={:?})",
                r.target, r.id
            );
            has_invalid_redirects = true;
        }
        caddy_redirects.push_str(&format!("redir {source} {} permanent\n", r.target));
    }
    if has_invalid_redirects {
        std::process::exit(1);
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

fn sync_to_output(staging: &str, output_dir: &str) {
    use std::process::Command;

    let start = Instant::now();
    let staging_src = format!("{staging}/");

    // Sync everything except _assets/ and .git, deleting stale files from output.
    let status = Command::new("rsync")
        .args([
            "-a",
            "--delete",
            "--exclude=/.git",
            "--exclude=/_assets/",
            &staging_src,
            output_dir,
        ])
        .status()
        .expect("failed to run rsync");

    if !status.success() {
        eprintln!("rsync sync failed");
        std::process::exit(1);
    }

    // Copy _assets/ additively (no --delete, so old hashed assets accumulate).
    let assets_src = format!("{staging}/_assets/");
    let assets_dest = format!("{output_dir}/_assets/");
    fs::create_dir_all(&assets_dest).ok();
    let status = Command::new("rsync")
        .args(["-a", &assets_src, &assets_dest])
        .status()
        .expect("failed to run rsync");

    if !status.success() {
        eprintln!("rsync assets sync failed");
        std::process::exit(1);
    }

    eprintln!("  sync: completed in {:?}", start.elapsed());
}

fn prune_assets(output_dir: &str) {
    use std::process::Command;
    use std::time::{SystemTime, UNIX_EPOCH};

    let start = Instant::now();
    let assets_dir = Path::new(output_dir).join("_assets");

    if !assets_dir.exists() {
        return;
    }

    let now = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap()
        .as_secs() as i64;
    let cutoff = now - 7 * 24 * 60 * 60;

    // Batch-collect introduction timestamps from git history.
    let introduction_times = {
        let output = Command::new("git")
            .args([
                "-C",
                output_dir,
                "log",
                "--diff-filter=A",
                "--format=%at",
                "--name-only",
                "--",
                "_assets/",
            ])
            .output();

        let mut map = HashMap::<String, i64>::new();
        if let Ok(output) = output {
            let stdout = String::from_utf8_lossy(&output.stdout);
            let mut current_ts: Option<i64> = None;
            for line in stdout.lines() {
                let line = line.trim();
                if line.is_empty() {
                    continue;
                }
                if let Ok(ts) = line.parse::<i64>() {
                    current_ts = Some(ts);
                } else if let Some(ts) = current_ts
                    && let Some(filename) = line.strip_prefix("_assets/")
                {
                    map.entry(filename.to_string()).or_insert(ts);
                }
            }
        }
        map
    };

    let mut css_files: Vec<(PathBuf, i64)> = Vec::new();
    let mut js_files: Vec<(PathBuf, i64)> = Vec::new();

    if let Ok(entries) = fs::read_dir(&assets_dir) {
        for entry in entries.flatten() {
            let path = entry.path();
            if !path.is_file() {
                continue;
            }

            let filename = path.file_name().unwrap().to_str().unwrap();
            let added_at = introduction_times
                .get(filename)
                .copied()
                .unwrap_or(i64::MAX); // Not yet in git = just created, always keep.

            match path.extension().and_then(|e| e.to_str()) {
                Some("css") => css_files.push((path, added_at)),
                Some("js") => js_files.push((path, added_at)),
                _ => {}
            }
        }
    }

    let css_pruned = prune_asset_group(&mut css_files, cutoff);
    let js_pruned = prune_asset_group(&mut js_files, cutoff);

    let total = css_pruned + js_pruned;
    if total > 0 {
        eprintln!(
            "  prune: removed {total} old assets ({css_pruned} CSS, {js_pruned} JS) in {:?}",
            start.elapsed()
        );
    } else {
        eprintln!("  prune: nothing to remove in {:?}", start.elapsed());
    }
}

fn prune_asset_group(files: &mut [(PathBuf, i64)], cutoff: i64) -> usize {
    files.sort_by(|a, b| b.1.cmp(&a.1));

    let mut pruned = 0;
    for (path, added_at) in files.iter().skip(10) {
        if *added_at >= cutoff {
            continue;
        }
        if fs::remove_file(path).is_ok() {
            pruned += 1;
        }
    }
    pruned
}

fn strip_html_tags(html: &str) -> String {
    let mut result = String::with_capacity(html.len());
    let mut in_tag = false;
    for ch in html.chars() {
        match ch {
            '<' => in_tag = true,
            '>' => in_tag = false,
            _ if !in_tag => result.push(ch),
            _ => {}
        }
    }
    result
}

fn make_excerpt(html: &str, max_chars: usize) -> String {
    let text = strip_html_tags(html);
    let collapsed: String = text.split_whitespace().collect::<Vec<_>>().join(" ");
    let char_count = collapsed.chars().count();
    if char_count <= max_chars {
        return collapsed;
    }
    let end = collapsed
        .char_indices()
        .nth(max_chars)
        .map(|(i, _)| i)
        .unwrap_or(collapsed.len());
    let truncated = &collapsed[..end];
    match truncated.rfind(' ') {
        Some(pos) => format!("{}...", &truncated[..pos]),
        None => format!("{truncated}..."),
    }
}

fn generate_rss(items: &[ContentItem], blog: &[usize], rendered: &[String]) -> String {
    let count = std::cmp::min(10, blog.len());
    let rss_items: Vec<rss::Item> = blog[..count]
        .iter()
        .map(|&idx| {
            let item = &items[idx];
            let description = item
                .description
                .clone()
                .unwrap_or_else(|| make_excerpt(&rendered[idx], 560));
            let pub_date = chrono::DateTime::from_timestamp(item.timestamps.created_at, 0)
                .map(|dt| dt.format("%a, %d %b %Y %H:%M:%S +0000").to_string());
            let url = format!("https://wincent.dev{}", item.url());
            rss::ItemBuilder::default()
                .title(item.title.clone())
                .link(url.clone())
                .guid(
                    rss::GuidBuilder::default()
                        .value(url)
                        .permalink(true)
                        .build(),
                )
                .pub_date(pub_date)
                .description(description)
                .build()
        })
        .collect();

    rss::ChannelBuilder::default()
        .title("wincent.dev blog")
        .link("https://wincent.dev/blog")
        .description("wincent.dev blog")
        .generator("Masochist".to_string())
        .items(rss_items)
        .build()
        .to_string()
}

fn is_valid_caddy_value(s: &str) -> bool {
    !s.is_empty()
        && !s
            .bytes()
            .any(|b| b == b'\n' || b == b'\r' || b == b'\0' || b == b' ' || b == b'\t')
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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn valid_caddy_values() {
        assert!(is_valid_caddy_value("/foo/bar"));
        assert!(is_valid_caddy_value("https://example.com/path"));
        assert!(is_valid_caddy_value("/wiki/Some_Page"));
        assert!(is_valid_caddy_value("/blog/my-post"));
        assert!(is_valid_caddy_value("http://example.com/redirect?q=1&r=2"));
    }

    #[test]
    fn rejects_empty_string() {
        assert!(!is_valid_caddy_value(""));
    }

    #[test]
    fn rejects_newline() {
        assert!(!is_valid_caddy_value("/safe\nrespond \"pwned\" 200"));
    }

    #[test]
    fn rejects_carriage_return() {
        assert!(!is_valid_caddy_value("/safe\rrespond \"pwned\" 200"));
    }

    #[test]
    fn rejects_null_byte() {
        assert!(!is_valid_caddy_value("/safe\0evil"));
    }

    #[test]
    fn rejects_space() {
        assert!(!is_valid_caddy_value("/path with spaces"));
    }

    #[test]
    fn rejects_tab() {
        assert!(!is_valid_caddy_value("/path\twith\ttabs"));
    }

    #[test]
    fn test_strip_html_tags() {
        assert_eq!(strip_html_tags("<p>hello</p>"), "hello");
        assert_eq!(strip_html_tags("<div><p>nested</p></div>"), "nested");
        assert_eq!(strip_html_tags("no tags here"), "no tags here");
        assert_eq!(strip_html_tags("<br/>self closing"), "self closing");
        assert_eq!(
            strip_html_tags("<a href=\"url\">link</a> text"),
            "link text"
        );
    }

    #[test]
    fn test_make_excerpt_short_content() {
        assert_eq!(make_excerpt("<p>short</p>", 560), "short");
    }

    #[test]
    fn test_make_excerpt_truncation() {
        let html = format!("<p>{}</p>", "word ".repeat(200));
        let excerpt = make_excerpt(&html, 50);
        assert!(excerpt.len() <= 53); // 50 + "..."
        assert!(excerpt.ends_with("..."));
    }

    #[test]
    fn test_generate_rss() {
        let items: Vec<ContentItem> = (0..15)
            .map(|i| ContentItem {
                content_type: ContentType::Blog,
                id: format!("post-{i}"),
                title: format!("Post {i}"),
                tags: vec![],
                body: ContentBody::Markdown(String::new()),
                timestamps: content::Timestamps {
                    created_at: 1_700_000_000 + i * 86400,
                    updated_at: 1_700_000_000 + i * 86400,
                },
                description: None,
            })
            .collect();
        let blog: Vec<usize> = (0..15).collect();
        let rendered: Vec<String> = (0..15)
            .map(|i| format!("<p>Content of post {i}</p>"))
            .collect();

        let rss = generate_rss(&items, &blog, &rendered);
        assert!(rss.contains("<rss"));
        assert!(rss.contains("wincent.dev blog"));
        assert!(rss.contains("Post 0"));
        assert!(rss.contains("Post 9"));
        assert!(!rss.contains("Post 10"));
        assert!(rss.contains("https://wincent.dev/blog/post-0"));
    }
}
