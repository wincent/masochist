---
title: Command-T 0.8b released
tags: releases command.t blog
cache_breaker: 1
---

I've just released version 0.8b of the [Command-T](/wiki/Command-T) plug-in for [VIM](/wiki/VIM). This is a powerful, [open source](/wiki/open_source) file-navigation plug-in inspired by the "Command-T" feature in [TextMate](/wiki/TextMate).

# Highlights

Long-term users may notice that this is the first release that I've ever labelled with "b" for "beta". The reason is that this release features a *major* overhaul of the scoring algorithm which is used to sort matches. I am very excited about this change because it makes the order in which results are returned much more intuitive, and has a noticeable impact on the usability of the plug-in.

Previously to get the most out of the plug-in you had to understand how the algorithm worked in order to get the best results. With these changes, it now seems almost as though the plug-in can "read your mind" and deduce what file you're looking for. If people are interested, I can write a blog post going into more details about this.

But as I said, the overhaul was a major one, and the new algorithm still needs to be optimized to perform well on directories containing many (thousands) of files. That's why the release is labelled as "beta" quality.

# Additional details

A full change-log appears under HISTORY in [the documentation](http://git.wincent.com/command-t.git/blob/HEAD:/doc/command-t.txt), and all commits in this release are listed [here](http://git.wincent.com/command-t.git/shortlog/refs/tags/0.8b).

In the announcements for the previous two releases, 0.6 and 0.7, I said that "the basic functionality is now solidly in place, and with a number of successful releases under its belt it seems that most issues with compatibility on Mac OS X, Windows and Linux are sorted out, so a 1.0 release is likely in the near future". With this release that road-map has changed a little and I plan to knock out at least a couple more point releases before declaring 1.0.

So, if you're a [VIM](/wiki/VIM) user check out the [screencasts](/products/command-t) and give the plug-in a try. If you'd like to support development you can use [the donations page](/products/command-t/donations) to make a donation, or consider submitting a patch for the project (the source code can be browsed [here](http://git.wincent.com/command-t.git)).
