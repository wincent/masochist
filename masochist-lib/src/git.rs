use std::collections::HashMap;
use std::io::{BufRead, BufReader, Read as _, Write as _};
use std::process::{Command, Stdio};

use crate::content::{Timestamps, TimestampMap};

pub struct GitRepo {
    path: String,
}

impl GitRepo {
    pub fn new(path: impl Into<String>) -> Self {
        Self { path: path.into() }
    }

    pub fn path(&self) -> &str {
        &self.path
    }

    fn command(&self) -> Command {
        let mut cmd = Command::new("git");
        cmd.arg("-C").arg(&self.path);
        cmd
    }

    /// List all files under a tree path on a given branch.
    /// Returns (object_hash, file_path) pairs.
    pub fn ls_tree(&self, branch: &str, tree_path: &str) -> Vec<(String, String)> {
        let output = self
            .command()
            .args(["ls-tree", "-r", "-z", branch, "--", tree_path])
            .output()
            .expect("failed to run git ls-tree");

        if !output.status.success() {
            panic!(
                "git ls-tree failed: {}",
                String::from_utf8_lossy(&output.stderr)
            );
        }

        let stdout = String::from_utf8(output.stdout).expect("invalid UTF-8 from git ls-tree");

        stdout
            .split('\0')
            .filter(|entry| !entry.is_empty())
            .map(|entry| {
                // Format: "<mode> <type> <hash>\t<path>"
                let tab = entry.find('\t').expect("malformed ls-tree entry");
                let metadata = &entry[..tab];
                let path = &entry[tab + 1..];
                let hash = metadata
                    .split_whitespace()
                    .nth(2)
                    .expect("malformed ls-tree metadata");
                (hash.to_string(), path.to_string())
            })
            .collect()
    }

    /// Read multiple objects from git using cat-file --batch.
    /// Takes an iterator of (hash, key) pairs and returns a map of key -> content.
    pub fn cat_file_batch<I, K>(&self, objects: I) -> HashMap<K, String>
    where
        I: IntoIterator<Item = (String, K)>,
        K: Eq + std::hash::Hash,
    {
        let mut child = self
            .command()
            .args(["cat-file", "--batch"])
            .stdin(Stdio::piped())
            .stdout(Stdio::piped())
            .spawn()
            .expect("failed to spawn git cat-file");

        let mut stdin = child.stdin.take().expect("failed to open stdin");
        let stdout = child.stdout.take().expect("failed to open stdout");
        let mut reader = BufReader::new(stdout);

        let mut results = HashMap::new();
        let objects: Vec<_> = objects.into_iter().collect();

        for (hash, _) in &objects {
            writeln!(stdin, "{hash}").expect("failed to write to git cat-file stdin");
        }
        drop(stdin);

        for (_, key) in objects {
            let mut header = String::new();
            reader
                .read_line(&mut header)
                .expect("failed to read cat-file header");

            let parts: Vec<&str> = header.trim().split(' ').collect();
            if parts.len() < 3 {
                continue;
            }
            let size: usize = parts[2].parse().expect("invalid size in cat-file output");

            let mut content = vec![0u8; size];
            reader
                .read_exact(&mut content)
                .expect("failed to read object content");

            // Consume trailing newline.
            let mut newline = [0u8; 1];
            let _ = reader.read_exact(&mut newline);

            if let Ok(text) = String::from_utf8(content) {
                results.insert(key, text);
            }
        }

        let _ = child.wait();
        results
    }

    /// List filenames (without hashes) under tree paths on a given branch.
    /// Returns (content_type_dir, id) pairs parsed from paths like "content/wiki/Foo.md".
    pub fn ls_tree_names(&self, branch: &str, tree_paths: &[&str]) -> Vec<(String, String)> {
        let mut cmd = self.command();
        cmd.args(["ls-tree", "-r", "-z", "--name-only", branch, "--"]);
        for path in tree_paths {
            cmd.arg(*path);
        }
        let output = cmd.output().expect("failed to run git ls-tree");

        if !output.status.success() {
            panic!(
                "git ls-tree failed: {}",
                String::from_utf8_lossy(&output.stderr)
            );
        }

        let stdout = String::from_utf8(output.stdout).expect("invalid UTF-8 from git ls-tree");

        stdout
            .split('\0')
            .filter(|entry| !entry.is_empty())
            .filter_map(|path| {
                let relative = path.strip_prefix("content/")?;
                let slash = relative.find('/')?;
                let dir = &relative[..slash];
                let filename = &relative[slash + 1..];
                let id = if let Some(dot) = filename.rfind('.') {
                    &filename[..dot]
                } else {
                    filename
                };
                Some((dir.to_string(), id.to_string()))
            })
            .collect()
    }

