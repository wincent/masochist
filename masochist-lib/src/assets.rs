pub const CSS_SOURCE: &str = concat!(
    include_str!("styles/licenses.css"),
    include_str!("styles/normalize.css"),
    include_str!("styles/site.css"),
);

pub const JS_SOURCE: &str = concat!(
    include_str!("javascript/components/relative-time.js"),
    include_str!("javascript/tags.js"),
    include_str!("javascript/autocomplete.js"),
    include_str!("javascript/search.js"),
    include_str!("javascript/nav-search.js"),
);
