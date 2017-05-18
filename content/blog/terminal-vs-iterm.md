---
title: Terminal vs iTerm
tags: blog
cache_breaker: 1
---

In a directory with a bunch of source files, `time cat *.{m,h}` in iTerm yields:

    real    0m2.585s
    user    0m0.010s
    sys     0m0.034s

While the [Mac OS X](/wiki/Mac_OS_X) [Terminal](/wiki/Terminal) (10.5.8) gives:

    real	0m0.235s
    user	0m0.010s
    sys	0m0.031s

Shame, seeing as unlike the Terminal, iTerm actually has non-[broken tab titles](/twitter/157). Looks like I am going to have to try out [this ghastly hack](http://pseudogreen.org/blog/set_tab_names_in_leopard_terminal.html).

Wonder if [Apple](/wiki/Apple) has fixed this in [Snow Leopard](/wiki/Snow_Leopard)... The [AppleScript](/wiki/AppleScript) dictionary at least suggests that this kind of thing is *supposed* to work:

    tell application "Terminal"
    	set title displays custom title of first tab of first window to true
    	set custom title of first tab of first window to "foo"
    end tell

But it doesn't modify the tab title, only the window title.

# Update

Used the "ghastly hack" mentioned above as a basis for [this](http://git.wincent.com/wincent.git/commitdiff/f8a8493f12c726bc641be43b5973adb6d6348222). Note that it's not so much the hack itself that is "ghastly" as the fact that Apple could release a tab implementation with such a horrid usability flaw.
