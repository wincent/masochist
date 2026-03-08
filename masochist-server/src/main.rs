mod search;
mod templates;

use rocket::response::content::RawHtml;
use rocket::{State, get, launch, routes};
use search::SearchCorpus;

struct AssetPaths {
    css: String,
    js: String,
}

struct AppState {
    corpus: SearchCorpus,
    repo_path: String,
    assets: AssetPaths,
}

#[get("/search?<q>")]
fn search_handler(q: Option<&str>, state: &State<AppState>) -> RawHtml<String> {
    let query = q.unwrap_or("");
    let results = search::search(&state.corpus, &state.repo_path, query);
    let markup = templates::search_page(query, &results, &state.assets.css, &state.assets.js);
    RawHtml(markup.into_string())
}

#[get("/search/<q>")]
fn search_path_handler(q: &str, state: &State<AppState>) -> RawHtml<String> {
    let results = search::search(&state.corpus, &state.repo_path, q);
    let markup = templates::search_page(q, &results, &state.assets.css, &state.assets.js);
    RawHtml(markup.into_string())
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
        .manage(AppState {
            corpus,
            repo_path,
            assets,
        })
        .mount("/", routes![search_handler, search_path_handler])
}
