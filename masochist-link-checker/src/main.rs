use std::collections::{BTreeMap, HashMap, HashSet, VecDeque};
use std::path::{Path, PathBuf};
use std::process::ExitCode;
use std::sync::Arc;
use std::sync::atomic::{AtomicUsize, Ordering};

use percent_encoding::{AsciiSet, CONTROLS, utf8_percent_encode};
use reqwest::redirect::Policy;
use reqwest::{Client, StatusCode};
use scraper::{Html, Selector};
use strsim::jaro_winkler;
use tokio::sync::{Mutex, Notify};
use url::Url;

const BASE_URL: &str = "https://localhost:2443";
const SITE_DOMAIN: &str = "wincent.dev";
const MAX_CONCURRENCY: usize = 8;
const MAX_REDIRECTS: usize = 5;

const SEED_URLS: &[&str] = &[
    "/",
    "/blog",
    "/wiki",
    "/snippets",
    "/tags",
    "/products",
    "/issues",
    "/forums",
    "/a/products",
];

const MODERN_PREFIXES: &[&str] = &["/blog", "/wiki", "/snippets", "/tags", "/search", "/pages"];

const SIBLING_DOMAINS: &[&str] = &["wincent.com", "wincent.org", "wincent.net"];

fn is_modern_path(path: &str) -> bool {
    if path == "/" {
        return true;
    }
    MODERN_PREFIXES.iter().any(|prefix| {
        path.starts_with(prefix)
            && (path.len() == prefix.len() || path[prefix.len()..].starts_with('/'))
    })
}

fn is_asset_url(path: &str) -> bool {
    let lower = path.to_lowercase();
    let extensions = [
        ".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".ico", ".css", ".js", ".woff", ".woff2",
        ".ttf", ".eot", ".pdf", ".zip", ".tar", ".gz", ".mp4", ".webm", ".mp3", ".ogg", ".json",
        ".xml", ".txt", ".map",
    ];
    extensions.iter().any(|ext| lower.ends_with(ext))
}

fn walk_directory(dir: &Path) -> Vec<PathBuf> {
    let mut files = Vec::new();
    walk_directory_inner(dir, &mut files);
    files
}

fn walk_directory_inner(dir: &Path, files: &mut Vec<PathBuf>) {
    let entries = match std::fs::read_dir(dir) {
        Ok(entries) => entries,
        Err(_) => return,
    };
    for entry in entries.flatten() {
        let path = entry.path();
        if path.file_name().is_some_and(|n| n == ".git") {
            continue;
        }
        if path.is_dir() {
            walk_directory_inner(&path, files);
        } else {
            files.push(path);
        }
    }
}

// WHATWG URL path segment encode set: C0 controls, DEL, non-ASCII, plus
// the specific ASCII characters that must be encoded in path segments.
const PATH_SEGMENT_ENCODE_SET: &AsciiSet = &CONTROLS
    .add(b' ')
    .add(b'"')
    .add(b'#')
    .add(b'%')
    .add(b'/')
    .add(b'<')
    .add(b'>')
    .add(b'?')
    .add(b'`')
    .add(b'{')
    .add(b'}');

fn percent_encode_path(raw_path: &str) -> String {
    raw_path
        .split('/')
        .map(|segment| utf8_percent_encode(segment, PATH_SEGMENT_ENCODE_SET).to_string())
        .collect::<Vec<_>>()
        .join("/")
}

fn file_to_url_candidates(file: &Path, public_dir: &Path) -> Vec<String> {
    let relative = match file.strip_prefix(public_dir) {
        Ok(r) => r,
        Err(_) => return vec![],
    };

    let raw_path = format!("/{}", relative.to_string_lossy());
    let path_str = percent_encode_path(&raw_path);
    let file_name = relative.file_name().and_then(|f| f.to_str()).unwrap_or("");

    if file_name == "index.html" || file_name == "index.php" {
        let dir_path = match path_str.rsplit_once('/') {
            Some(("", _)) => "/".to_string(),
            Some((prefix, _)) => prefix.to_string(),
            None => "/".to_string(),
        };
        return vec![dir_path, path_str];
    }

    let without_ext = path_str
        .strip_suffix(".html")
        .or_else(|| path_str.strip_suffix(".php"))
        .map(|s| s.to_string());

    if let Some(without_ext) = without_ext {
        return vec![path_str, without_ext];
    }

    vec![path_str]
}

