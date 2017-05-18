---
title: mds crashes
tags: blog
---

Yesterday I started getting crash notifications for the `mds` (Spotlight) daemon that runs with root privileges on Mac OS X. These would occur every few minutes. Either some new file that I'd downloaded in the past 24 hours was causing Spotlight to choke, or some aspect of my Spotlight database was corrupt.

When the crashes didn't go away I decided to blow away my Spotlight index and hope that everything goes back to normal. So just now I've rebooted into single-user mode (holding Command-S while booting), done an `/sbin/fsck -fy` and a `/sbin/mount -uw /`, and finally a `rm -rf /.Spotlight-V100` and an `rm mds-crash-state`.

Now I've rebooted and Spotlight is indexing my drives. Fingers crossed that this eliminates the crashes. If not I'll have to throw away every file added to the drive within the last 48 hours.
