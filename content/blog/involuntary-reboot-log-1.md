---
title: Involuntary reboot log #1
tags: blog
---

Resetting the IRL counter to "celebrate" the first kernel panic on the new iMac (yes, that's irony). No idea what the cause was. Newly installed software that was running at the time included a custom Intel build I had just made of [MLDonkey](http://mldonkey.sourceforge.net/Main_Page) and [Civilization IV](http://www.firaxis.com/games/game_detail.php?gameid=10). One of the first things I did after recovering from the panic was trash Civilization IV, just in case — it's only a game — and if I get another panic while `mlnet` is running I'll be trashing that too and never using it again. This machine is far too important to my work to take any risks. Paranoia is the order of the day.





The old machine, the G5, gave me 39 involuntary reboots in its short lifetime (18 months). And funnily enough, the day I started using the new iMac was the day of [the last involuntary hard reset](http://www.wincent.com/a/about/wincent/weblog/archives/2006/05/involuntary_reb_1.php) of the G5. The whole reason I made the switch was because of that last scary episode, one scary episode too many... (Little did I know about the [performance benefits](http://www.wincent.com/a/about/wincent/weblog/archives/2006/05/imac_memory_upg.php).) So that was 21 May 2006 (confirmed by looking at the volume creation date on the startup disk and also the creation date on `/var/log/OSInstall.custom`); the new machine didn't even get to the two month mark before hitting its first panic.

-   **Operating system version:** Mac OS X 10.4.7
-   **Average time between failures:** 53 days
-   **Uptime at moment of failure:** Less than one day
-   **Kernel panics:** 1
-   **Hard resets:** 0

As always, the first thing I did was boot from the system install disc and run Disk First Aid; no errors found but the decision to boot from the DVD rather than the usual start-up disk probably explains why there was no `panic.log` anywhere to be found on the disk (searched everywhere, not just in `/Library/Logs/`. It would be handy to have that information but given my [terrible experiences with disk integrity](http://www.wincent.com/a/about/wincent/weblog/archives/2006/05/involuntary_reb_1.php#more) and Apple software in the past I prefer to not take any risks, and booting from a file system in a potentially inconsistent state sounds like asking for trouble.

This is why I fervently hope the [rumours](http://www.osnews.com/story.php?news_id=14473) about Apple supporting [ZFS](http://www.opensolaris.org/os/community/zfs/) in the future are true, although I'm not holding my breath as they have a large investment in HFS. Of course one of the largest benefits of ZFS in my view is its [failure handling capabilities](http://www.opensolaris.org/os/community/zfs/docs/zfs_last.pdf), greatly enhanced as you add more drives to the pool, and with an iMac you're always only going to have one internal drive; even so, looking forward to the day in the future where one will be able to stack four huge Serial-ATA drives in a new Mac Pro tower and use them as an incredibly robust and fast ZFS storage pool.