enum RedirectOutcome {
    Ok { status: StatusCode, body: String },
    Chain { status: StatusCode, body: String },
    External,
    Loop { chain: Vec<String> },
    ExcessiveChain { chain: Vec<String> },
}

#[derive(Debug, Clone)]
struct RedirectProblem {
    source_page: String,
    url: String,
    chain: Vec<String>,
    is_loop: bool,
}

#[derive(Debug, Clone)]
struct BrokenLink {
    url: String,
    source_pages: Vec<String>,
    status: Option<StatusCode>,
    suggestion: Option<String>,
}

#[derive(Default, Debug)]
struct CategoryStats {
    pages_visited: usize,
    assets_checked: usize,
    assets_broken: usize,
    relative_links: usize,
    absolute_internal_links: usize,
    external_links: usize,
    broken_links: usize,
}

#[derive(Default, Debug)]
struct Stats {
    modern: CategoryStats,
    legacy: CategoryStats,
}

#[derive(Debug)]
struct HttpLink {
    url: String,
    source_page: String,
}

#[derive(Debug)]
struct SiblingDomainLink {
    url: String,
    source_page: String,
    domain: String,
}

struct FetchCounts {
    total: AtomicUsize,
    local: AtomicUsize,
    nonlocal: AtomicUsize,
}

impl FetchCounts {
    fn new() -> Self {
        Self {
            total: AtomicUsize::new(0),
            local: AtomicUsize::new(0),
            nonlocal: AtomicUsize::new(0),
        }
    }

    fn record(&self, url: &str) {
        self.total.fetch_add(1, Ordering::Relaxed);
        if url.starts_with(BASE_URL) {
            self.local.fetch_add(1, Ordering::Relaxed);
        } else {
            self.nonlocal.fetch_add(1, Ordering::Relaxed);
        }
    }
}

struct Crawler {
    client: Client,
    visited: Arc<Mutex<HashSet<String>>>,
    stats: Arc<Mutex<Stats>>,
    broken_links: Arc<Mutex<HashMap<String, BrokenLink>>>,
    redirect_problems: Arc<Mutex<Vec<RedirectProblem>>>,
    http_links: Arc<Mutex<Vec<HttpLink>>>,
    sibling_domain_links: Arc<Mutex<Vec<SiblingDomainLink>>>,
    visit_count: Arc<AtomicUsize>,
    queue_estimate: Arc<AtomicUsize>,
    all_known_paths: Arc<Mutex<HashSet<String>>>,
    link_sources: Arc<Mutex<HashMap<String, Vec<String>>>>,
    fetch_counts: Arc<FetchCounts>,
}

impl Crawler {
    fn new() -> Self {
        let client = Client::builder()
            .danger_accept_invalid_certs(true)
            .redirect(Policy::none())
            .build()
            .expect("failed to build HTTP client");

        Self {
            client,
            visited: Arc::new(Mutex::new(HashSet::new())),
            stats: Arc::new(Mutex::new(Stats::default())),
            broken_links: Arc::new(Mutex::new(HashMap::new())),
            redirect_problems: Arc::new(Mutex::new(Vec::new())),
            http_links: Arc::new(Mutex::new(Vec::new())),
            sibling_domain_links: Arc::new(Mutex::new(Vec::new())),
            visit_count: Arc::new(AtomicUsize::new(0)),
            queue_estimate: Arc::new(AtomicUsize::new(0)),
            all_known_paths: Arc::new(Mutex::new(HashSet::new())),
            link_sources: Arc::new(Mutex::new(HashMap::new())),
            fetch_counts: Arc::new(FetchCounts::new()),
        }
    }

