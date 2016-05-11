# WARNING

The content and history of this branch may be re-written at any time.

## Scripts

* `scripts/set-up-hooks`: sets up Git hooks that:
  * Prevent accidental amending of published/indexed history.
  * Tag deployments with timestamps.
* `scripts/new-article`: create a new wiki article.
* `scripts/new-irl-entry`: create a new (snippet) entry in the "[Involuntary Reboot Log](https://wincent.com/tags/involuntary.reboot.log)".
* `scripts/new-snippet`: create a new snippet.

## Workflow

* Edit using Vim.
* Autocomplete provided via YouCompleteMe with [custom Markdown completer](https://github.com/wincent/ycmd/tree/wincent), and [some](https://github.com/wincent/wincent/blob/5e897ff293fb2a10cb0f10671d48e1c373025722/roles/dotfiles/files/.vim/plugin/autocomplete.vim#L32) [configuration](https://github.com/wincent/masochist/blob/c4bffe4882c27229c2bb09635216e86a7ab581bb/.ycm_extra_conf.py).
* Preview Markdown documents in Vim using [the `:Preview` command](https://github.com/wincent/wincent/blob/5e897ff293fb2a10cb0f10671d48e1c373025722/roles/dotfiles/files/.vim/plugin/commands.vim#L1), or from the terminal with [the `preview` script](https://github.com/wincent/wincent/blob/5e897ff293fb2a10cb0f10671d48e1c373025722/roles/dotfiles/files/.zsh/bin/preview).
* Publish with `git push`.
