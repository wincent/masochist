---
tags: subversion wiki
---

# Options

There are two main ways of backing up a live [Subversion](/wiki/Subversion) repository:

1.  Using `svnadmin hotcopy`
2.   Using `svnadmin dump`

In both cases you should run `svnadmin` as the owner of the repository. I chose to go with the second option for two reasons:

1.  I can pipe the dumpfile through `bzip2` to compress it on the fly
2.  I can use the dumpfile with future versions of [Subversion](/wiki/Subversion)

# Disk usage

-   Repository size on disk: 65[MB](/wiki/MB)
-   Backup size on disk: 78[MB](/wiki/MB) (note that this is actual two backups, "today's" and "yesterday's", because the backup script keeps a copy of the previous dump file; so the actual size per backup is really about 39[MB](/wiki/MB)).