    async fn run(&self) {
        let queue: Arc<Mutex<VecDeque<String>>> = Arc::new(Mutex::new(VecDeque::new()));
        let notify = Arc::new(Notify::new());

        {
            let mut q = queue.lock().await;
            let mut visited = self.visited.lock().await;
            let mut known = self.all_known_paths.lock().await;
            for seed in SEED_URLS {
                let url = format!("{BASE_URL}{seed}");
                q.push_back(url);
                visited.insert(seed.to_string());
                known.insert(seed.to_string());
            }
            self.queue_estimate.store(q.len(), Ordering::Relaxed);
        }

        let active = Arc::new(AtomicUsize::new(0));

        loop {
            let url = {
                let mut q = queue.lock().await;
                q.pop_front()
            };

            let Some(url) = url else {
                if active.load(Ordering::SeqCst) == 0 {
                    break;
                }
                notify.notified().await;
                continue;
            };

            self.queue_estimate.fetch_sub(1, Ordering::Relaxed);

            while active.load(Ordering::SeqCst) >= MAX_CONCURRENCY {
                notify.notified().await;
            }

            active.fetch_add(1, Ordering::SeqCst);
            let crawler_client = self.client.clone();
            let visited = self.visited.clone();
            let stats = self.stats.clone();
            let broken_links = self.broken_links.clone();
            let redirect_problems = self.redirect_problems.clone();
            let http_links = self.http_links.clone();
            let sibling_domain_links = self.sibling_domain_links.clone();
            let visit_count = self.visit_count.clone();
            let queue_estimate = self.queue_estimate.clone();
            let all_known_paths = self.all_known_paths.clone();
            let link_sources = self.link_sources.clone();
            let fetch_counts = self.fetch_counts.clone();
            let queue_clone = queue.clone();
            let active_clone = active.clone();
            let notify_clone = notify.clone();

            tokio::spawn(async move {
                process_url(
                    &crawler_client,
                    &url,
                    &visited,
                    &stats,
                    &broken_links,
                    &redirect_problems,
                    &http_links,
                    &sibling_domain_links,
                    &visit_count,
                    &queue_estimate,
                    &all_known_paths,
                    &link_sources,
                    &fetch_counts,
                    &queue_clone,
                )
                .await;
                active_clone.fetch_sub(1, Ordering::SeqCst);
                notify_clone.notify_waiters();
            });
        }
    }

    async fn generate_suggestions(&self) {
        let known_paths = self.all_known_paths.lock().await;
        let known: Vec<&String> = known_paths.iter().collect();
        let mut broken = self.broken_links.lock().await;
        let sources = self.link_sources.lock().await;

        for link in broken.values_mut() {
            let broken_path = extract_path(&link.url);

            if let Some(page_sources) = sources.get(&broken_path) {
                for source in page_sources {
                    if !link.source_pages.contains(source) {
                        link.source_pages.push(source.clone());
                    }
                }
            }

            let mut best_score = 0.0f64;
            let mut best_match = None;

            for candidate in &known {
                let score = jaro_winkler(&broken_path, candidate);
                if score > best_score && **candidate != broken_path {
                    best_score = score;
                    best_match = Some((*candidate).clone());
                }
            }

            if best_score > 0.7 {
                link.suggestion = best_match;
            }
        }
    }

