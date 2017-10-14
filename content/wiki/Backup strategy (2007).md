---
tags: macos wiki
---

# First lines of defense (pre-backup)

## Software RAID

## Journaled filesystem

[Apple](/wiki/Apple) currently (with [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger)) provides a journaled filesystem in the form of HFS+, but I have had multiple catastrophic failures of HFS+ volumes, both when used independently and when configured as a software RAID, so I cannot recommend HFS+ for use with any data that you aren't prepared to throw away. HFS+ is effectively a "throwaway filesystem".

In [Leopard](/wiki/Leopard) Apple will support [ZFS](/wiki/ZFS) which is a revolutionary filesystem developed by [Sun](/wiki/Sun). It supports journaling, advanced RAID, and unparalleled data integrity verification and self-repair. [Apple](/wiki/Apple) has publicly stated that ZFS support will be read-only at first, but we can definitely hope for and look forward to read/write access and bootability from ZFS in the future.

## Uninterruptable Power Supply (UPS)

# Daily backup of home directory to DVD+RW

# Four-times-daily backup of home directory to external volume

# Nightly backup of startup disk to external FireWire volume

I use [SuperDuper!](/wiki/SuperDuper%21) to perform a daily, bootable backup of my entire startup volume to an external [FireWire](/wiki/FireWire) volume.

# Failure scenarios

## Damage to specific files or folders

## Primary drive failure

## Backup drive failure

## DVD corruption

## Failure of primary *and* backup drives

## Theft

Encryption

## Fire, flood or other disaster

# See also

## Backup products

-   <http://www.shirt-pocket.com/SuperDuper/SuperDuperDescription.html>

## Apple command line documentation

-   <http://developer.apple.com/macosx/backuponmacosx.html>

## Other people's backup strategies

-   <http://matt.makalumedia.com/archives/000833.html>
-   <http://mjtsai.com/blog/2005/05/24/my-new-backup-strategy/>

## Local links

-   An article about my new backup strategy as of July 2007: <http://www.wincent.com/a/about/wincent/weblog/archives/2007/07/new_backup_regi.php>

# See also

-   [Backup strategy](/wiki/Backup_strategy)
