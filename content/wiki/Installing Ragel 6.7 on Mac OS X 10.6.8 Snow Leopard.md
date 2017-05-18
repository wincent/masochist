---
tags: ragel snow.leopard os.x wiki
---

```shell
$ curl -O http://www.complang.org/ragel/ragel-6.7.tar.gz -O http://www.complang.org/ragel/ragel-6.7.tar.gz.asc
$ gpg --verify ragel-6.7.tar.gz.asc 
$ tar xzf ragel-6.7.tar.gz 
$ cd ragel-6.7
$ ./configure
$ make && make test
$ (cd test && ./runtests)
$ sudo make install
```