    async fn print_report(&self, unreferenced: &[String]) {
        let stats = self.stats.lock().await;
        let broken = self.broken_links.lock().await;
        let redirect_problems = self.redirect_problems.lock().await;
        let http_links = self.http_links.lock().await;
        let sibling_links = self.sibling_domain_links.lock().await;

        println!("\n{}", "=".repeat(72));
        println!("LINK CHECK REPORT");
        println!("{}", "=".repeat(72));

        let mut modern_broken: Vec<&BrokenLink> = Vec::new();
        let mut legacy_broken: Vec<&BrokenLink> = Vec::new();

        for link in broken.values() {
            let has_modern_source = link.source_pages.iter().any(|s| is_modern_path(s));
            let has_legacy_source = link.source_pages.is_empty()
                || link.source_pages.iter().any(|s| !is_modern_path(s));

            if has_modern_source {
                modern_broken.push(link);
            }
            if has_legacy_source && !has_modern_source {
                legacy_broken.push(link);
            }
        }

        if !modern_broken.is_empty() {
            println!("\n--- Broken Links (Modern Pages) ---\n");
            modern_broken.sort_by(|a, b| a.url.cmp(&b.url));
            for link in &modern_broken {
                print_broken_link(link);
            }
        }

        if !legacy_broken.is_empty() {
            println!("\n--- Broken Links (Legacy Pages) ---\n");
            legacy_broken.sort_by(|a, b| a.url.cmp(&b.url));
            for link in &legacy_broken {
                print_broken_link(link);
            }
        }

        if !redirect_problems.is_empty() {
            println!("\n--- Redirect Problems ---\n");
            for problem in redirect_problems.iter() {
                let kind = if problem.is_loop {
                    "LOOP"
                } else {
                    "EXCESSIVE CHAIN"
                };
                println!("  [{kind}] {}", problem.url);
                println!("    source: {}", problem.source_page);
                for (i, hop) in problem.chain.iter().enumerate() {
                    println!("    hop {i}: {hop}");
                }
            }
        }

        if !http_links.is_empty() {
            println!("\n--- HTTP Links (should be HTTPS) ---\n");
            let mut deduped: BTreeMap<&str, Vec<&str>> = BTreeMap::new();
            for link in http_links.iter() {
                deduped
                    .entry(&link.url)
                    .or_default()
                    .push(&link.source_page);
            }
            for (url, sources) in &deduped {
                println!("  {url}");
                for source in sources {
                    println!("    found on: {source}");
                }
            }
        }

        if !sibling_links.is_empty() {
            println!("\n--- Sibling Domain Links (candidates for wincent.dev) ---\n");
            let mut deduped: BTreeMap<&str, (&str, Vec<&str>)> = BTreeMap::new();
            for link in sibling_links.iter() {
                let entry = deduped
                    .entry(&link.url)
                    .or_insert((&link.domain, Vec::new()));
                entry.1.push(&link.source_page);
            }
            for (url, (domain, sources)) in &deduped {
                println!("  {url} ({domain})");
                for source in sources {
                    println!("    found on: {source}");
                }
            }
        }

        if modern_broken.is_empty() && legacy_broken.is_empty() {
            println!("\nNo broken links found.");
        }

        if !unreferenced.is_empty() {
            let mut modern_unref: Vec<&str> = Vec::new();
            let mut legacy_unref: Vec<&str> = Vec::new();
            let mut asset_unref: Vec<&str> = Vec::new();

            for path in unreferenced {
                if is_modern_path(path) {
                    modern_unref.push(path);
                } else if is_asset_url(path) {
                    asset_unref.push(path);
                } else {
                    legacy_unref.push(path);
                }
            }

            if !modern_unref.is_empty() {
                println!("\n--- Unreferenced Files (Modern) ---\n");
                for path in &modern_unref {
                    println!("  {path}");
                }
            }

            if !legacy_unref.is_empty() {
                println!(
                    "\n--- Unreferenced Files (Legacy) [{} files] ---\n",
                    legacy_unref.len()
                );
                for path in &legacy_unref {
                    println!("  {path}");
                }
            }

            if !asset_unref.is_empty() {
                println!("\n--- Unreferenced Files (Assets) ---\n");
                for path in &asset_unref {
                    println!("  {path}");
                }
            }
        }

        println!("\n--- Statistics ---\n");
        println!("{:<35} {:>10} {:>10}", "", "Modern", "Legacy");
        println!("{}", "-".repeat(57));
        println!(
            "{:<35} {:>10} {:>10}",
            "Pages visited", stats.modern.pages_visited, stats.legacy.pages_visited
        );
        println!(
            "{:<35} {:>10} {:>10}",
            "Assets checked", stats.modern.assets_checked, stats.legacy.assets_checked
        );
        println!(
            "{:<35} {:>10} {:>10}",
            "Assets broken", stats.modern.assets_broken, stats.legacy.assets_broken
        );
        println!(
            "{:<35} {:>10} {:>10}",
            "Relative links", stats.modern.relative_links, stats.legacy.relative_links
        );
        println!(
            "{:<35} {:>10} {:>10}",
            "Absolute internal links",
            stats.modern.absolute_internal_links,
            stats.legacy.absolute_internal_links
        );
        println!(
            "{:<35} {:>10} {:>10}",
            "External links", stats.modern.external_links, stats.legacy.external_links
        );
        println!(
            "{:<35} {:>10} {:>10}",
            "Broken links", stats.modern.broken_links, stats.legacy.broken_links
        );

        let total_pages = stats.modern.pages_visited + stats.legacy.pages_visited;
        let total_broken = stats.modern.broken_links + stats.legacy.broken_links;
        println!("\nTotal pages: {total_pages}  Total broken: {total_broken}");
        if !unreferenced.is_empty() {
            println!("Unreferenced files: {}", unreferenced.len());
        }

        let fetch_total = self.fetch_counts.total.load(Ordering::Relaxed);
        let fetch_local = self.fetch_counts.local.load(Ordering::Relaxed);
        let fetch_nonlocal = self.fetch_counts.nonlocal.load(Ordering::Relaxed);
        println!("Fetches: {fetch_total} total, {fetch_local} local, {fetch_nonlocal} non-local");

        println!("\n{}", "=".repeat(72));
    }

