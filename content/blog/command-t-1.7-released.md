---
title: Command-T 1.7 released
tags: releases command.t
---

I just released version 1.7 of [Command-T](/wiki/Command-T), the powerful, [open source](/wiki/open_source) file and buffer-navigation plug-in inspired by the "Command-T" feature in [TextMate](/wiki/TextMate).

# What's new

Continuing the theme of performance enhancements from [version 1.6](/blog/command-t-1.6-released), this release adds a new [Watchman](https://github.com/facebook/watchman) scanner, which can allow Command-T to scan hierarchies in the ballpark of half-a-million files in around a second. Command-T has always been fast thanks to its C core, but with this and other recent additions (such as input debouncing added in 1.7, parallelized search added in 1.6, and memoization added to the matching algorithm in 1.5) it is now an order of magnitude or more faster, which is especially noticeable on very large repos.

A [new section](https://github.com/wincent/Command-T/blob/987c70d2db0687a7ede34523535ed42f989cb4a0/doc/command-t.txt#L705-L808) has been added to the documentation with tips on how to set things up to work with very large hierarchies.

As always, a full change-log appears under HISTORY in [the documentation](http://git.wincent.com/command-t.git/blob_plain/1.7:/doc/command-t.txt), and you can explore the commits in the release [here](/repos/command-t/tags/1.7). (Note: the integrated repository browser that I'm linking to here is still relatively new and doesn't have a full feature set yet. You may prefer to view the commits in [the old GitWeb repository browser](http://git.wincent.com/command-t.git/shortlog/refs/tags/1.7) in the meantime.)

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

# Screencasts, donations and source code

If you're a [Vim](/wiki/Vim) user check out the [screencasts](/products/command-t) and give the plug-in a try. If you'd like to support development you can use [the donations page](/products/command-t/donations) to make a donation, or consider submitting a patch for the project (the source code can be browsed [here](/repos/command-t)).
