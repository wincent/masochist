use crate::assets;
use masochist_lib::content::{ContentBody, ContentItem};
use masochist_lib::index::TagEntry;
use masochist_lib::templates::{format_date, render_tags_compact};
use maud::{Markup, PreEscaped, html};

fn base_layout(
    title: &str,
    active_nav: &str,
    canonical: Option<&str>,
    description: Option<&str>,
    body: Markup,
) -> Markup {
    masochist_lib::templates::base_layout(
        title,
        active_nav,
        &assets::css_path(),
        &assets::js_path(),
        canonical,
        description,
        body,
    )
}

fn read_time(item: &ContentItem) -> usize {
    let raw = match &item.body {
        ContentBody::Markdown(md) => md.as_str(),
        ContentBody::Raw { body, .. } => body.as_str(),
        ContentBody::Redirect(_) => "",
    };
    let words = raw.split_whitespace().count();
    words.div_ceil(250)
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

fn render_when(item: &ContentItem) -> Markup {
    let created = format_date(item.timestamps.created_at);
    let updated = format_date(item.timestamps.updated_at);
    html! {
        relative-time
            created=(item.timestamps.created_at)
            updated=(item.timestamps.updated_at)
        {
            @if created == updated {
                (created)
            } @else {
                "Created " (created) ", updated " (updated)
            }
        }
    }
}

pub fn blog_post(
    item: &ContentItem,
    rendered_html: &str,
    prev: Option<&ContentItem>,
    next: Option<&ContentItem>,
) -> Markup {
    let read_mins = read_time(item);
    base_layout(
        &item.title,
        "Blog",
        None,
        item.description.as_deref(),
        html! {
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
        },
    )
}

pub fn wiki_article(item: &ContentItem, rendered_html: &str) -> Markup {
    let edit_url = format!(
        "https://github.com/wincent/masochist/edit/content/content/wiki/{}.md",
        percent_encoding::utf8_percent_encode(&item.id, percent_encoding::NON_ALPHANUMERIC),
    );
    base_layout(
        &item.title,
        "Wiki",
        None,
        item.description.as_deref(),
        html! {
            article {
                h1.article-header {
                    a href=(item.url()) { (item.title) }
                    a.button href=(edit_url) title="Edit this article on GitHub" { "Edit" }
                }
                div.metadata {
                    (render_when(item))
                }
                div.prerendered { (PreEscaped(rendered_html)) }
                (render_tags(&item.tags))
            }
        },
    )
}

pub fn snippet_page(
    item: &ContentItem,
    content_html: &str,
    prev: Option<&ContentItem>,
    next: Option<&ContentItem>,
) -> Markup {
    base_layout(
        &item.title,
        "Snippets",
        None,
        item.description.as_deref(),
        html! {
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
        },
    )
}

pub fn generic_page(item: &ContentItem, rendered_html: &str) -> Markup {
    base_layout(
        &item.title,
        "",
        None,
        item.description.as_deref(),
        html! {
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
        },
    )
}

pub fn blog_landing(items: &[ContentItem], blog_indices: &[usize], rendered: &[String]) -> Markup {
    let count = std::cmp::min(3, blog_indices.len());
    base_layout(
        "blog",
        "Blog",
        Some("/blog"),
        None,
        html! {
            @for &idx in &blog_indices[..count] {
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
        },
    )
}

pub fn blog_archive(items: &[ContentItem], blog_indices: &[usize]) -> Markup {
    let mut years: Vec<(i32, Vec<usize>)> = Vec::new();
    for &idx in blog_indices {
        let item = &items[idx];
        let year = chrono::DateTime::from_timestamp(item.timestamps.created_at, 0)
            .map(|d| chrono::Datelike::year(&d))
            .unwrap_or(0);
        if years.last().map(|(y, _)| *y) != Some(year) {
            years.push((year, Vec::new()));
        }
        years.last_mut().unwrap().1.push(idx);
    }

    base_layout(
        "All Blog Posts",
        "Blog",
        None,
        None,
        html! {
            h1 { "All Blog Posts" }
            @for (year, indices) in &years {
                h2 { (year) }
                @for &idx in indices {
                    @let item = &items[idx];
                    p { a href=(item.url()) { (item.title) } }
                }
            }
        },
    )
}

pub fn wiki_index(items: &[ContentItem], wiki_indices: &[usize]) -> Markup {
    base_layout(
        "wiki",
        "Wiki",
        None,
        None,
        html! {
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
        },
    )
}

pub fn snippets_landing(
    items: &[ContentItem],
    snippets_indices: &[usize],
    rendered: &[String],
) -> Markup {
    let count = std::cmp::min(3, snippets_indices.len());
    base_layout(
        "snippets",
        "Snippets",
        Some("/snippets"),
        None,
        html! {
            @for &idx in &snippets_indices[..count] {
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
        },
    )
}

pub fn snippets_archive(items: &[ContentItem], snippets_indices: &[usize]) -> Markup {
    base_layout(
        "All Snippets",
        "Snippets",
        None,
        None,
        html! {
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
                            td { a.lozenge href="/snippets" { "snippet" } }
                            td { a href=(item.url()) { (item.title) } }
                            td { (render_when(item)) }
                            td { (render_tags_compact(&item.tags)) }
                        }
                    }
                }
            }
        },
    )
}

pub fn tags_index(tags: &[TagEntry]) -> Markup {
    let total = tags.len();
    base_layout(
        "tags",
        "Tags",
        None,
        None,
        html! {
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
        },
    )
}

pub fn tag_page(tag_name: &str, items: &[ContentItem], indices: &[usize]) -> Markup {
    let count = indices.len();
    base_layout(
        tag_name,
        "Tags",
        None,
        None,
        html! {
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
                            td { a.lozenge href=(item.content_type.url_prefix()) { (item.content_type.label()) } }
                            td { a href=(item.url()) { (item.title) } }
                            td { (render_when(item)) }
                            td { (render_tags_compact(&item.tags)) }
                        }
                    }
                }
            }
        },
    )
}

pub fn search_page() -> Markup {
    base_layout(
        "search",
        "Search",
        None,
        None,
        html! {
            h1 { "Search" }
            form action="/search" method="get" {
                input type="search" name="q" placeholder="Search..." .u-full-width autocomplete="off";
            }
        },
    )
}

pub fn not_found() -> Markup {
    base_layout(
        "Not Found",
        "",
        None,
        None,
        html! {
            h1 { "Not Found" }
            p { "The page you're looking for doesn't exist." }
        },
    )
}

pub fn too_many_requests() -> Markup {
    base_layout(
        "Too Many Requests",
        "",
        None,
        None,
        html! {
            h1 { "Too Many Requests" }
            p { "Slow down and try again in a moment." }
        },
    )
}

pub fn bad_request() -> Markup {
    base_layout(
        "Bad Request",
        "",
        None,
        None,
        html! {
            h1 { "Bad Request" }
            p { "The search query is too long or has too many terms." }
        },
    )
}
