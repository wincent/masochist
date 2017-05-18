---
tags: snow.leopard haproxy wiki
---

```shell
$ curl -O http://haproxy.1wt.eu/download/1.3/src/haproxy-1.3.20.tar.gz
$ curl http://haproxy.1wt.eu/download/1.3/src/haproxy-1.3.20.tar.gz.md5
$ openssl md5 haproxy-1.3.20.tar.gz 
$ tar xzvf haproxy-1.3.20.tar.gz 
$ cd haproxy-1.3.20
$ make
$ make TARGET=generic
$ sudo make install
```