    /// Run `git grep` against the content branch.
    /// Returns matching (content_type_dir, id) pairs.
    pub fn grep(
        &self,
        branch: &str,
        patterns: &[String],
        directories: &[String],
    ) -> Vec<(String, String)> {
        let head_output = self
            .command()
            .args(["rev-parse", branch])
            .output()
            .expect("failed to run git rev-parse");
        let head = String::from_utf8(head_output.stdout)
            .expect("invalid UTF-8")
            .trim()
            .to_string();

        let tree_output = self
            .command()
            .args(["show", "-s", "--format=%T", &head])
            .output()
            .expect("failed to run git show");
        let tree = String::from_utf8(tree_output.stdout)
            .expect("invalid UTF-8")
            .trim()
            .to_string();

        let mut cmd = self.command();
        cmd.args([
            "grep",
            "-I",           // Ignore binary files.
            "-P",           // Perl-compatible regex.
            "-i",           // Ignore case.
            "-l",           // List filenames only.
            "-z",           // NUL-delimited output.
            "--all-match",  // All patterns must match.
            "--full-name",  // Full paths.
        ]);

        for pattern in patterns {
            cmd.args(["-e", pattern]);
        }

        cmd.arg(&tree);
        cmd.arg("--");
        for dir in directories {
            cmd.arg(dir);
        }

        let output = cmd.output().expect("failed to run git grep");

        // Exit code 1 means "nothing found" — not an error.
        if !output.status.success() && output.status.code() != Some(1) {
            panic!(
                "git grep failed: {}",
                String::from_utf8_lossy(&output.stderr)
            );
        }

        let stdout = String::from_utf8(output.stdout).unwrap_or_default();

        // Output format: "<tree_sha>:content/<type>/<filename>\0"
        stdout
            .split('\0')
            .filter(|s| !s.is_empty())
            .filter_map(|entry| {
                // Strip the tree SHA prefix.
                let after_colon = entry.split_once(':')?.1;
                let relative = after_colon.strip_prefix("content/")?;
                let slash = relative.find('/')?;
                let dir = &relative[..slash];
                let filename = &relative[slash + 1..];
                let id = if let Some(dot) = filename.rfind('.') {
                    &filename[..dot]
                } else {
                    filename
                };
                Some((dir.to_string(), id.to_string()))
            })
            .collect()
    }

    /// Extract createdAt/updatedAt timestamps for all files under the given paths
    /// using a single `git log` invocation.
    pub fn extract_timestamps(&self, branch: &str, tree_paths: &[&str]) -> TimestampMap {
        let mut cmd = self.command();
        cmd.args([
            "log",
            branch,
            "--format=%H %at %ct",
            "--name-status",
            "--no-merges",
            "--no-renames",
            "-z",
            "--diff-filter=ADM",
            "--",
        ]);
        for path in tree_paths {
            cmd.arg(*path);
        }
        let output = cmd.output().expect("failed to run git log");

        if !output.status.success() {
            panic!(
                "git log failed: {}",
                String::from_utf8_lossy(&output.stderr)
            );
        }

        let stdout = String::from_utf8(output.stdout).expect("invalid UTF-8 from git log");
        parse_git_log_timestamps(&stdout)
    }
}

/// Parse the NUL-delimited output from `git log -z` to extract timestamps.
///
/// With `-z`, the output format is:
/// - Commit header: "<hash> <author_ts> <commit_ts>\0\n"
/// - File entries: "<status>\0<path>\0"  (repeated for each file in the commit)
/// - Then the next commit header follows.
///
/// We track the first 'A' (add) for each file as createdAt, and the most
/// recent 'A' or 'M' as updatedAt.
fn parse_git_log_timestamps(output: &str) -> TimestampMap {
    let mut map: TimestampMap = HashMap::new();
    let mut current_author_ts: i64 = 0;

    let parts: Vec<&str> = output.split('\0').collect();
    let mut i = 0;

    while i < parts.len() {
        let part = parts[i].trim();

        if part.is_empty() {
            i += 1;
            continue;
        }

        // Check if this looks like a commit header (40-char hex hash at start).
        if let Some((first_word, rest)) = part.split_once(' ')
            && first_word.len() == 40
            && first_word.chars().all(|c| c.is_ascii_hexdigit())
        {
            if let Some(at_str) = rest.split_whitespace().next() {
                current_author_ts = at_str.parse().unwrap_or(0);
            }
            i += 1;
            continue;
        }

        // Otherwise this is a status letter (A, M, D). The next part is the path.
        let status = part;
        i += 1;
        if i >= parts.len() {
            break;
        }
        let path = parts[i].trim();
        i += 1;

        if path.is_empty() {
            continue;
        }

        match status {
            "A" => {
                // Git log output is newest-first, so later 'A' entries
                // (earlier in history) are the true creation time.
                let entry = map.entry(path.to_string()).or_insert(Timestamps {
                    created_at: current_author_ts,
                    updated_at: current_author_ts,
                });
                entry.created_at = current_author_ts;
            }
            "M" | "D" => {
                let entry = map.entry(path.to_string()).or_insert(Timestamps {
                    created_at: current_author_ts,
                    updated_at: current_author_ts,
                });
                // Since log is newest-first, every entry we see is older.
                entry.created_at = current_author_ts;
            }
            _ => {}
        }
    }

    map
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_git_log_timestamps() {
        // Simulate the actual `-z` output format:
        // header\0\nSTATUS\0path\0header\0\nSTATUS\0path\0
        let input =
            "abc123abc123abc123abc123abc123abc123abc1 1700000000 1700000000\0\n\
             M\0content/blog/post.md\0\
             def456def456def456def456def456def456def4 1600000000 1600000000\0\n\
             A\0content/blog/post.md\0";

        let map = parse_git_log_timestamps(input);
        let ts = map.get("content/blog/post.md").unwrap();
        assert_eq!(ts.created_at, 1600000000);
        assert_eq!(ts.updated_at, 1700000000);
    }
}
