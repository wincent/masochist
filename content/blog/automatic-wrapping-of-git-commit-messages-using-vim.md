---
title: Automatic wrapping of Git commit messages using Vim
tags: git vim
---

I just noticed that since changing my `filetype` setting in my `~/.vimrc` from:

    filetype indent on

To:

    filetype indent plugin on

[Vim](/wiki/Vim) is now automatically wrapping my [Git](/wiki/Git) commit messages to 72 columns. Nice.

For the curious, here is the output of `:set` when editing a Git commit message (I've stripped out some of the less interesting settings):

      autoindent          helplang=es         ignorecase          number              shiftwidth=2        textwidth=72        window=0
      autoread            hidden              incsearch           ruler               smartcase           ttyfast
      backspace=2         history=1000        list                scroll=25           smarttab            ttymouse=xterm
      expandtab           hlsearch            modelines=0         scrolloff=3         tabstop=2           wildmenu
      filetype=gitcommit
      includeexpr=substitute(v:fname,'^[^/]\+/','','')
      keywordprg=git --git-dir='/Users/wincent/trabajo/leopard/WOPublic/src/.git' show
      path=~/trabajo/leopard/WOPublic/src/.git,~/trabajo/leopard/WOPublic/src,

The interesting settings are evidently:

-   `filetype=gitcommit`

Evidently it's picked up that the filename being edited is `COMMIT_EDITMSG` and that triggers the custom behaviour.

-   `textwidth=72`

Commit messages should be nice and narrow so that they're easy to read, will display well on narrow terminals, and will survive transmission by email (even with a few levels of quoting).

-   `keywordprg=git --git-dir='/Users/wincent/trabajo/leopard/WOPublic/src/.git' show`

As described in `:h keywordprg`, hitting `K` will automatically look up the word under the cursor using the specified program — in this case `git show`. Not yet really sure why you'd want to do this nor how you would use it.

-   `path=~/trabajo/leopard/WOPublic/src/.git,~/trabajo/leopard/WOPublic/src,`

Set up the search path for commands like `gf` (edit the filename under the cursor).
