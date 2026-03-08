use crate::assets;
use masochist_lib::content::{ContentBody, ContentItem};
use masochist_lib::index::TagEntry;
use maud::{html, Markup, PreEscaped, DOCTYPE};

pub fn base_layout(title: &str, active_nav: &str, canonical: Option<&str>, body: Markup) -> Markup {
    html! {
        (DOCTYPE)
        html lang="en" {
            head {
                meta charset="utf-8";
                meta name="viewport" content="width=device-width, initial-scale=1";
                title { (title) " \u{2022} wincent.dev" }
                @if let Some(url) = canonical {
                    link rel="canonical" href=(format!("https://wincent.dev{url}"));
                }
                link rel="stylesheet" href=(assets::css_path());
            }
            body {
                div.app {
                    (nav_bar(active_nav))
                    section.app-content.container {
                        (body)
                    }
                    (footer())
                }
                script src=(assets::js_path()) {}
            }
        }
    }
}

fn nav_bar(active: &str) -> Markup {
    let links = [
        ("Blog", "/blog"),
        ("Wiki", "/wiki"),
        ("Snippets", "/snippets"),
        ("Tags", "/tags"),
        ("Search", "/search"),
    ];

    html! {
        nav {
            ul {
                li {
                    a.nav-link href="/" style="color:#eee;font-weight:bold" { "wincent.dev" }
                    span.nav-toggle-wrapper {
                        div.nav-toggle onclick="this.closest('nav').classList.toggle('nav-open')" { "Menu" }
                    }
                }
                @for (label, href) in &links {
                    li {
                        @if *label == active {
                            a.nav-link.active href=(href) { (label) }
                        } @else {
                            a.nav-link href=(href) { (label) }
                        }
                    }
                }
            }
        }
    }
}

fn footer() -> Markup {
    html! {
        footer {
            div.container {
                div.row {
                    div.four.columns {
                        h6 { "Site" }
                        ul {
                            li { a href="/blog" { "Blog" } }
                            li { a href="/wiki" { "Wiki" } }
                            li { a href="/snippets" { "Snippets" } }
                            li { a href="/tags" { "Tags" } }
                            li { a href="/search" { "Search" } }
                            li { a href="/pages/about" { "About" } }
                        }
                    }
                    div.four.columns {
                        h6 { "External" }
                        ul {
                            li { a href="https://github.com/wincent" { "GitHub" } }
                            li { a href="https://youtube.com/GregHurrell" { "YouTube" } }
                            li { a href="https://www.facebook.com/glh" { "Facebook" } }
                            li { a href="https://www.linkedin.com/in/greghurrell" { "LinkedIn" } }
                        }
                    }
                    div.four.columns {
                        h6 { "Colophon" }
                        p {
                            "Made by "
                            a href="mailto:greg@hurrell.net" { "Greg Hurrell" }
                            " with "
                            a href="https://rust-lang.org" { "Rust" }
                            " (with help from "
                            a href="https://git-scm.com/" { "Git" }
                            " and "
                            a href="https://neovim.io/" { "Neovim" }
                            ")."
                        }
                    }
                }
            }
        }
    }
}

pub fn format_date(ts: i64) -> String {
    let dt = chrono::DateTime::from_timestamp(ts, 0);
    match dt {
        Some(dt) => dt.format("%-m/%-d/%Y").to_string(),
        None => "Unknown".to_string(),
    }
}

fn read_time(item: &ContentItem) -> usize {
    let raw = match &item.body {
        ContentBody::Markdown(md) => md.as_str(),
        ContentBody::Raw { body, .. } => body.as_str(),
        ContentBody::Redirect(_) => "",
    };
    let words = raw.split_whitespace().count();
    (words + 249) / 250
}

fn render_tags(tags: &[String]) -> Markup {
    html! {
        @if !tags.is_empty() {
            ul.tags {
                @for tag in tags {
                    li { a href=(format!("/tags/{tag}")) { (tag) } }
                }
            }
        }
    }
}

fn render_tags_compact(tags: &[String]) -> Markup {
    html! {
        @if !tags.is_empty() {
            ul.tags.left.compact {
                @for tag in tags {
                    li { a href=(format!("/tags/{tag}")) { (tag) } }
                }
            }
        }
    }
}

fn render_when(item: &ContentItem) -> Markup {
    let created = format_date(item.timestamps.created_at);
    let updated = format_date(item.timestamps.updated_at);
    html! {
        span.when
            data-created=(item.timestamps.created_at)
            data-updated=(item.timestamps.updated_at)
        {
            @if created == updated {
                (created)
            } @else {
                "Created " (created) ", updated " (updated)
            }
        }
    }
}

