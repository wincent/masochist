---
title: Backup obsession
---

In light of my [last hard reset](http://www.wincent.com/a/about/wincent/weblog/archives/2007/11/involuntary_reb_17.php) and subsequent, albeit minor, [data loss](http://www.wincent.com/a/about/wincent/weblog/archives/2007/11/a_world_without.php), I've decided to ratchet up my backup regimen another notch.

Now that [Leopard](http://www.wincent.com/knowledge-base/Leopard) is out I've got a free partition (the one I previously used to install prerelease seeds). So after a bit of juggling around with the help of [SuperDuper!](http://www.wincent.com/knowledge-base/SuperDuper!), I've now got:

-   a minimal [Tiger](http://www.wincent.com/knowledge-base/Tiger) install on the small (20 GB) partition that I previously used for backups (I'll keep this around because at the moment Leopard doesn't properly support my Pioneer DVR-K06 burner)
-   a full daily backup of my Leopard startup volume to another partition, courtesy of SuperDuper!
-   the old seed partition, 60 GB, for other backups

In the past I was doing compressed, automated backups of my home directory 4 times a day (every 6 hours), to the partition onto which I've just installed Tiger. Now I've got 3 times as much space, so I'm going to do the backups 12 times a day (every 2 hours) instead. This is approaching the hard limit for the number of backups I could theoretically do in a day, given that each backup run currently takes about 1 hour 20 minutes.

Do you think this is going too far? Personally, given the track record of this machine, it seems perfectly reasonable; losing even a couple of hours' work is painful. And given that the backups run at a `nice` level of 20 the performance impact should be negligible. Now I have bootable, daily snapshots of my entire startup volume, *and* two-hourly snapshots of the data which changes most often (my home directory). Additional layers of protection are afforded by storing copies of my source code in off-site [Git](http://www.wincent.com/knowledge-base/Git) repositories and running my machine here off a nice [UPS](http://www.wincent.com/knowledge-base/UPS). My old custom of burning a copy of my home directory to DVD-R once per day for added security will remain on hold until Apple starts supporting my burner adequately in Leopard.

This is really about as far as I can go right now; when Apple rolls out read/write, bootable [ZFS](http://www.wincent.com/knowledge-base/ZFS) I'll be able to remove another weak link in the chain (the joke HFS+ filesystem; does the "H" stand for "Hilarious"? I wonder who's laughing). The next logical step would then be upgrading to a Mac Pro (still on the lowly iMac here) so that I can pack in multiple disks and start benefitting from [RAID-Z](http://www.wincent.com/knowledge-base/RAID-Z).
