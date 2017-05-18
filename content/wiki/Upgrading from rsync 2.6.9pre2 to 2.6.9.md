---
tags: rsync wiki
---

Notes made in the upgrade from [rsync](/wiki/rsync) 2.6.9pre2 to 2.6.9:

    wget http://rsync.samba.org/ftp/rsync/rsync-2.6.9.tar.gz
    tar zxvf rsync-2.6.9.tar.gz
    cd rsync-2.6.9
    ./configure && make
    sudo make check
    sudo make install

I then did a test remote backup using my `rsync-backup.sh` script and everything is confirmed to be working.

# See also

-   Release notes: <http://rsync.samba.org/ftp/rsync/rsync-2.6.9-NEWS>
-   Manual pages:
    -   <http://rsync.samba.org/ftp/rsync/rsync.html>
    -   <http://rsync.samba.org/ftp/rsync/rsyncd.conf.html>
