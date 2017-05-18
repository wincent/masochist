---
title: Involuntary Reboot Log #15
tags: blog
---

There are some applications that when they crash are capable of taking the whole system down. [Xcode](http://www.wincent.com/knowledge-base/Xcode) is one of them. I have no idea why or how they can do this. And I don't think it is actually the application's fault but something in [Mac OS X](http://www.wincent.com/knowledge-base/Mac%20OS%20X). That's my intuition anyway.

This isn't the catastrophic freeze from the Mac OS 9 days, nor the kernel panic of the modern era: instead, the computer continues on (seconds on clock continue to update, Dock icons animate, hard drive makes noise, mouse pointer moves) but your attempts at interaction with it have no effect. Clicking the mouse or pressing keys has no visible effect, mousing over the Dock doesn't produce any tool-tips; it's as though you were separated from your machine by a pane of glass.

Sometimes you can "jolt" the machine out of such a state by hitting Option-Command-Escape. This only seems to work when the computer gets into a "trapped-behind-glass" moment *without* any apps crashing. The Force Quit window pops up and the computer is immediately back to normal, no need to actually go ahead and force quit anything at all. I end up having to do this about 4 or 5 times a day.

But last night wasn't one of those moments. I patiently left the machine on all night to see if it would recover but it didn't. I tried using my roommate's Windows PC and PuTTY to SSH in and jolt the machine back into life, but connections were refused. No choice but to hard reset.

As any regular reader of my [Involuntary Reboot Log](http://www.wincent.com/a/about/wincent/weblog/archives/involuntary_reboot_log/) knows, I hate hard resets and I have absolutely zero faith in the ability of the HFS+ filesystem to maintain data integrity in the event of an irregular power cycling like that. But as I noted about [10 days ago](http://www.wincent.com/a/about/wincent/weblog/archives/2007/09/anchor.php), my machine is once again without a working optical drive, so booting off the Mac OS X install DVD to do repairs or a reinstall is no longer an option.

So today I resigned myself to just go ahead and do the hard reset, kiss my open documents goodbye, and hope that HFS+ wouldn't screw me over. Imagine my surprise when upon booting the Super Drive was once again recognized by the system! Finally able to eject that Leopard seed disc that had been sitting in there for the last 10 days. Don't really expect it to keep working though; and certainly don't expect to be able to depend on it in the event of an all-too-likely catastrophic failure.


### Involuntary reboot stats to date

-   **Operating system version:** 10.4.10 (8R2218)
-   **Kernel panics:** 6
-   **Hard resets:** 9
-   **Total failures:** 15
-   **Start of recording keeping:** 21 May 2006
-   **Total days to date:** 482 days
-   **Average time between failures:** 32 days
-   **Uptime at moment of failure(s):** about four hours
