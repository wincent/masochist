use serde::Deserialize;
use std::collections::HashMap;

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum ContentType {
    Blog,
    Page,
    Snippet,
    Wiki,
}

impl ContentType {
    pub fn from_directory(dir: &str) -> Option<Self> {
        match dir {
            "blog" => Some(Self::Blog),
            "pages" => Some(Self::Page),
            "snippets" => Some(Self::Snippet),
            "wiki" => Some(Self::Wiki),
            _ => None,
        }
    }

    pub fn url_prefix(&self) -> &'static str {
        match self {
            Self::Blog => "/blog",
            Self::Page => "/pages",
            Self::Snippet => "/snippets",
            Self::Wiki => "/wiki",
        }
    }

    pub fn label(&self) -> &'static str {
        match self {
            Self::Blog => "blog",
            Self::Page => "pages",
            Self::Snippet => "snippets",
            Self::Wiki => "wiki",
        }
    }
}

#[derive(Debug, Clone)]
pub struct Timestamps {
    pub created_at: i64,
    pub updated_at: i64,
}

#[derive(Debug, Deserialize)]
pub struct Frontmatter {
    pub title: Option<String>,
    pub tags: Option<String>,
    #[serde(default, deserialize_with = "deserialize_redirect")]
    pub redirect: Option<String>,
    pub description: Option<String>,
}

/// The redirect field can be a plain string like "/products/clipper" or a
/// wiki-style link like "[[Title]]". YAML parses [[a, b]] as a nested list,
/// so we need to handle that case and reconstruct the original string.
fn deserialize_redirect<'de, D>(deserializer: D) -> Result<Option<String>, D::Error>
where
    D: serde::Deserializer<'de>,
{
    use serde::de;

    struct RedirectVisitor;

    impl<'de> de::Visitor<'de> for RedirectVisitor {
        type Value = Option<String>;

        fn expecting(&self, formatter: &mut std::fmt::Formatter) -> std::fmt::Result {
            formatter.write_str("a string or nested list representing a redirect")
        }

        fn visit_none<E: de::Error>(self) -> Result<Self::Value, E> {
            Ok(None)
        }

        fn visit_unit<E: de::Error>(self) -> Result<Self::Value, E> {
            Ok(None)
        }

        fn visit_str<E: de::Error>(self, v: &str) -> Result<Self::Value, E> {
            Ok(Some(v.to_string()))
        }

        fn visit_string<E: de::Error>(self, v: String) -> Result<Self::Value, E> {
            Ok(Some(v))
        }

        fn visit_seq<A: de::SeqAccess<'de>>(self, mut seq: A) -> Result<Self::Value, A::Error> {
            // YAML parsed [[a, b, c]] as a list containing one list.
            // Reconstruct as "[[a, b, c]]".
            let mut parts = Vec::new();
            while let Some(inner) = seq.next_element::<serde_yaml::Value>()? {
                match inner {
                    serde_yaml::Value::Sequence(items) => {
                        let strs: Vec<String> = items
                            .into_iter()
                            .map(|v| match v {
                                serde_yaml::Value::String(s) => s,
                                other => format!("{other:?}"),
                            })
                            .collect();
                        parts.push(format!("[[{}]]", strs.join(", ")));
                    }
                    serde_yaml::Value::String(s) => {
                        parts.push(s);
                    }
                    other => {
                        parts.push(format!("{other:?}"));
                    }
                }
            }
            if parts.is_empty() {
                Ok(None)
            } else {
                Ok(Some(parts.join(", ")))
            }
        }
    }

    deserializer.deserialize_any(RedirectVisitor)
}

impl Frontmatter {
    pub fn tag_list(&self) -> Vec<String> {
        match &self.tags {
            Some(tags) => tags.split_whitespace().map(|s| s.to_string()).collect(),
            None => Vec::new(),
        }
    }
}

#[derive(Debug, Clone)]
pub enum ContentBody {
    Markdown(String),
    Raw { body: String, format: String },
    Redirect(String),
}

#[derive(Debug, Clone)]
pub struct ContentItem {
    pub content_type: ContentType,
    pub id: String,
    pub title: String,
    pub tags: Vec<String>,
    pub body: ContentBody,
    pub timestamps: Timestamps,
    pub description: Option<String>,
}

impl ContentItem {
    pub fn url(&self) -> String {
        let encoded_id = match self.content_type {
            ContentType::Wiki => self.id.replace(' ', "_"),
            _ => self.id.clone(),
        };
        format!("{}/{}", self.content_type.url_prefix(), encoded_id)
    }
}

pub fn parse_frontmatter(raw: &str) -> (Frontmatter, &str) {
    if let Some(rest) = raw.strip_prefix("---\n") {
        if let Some(end) = rest.find("\n---\n") {
            let yaml = &rest[..end];
            let body = &rest[end + 5..];

            // Try parsing as-is first.
            if let Ok(fm) = serde_yaml::from_str::<Frontmatter>(yaml) {
                return (fm, body);
            }

            // Fallback: many content files have YAML-unsafe values (unquoted
            // colons in titles, @ characters, [[brackets]] in redirects).
            // The old site used a custom parser. We handle this by quoting
            // values that aren't already quoted.
            let fixed = fix_yaml(yaml);
            if let Ok(fm) = serde_yaml::from_str::<Frontmatter>(&fixed) {
                return (fm, body);
            }

            // Final fallback: parse line-by-line.
            let fm = parse_frontmatter_manual(yaml);
            return (fm, body);
        }
    }
    (
        Frontmatter {
            title: None,
            tags: None,
            redirect: None,
            description: None,
        },
        raw,
    )
}

fn fix_yaml(yaml: &str) -> String {
    let mut fixed = String::new();
    for line in yaml.lines() {
        if let Some((key, value)) = line.split_once(": ") {
            let trimmed = value.trim();
            if trimmed.is_empty()
                || trimmed.starts_with('"')
                || trimmed.starts_with('\'')
            {
                fixed.push_str(line);
            } else {
                let escaped = trimmed.replace('\\', "\\\\").replace('"', "\\\"");
                fixed.push_str(&format!("{key}: \"{escaped}\""));
            }
        } else {
            fixed.push_str(line);
        }
        fixed.push('\n');
    }
    fixed
}

fn parse_frontmatter_manual(yaml: &str) -> Frontmatter {
    let mut title = None;
    let mut tags = None;
    let mut redirect = None;
    let mut description = None;

    for line in yaml.lines() {
        if let Some((key, value)) = line.split_once(": ") {
            let key = key.trim();
            let value = value.trim().to_string();
            let value = if value.is_empty() {
                None
            } else {
                Some(value)
            };
            match key {
                "title" => title = value,
                "tags" => tags = value,
                "redirect" => redirect = value,
                "description" => description = value,
                _ => {}
            }
        }
    }

    Frontmatter {
        title,
        tags,
        redirect,
        description,
    }
}

pub type TimestampMap = HashMap<String, Timestamps>;
