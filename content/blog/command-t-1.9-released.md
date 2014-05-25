---
title: Command-T 1.9 released
tags: releases command.t
---

I just released version 1.9 of [Command-T](/wiki/Command-T). Command-T is a powerful, [open source](/wiki/open_source) file and buffer-navigation plug-in inspired by the "Command-T" feature in [TextMate](/wiki/TextMate).

# What's new

Of main interest in this release are speed-ups (for both startup time and search time), bug fixes, and a new MRU (Most Recently Used) buffer finder.

As always, a full change-log appears under HISTORY in [the documentation](http://git.wincent.com/command-t.git/blob_plain/1.9:/doc/command-t.txt), and you can explore the commits in the release [here](/repos/command-t/tags/1.9). (Note: the integrated repository browser that I'm linking to here is still relatively new and doesn't have a full feature set yet. You may prefer to view the commits [on GitHub](https://github.com/wincent/Command-T/compare/1.8...1.9) or in [the old GitWeb repository browser](http://git.wincent.com/command-t.git/shortlog/refs/tags/1.9) in the meantime.)

# Installation

Command-T is a combination of C, Ruby and Vim's built-in scripting language, which means that you need not only Ruby and a suitable C compiler on your system, but you also have to make sure you use compatible versions. That is, you can't link your Vim against Ruby 1.9.3 and Command-T against Ruby 1.8.7 without things going "Boom!". For some reason, people *love* playing with different Ruby versions, via [RVM](/wiki/RVM), [rbenv](/wiki/rbenv) and other means, and this has generated no small number of tickets in the [issue tracker](/wiki/issue_tracker).

Windows is the worst platform of all, unsurprisingly. Getting Ruby, Vim and Command-T working together on Windows is similar in difficulty to transmuting lead into gold; if anything, transmuting may be easier.

So, if you're unfortunate enough to be using Windows, or if you're the sort that likes to play with different versions of Ruby, all I can do is encourage you to read [the documentation](http://git.wincent.com/command-t.git/blob_plain/HEAD:/doc/command-t.txt) very, very carefully — I've done my best to make it accurate and comprehensive — stick to the recommended, known-working versions, and maybe watch the installation screencasts on [the Command-T product page](/products/command-t).

## [Pathogen](/wiki/Pathogen) users

```shell
$ cd path/to/your/pathogen/bundle # probably ~/.vim/bundle
$ git clone git://git.wincent.com/command-t.git
$ cd command-t
$ rake make
```

And in Vim:

    :call pathogen#helptags()

See [the docs](http://git.wincent.com/command-t.git/blob_plain/HEAD:/doc/command-t.txt) for more info on installing (and updating) Command-T via Pathogen.

## Everybody else

-   Download the vimball from [the Command-T product page](/products/command-t) (or [www.vim.org](http://www.vim.org/scripts/script.php?script_id=3025), if you prefer)
-   Open the vimball archive in vim, and do `:so %` to unpack it
-   `cd ~/.vim/ruby/command-t && ruby extconf.rb && make`

Beware that vimballs aren't the most robust packaging system; if your vimball doesn't extract completely on the first try (ie. if only some of the files are extracted), just try again.
