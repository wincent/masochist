---
title: Command-T 1.1b and 1.1b2 released
tags: releases command.t blog
---

Only a few days ago we hit the one-year anniversary of the first public release of [Command-T](/wiki/Command-T) for [Vim](/wiki/Vim). And to celebrate, I've just released version 1.1b2 of the plug-in. This is a powerful, [open source](/wiki/open_source) file and buffer-navigation plug-in inspired by the "Command-T" feature in [TextMate](/wiki/TextMate).

# What's changed since [the 1.0.1 release](/blog/command-t-1.0.1-released)

This is a minor feature release which adds the ability to search among any open buffers. You can bring up the buffer listing with `:CommandTBuffer`. It is also bound to `<Leader>b` by default (although that mapping won't override any pre-existing mapping that you might have for `<Leader>b`).

As always, a full change-log appears under HISTORY in [the documentation](http://git.wincent.com/command-t.git/blob/1.1b2:/README.txt), and you can explore the commits in the release [here](/repos/command-t/tags/1.1b2). (Note: the integrated repository browser that I'm linking to here is still relatively new and doesn't have a full feature set yet. You may prefer to view the commits in [the old GitWeb repository browser](http://git.wincent.com/command-t.git/shortlog/refs/tags/1.1b2) in the meantime.)

(Note there were actually two releases in quick succession here, 1.1b and 1.1b2, although in both cases the actual plug-in code is identical. I had made significant changes to the scripts I use to automate the release process, and I needed to make one additional tweak after 1.1b went out, requiring me to run the release scripts one more time and produce 1.1b2.)

# Installation

Command-T is a combination of C, Ruby and Vim's built-in scripting language, which means that you need not only Ruby and a suitable C compiler on your system, but you also have to make sure you use compatible versions. That is, you can't link your Vim against Ruby 1.9.2 and Command-T against Ruby 1.8.7 without things going "Boom!". For some reason, people *love* playing with different Ruby versions, via [RVM](/wiki/RVM) and other means, and this has generated no small number of tickets in the [issue tracker](/wiki/issue_tracker).

Windows is the worst platform of all, unsurprisingly. Getting Ruby, Vim and Command-T working together on Windows is similar in difficulty to transmuting lead into gold; if anything, transmuting may be easier.

So, if you're unfortunate enough to be using Windows, or if you're the sort that likes to play with different versions of Ruby, all I can do is encourage you to read [the documentation](http://git.wincent.com/command-t.git/blob_plain/HEAD:/README.txt) very, very carefully — I've done my best to make it accurate and comprehensive — stick to the recommended, known-working versions, and maybe watch the installation screencasts on [the Command-T product page](/products/command-t).

## [Pathogen](/wiki/Pathogen) users

```shell
$ cd path/to/your/pathogen/bundle # probably ~/.vim/bundle
$ git clone git://git.wincent.com/command-t.git
$ cd command-t
$ rake make
```

And in Vim:

    :call pathogen#helptags()

See [the docs](http://git.wincent.com/command-t.git/blob_plain/HEAD:/README.txt) for more info on installing (and updating) Command-T via Pathogen.

## Everybody else

-   Download the vimball from [the Command-T product page](/products/command-t) (or [www.vim.org](http://www.vim.org/scripts/script.php?script_id=3025), if you prefer)
-   Open the vimball archive in vim, and do `:so %` to unpack it
-   `cd ~/.vim/ruby/command-t && ruby extconf.rb && make`

# Screencasts, donations and source code

If you're a [Vim](/wiki/Vim) user check out the [screencasts](/products/command-t) and give the plug-in a try. If you'd like to support development you can use [the donations page](/products/command-t/donations) to make a donation, or consider submitting a patch for the project (the source code can be browsed [here](/repos/command-t)).
