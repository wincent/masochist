---
title: New backup disk
tags: backup blog
---

I used to have a pretty robust backup routine:

-   automated hourly backups of my home directory (tarred and gzipped to another volume)
-   automated daily backups of my startup volume to an external FireWire drive (via [SuperDuper!](/wiki/SuperDuper%21))
-   automated daily backups of my home directory (burnt to rewritable DVD)
-   multiple copies of source code in local and remote repositories

But this iMac that I'm currently using has proved to be very flakey. The internal hard disk failed twice requiring formatting and installing from backup. Its third failure was definitive; all of the contents were lost and now the drive won't even format. In all three cases [SuperDuper!](/wiki/SuperDuper%21) saved my butt. I can't sing its praises highly enough.

In any case, with my internal drive totally dead, for a while now I've had to use my external FireWire drive as my principal boot disk with no backup.

The optical disk failed too, requiring a replacement to be installed. Unfortunately the replacement caused lock-ups and kernel panics with [Leopard](/wiki/Leopard), so I had to stop doing the daily burns as well. Nowadays (with [Mac OS X](/wiki/Mac_OS_X) 10.5.7) I've occasionally done some trial burns without any problems so it's a procedure I will think about reinstituting.

Having had catastrophic hardware and filesystem failures on so many occasions, you can imagine how nervous I've felt without a very comprehensive backup scheme during this time. Basically all I've had is some source code redundancy due to having multiple local and remote [Git](/wiki/Git) repositories, and the hourly home directory snapshots (but they are just to another volume on the same physical disk).

Today I finally received an additional backup unit which I [ordered last week](/twitter/121). I've made two partitions and [SuperDuper!](/wiki/SuperDuper%21) is currently doing the initial backup of my startup volume onto one of those partitions. The other, larger partition will be used for additional backups. I'm going to set up some automated [rsync](/wiki/rsync) jobs so that I have some offsite backups of my server as well.
