---
tags: javascript nvm node
cache_breaker: 1
---

On [OS X](/wiki/OS_X), use [Homebrew](/wiki/Homebrew) to get [nvm](/wiki/nvm):

```shell
$ brew info nvm # get tips
$ export NVM_DIR=~/.nvm
$ source $(brew --prefix nvm)/nvm.sh
$ export PATH=~/.nvm:$PATH
$ nvm install 0.10
$ nvm use v0.10.38
$ rm -rf node_modules # blow away old modules; can also do `npm rebuild`
$ npm install
```

I don't anticipate using it often, so I haven't yet modified my [dotfiles](/wiki/dotfiles) to incorporate the `export` (etc) set-up.

# See also

-   [nvm vs n](/wiki/nvm_vs_n)

