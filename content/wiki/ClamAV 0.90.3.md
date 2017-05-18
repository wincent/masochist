---
tags: clamav wiki
---

[ClamAV 0.90.3](/wiki/ClamAV_0.90.3) was released on 30 May 2007.

# Changes

-   libclamav/scanners.c: fix warning on AES encrypted zip archives (bb\#430)
-   fresclam/manager.c: add sanity check for %v (bb\#463)
-   libclamav/unrar/unrar.c: improve handling of corrupted/handcrafted headers (bb\#511, patch from Trog)
-   libclamav/unsp.c: fix end of buffer calculation (bb\#464, patch from aCaB)
-   libclamav/others.c: use strict permissions (0600) for temporary files created in cli\_gentempstream() (bb\#517). Reported by Christoph Probst.
-   libclamav/ole2\_extract.c: detect block list loop (bb\#466), patch from Trog
-   libclamav/phishcheck.c: bb \#497
-   libclamav/unrar/unrar.c: [Bug \#521](/issues/521), \#368
-   configure: handle FreeBSD 7.x
-   configure: fix compilation issues under FreeBSD 4.x and 5.x (bb\#455)
-   clamd/server-th.c: fix incorrect handling of SIGSEGV (bb\#504)
-   clamscan/manager.c: bb\#508 (Can't run clamscan as root)
-   libclamav/matcher-ac.c: fix segfault on OOM (bb\#515)
-   libclamav/pdf.c: Fix OOM, pointed out by TK
-   libclamav/others.c: Bug 520
-   libclamav/others.c: fix cli\_malloc() call in C\_WINDOWS (bb\#477)
-   libclamav/htmlnorm.c: fix uninitialized value warning
-   libclamav/htmlnorm.c: fix URL truncation
-   libclamav/matcher-ac.c: optimize memory allocation, patch from Anton Yuzhaninov
-   libclamav/mbox.c: Bug 366
-   libclamav/mbox.c: Fixed multi-byte char bug under Windows
-   libclamav/pdf.c: Bug 459

# See also

-   Official release notes: <http://sourceforge.net/project/shownotes.php?release_id=512356&group_id=86638>
-   Download: <http://sourceforge.net/project/showfiles.php?group_id=86638&package_id=90197>