    async fn has_broken_links(&self) -> bool {
        let broken = self.broken_links.lock().await;
        !broken.is_empty()
    }

    async fn find_unreferenced_files(&self, public_dir: &Path) -> Vec<String> {
        let visited = self.visited.lock().await;
        let files = walk_directory(public_dir);
        let mut unreferenced = Vec::new();

        for file in &files {
            let candidates = file_to_url_candidates(file, public_dir);
            if candidates.is_empty() {
                continue;
            }

            let display_path = &candidates[0];

            if display_path.starts_with("/_assets")
                || display_path == "/_redirects.caddy"
                || display_path == "/_search_index.tsv"
            {
                continue;
            }

            if !candidates.iter().any(|c| visited.contains(c)) {
                unreferenced.push(display_path.clone());
            }
        }

        unreferenced.sort();
        unreferenced
    }
}

fn print_broken_link(link: &BrokenLink) {
    let status_str = link
        .status
        .map(|s| s.to_string())
        .unwrap_or_else(|| "connection error".to_string());
    let path = extract_path(&link.url);
    println!("  {path}  [{status_str}]");
    if let Some(ref suggestion) = link.suggestion {
        println!("    -> suggestion: {suggestion}");
    }
    for source in &link.source_pages {
        println!("    found on: {source}");
    }
}

fn rewrite_wincent_dev_url(url_str: &str) -> String {
    if let Ok(parsed) = Url::parse(url_str) {
        let host = parsed.host_str().unwrap_or("");
        if host == SITE_DOMAIN || host == format!("www.{SITE_DOMAIN}") {
            let query = parsed.query().map(|q| format!("?{q}")).unwrap_or_default();
            return format!("{BASE_URL}{}{query}", parsed.path());
        }
    }
    url_str.to_string()
}

