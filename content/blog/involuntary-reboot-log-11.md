---
title: Involuntary Reboot Log #11
tags: blog
---

You gotta love this. Actually, you gotta hate it. I just committed the sacrilege of daring to open Parallels and as my just comeuppance my machine immediately slowed to treacle speeds ultimately becoming unusable. In the end even the clock stopped updating and the mouse wouldn't move. At that point I had already waited through two songs (iTunes continued to play in the background) but when the third song should have started there was only silence.

I was able to [SSH](http://www.wincent.com/knowledge-base/SSH) in from another machine and observe that the Window Server was hogging 98% of the CPU, 768 Mach ports, and 3.5 GB of virtual memory. Killing off Parallels didn't work, even with `sudo kill -9`, and it went into zombie mode. So there was only one thing for it: `sudo reboot`.

Adios, unsaved email which I was in the middle of composing.

Adios, Safari window with 20 tabs open containing articles and man pages that I was using for research, unsaved wiki documents that I was editing.

Adios, 10 Terminal windows with open SSH sessions and work in progress.

Sigh.


### Involuntary reboot stats to date

-   **Operating system version:** 10.4.10
-   **Kernel panics:** 6
-   **Hard resets:** 5
-   **Total failures:** 11
-   **Start of recording keeping:** 21 May 2006
-   **Total days to date:** 418 days
-   **Average time between failures:** 38 days
-   **Uptime at moment of failure(s):** several days
