---
title: Involuntary Reboot Log #16
tags: blog
---

Very similar to the problem I saw [back at the start of this month](http://www.wincent.com/a/about/wincent/weblog/archives/2007/09/anchor.php): after installing a preview release of a certain operating system the DVD *appeared* as being mounted on the Desktop but both the Finder and the [Terminal](http://www.wincent.com/knowledge-base/Terminal) reported it to have no contents at all. I didn't try ejecting the disk but instead went straight to the System Profiler application, which beachballed for a long time before telling me that no optical drives were connected to the machine. The putatively non-existent disk burner then spat out the disc without being asked to, accompanied by a horrible screeching sound.

By this time other apps had started to beachball or become intolerably slow. No apps would finish launching, so I tried to restart and became stuck looking at an empty desktop for 10 or 15 minutes. Resignedly performed the one-finger salute (hard reset with power switch).

I did the usual Disk First Aid drill on my other (production volume). Won't bother doing it on this (development) one as I suspect this won't be a very long-lived install. Will see if the burner comes back to life when running the production OS.


### Involuntary reboot stats to date

-   **Operating system version:** Look, I'm Zippy Longstocking
-   **Kernel panics:** 6
-   **Hard resets:** 10
-   **Total failures:** 16
-   **Start of recording keeping:** 21 May 2006
-   **Total days to date:** 491 days
-   **Average time between failures:** 31 days
-   **Uptime at moment of failure(s):** about 30 minutes