#[allow(clippy::too_many_arguments)]
async fn process_url(
    client: &Client,
    url: &str,
    visited: &Mutex<HashSet<String>>,
    stats: &Mutex<Stats>,
    broken_links: &Mutex<HashMap<String, BrokenLink>>,
    redirect_problems: &Mutex<Vec<RedirectProblem>>,
    http_links: &Mutex<Vec<HttpLink>>,
    sibling_domain_links: &Mutex<Vec<SiblingDomainLink>>,
    visit_count: &AtomicUsize,
    queue_estimate: &AtomicUsize,
    all_known_paths: &Mutex<HashSet<String>>,
    link_sources: &Mutex<HashMap<String, Vec<String>>>,
    fetch_counts: &FetchCounts,
    queue: &Mutex<VecDeque<String>>,
) {
    let path = extract_path(url);
    let is_modern = is_modern_path(&path);
    let is_asset = is_asset_url(&path);

    let n = visit_count.fetch_add(1, Ordering::Relaxed) + 1;
    let remaining = queue_estimate.load(Ordering::Relaxed);
    eprintln!("[{n:>5}/{:>5}] {path}", n + remaining);

    if is_asset {
        fetch_counts.record(url);
        let result = client.get(url).send().await;
        let mut s = stats.lock().await;
        let cat = if is_modern {
            &mut s.modern
        } else {
            &mut s.legacy
        };
        cat.assets_checked += 1;
        match result {
            Ok(resp) if resp.status().is_success() || resp.status().is_redirection() => {}
            Ok(resp) => {
                cat.assets_broken += 1;
                drop(s);
                let mut broken = broken_links.lock().await;
                broken
                    .entry(url.to_string())
                    .or_insert_with(|| BrokenLink {
                        url: url.to_string(),
                        source_pages: Vec::new(),
                        status: Some(resp.status()),
                        suggestion: None,
                    })
                    .source_pages
                    .push("(asset)".to_string());
            }
            Err(_) => {
                cat.assets_broken += 1;
                drop(s);
                let mut broken = broken_links.lock().await;
                broken
                    .entry(url.to_string())
                    .or_insert_with(|| BrokenLink {
                        url: url.to_string(),
                        source_pages: Vec::new(),
                        status: None,
                        suggestion: None,
                    })
                    .source_pages
                    .push("(asset)".to_string());
            }
        }
        return;
    }

    {
        let mut s = stats.lock().await;
        let cat = if is_modern {
            &mut s.modern
        } else {
            &mut s.legacy
        };
        cat.pages_visited += 1;
    }

    let outcome = match follow_redirects(client, url, fetch_counts).await {
        Ok(outcome) => outcome,
        Err(e) => {
            let err_msg = e.to_string();
            if err_msg.contains("connect") || err_msg.contains("Connection refused") {
                eprintln!("Error: cannot connect to {BASE_URL}");
                eprintln!("Make sure the local dev server is running (bin/dev).");
                std::process::exit(2);
            }
            let mut s = stats.lock().await;
            let cat = if is_modern {
                &mut s.modern
            } else {
                &mut s.legacy
            };
            cat.broken_links += 1;
            drop(s);
            let mut broken = broken_links.lock().await;
            broken.entry(url.to_string()).or_insert_with(|| BrokenLink {
                url: url.to_string(),
                source_pages: Vec::new(),
                status: None,
                suggestion: None,
            });
            return;
        }
    };

    let (status, body) = match outcome {
        RedirectOutcome::Ok { status, body } => (status, body),
        RedirectOutcome::Chain { status, body } => (status, body),
        RedirectOutcome::External => return,
        RedirectOutcome::Loop { chain } => {
            let mut problems = redirect_problems.lock().await;
            problems.push(RedirectProblem {
                source_page: path.clone(),
                url: url.to_string(),
                chain,
                is_loop: true,
            });
            let mut s = stats.lock().await;
            let cat = if is_modern {
                &mut s.modern
            } else {
                &mut s.legacy
            };
            cat.broken_links += 1;
            drop(s);
            let mut broken = broken_links.lock().await;
            broken.entry(url.to_string()).or_insert_with(|| BrokenLink {
                url: url.to_string(),
                source_pages: Vec::new(),
                status: Some(StatusCode::LOOP_DETECTED),
                suggestion: None,
            });
            return;
        }
        RedirectOutcome::ExcessiveChain { chain } => {
            let mut problems = redirect_problems.lock().await;
            problems.push(RedirectProblem {
                source_page: path.clone(),
                url: url.to_string(),
                chain,
                is_loop: false,
            });
            let mut s = stats.lock().await;
            let cat = if is_modern {
                &mut s.modern
            } else {
                &mut s.legacy
            };
            cat.broken_links += 1;
            drop(s);
            let mut broken = broken_links.lock().await;
            broken.entry(url.to_string()).or_insert_with(|| BrokenLink {
                url: url.to_string(),
                source_pages: Vec::new(),
                status: None,
                suggestion: None,
            });
            return;
        }
    };

    if !status.is_success() {
        let mut s = stats.lock().await;
        let cat = if is_modern {
            &mut s.modern
        } else {
            &mut s.legacy
        };
        cat.broken_links += 1;
        drop(s);
        let mut broken = broken_links.lock().await;
        broken.entry(url.to_string()).or_insert_with(|| BrokenLink {
            url: url.to_string(),
            source_pages: Vec::new(),
            status: Some(status),
            suggestion: None,
        });
        return;
    }

    let links = extract_links(&body, url);

    for (raw_url, source_page) in links {
        classify_and_enqueue(
            &raw_url,
            &source_page,
            url,
            is_modern,
            visited,
            stats,
            http_links,
            sibling_domain_links,
            all_known_paths,
            link_sources,
            queue,
            queue_estimate,
        )
        .await;
    }
}

