use std::collections::HashMap;

use masochist_lib::git::GitRepo;

#[derive(Debug, Clone)]
pub struct SearchResult {
    pub content_type: String,
    pub id: String,
    pub title: String,
    pub created_at: i64,
    pub updated_at: i64,
    pub tags: Vec<String>,
}

struct CorpusEntry {
    dir: String,
    id: String,
    title: String,
    created_at: i64,
    updated_at: i64,
    tags: Vec<String>,
}

pub struct SearchCorpus {
    entries: Vec<CorpusEntry>,
    lookup: HashMap<String, usize>,
}

impl SearchCorpus {
    pub fn build(repo_path: &str, index_path: Option<&str>) -> Self {
        let repo = GitRepo::new(repo_path);
        let raw_entries = repo.ls_tree_names("content", &[
            "content/blog", "content/wiki", "content/snippets", "content/pages",
        ]);

        // Load metadata from the search index if available.
        // Format: type\tid\ttitle\tcreated_at\tupdated_at\ttags
        let mut meta: HashMap<String, (String, i64, i64, Vec<String>)> = HashMap::new();
        if let Some(path) = index_path
            && let Ok(contents) = std::fs::read_to_string(path)
        {
            for line in contents.lines() {
                let parts: Vec<&str> = line.splitn(6, '\t').collect();
                if parts.len() >= 5 {
                    let key = format!("{}/{}", parts[0], parts[1]);
                    let title = parts[2].to_string();
                    let created_at = parts[3].parse().unwrap_or(0);
                    let updated_at = parts[4].parse().unwrap_or(0);
                    let tags = if parts.len() >= 6 && !parts[5].is_empty() {
                        parts[5].split_whitespace().map(|s| s.to_string()).collect()
                    } else {
                        Vec::new()
                    };
                    meta.insert(key, (title, created_at, updated_at, tags));
                }
            }
            eprintln!("  index: loaded {} entries from {}", meta.len(), path);
        }

        let mut entries = Vec::new();
        let mut lookup = HashMap::new();

        for (dir, id) in raw_entries {
            let key = format!("{dir}/{id}");
            let (title, created_at, updated_at, tags) = meta
                .remove(&key)
                .unwrap_or_else(|| (id.clone(), 0, 0, Vec::new()));
            lookup.insert(key, entries.len());
            entries.push(CorpusEntry {
                dir,
                id,
                title,
                created_at,
                updated_at,
                tags,
            });
        }

        eprintln!("  corpus: {} entries", entries.len());
        Self { entries, lookup }
    }
}

fn normalize_filter(name: &str) -> Option<&'static str> {
    match name.to_lowercase().as_str() {
        "blog" | "post" | "posts" => Some("blog"),
        "wiki" | "article" | "articles" => Some("wiki"),
        "snippets" | "snippet" => Some("snippets"),
        "pages" | "page" => Some("pages"),
        _ => None,
    }
}

pub fn search(corpus: &SearchCorpus, repo_path: &str, query: &str) -> Vec<SearchResult> {
    let trimmed = query.trim();
    if trimmed.is_empty() {
        return Vec::new();
    }

    let mut patterns = Vec::new();
    let mut directories = Vec::new();

    for atom in trimmed.split_whitespace() {
        if let Some(rest) = atom.strip_prefix("type:") {
            if let Some(normalized) = normalize_filter(rest) {
                directories.push(format!("content/{normalized}"));
            }
        } else {
            patterns.push(atom.to_string());
        }
    }

    if directories.is_empty() {
        directories.push("content".to_string());
    }

    let filtering = !directories.iter().any(|d| d == "content");

    let mut results: Vec<SearchResult> = Vec::new();
    let mut seen = HashMap::new();

    let regex_patterns: Vec<regex::Regex> = patterns
        .iter()
        .filter_map(|p| regex::RegexBuilder::new(p).case_insensitive(true).build().ok())
        .collect();

    // Title-based results first.
    let mut title_matches: Vec<&CorpusEntry> = corpus.entries.iter().collect();
    for re in &regex_patterns {
        title_matches.retain(|e| re.is_match(&e.id));
        if title_matches.is_empty() {
            break;
        }
    }

    for entry in &title_matches {
        if filtering && !directories.iter().any(|d| d.contains(entry.dir.as_str())) {
            continue;
        }
        let key = format!("{}/{}", entry.dir, entry.id);
        if seen.contains_key(&key) {
            continue;
        }
        seen.insert(key, results.len());
        results.push(result_from_entry(entry));
    }

    // Content-based results via git grep.
    if !patterns.is_empty() {
        let repo = GitRepo::new(repo_path);
        let hits = repo.grep("content", &patterns, &directories);
        for (dir, id) in hits {
            let key = format!("{dir}/{id}");
            if !seen.contains_key(&key) {
                seen.insert(key.clone(), results.len());
                if let Some(&idx) = corpus.lookup.get(&key) {
                    results.push(result_from_entry(&corpus.entries[idx]));
                } else {
                    results.push(SearchResult {
                        content_type: dir,
                        title: id.clone(),
                        id,
                        created_at: 0,
                        updated_at: 0,
                        tags: Vec::new(),
                    });
                }
            }
        }
    }

    results
}

fn result_from_entry(entry: &CorpusEntry) -> SearchResult {
    SearchResult {
        content_type: entry.dir.clone(),
        id: entry.id.clone(),
        title: entry.title.clone(),
        created_at: entry.created_at,
        updated_at: entry.updated_at,
        tags: entry.tags.clone(),
    }
}
