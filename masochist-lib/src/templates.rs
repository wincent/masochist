use maud::{DOCTYPE, Markup, html};

pub fn format_date(ts: i64) -> String {
    let dt = chrono::DateTime::from_timestamp(ts, 0);
    match dt {
        Some(dt) => dt.format("%-m/%-d/%Y").to_string(),
        None => "Unknown".to_string(),
    }
}

pub fn base_layout(
    title: &str,
    active_nav: &str,
    css_path: &str,
    js_path: &str,
    canonical: Option<&str>,
    description: Option<&str>,
    body: Markup,
) -> Markup {
    html! {
        (DOCTYPE)
        html lang="en" {
            head {
                meta charset="utf-8";
                meta name="viewport" content="width=device-width, initial-scale=1";
                title { (title) " \u{2022} wincent.dev" }
                meta property="og:title" content=(title);
                @if let Some(desc) = description {
                    meta property="og:type" content="article";
                    meta property="og:description" content=(desc);
                } @else {
                    meta property="og:type" content="website";
                }
                meta property="og:image" content="https://wincent.dev/assets/static/wincent.jpg";
                @if let Some(url) = canonical {
                    link rel="canonical" href=(format!("https://wincent.dev{url}"));
                    meta property="og:url" content=(format!("https://wincent.dev{url}"));
                }
                link rel="stylesheet" href=(css_path);
                @if let Some(url) = canonical {
                    @if url == "/" || url.starts_with("/blog/") {
                        link rel="home" type="application/rss+xml" href="/blog.rss";
                    } @else if url == "/blog" {
                        link rel="alternate" type="application/rss+xml" href="/blog.rss";
                    }
                }
            }
            body {
                div.app {
                    (nav_bar(active_nav))
                    section.app-content.container {
                        (body)
                    }
                    (footer())
                }
                script src=(js_path) {}
            }
        }
    }
}

pub fn nav_bar(active: &str) -> Markup {
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
                    a.nav-link href="/" style="color:#eee;font-weight:bold" { "Wincent" }
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

pub fn footer() -> Markup {
    html! {
        footer {
            div.container {
                div.row {
                    div.four.columns {
                        h6 { "Site" }
                        ul {
                            li { a href="/pages/about" { "About" } }
                            li { a href="/blog" { "Blog" } }
                            li { a href="/wiki" { "Wiki" } }
                            li { a href="/snippets" { "Snippets" } }
                            li { a href="/tags" { "Tags" } }
                            li { a href="/search" { "Search" } }
                        }
                    }
                    div.four.columns {
                        h6 { "External" }
                        ul {
                            li { a href="https://github.com/wincent" { "GitHub" } }
                            li { a href="https://twitter.com/wincent" { "Twitter" } }
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

pub fn render_tags_compact(tags: &[String]) -> Markup {
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
