---
tags: os.x wiki
---

# Rationale

I have an external [FireWire](/wiki/FireWire) drive for backup purposes. I don't want the volumes on that drive to mount automatically when I boot or log in to another account; I only want them to mount for the backup and then unmount afterwards.

# Procedure

Get a list of volumes/partitions:

    diskutil list

Get the UUID for the volumes you wish to prevent from mounting at boot time:

    diskutil info disk1s2
    diskutil info disk1s3
    diskutil info disk1s4

Appropriately tailor an `/etc/fstab` file; on my system (a clean Tiger install) the file did not exist so I had to create it with `sudo nano /etc/fstab`. The → symbol (right-pointing arrow) is used to indicate tabs:

    UUID=1BB919C3-37C8-3F05-956C-4F02BF380371    →none    →hfs    →rw,noauto
    UUID=F9B5FF01-E269-3BF2-BB1C-B61C4D204870    →none    →hfs    →rw,noauto
    UUID=D1B942E5-8192-371F-8A6C-236129D2394B    →none    →hfs    →rw,noauto

Apple is moving away from NetInfo and in Tiger it appears that it is not necessary to [load the configuration into NetInfo](http://www.macosxhints.com/article.php?story=20050805062520199) with `niload fstab / < /etc/fstab` or `niload -d fstab / < /etc/fstab`, nor [fiddle with directory services](http://lists.apple.com/archives/Darwinos-users/2004/Jan/msg00069.html).

This modification is made only to the startup disk (the internal drive). That means that it will have no effect if you boot from another partition (for example, a [Leopard](/wiki/Leopard) seed installed on one of the external partitions). The only potential problem with this approach is that if the internal drive ever fails and you try to boot from the clone (backup) partition it also will have the custom `fstab` file (it is a perfect copy of the original after all). The UUID will be unchanged and so the backup drive will have an `fstab` that tells it not to automount itself. That shouldn't be a problem, however, because by the time the `fstab` is read the drive is already mounted, so notions of automounting don't apply; in my own testing, booting from the internal drive works as expected (the external volumes are not mounted) and when booting from the clone it appears that the `fstab` is ignored in the case of the startup volume (not for the other volumes on the drive).

# See also

-   <http://www.macosxhints.com/article.php?story=20060930150059172&query=fstab>
-   <http://www.macosxhints.com/article.php?story=20050805062520199>
-   <http://developer.apple.com/documentation/Darwin/Reference/Manpages/man5/fstab.5.html>
