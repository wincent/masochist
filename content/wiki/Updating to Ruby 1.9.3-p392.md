---
tags: ruby wiki
---

```shell
$ wget http://ftp.ruby-lang.org/pub/ruby/1.9/ruby-1.9.3-p392.tar.gz
$ openssl md5 ruby-1.9.3-p392.tar.gz 
$ tar xzf ruby-1.9.3-p392.tar.gz 
$ cd ruby-1.9.3-p392
$ nice ./configure --prefix=/usr && nice make
$ sudo make install
```
