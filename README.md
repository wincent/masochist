# WARNING

The content and history of this branch may be re-written at any time.

## Setup

For editing, use `git worktree add content content` to create a nested checkout of the "content" branch inside the main repo.

## `scripts/`

- `scripts/new-article <title>`: Create a new (or edit an existing) wiki article; `<title>` may contain spaces.
- `scripts/new-irl-entry`: Create a new (snippet) entry in the "[Involuntary Reboot Log](https://wincent.dev/tags/involuntary.reboot.log)".
- `scripts/new-post <slug>`: Create a new (or edit an existing) blog post.
- `scripts/new-snippet`: Create a new, numbered snippet.

## `bin/` utilities

- `bin/check-format`: Check formatting.
- `bin/check-tags`: Check content files have tags indicating their type.
- `bin/crush`: Optimize PNGs.
- `bin/format`: Enforce formatting.

## Workflow

- Edit using Vim.
- Preview Markdown documents in Vim using [the `:Preview` command](https://github.com/wincent/wincent/blob/5e897ff293fb2a10cb0f10671d48e1c373025722/roles/dotfiles/files/.vim/plugin/commands.vim#L1), or from the terminal with [the `preview` script](https://github.com/wincent/wincent/blob/5e897ff293fb2a10cb0f10671d48e1c373025722/roles/dotfiles/files/.zsh/bin/preview).
- See instructions in the `main` branch README for how to publish.