async fn follow_redirects(
    client: &Client,
    url: &str,
    fetch_counts: &FetchCounts,
) -> Result<RedirectOutcome, reqwest::Error> {
    let mut current_url = url.to_string();
    let mut chain = Vec::new();
    let mut seen = HashSet::new();

    loop {
        chain.push(current_url.clone());
        seen.insert(current_url.clone());

        fetch_counts.record(&current_url);
        let response = client.get(&current_url).send().await?;
        let status = response.status();

        if !status.is_redirection() {
            let body = response.text().await.unwrap_or_default();
            if chain.len() > 1 {
                return Ok(RedirectOutcome::Chain { status, body });
            }
            return Ok(RedirectOutcome::Ok { status, body });
        }

        let location = match response.headers().get("location") {
            Some(loc) => loc.to_str().unwrap_or("").to_string(),
            None => {
                return Ok(RedirectOutcome::Ok {
                    status,
                    body: String::new(),
                });
            }
        };

        let resolved = if location.starts_with('/') {
            format!("{BASE_URL}{location}")
        } else if location.starts_with("http") {
            location.clone()
        } else {
            let base = Url::parse(&current_url).unwrap();
            base.join(&location)
                .map(|u| u.to_string())
                .unwrap_or(location.clone())
        };

        let next_url = rewrite_wincent_dev_url(&resolved);

        if !next_url.starts_with(BASE_URL) {
            return Ok(RedirectOutcome::External);
        }

        if seen.contains(&next_url) {
            chain.push(next_url);
            return Ok(RedirectOutcome::Loop { chain });
        }

        if chain.len() > MAX_REDIRECTS {
            return Ok(RedirectOutcome::ExcessiveChain { chain });
        }

        current_url = next_url;
    }
}

#[allow(clippy::too_many_arguments)]
async fn classify_and_enqueue(
    raw: &str,
    source_page_path: &str,
    source_page_url: &str,
    source_is_modern: bool,
    visited: &Mutex<HashSet<String>>,
    stats: &Mutex<Stats>,
    http_links: &Mutex<Vec<HttpLink>>,
    sibling_domain_links: &Mutex<Vec<SiblingDomainLink>>,
    all_known_paths: &Mutex<HashSet<String>>,
    link_sources: &Mutex<HashMap<String, Vec<String>>>,
    queue: &Mutex<VecDeque<String>>,
    queue_estimate: &AtomicUsize,
) {
    if raw.is_empty()
        || raw.starts_with('#')
        || raw.starts_with("mailto:")
        || raw.starts_with("javascript:")
        || raw.starts_with("data:")
    {
        return;
    }

    if let Some(domain) = is_sibling_domain(raw) {
        let mut siblings = sibling_domain_links.lock().await;
        siblings.push(SiblingDomainLink {
            url: raw.to_string(),
            source_page: source_page_path.to_string(),
            domain,
        });
        return;
    }

    if is_http_wincent_dev(raw) {
        let mut links = http_links.lock().await;
        links.push(HttpLink {
            url: raw.to_string(),
            source_page: source_page_path.to_string(),
        });
    }

    let normalized = match normalize_url(raw, source_page_url) {
        Some(url) => url,
        None => return,
    };

    let is_internal = is_internal_url(&normalized);

    {
        let mut s = stats.lock().await;
        let cat = if source_is_modern {
            &mut s.modern
        } else {
            &mut s.legacy
        };

        if is_internal {
            if raw.starts_with("http://") || raw.starts_with("https://") {
                cat.absolute_internal_links += 1;
            } else {
                cat.relative_links += 1;
            }
        } else {
            cat.external_links += 1;
        }
    }

    if !is_internal {
        return;
    }

    let link_path = extract_path(&normalized);
    all_known_paths.lock().await.insert(link_path.clone());

    link_sources
        .lock()
        .await
        .entry(link_path.clone())
        .or_default()
        .push(source_page_path.to_string());

    let mut vis = visited.lock().await;
    if vis.contains(&link_path) {
        return;
    }
    vis.insert(link_path.clone());
    drop(vis);

    let full_url = format!("{BASE_URL}{link_path}");
    queue_estimate.fetch_add(1, Ordering::Relaxed);
    queue.lock().await.push_back(full_url);
}

