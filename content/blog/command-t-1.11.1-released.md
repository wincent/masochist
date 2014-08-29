---
title: Command-T 1.11.1 released
tags: releases command.t
---

I just released version 1.11.1 of [Command-T](/wiki/Command-T). Command-T is a powerful, [open source](/wiki/open_source) file and buffer-navigation plug-in inspired by the "Command-T" feature in [TextMate](/wiki/TextMate).

# What's new

This release brings a mixture of performance improvements and fixes for bugs introduced in version 1.11.

As always, a full change-log appears under HISTORY in [the documentation](http://git.wincent.com/command-t.git/blob_plain/1.11.1:/doc/command-t.txt), and you can explore the commits in the release [here](/repos/command-t/tags/1.11.1). (Note: the integrated repository browser that I'm linking to here is still relatively new and doesn't have a full feature set yet. You may prefer to view the commits [on GitHub](https://github.com/wincent/Command-T/compare/1.11...1.11.1) or in [the old GitWeb repository browser](http://git.wincent.com/command-t.git/shortlog/refs/tags/1.11.1) in the meantime.)

# Installation

Command-T is a combination of C, Ruby and Vim's built-in scripting language, which means that you need not only Ruby and a suitable C compiler on your system, but you also have to make sure you use compatible versions. That is, you can't link your Vim against Ruby 1.9.3 and Command-T against Ruby 2.1.2 without things going "Boom!". It can be hard to install. Please see [the documentation](http://git.wincent.com/command-t.git/blob_plain/HEAD:/doc/command-t.txt) for trouble-shooting hints.
