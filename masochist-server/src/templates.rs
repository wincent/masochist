use maud::{DOCTYPE, Markup, html};

use crate::search::SearchResult;

fn format_date(ts: i64) -> String {
    let dt = chrono::DateTime::from_timestamp(ts, 0);
    match dt {
        Some(dt) => dt.format("%-m/%-d/%Y").to_string(),
        None => "Unknown".to_string(),
    }
}

fn render_when(result: &SearchResult) -> Markup {
    let created = format_date(result.created_at);
    let updated = format_date(result.updated_at);
    html! {
        relative-time
            created=(result.created_at)
            updated=(result.updated_at)
        {
            @if result.created_at == 0 {
                ""
            } @else if created == updated {
                (created)
            } @else {
                "Created " (created) ", updated " (updated)
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

pub struct AssetPaths {
    pub css: String,
    pub js: String,
}

pub fn base_layout(title: &str, active_nav: &str, assets: &AssetPaths, body: Markup) -> Markup {
    html! {
        (DOCTYPE)
        html lang="en" {
            head {
                meta charset="utf-8";
                meta name="viewport" content="width=device-width, initial-scale=1";
                title { (title) " \u{2022} wincent.dev" }
                link rel="stylesheet" href=(&assets.css);
            }
            body {
                div.app {
                    (nav_bar(active_nav))
                    section.app-content.container {
                        (body)
                    }
                    (footer())
                }
                script src=(&assets.js) {}
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

fn result_url(result: &SearchResult) -> String {
    let prefix = match result.content_type.as_str() {
        "blog" => "/blog",
        "wiki" => "/wiki",
        "snippets" => "/snippets",
        "pages" => "/pages",
        _ => "/pages",
    };
    let encoded_id = if result.content_type == "wiki" {
        result.id.replace(' ', "_")
    } else {
        result.id.clone()
    };
    format!("{prefix}/{encoded_id}")
}

pub fn search_page(query: &str, results: &[SearchResult], assets: &AssetPaths) -> Markup {
    let title = if query.is_empty() {
        "Search".to_string()
    } else {
        query.to_string()
    };

    base_layout(
        &title,
        "Search",
        assets,
        html! {
            h1 {
                @if query.is_empty() {
                    "Search"
                } @else {
                    a href=(format!("/search?q={}", urlencoding(query))) { (query) }
                }
            }
            div.row {
                form action="/search" method="get" {
                    input.eight.columns
                        #search-input
                        type="search"
                        name="q"
                        placeholder="Search wincent.dev"
                        value=(query)
                        autocomplete="off";
                    input.four.columns type="submit" value="Search";
                }
            }
            p {
                (results.len()) " "
                @if results.len() == 1 {
                    "item"
                } @else {
                    "items"
                }
                " found"
            }
            @if !results.is_empty() {
                table.content-listing.u-full-width {
                    thead { tr {
                        th { "What" }
                        th { "Title" }
                        th { "When" }
                        th { "Tags" }
                    } }
                    tbody {
                        @for result in results {
                            tr {
                                td { a.lozenge href=(format!("/{}", result.content_type)) { (result.content_type) } }
                                td { a href=(result_url(result)) { (result.title) } }
                                td { (render_when(result)) }
                                td { (render_tags_compact(&result.tags)) }
                            }
                        }
                    }
                }
            }
        },
    )
}

fn urlencoding(s: &str) -> String {
    let mut result = String::new();
    for byte in s.bytes() {
        match byte {
            b'A'..=b'Z' | b'a'..=b'z' | b'0'..=b'9' | b'-' | b'_' | b'.' | b'~' => {
                result.push(byte as char);
            }
            _ => {
                result.push_str(&format!("%{byte:02X}"));
            }
        }
    }
    result
}
