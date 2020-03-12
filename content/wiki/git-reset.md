---
tags: wiki git
---

| Mode | Default? | Updates HEAD? | Touches worktree? | Touches index? | Notes |
| --- | --- | --- | --- | --- | --- |
| `--soft` | ❌ | ✅ | ❌ | ❌ |  |
| `--mixed` | ✅ | ✅ | ❌ | ❌ |  |
| `--hard` | ❌ | ✅ | ❌ | ✅ |  |
| `--merge` | ❌ | ✅ | ✅ (keeps changes) | ✅ (discards staged) | May abort |
| `--keep` | ❌ | ✅ | ✅ (keeps changes) | ✅ | May abort |

## Notes

`--keep` and `--merge` are the tricky ones; they try to preserve local edits to files ("all" or "most" local edits, respectively) if possible and will abort if they can't.

`--merge` is rarely what you want though, because it will blow away any local edits you've staged in the index.

Usually, staging something is a cue to Git that you want it to keep hold of something. And `--merge` doesn't sound like it might be destructive (unlike `--hard`), but it is.

In both cases, they'll abort if the commit you're trying to reset to touches files that have local changes.
