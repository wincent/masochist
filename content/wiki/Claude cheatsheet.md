---
tags: wiki
title: Claude cheatsheet
---

# Installation troubleshooting

I initially installed using [the standard installation instructions](https://docs.anthropic.com/en/docs/claude-code/setup) with:

```
npm install -g @anthropic-ai/claude-code
```

But at some point Claude urged me to migrate from a global to a local install with:

```
/migrate-installer
```

I have [an alias to open Claude code](https://github.com/wincent/wincent/blob/e3d18bd5feb75448fe4dd0a1cfa80382d9072a6f/aspects/dotfiles/files/.zsh/aliases#L18) by typing `code` (not `claude`, because I have [a pre-existing alias with that name](https://github.com/wincent/wincent/blob/e3d18bd5feb75448fe4dd0a1cfa80382d9072a6f/aspects/dotfiles/files/.zsh/aliases#L17) that opens a Claude chat in Neovim):

```
alias code="$HOME/.claude/local/claude"
```

At a later time this stopped working for an unknown reason; something had blown away the `bin` stub:

```
$HOME/.claude/local/claude: line 2: $HOME/.claude/local/node_modules/.bin/claude: No such file or directory
```

So, I reinstalled (again with `npm install -g`), and it started to complain because I now had both installs; ie. `/doctor` says:

```
Warning: Multiple installations found
 └ npm-local at /Users/$USER/.claude/local
 └ npm-global at /Users/$USER/n/bin/claude
```

So, I removed the global install:

```
npm uninstall -g @anthropic-ai/claude-code
```

And now `/doctor` is happy again.
