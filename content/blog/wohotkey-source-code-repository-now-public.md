---
title: WOHotKey source code repository now public
tags: wohotkey open.source blog
cache_breaker: 1
---

I've just released some more source code under the [BSD](/wiki/BSD) license, this time the [WOHotKey](/wiki/WOHotKey) framework. WOHotKey is an [Objective-C](/wiki/Objective-C) framework for [Mac OS X](/wiki/Mac_OS_X) which provides hot key functionality for Cocoa applications. This is part of a general move towards [open source](/wiki/open_source) that I've been working on for a long, long time now. If you're interested to hear about my motivation, see the post I published last month, "[Embracing open source](/blog/embracing-open-source)".

The published code is derived from code that's shipped with a couple of applications (WinSwitch, Synergy Advance) over the years. I had to do a lot of rearranging in preparation for the move to open source, so things have diverged quite a bit; note that this means that the published code has never been tested in a shipping application. My plan is to massage things a bit to re-unify things so that my apps will use the new code base.

The [Git](/wiki/Git) source code repository can be browsed here:

-   <http://git.wincent.com/WOHotKey.git>

Periodically-updated backup mirrors are already in place at [GitHub](/wiki/GitHub) and [Gitorous](/wiki/Gitorous):

-   <http://github.com/wincent/WOHotKey/>
-   <http://gitorious.org/wohotkey>
