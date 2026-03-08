use lightningcss::stylesheet::{ParserOptions, PrinterOptions};
use masochist_lib::assets::{CSS_SOURCE, JS_SOURCE};
use sha2::{Digest, Sha256};
use std::sync::{Arc, LazyLock};
use swc::{
    BoolOrDataConfig, Compiler, HandlerOpts, JsMinifyExtras, config::JsMinifyOptions,
    try_with_handler,
};
use swc_common::{FileName, GLOBALS, SourceMap, errors::ColorConfig, sync::Lrc};

fn minify_css(source: &str) -> String {
    let mut stylesheet =
        lightningcss::stylesheet::StyleSheet::parse(source, ParserOptions::default())
            .expect("failed to parse CSS");
    stylesheet
        .minify(lightningcss::stylesheet::MinifyOptions::default())
        .ok();
    stylesheet
        .to_css(PrinterOptions {
            minify: true,
            ..Default::default()
        })
        .expect("failed to print CSS")
        .code
}

fn minify_js(source: &str) -> String {
    GLOBALS.set(&Default::default(), || {
        let cm: Lrc<SourceMap> = Default::default();
        let compiler = Compiler::new(cm.clone());
        let fm = cm.new_source_file(Arc::new(FileName::Anon), source.to_string());

        let result = try_with_handler(
            cm,
            HandlerOpts {
                color: ColorConfig::Auto,
                skip_filename: false,
            },
            |handler| {
                compiler.minify(
                    Arc::clone(&fm),
                    handler,
                    &JsMinifyOptions {
                        compress: BoolOrDataConfig::from_bool(true),
                        mangle: BoolOrDataConfig::from_bool(true),
                        ..Default::default()
                    },
                    JsMinifyExtras::default(),
                )
            },
        );

        match result {
            Ok(output) => output.code,
            Err(_) => source.to_string(),
        }
    })
}

fn short_hash(content: &str) -> String {
    let mut hasher = Sha256::new();
    hasher.update(content.as_bytes());
    let result = hasher.finalize();
    format!("{:x}", result)[..8].to_string()
}

struct Assets {
    css: String,
    js: String,
    css_hash: String,
    js_hash: String,
}

static ASSETS: LazyLock<Assets> = LazyLock::new(|| {
    let css = minify_css(CSS_SOURCE);
    let js = minify_js(JS_SOURCE);
    let css_hash = short_hash(&css);
    let js_hash = short_hash(&js);
    Assets {
        css,
        js,
        css_hash,
        js_hash,
    }
});

pub fn css() -> &'static str {
    &ASSETS.css
}

pub fn js() -> &'static str {
    &ASSETS.js
}

pub fn css_path() -> String {
    format!("/_assets/styles-{}.css", ASSETS.css_hash)
}

pub fn js_path() -> String {
    format!("/_assets/scripts-{}.js", ASSETS.js_hash)
}

pub fn css_filename() -> String {
    format!("styles-{}.css", ASSETS.css_hash)
}

pub fn js_filename() -> String {
    format!("scripts-{}.js", ASSETS.js_hash)
}
