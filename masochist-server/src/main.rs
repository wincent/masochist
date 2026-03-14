mod search;
mod templates;

use governor::clock::DefaultClock;
use governor::state::keyed::DefaultKeyedStateStore;
use governor::{Quota, RateLimiter};
use rocket::fairing::{Fairing, Info, Kind};
use rocket::http::Status;
use rocket::response::content::RawHtml;
use rocket::{Data, Request, Response, State, get, launch, routes};
use search::SearchCorpus;
use std::num::NonZeroU32;
use std::sync::Arc;
use std::time::Duration;

struct AssetPaths {
    css: String,
    js: String,
}

struct AppState {
    corpus: SearchCorpus,
    repo_path: String,
    assets: AssetPaths,
}

type KeyedLimiter = RateLimiter<String, DefaultKeyedStateStore<String>, DefaultClock>;

struct RateLimitFairing {
    limiter: Arc<KeyedLimiter>,
}

impl RateLimitFairing {
    fn new(requests: u32, per_seconds: u64) -> Self {
        let quota = Quota::with_period(Duration::from_secs(per_seconds))
            .unwrap()
            .allow_burst(NonZeroU32::new(requests).unwrap());
        Self {
            limiter: Arc::new(RateLimiter::keyed(quota)),
        }
    }
}

#[rocket::async_trait]
impl Fairing for RateLimitFairing {
    fn info(&self) -> Info {
        Info {
            name: "Rate Limiter",
            kind: Kind::Liftoff | Kind::Request | Kind::Response,
        }
    }

    async fn on_liftoff(&self, _rocket: &rocket::Rocket<rocket::Orbit>) {
        let limiter = self.limiter.clone();
        rocket::tokio::spawn(async move {
            loop {
                rocket::tokio::time::sleep(Duration::from_secs(300)).await;
                limiter.retain_recent();
                limiter.shrink_to_fit();
            }
        });
    }

    async fn on_request(&self, req: &mut Request<'_>, _data: &mut Data<'_>) {
        let limited = match req.client_ip() {
            Some(ip) => self.limiter.check_key(&ip.to_string()).is_err(),
            None => true,
        };
        req.local_cache(|| limited);
    }

    async fn on_response<'r>(&self, req: &'r Request<'_>, res: &mut Response<'r>) {
        if *req.local_cache(|| false) {
            res.set_status(Status::TooManyRequests);
            res.set_sized_body(None, std::io::Cursor::new(""));
        }
    }
}

#[get("/search?<q>")]
fn search_handler(q: Option<&str>, state: &State<AppState>) -> (Status, RawHtml<String>) {
    let query = q.unwrap_or("");
    if search::validate_query(query).is_err() {
        return (Status::BadRequest, RawHtml(String::new()));
    }
    let results = search::search(&state.corpus, &state.repo_path, query);
    let markup = templates::search_page(query, &results, &state.assets.css, &state.assets.js);
    (Status::Ok, RawHtml(markup.into_string()))
}

#[get("/search/<q>")]
fn search_path_handler(q: &str, state: &State<AppState>) -> (Status, RawHtml<String>) {
    if search::validate_query(q).is_err() {
        return (Status::BadRequest, RawHtml(String::new()));
    }
    let results = search::search(&state.corpus, &state.repo_path, q);
    let markup = templates::search_page(q, &results, &state.assets.css, &state.assets.js);
    (Status::Ok, RawHtml(markup.into_string()))
}

fn load_asset_paths() -> AssetPaths {
    let public_dir = std::env::var("MASOCHIST_PUBLIC").unwrap_or_else(|_| "public".to_string());
    let manifest_path = std::path::Path::new(&public_dir).join("_assets_manifest");
    let content = std::fs::read_to_string(&manifest_path).unwrap_or_else(|e| {
        eprintln!("Warning: could not read {}: {e}", manifest_path.display());
        eprintln!("Falling back to default asset paths");
        "/_assets/styles.css\n/_assets/scripts.js\n".to_string()
    });
    let mut lines = content.lines();
    let css = lines.next().unwrap_or("/_assets/styles.css").to_string();
    let js = lines.next().unwrap_or("/_assets/scripts.js").to_string();
    eprintln!("Asset paths: css={css}, js={js}");
    AssetPaths { css, js }
}

#[launch]
fn rocket() -> _ {
    let repo_path = std::env::var("MASOCHIST_REPO").unwrap_or_else(|_| ".".to_string());
    let index_path = std::env::var("MASOCHIST_INDEX").ok();

    eprintln!("Building search corpus from {repo_path}...");
    let corpus = SearchCorpus::build(&repo_path, index_path.as_deref());
    eprintln!("Search corpus ready.");

    let assets = load_asset_paths();

    rocket::build()
        .attach(RateLimitFairing::new(10, 30)) // 10 requests per 30 seconds per IP
        .manage(AppState {
            corpus,
            repo_path,
            assets,
        })
        .mount("/", routes![search_handler, search_path_handler])
}