// Blog post page
pub fn blog_post(
    item: &ContentItem,
    rendered_html: &str,
    prev: Option<&ContentItem>,
    next: Option<&ContentItem>,
) -> Markup {
    let read_mins = read_time(item);
    base_layout(&item.title, "Blog", None, html! {
        article {
            div.readability {
                h1 { a href=(item.url()) { (item.title) } }
                div.metadata {
                    (render_when(item))
                    span { (read_mins) " minute read" }
                }
                div.prerendered { (PreEscaped(rendered_html)) }
                (render_tags(&item.tags))

                div.post-nav {
                    @if let Some(prev) = prev {
                        div.post-nav-prev {
                            a href=(prev.url()) { "\u{2190} " (prev.title) }
                        }
                    }
                    @if let Some(next) = next {
                        div.post-nav-next {
                            a href=(next.url()) { (next.title) " \u{2192}" }
                        }
                    }
                }

                p.post-nav-all { a href="/blog/all" { "All blog posts" } }
            }
        }
    })
}

// Wiki article page
pub fn wiki_article(item: &ContentItem, rendered_html: &str) -> Markup {
    base_layout(&item.title, "Wiki", None, html! {
        article {
            div.readability {
                div.article-header {
                    h1 { (item.title) }
                }
                div.metadata {
                    (render_when(item))
                }
                (render_tags(&item.tags))
                div.prerendered { (PreEscaped(rendered_html)) }
            }
        }
    })
}

// Snippet page
pub fn snippet_page(
    item: &ContentItem,
    content_html: &str,
    prev: Option<&ContentItem>,
    next: Option<&ContentItem>,
) -> Markup {
    base_layout(&item.title, "Snippets", None, html! {
        article {
            h1 { a href=(item.url()) { (item.title) } }
            div.metadata {
                (render_when(item))
            }
            (render_tags(&item.tags))
            div.prerendered { (PreEscaped(content_html)) }

            div.post-nav {
                @if let Some(prev) = prev {
                    div.post-nav-prev {
                        a href=(prev.url()) { "\u{2190} " (prev.title) }
                    }
                }
                @if let Some(next) = next {
                    div.post-nav-next {
                        a href=(next.url()) { (next.title) " \u{2192}" }
                    }
                }
            }

            p.post-nav-all { a href="/snippets/all" { "All snippets" } }
        }
    })
}

// Generic page
pub fn generic_page(item: &ContentItem, rendered_html: &str) -> Markup {
    base_layout(&item.title, "", None, html! {
        article {
            div.readability {
                h1 { a href=(item.url()) { (item.title) } }
                div.metadata {
                    (render_when(item))
                }
                div.prerendered { (PreEscaped(rendered_html)) }
                (render_tags(&item.tags))
            }
        }
    })
}

// Blog landing (3 recent posts in full)
pub fn blog_landing(items: &[ContentItem], blog_indices: &[usize], rendered: &[String]) -> Markup {
    let count = std::cmp::min(3, blog_indices.len());
    base_layout("blog", "Blog", Some("/blog"), html! {
        @for i in 0..count {
            @let idx = blog_indices[i];
            @let item = &items[idx];
            @let html_content = &rendered[idx];
            @let read_mins = read_time(item);
            article {
                div.readability {
                    h1 { a href=(item.url()) { (item.title) } }
                    div.metadata {
                        (render_when(item))
                        span { (read_mins) " minute read" }
                    }
                    div.prerendered { (PreEscaped(html_content)) }
                    (render_tags_compact(&item.tags))
                }
            }
        }
        @if blog_indices.len() > 3 {
            @let next_item = &items[blog_indices[3]];
            div.post-nav {
                div.post-nav-next {
                    a href=(next_item.url()) { (next_item.title) " \u{2192}" }
                }
            }
        }
        p.post-nav-all { a href="/blog/all" { "All blog posts" } }
    })
}

// Blog archive (all posts by year)
pub fn blog_archive(items: &[ContentItem], blog_indices: &[usize]) -> Markup {
    // Group posts by year.
    let mut years: Vec<(i32, Vec<usize>)> = Vec::new();
    for &idx in blog_indices {
        let item = &items[idx];
        let year = chrono::DateTime::from_timestamp(item.timestamps.created_at, 0)
            .map(|d| d.format("%Y").to_string().parse::<i32>().unwrap_or(0))
            .unwrap_or(0);
        if years.last().map(|(y, _)| *y) != Some(year) {
            years.push((year, Vec::new()));
        }
        years.last_mut().unwrap().1.push(idx);
    }

    base_layout("All Blog Posts", "Blog", None, html! {
        h1 { "All Blog Posts" }
        @for (year, indices) in &years {
            h2 { (year) }
            @for &idx in indices {
                @let item = &items[idx];
                p { a href=(item.url()) { (item.title) } }
            }
        }
    })
}

