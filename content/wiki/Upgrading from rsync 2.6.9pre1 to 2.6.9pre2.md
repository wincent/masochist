---
tags: rsync wiki
---

Notes made in the upgrade from [rsync](/wiki/rsync) 2.6.9pre1 to 2.6.9pre2:

    wget "http://rsync.samba.org/ftp/rsync/rsync-2.6.9pre2.tar.gz"
    tar zxvf rsync-2.6.9pre2.tar.gz
    cd rsync-2.6.9pre2
    ./configure && make
    sudo make check
    sudo make install
