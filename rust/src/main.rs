use std::env;
use std::process;
use structopt::StructOpt;
use tokio::process::Command;

#[derive(StructOpt)]
struct Opt {
    /// Content type (a directory name).
    content_type: String,

    /// File name.
    file_name: String,

    /// Optional commit hash.
    #[structopt(short, long)]
    commit_hash: Option<String>,
}

#[tokio::main]
async fn main() {
    let opt = Opt::from_args();

    let content_repo = env::var("MASOCHIST_CONTENT_REPO").unwrap_or(String::from("/srv/masochist/content"));

    let head = match Command::new("git")
        .current_dir(&content_repo)
        .arg("rev-parse")
        .arg("content")
        .output()
        .await {
        Ok(head_output) => {
            if head_output.status.success() {
                String::from_utf8_lossy(&head_output.stdout).into_owned()
            } else {
                println!("Error: {}", String::from_utf8_lossy(&head_output.stderr));
                process::exit(1);
            }
        }
        Err(e) => {
            eprintln!("Command execution failed: {}", e);
            process::exit(1);
        }
    };

    let commit_hash = opt.commit_hash.unwrap_or_else(|| head.trim().to_string());

    let tree = match Command::new("git")
        .current_dir(&content_repo)
        .arg("show")
        .arg("-s")
        .arg("--format=%T")
        .arg(&commit_hash)
        .output()
        .await {
        Ok(tree_output) => {
            if tree_output.status.success() {
                String::from_utf8_lossy(&tree_output.stdout).into_owned()
            } else {
                println!("Error: {}", String::from_utf8_lossy(&tree_output.stderr));
                process::exit(1);
            }
        }
        Err(e) => {
            eprintln!("Show command execution failed: {}", e);
            process::exit(1);
        }
    };

    let tree_hash = tree.trim();
    println!("Tree ID: {}", tree_hash);
}
