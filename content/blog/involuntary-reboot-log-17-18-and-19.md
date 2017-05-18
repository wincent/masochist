---
title: Involuntary Reboot Log #17, #18 and #19
tags: blog
---

I've been too busy of late to post reports to my much-loved [Involuntary Reboot Log](http://www.wincent.com/a/about/wincent/weblog/archives/involuntary_reboot_log/), but I'm finally catching up with my first three entries since upgrading to the final version of [Leopard](http://www.wincent.com/knowledge-base/Leopard).

The first occurred during installation. I started things going and went out, and when I came back the installation had finished and the machine had rebooted but it was totally blocked with a spinning beachball, so I had to hard reset it.

I rebooted from the installation disk and ran Disk First Aid, which reported literally hundreds of errors (laughable old HFS+). After the Disk First Aid run I was able to provoke another beachball just by clicking on the Apple menu. So that was my second hard reset.

So, another Disk First Aid run, this time without errors, and another installation, this time opting for an in-place upgrade install seeing as the previous attempt (an archive install) hadn't worked out. I don't really like in-place upgrades for major releases, preferring a clean install as an opportunity for some spring cleaning, but such is life. So lost about 90 minutes all up.

Several days later came my third hard reset under Leopard, this time brought on by Leopard's lack of support for my Pioneer DVR-K06 drive (a replacement I installed because the Apple-supplied drive flaked out after only a year of use). This was an issue which cropped up in a number of forms in the seed builds and which I had hoped would be resolved in final, but alas, it was not to be.

Ironically, Leopard obviously *can* support the drive (I installed Leopard from it!) but it doesn't work in practice. Basically, the System Profiler reports that there is no burner installed most of the time, but the other day I thought I'd stick in a disc and see what happened and much to my surprise it actually mounted the contained volume!

Alas, trying to copy a file from it resulted in a Finder hang (beachballing) after only 4 MB. I tried firing up the Disk Utility but that hang too, and in a cascade effect more and more applications hung or refused to launch until the machine became totally useless. Luckily I had a Terminal window still open so I was able to issue a `sudo reboot`, but that ended up being useless too (infinite spinner) and I had to hard reset. So from here on I'll have to boot back into Tiger whenever I want to read from or write to an optical disc.





### Involuntary reboot stats to date

-   **Operating system version:** 10.5
-   **Kernel panics:** 6
-   **Hard resets:** 13
-   **Total failures:** 19
-   **Start of recording keeping:** 21 May 2006
-   **Total days to date:** 539 days
-   **Average time between failures:** 28.36 days
-   **Uptime at moment of failure(s):** various
