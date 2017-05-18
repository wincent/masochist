---
title: Command-T 1.0b released
tags: releases command.t blog
cache_breaker: 1
---

I've just released version 1.0b of the [Command-T](/wiki/Command-T) plug-in for [Vim](/wiki/Vim). This is a powerful, [open source](/wiki/open_source) file-navigation plug-in inspired by the "Command-T" feature in [TextMate](/wiki/TextMate).

# What's new

This release includes a workaround for a crippling bug in Vim 7.3 on some platforms (if you've tried Command-T on such a platform, you'll definitely know about [the issue](/issues/1617)) and fixes [one "polish" issue](/issues/1724) (eating up a buffer number each time you use Command-T).

As always, a full change-log appears under HISTORY in [the documentation](http://git.wincent.com/command-t.git/blob/HEAD:/README.txt), and all commits in this release are listed [here](http://git.wincent.com/command-t.git/shortlog/refs/tags/1.0b).

# The 1.0 milestone

I started Command-T back in February this year and within a few days had a working implementation which I [posted about here](/blog/bringing-textmate-style-command-t-to-vim). The source code was always [out in the open](http://git.wincent.com/command-t.git), but I published the first "official" release (version 0.1) to [the plug-in's page at vim.org](http://www.vim.org/scripts/script.php?script_id=3025) on 22 March 2010. Since then, I've used it heavily every day and it has enjoyed fairly good take up by Vim users out there.

It [didn't take long](/blog/command-t-0.6-released) to get to a point where I considered it stable enough and feature-complete enough to be considered for 1.0 release. But I held off because installing it was sometimes a pain.

Command-T is a combination of C, Ruby and Vim's built-in scripting language, which means that you need not only Ruby and a suitable C compiler on your system, but you also have to make sure you use compatible versions. That is, you can't link your Vim against Ruby 1.9.2 and Command-T against Ruby 1.8.7 without things going "Boom!". For some reason, people *love* playing with different Ruby versions, via [RVM](/wiki/RVM) and other means, and this has generated no small number of tickets in the [issue tracker](/wiki/issue_tracker).

Windows is the worst platform of all, unsurprisingly. Getting Ruby, Vim and Command-T working together on Windows is similar in difficulty to transmuting lead into gold; if anything, transmuting may be easier.

I've come to the point where I realize that these installation difficulties are never going to go away, and they shouldn't hold up a 1.0 release. So here it is: 1.0b, which I'll follow up with 1.0 proper within the next week or three if I don't hear any reports of Command-T-induced poisoning or explosions.

And as far as installing goes: if you're unfortunate enough to be using Windows, or if you're the sort that likes to play with different versions of Ruby, all I can do is encourage you to read [the documentation](http://git.wincent.com/command-t.git/blob_plain/HEAD:/README.txt) very, very carefully — I've done my best to make it accurate and comprehensive — and maybe watch the installation screencasts on [the Command-T product page](/products/command-t).

Other than that, I hope you have fun with Command-T.

# Where to get it

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

If you're a [Vim](/wiki/Vim) user check out the [screencasts](/products/command-t) and give the plug-in a try. If you'd like to support development you can use [the donations page](/products/command-t/donations) to make a donation, or consider submitting a patch for the project (the source code can be browsed [here](http://git.wincent.com/command-t.git)).