// Wiki index
pub fn wiki_index(items: &[ContentItem], wiki_indices: &[usize]) -> Markup {
    base_layout("wiki", "Wiki", None, html! {
        h1 { "Wiki articles" }
        table.content-listing.u-full-width {
            thead { tr {
                th { "What" }
                th { "Title" }
                th { "When" }
                th { "Tags" }
            } }
            tbody {
                @for &idx in wiki_indices {
                    @let item = &items[idx];
                    tr {
                        td { a.lozenge href="/wiki" { "wiki" } }
                        td { a href=(item.url()) { (item.title) } }
                        td { (render_when(item)) }
                        td { (render_tags_compact(&item.tags)) }
                    }
                }
            }
        }
    })
}

// Snippets landing (3 recent snippets in full)
pub fn snippets_landing(items: &[ContentItem], snippets_indices: &[usize], rendered: &[String]) -> Markup {
    let count = std::cmp::min(3, snippets_indices.len());
    base_layout("snippets", "Snippets", Some("/snippets"), html! {
        @for i in 0..count {
            @let idx = snippets_indices[i];
            @let item = &items[idx];
            @let html_content = &rendered[idx];
            article {
                h1 { a href=(item.url()) { (item.title) } }
                div.metadata {
                    (render_when(item))
                }
                div.prerendered { (PreEscaped(html_content)) }
                (render_tags_compact(&item.tags))
            }
        }
        @if snippets_indices.len() > 3 {
            @let next_item = &items[snippets_indices[3]];
            div.post-nav {
                div.post-nav-next {
                    a href=(next_item.url()) { (next_item.title) " \u{2192}" }
                }
            }
        }
        p.post-nav-all { a href="/snippets/all" { "All snippets" } }
    })
}

// Snippets archive (all snippets in a table)
pub fn snippets_archive(items: &[ContentItem], snippets_indices: &[usize]) -> Markup {
    base_layout("All Snippets", "Snippets", None, html! {
        h1 { "All Snippets" }
        table.content-listing.u-full-width {
            thead { tr {
                th { "What" }
                th { "Title" }
                th { "When" }
                th { "Tags" }
            } }
            tbody {
                @for &idx in snippets_indices {
                    @let item = &items[idx];
                    tr {
                        td { a.lozenge href="/snippets" { "snippets" } }
                        td { a href=(item.url()) { (item.title) } }
                        td { (render_when(item)) }
                        td { (render_tags_compact(&item.tags)) }
                    }
                }
            }
        }
    })
}

// Tags index
pub fn tags_index(tags: &[TagEntry]) -> Markup {
    let total = tags.len();
    base_layout("tags", "Tags", None, html! {
        h1 { "Tags" }
        label for="tag-filter" { "Filter tags" }
        input #tag-filter type="search" placeholder="Filter tags" autocomplete="off" .u-full-width;
        p #tag-count { "Showing " (total) " tags" }
        table #tags-table .u-full-width {
            thead { tr {
                th { "Tag" }
                th { "Count" }
            } }
            tbody {
                @for tag in tags {
                    tr {
                        td { a href=(format!("/tags/{}", tag.name)) { (tag.name) } }
                        td { (tag.count) }
                    }
                }
            }
        }
    })
}

// Tag page
pub fn tag_page(
    tag_name: &str,
    items: &[ContentItem],
    indices: &[usize],
) -> Markup {
    let count = indices.len();
    base_layout(tag_name, "Tags", None, html! {
        h1 { a href=(format!("/tags/{tag_name}")) { (tag_name) } }
        p { (count) " " @if count == 1 { "item" } @else { "items" } " tagged with " em { (tag_name) } }
        table.content-listing.u-full-width {
            thead { tr {
                th { "What" }
                th { "Title" }
                th { "When" }
                th { "Tags" }
            } }
            tbody {
                @for &idx in indices {
                    @let item = &items[idx];
                    tr {
                        td { a.lozenge href=(format!("/{}", item.content_type.label())) { (item.content_type.label()) } }
                        td { a href=(item.url()) { (item.title) } }
                        td { (render_when(item)) }
                        td { (render_tags_compact(&item.tags)) }
                    }
                }
            }
        }
    })
}

// Search page (static shell — the actual search is dynamic via Rocket)
pub fn search_page() -> Markup {
    base_layout("search", "Search", None, html! {
        h1 { "Search" }
        form action="/search" method="get" {
            input type="search" name="q" placeholder="Search..." .u-full-width autocomplete="off";
        }
    })
}

// 404 page
pub fn not_found() -> Markup {
    base_layout("Not Found", "", None, html! {
        h1 { "Not Found" }
        p { "The page you're looking for doesn't exist." }
    })
}
