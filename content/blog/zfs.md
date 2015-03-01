---
title: ZFS
tags: zfs os.x
---

Just looked back over some words I wrote in 2007 (emphasis added):

> [Apple](/wiki/Apple) currently (with [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger)) provides a journaled filesystem in the form of HFS+, but I have had multiple catastrophic failures of HFS+ volumes, both when used independently and when configured as a software RAID, so I cannot recommend HFS+ for use with any data that you aren't prepared to throw away. HFS+ is effectively a "throwaway filesystem".
>
> In [Leopard](/wiki/Leopard) Apple will support [ZFS](/wiki/ZFS) which is a revolutionary filesystem developed by [Sun](/wiki/Sun). It supports journaling, advanced RAID, and unparalleled data integrity verification and self-repair. [Apple](/wiki/Apple) has publicly stated that ZFS support will be read-only at first, but **we can definitely hope for and look forward to read/write access and bootability from ZFS in the future.**

Still sad about this, and still mostly unimpressed with HFS+, although Apple *has* made some nice improvements in the form of [Core Storage](http://en.wikipedia.org/wiki/Core_Storage) and a much-improved, whole-disk [File Vault](/wiki/File_Vault) implementation.

Will we ever see ZFS or anything comparable on OS X? It's pretty clearly the world's best desktop operating system, but in filesystems it feels like it lags behind.
