---
title: Involuntary Reboot Log 2.1
tags: involuntary.reboot.log blog
cache_breaker: 1
---

Just had my first [involuntary reboot](/wiki/involuntary_reboot) with this machine. The log for the old machine had gotten [as high as 60](/blog/involuntary-reboot-log-60), so "resetting" the counter and will now count from 2.1, 2.2, 2.3 and so on.

This time the frontmost application froze, had to force quit it, and noticed one other app was [beachballing](/wiki/beachballing) too. Sure enough, the usual symptoms presented themselves: the mouse pointer moves, clock continues to update, menus work, but any interaction which actually requires doing something (like opening a file) will hang indefinitely. This includes things like quitting applications.

So in the end had to reluctantly perform a [hard reset](/wiki/hard_reset). Was naïvely hoping that I would have much better luck with this machine than I did with the last one (which averaged one involuntary reboot every 22 days over its lifetime); this machine has operated for 34 days before its first failure, so we'll see how we go.

-   Kernel panics: 0
-   Hard resets: 1
-   Total failures: 1
-   Start of recording keeping: 17 March 2010
-   Total days to date: 34 days
-   Average time between failures: 34 days
