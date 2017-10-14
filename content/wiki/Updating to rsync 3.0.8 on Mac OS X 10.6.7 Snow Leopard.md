---
tags: rsync snow.leopard macos wiki
---

```shell
$ curl -O http://rsync.samba.org/ftp/rsync/src/rsync-3.0.8.tar.gz
$ curl -O http://rsync.samba.org/ftp/rsync/src/rsync-3.0.8.tar.gz.asc
$ gpg --recv-keys 4B96A8C5
$ gpg --verify rsync-3.0.8.tar.gz.asc 
$ tar xzvf rsync-3.0.8.tar.gz 
$ cd rsync-3.0.8
$ ./configure
$ make
$ make check
$ sudo make install
```
