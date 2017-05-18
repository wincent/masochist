---
title: Involuntary Reboot Log #12
tags: blog
---

Hot on the heels of the [last involuntary reboot](http://www.wincent.com/a/about/wincent/weblog/archives/2007/07/involuntary_reb_11.php) we have an absolute whopper today.

At about 3 PM today my machine started to get suspiciously slow after having been up for only a couple of hours. Within a few minutes it had become completely unresponsive, except for the updating of the clock. Normally if this goes on long enough I end up reluctantly performing a hard reset, but in this case there were still signs of life: namely, every few minutes the machine would show *some* evidence that it was still alive "down there" and would respond to my instructions, albeit tardily.

So over the course of the next hour and a half I managed to painfully exit all of my applications. At its worst this entailed a wait of 15 minutes between clicking on a Dock icon and the corresponding menu popping onto the screen. But the idea was to give all of those applications a chance to write out their state to disk; I hate yanking the plug at the best of times, but when apps like Mail are open with their fingers in the mulit-gigabyte pie that is my mail folder I hate it even more.

At about 4:30 PM I managed to issue the instruction to reboot. The machine took nearly an hour and a half to power down. Would she boot up? Perhaps hoping that she would was too optimistic; at 7:30 PM I finally had to admit that the boot wasn't likely to finish any time soon, and so I yanked the power: Involuntary Reboot Number 12.

As always after a hard reset I booted from the [Mac OS X](http://www.wincent.com/knowledge-base/Mac%20OS%20X) install disc and ran Disk First Aid on the volume. The startup volume reported irrecoverable errors; I attempted the repair four times, just to be sure. Time to bite the bullet and restore from my daily backup (on the external FireWire volume); for some reason Disk Utility wouldn't me drag any volumes at all: I could click on them but I couldn't drag them, so restoring was impossible.

So I tried booting from the cloned backup volume. It took a good while, most likely freaking out trying to access my now fried ex-startup volume. I fired up Disk Utility again and after using it to confirm the "hosed" diagnosis that I'd previously obtained, I noted that this time it did allow me to drag, but the restore was so ridiculously slow that I had to abort it (at well under 500 kilobytes per second my 150 GB startup volume would take rather a long time to restore).

I wiped the volume and fired up SuperDuper! It's 9:15 PM here now and it's currently copying the contents of the backup back over to the original startup disk. There is still a considerable amount of copying to be done before this is all over, and my faith in the integrity of that startup volume is now somewhat shaken.

I seem to have very bad luck with hard disks, despite my myriad precautions. This reminds me all too much of my [painful experiences](http://www.wincent.com/a/about/wincent/weblog/archives/2006/05/involuntary_reb_1.php) with HFS+ "RAID" back in 2005 (which actually lead me to sell that machine, I just got too sick of wasting literally days battling against data loss).

So I'll be watching this disk very carefully over the next few days and possibly increasing the frequency of my backups (I already do a once-per-day mirror of my startup volume to an external disk, as well as a daily burn of my entire home folder to DVD). I'll also be committing my work even more frequently to my remote repositories.


### Involuntary reboot stats to date

-   **Operating system version:** 10.4.10
-   **Kernel panics:** 6
-   **Hard resets:** 6
-   **Total failures:** 12
-   **Start of recording keeping:** 21 May 2006
-   **Total days to date:** 425 days
-   **Average time between failures:** 35 days
-   **Uptime at moment of failure(s):** less than 2 hours
