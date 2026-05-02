# WARNING

The content and history of this branch may be re-written at any time.

## Setup

For editing, run `bin/configure-worktrees` from the repo root with the `main` branch checked out; this will create a `content` worktree where you can commit and edit the source files, and a `public` worktree where the static assets get built.

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
