---
title: New backup regimen
---

I've escaped from yesterday's [sudden hard disk failure](http://www.wincent.com/a/about/wincent/weblog/archives/2007/07/involuntary_reb_12.php) remarkably lightly, losing very little data and some time; it's taken me just over 24 hours to restore and get everything back into working order. Another reminder that [ZFS](http://www.wincent.com/knowledge-base/ZFS) can't come soon enough; fortunately the lesson that you can't really entrust your data to an HFS+ volume was much less painful compared to [last time](http://www.wincent.com/a/about/wincent/weblog/archives/2006/05/involuntary_reb_1.php) (where I wasted literally days trying to get out of kernel panic hell, and eventually decided to sell my machine and migrate to the humble iMac).

I've escaped fairly lightly because of my obsessive backup and data integrity practices:

-   Burn a daily backup of your entire home directory to DVD
-   Periodically send one of those backups offsite so that you'll be protected in the event of fire or theft
-   Mirror your entire startup volume to an external [FireWire](http://www.wincent.com/knowledge-base/FireWire) disk once per day with [SuperDuper!](http://www.wincent.com/knowledge-base/SuperDuper!)
-   Automount the external volume when starting the backup and automatically unmount it once finished so as to keep the disk offline and out of harm's way in the event that an operating system bug should start to wreak havoc with your available filesystems
-   Store your source code in a [version control system](http://www.wincent.com/knowledge-base/version%20control%20system), and have at least one remote repository that mirrors or serves as a central check-in point for your local changes
-   Keep your machine as close to a vanilla install as possible
-   Be conservative and patient; if your machine starts to misbehave try to do a preemptive reboot rather than an [involuntary one](http://www.wincent.com/a/about/wincent/weblog/archives/involuntary_reboot_log/)
-   If you do have to do a hard reset, always run Disk First Aid to try and catch problems early on
-   Get a good [UPS](http://www.wincent.com/knowledge-base/UPS) to protect your machine from power outages
-   Leave your machine running all the time if you can rather than turning it off at night (most hard drive failures occur when drives are being powered up from cold)
-   Use HFS+ with journalling enabled (even though it's probably about as much protection as a film of cheap cling wrap)

SuperDuper! really saved the day here, and it only really needs to save your butt *once* in order to justify its $27.95 price tag. For some reason [Apple](http://www.wincent.com/knowledge-base/Apple)'s Disk Utility couldn't restore from my backup volume when booted from the [Mac OS X](http://www.wincent.com/knowledge-base/Mac%20OS%20X) install disc, and when booted from my clone it was still painfully, impossibly slow. SuperDuper!, on the other hand, maintained a perfect bootable clone of my disk and was then able to perform the reverse operation (copying from the clone back to the original) relatively quickly and without any of the degradation that you would expect from what is now a "second generation" copy. My only complaint with SuperDuper! is the! darn! exclamation! point! at! the! end! of it's! name!

But still, I did lose *some* work. Only a little, but every little bit hurts. This was because at the time my daily backup would normally have run I was booted in [Leopard](http://www.wincent.com/knowledge-base/Leopard) and so it never took place; I had to restore from a backup copy that was made a little over 24 hours before, instead of only 3 or 4.

So I've decided to crank my backup obsession up yet another notch. I have a spare partition on my external disk; only 22 gig but enough to hold about four compressed copies of my home directory (all the really big stuff, things like music and the like is stored outside of my home directory; the single biggest thing is my `~/Library/Mail/` folder which clocks in at around 6 or 7 gig). So I've just whipped together [another backup script](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/2007/07/add_home_directory_backup_scri.php) which will perform an *additional* 4 complete backups of my home directory each day.

This is run automatically from a cron job so there's no risk of forgetting. Errors, if any, will be sent to me by mail. The actual backup is run using `nice -n 20` so doesn't slow the machine down at all. Now my backups are nicely distributed across time: home directory backups at 9 AM, 3 PM, 9 PM, 3 AM; full startup volume backup at 11:30 AM; home directory backup to DVD every evening; and in progress works pushed out to remote [Git](http://www.wincent.com/knowledge-base/Git) repositories [many times per day](http://www.wincent.com/a/about/wincent/weblog/svn-log/).

So, this has been an annoyance but it hasn't really hurt me. Still, looking forward to the day when I can throw a large number of cheap IDE disks into a fileserver, format it with ZFS and store my home directory on it. I'll still do obsessive backups, but it will be nice to think that a single disk can fail without knocking me out for 24 hours.
