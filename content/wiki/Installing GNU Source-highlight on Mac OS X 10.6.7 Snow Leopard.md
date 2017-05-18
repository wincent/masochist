---
tags: snow.leopard source.highlight os.x wiki
---

After downloading [Boost](http://www.boost.org/):

```shell
$ tar xjvf boost_1_46_1.tar.bz2
$ cd boost_1_46_1
$ ./bootstrap.sh
$ ./bjam
$ sudo ./bjam install
$ cd ..
$ curl -O http://mirrors.kernel.org/gnu/src-highlite/source-highlight-3.1.tar.gz.sig
$ curl -O http://mirrors.kernel.org/gnu/src-highlite/source-highlight-3.1.tar.gz
$ gpg --recv-keys 9E629EAC
$ gpg --verify source-highlight-3.1.tar.gz.sig
$ tar xzvf source-highlight-3.1.tar.gz
$ cd source-highlight-3.1
$ ./configure 
$ make
$ sudo make install
```

Testing it out with [less](/wiki/less)"

```shell
$ LESSOPEN='| /usr/local/bin/src-hilite-lesspipe.sh %s' less -R /usr/local/bin/src-hilite-lesspipe.sh
```
