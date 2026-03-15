use masochist_lib::content::encode_wiki_id_for_url;
use masochist_lib::templates::format_date;
use maud::{Markup, html};
use percent_encoding::{NON_ALPHANUMERIC, utf8_percent_encode};

use crate::search::SearchResult;

fn display_label(content_type: &str) -> &str {
    match content_type {
        "pages" => "page",
        "snippets" => "snippet",
        _ => content_type,
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

fn result_url(result: &SearchResult) -> String {
    let prefix = match result.content_type.as_str() {
        "blog" => "/blog",
        "wiki" => "/wiki",
        "snippets" => "/snippets",
        "pages" => "/pages",
        _ => "/pages",
    };
    let encoded_id = if result.content_type == "wiki" {
        encode_wiki_id_for_url(&result.id)
    } else {
        result.id.clone()
    };
    format!("{prefix}/{encoded_id}")
}

fn render_results(results: &[SearchResult]) -> Markup {
    html! {
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
                            td { a.lozenge href=(format!("/{}", result.content_type)) { (display_label(&result.content_type)) } }
                            td { a href=(result_url(result)) { (result.title) } }
                            td { (render_when(result)) }
                            td { (masochist_lib::templates::render_tags_compact(&result.tags)) }
                        }
                    }
                }
            }
        }
    }
}

pub fn search_page(query: &str, results: &[SearchResult], css_path: &str, js_path: &str) -> Markup {
    let title = if query.is_empty() {
        "Search".to_string()
    } else {
        query.to_string()
    };

    masochist_lib::templates::base_layout(
        &title,
        "Search",
        css_path,
        js_path,
        None,
        None,
        html! {
            h1 {
                @if query.is_empty() {
                    "Search"
                } @else {
                    a href=(format!("/search?q={}", utf8_percent_encode(query, NON_ALPHANUMERIC))) { (query) }
                }
            }
            div.row.search-form-row {
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
            (render_results(results))
        },
    )
}
