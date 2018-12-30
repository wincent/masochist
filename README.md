# WARNING

The content and history of this branch may be re-written at any time.

## Setup

For editing, use `git worktree add content content` to create a nested checkout of the "content" branch inside the main repo. Run `hooks/install` in the main repo to set up hooks which prevent accidental amending of published/indexed content and tag deployments with timestamps.

## Scripts

* `scripts/new-article`: create a new wiki article.
* `scripts/new-irl-entry`: create a new (snippet) entry in the "[Involuntary Reboot Log](https://wincent.com/tags/involuntary.reboot.log)".
* `scripts/new-snippet`: create a new snippet.

## Workflow

* Edit using Vim.
* Autocomplete provided via [Deoplete](https://github.com/Shougo/deoplete.nvim) with [custom Markdown completer](https://github.com/wincent/wincent/blob/e465bd5364823de4a6e2eea61101c797e7ab730d/roles/vim/files/.vim/rplugin/python3/deoplete/sources/masochist.py), and [some configuration](https://github.com/wincent/wincent/blob/e465bd5364823de4a6e2eea61101c797e7ab730d/roles/dotfiles/files/.vim/autoload/wincent/autocomplete.vim#L74-L83<Paste>).
* Preview Markdown documents in Vim using [the `:Preview` command](https://github.com/wincent/wincent/blob/5e897ff293fb2a10cb0f10671d48e1c373025722/roles/dotfiles/files/.vim/plugin/commands.vim#L1), or from the terminal with [the `preview` script](https://github.com/wincent/wincent/blob/5e897ff293fb2a10cb0f10671d48e1c373025722/roles/dotfiles/files/.zsh/bin/preview).
* Publish with `git push`.

## Rewriting history

The basic flow for doing a rewrite is:

1. Actually rewrite the content with `git-filter-branch` (a detailed example is discussed [here](https://wincent.com/blog/filter-branch)).
2. Bump the `redisCacheVersion` cache breaker on the `master` branch.
3. On the `master` branch run `yarn update-indices` locally.
4. Restart local server (`yarn start`); inspect content at http://localhost:3000/ to make sure everything is in order.
5. Push content (force push).
6. Push Masochist app.