fn extract_path(url: &str) -> String {
    if let Ok(parsed) = Url::parse(url) {
        match parsed.query() {
            Some(q) => format!("{}?{q}", parsed.path()),
            None => parsed.path().to_string(),
        }
    } else if url.starts_with('/') {
        url.split('#').next().unwrap_or(url).to_string()
    } else {
        url.to_string()
    }
}

fn normalize_url(raw: &str, source_page_url: &str) -> Option<String> {
    // TODO: validate fragment targets in a future version
    let without_fragment = raw.split('#').next().unwrap_or(raw);

    if without_fragment.is_empty() {
        return None;
    }

    let parsed =
        if without_fragment.starts_with("http://") || without_fragment.starts_with("https://") {
            Url::parse(without_fragment).ok()?
        } else {
            let base = Url::parse(source_page_url).ok()?;
            base.join(without_fragment).ok()?
        };

    let host = parsed.host_str()?;
    let is_localhost = host == "localhost" && parsed.port() == Some(2443);
    let is_wincent_dev = host == SITE_DOMAIN;

    if !is_localhost && !is_wincent_dev {
        return Some(parsed.to_string());
    }

    let path = parsed.path();

    let query = parsed.query().map(|q| format!("?{q}")).unwrap_or_default();
    let normalized_path = format!("{path}{query}");
    Some(format!("{BASE_URL}{normalized_path}"))
}

fn is_internal_url(normalized: &str) -> bool {
    normalized.starts_with(BASE_URL)
}

fn is_http_wincent_dev(raw: &str) -> bool {
    raw.starts_with("http://wincent.dev") || raw.starts_with("http://www.wincent.dev")
}

fn is_sibling_domain(raw: &str) -> Option<String> {
    let parsed = Url::parse(raw).ok()?;
    let host = parsed.host_str()?;
    let host_lower = host.to_lowercase();
    for domain in SIBLING_DOMAINS {
        if host_lower == *domain || host_lower.ends_with(&format!(".{domain}")) {
            return Some(domain.to_string());
        }
    }
    None
}

fn extract_links(html: &str, page_url: &str) -> Vec<(String, String)> {
    let document = Html::parse_document(html);
    let mut links = Vec::new();
    let source_path = extract_path(page_url);

    // TODO: consider also extracting <link href>, <script src>, and other
    // link-bearing elements in a future version.

    let a_selector = Selector::parse("a[href]").unwrap();
    for element in document.select(&a_selector) {
        if let Some(href) = element.value().attr("href") {
            links.push((href.to_string(), source_path.clone()));
        }
    }

    let img_selector = Selector::parse("img[src]").unwrap();
    for element in document.select(&img_selector) {
        if let Some(src) = element.value().attr("src") {
            links.push((src.to_string(), source_path.clone()));
        }
    }

    links
}

#[tokio::main]
async fn main() -> ExitCode {
    let args: Vec<String> = std::env::args().collect();
    let public_dir = args
        .iter()
        .position(|a| a == "--public-dir")
        .and_then(|pos| args.get(pos + 1))
        .map(PathBuf::from)
        .unwrap_or_else(|| PathBuf::from("public"));

    let crawler = Crawler::new();

    eprintln!("Checking connectivity to {BASE_URL}...");

    match crawler.client.get(BASE_URL).send().await {
        Ok(_) => {}
        Err(e) => {
            let msg = e.to_string();
            if msg.contains("connect")
                || msg.contains("Connection refused")
                || msg.contains("error trying to connect")
            {
                eprintln!("Error: cannot connect to {BASE_URL}");
                eprintln!("Start the local dev server first: bin/dev");
                return ExitCode::from(2);
            }
            eprintln!("Warning: initial check got error: {msg}");
        }
    }

    eprintln!("Starting crawl...\n");

    crawler.run().await;
    crawler.generate_suggestions().await;

    let unreferenced = if public_dir.is_dir() {
        eprintln!(
            "Scanning {} for unreferenced files...",
            public_dir.display()
        );
        crawler.find_unreferenced_files(&public_dir).await
    } else {
        vec![]
    };

    crawler.print_report(&unreferenced).await;

    if crawler.has_broken_links().await {
        ExitCode::from(1)
    } else {
        ExitCode::SUCCESS
    }
}
