use crate::content::{ContentItem, ContentType};
use std::collections::HashMap;

pub struct SiteIndex {
    pub blog: Vec<usize>,
    pub wiki: Vec<usize>,
    pub snippets: Vec<usize>,
    pub pages: Vec<usize>,
    pub tags: Vec<TagEntry>,
    pub items_by_tag: HashMap<String, Vec<usize>>,
}

pub struct TagEntry {
    pub name: String,
    pub count: usize,
}

impl SiteIndex {
    pub fn build(items: &[ContentItem]) -> Self {
        let mut blog = Vec::new();
        let mut wiki = Vec::new();
        let mut snippets = Vec::new();
        let mut pages = Vec::new();
        let mut tag_counts: HashMap<String, usize> = HashMap::new();
        let mut items_by_tag: HashMap<String, Vec<usize>> = HashMap::new();

        for (i, item) in items.iter().enumerate() {
            match item.content_type {
                ContentType::Blog => blog.push(i),
                ContentType::Wiki => wiki.push(i),
                ContentType::Snippet => snippets.push(i),
                ContentType::Page => pages.push(i),
            }

            for tag in &item.tags {
                *tag_counts.entry(tag.clone()).or_insert(0) += 1;
                items_by_tag.entry(tag.clone()).or_default().push(i);
            }
        }

        // Blog: sorted by createdAt descending.
        blog.sort_by(|&a, &b| {
            items[b]
                .timestamps
                .created_at
                .cmp(&items[a].timestamps.created_at)
        });

        // Wiki: sorted by updatedAt descending.
        wiki.sort_by(|&a, &b| {
            items[b]
                .timestamps
                .updated_at
                .cmp(&items[a].timestamps.updated_at)
        });

        // Snippets: sorted by createdAt descending.
        snippets.sort_by(|&a, &b| {
            items[b]
                .timestamps
                .created_at
                .cmp(&items[a].timestamps.created_at)
        });

        // Per-tag lists: sorted by updatedAt descending, then by type:id ascending
        // (matching old Redis ZRANGE REV behavior where ties are broken lexicographically).
        for indices in items_by_tag.values_mut() {
            indices.sort_by(|&a, &b| {
                items[b]
                    .timestamps
                    .updated_at
                    .cmp(&items[a].timestamps.updated_at)
                    .then_with(|| {
                        let key_a = format!("{}:{}", items[a].content_type.directory(), items[a].id);
                        let key_b = format!("{}:{}", items[b].content_type.directory(), items[b].id);
                        key_b.cmp(&key_a)
                    })
            });
        }

        // Tags: sorted by count descending, then alphabetically.
        let mut tags: Vec<TagEntry> = tag_counts
            .into_iter()
            .map(|(name, count)| TagEntry { name, count })
            .collect();
        tags.sort_by(|a, b| b.count.cmp(&a.count).then(a.name.cmp(&b.name)));

        SiteIndex {
            blog,
            wiki,
            snippets,
            pages,
            tags,
            items_by_tag,
        }
    }
}
