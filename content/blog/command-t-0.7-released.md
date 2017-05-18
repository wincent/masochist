---
title: Command-T 0.7 released
tags: releases command.t blog
cache_breaker: 1
---

I'm pleased to announce the release of version 0.7 of the [Command-T](/wiki/Command-T) plug-in for [VIM](/wiki/VIM). This is a powerful, [open source](/wiki/open_source) file-navigation plug-in inspired by the "Command-T" feature in [TextMate](/wiki/TextMate).

This is a minor feature release that enhances the way Command-T responds to VIM's `'wildignore'` setting for excluding paths from listings. Specifically, Command-T now delegates to VIM's `expand()` function, which means that it is now viable to exclude patterns such as `vendor/rails/**` in addition to filename-only patterns like `*.o` and `.git`. Thanks to Mike Lundy for sending in the initial patch.

Other changes are listed under HISTORY in [the documentation](http://git.wincent.com/command-t.git/blob/HEAD:/doc/command-t.txt), and all commits in this release are listed [here](http://git.wincent.com/command-t.git/log/refs/tags/0.7).

As I noted in the announcement for the previous release, the basic functionality is now solidly in place, and with a number of successful releases under its belt it seems that most issues with compatibility on Mac OS X, Windows and Linux are sorted out, so a 1.0 release is likely in the near future.

So, if you're a [VIM](/wiki/VIM) user check out the [screencasts](/products/command-t) and give the plug-in a try. If you'd like to support development you can use [the donations page](/products/command-t/donations) to make a donation, or consider submitting a patch for the project (the source code can be browsed [here](http://git.wincent.com/command-t.git)).
