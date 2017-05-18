---
tags: snow.leopard lighttpd wiki
---

I installed [lighttpd](/wiki/lighttpd) because it was the path of least resistance to getting `git instaweb` working (and it [used to work](http://macsamurai.blogspot.com/2009/04/git-instaweb-on-mac-os-x.html) without any custom setup, but [got broken back in May 2010](http://stackoverflow.com/questions/3398245/why-cant-i-use-webrick-with-git-instaweb-on-mac-os-x), although there [is a fix on the way](http://lists-archives.org/git/725092-instaweb-fix-and-improve-webrick-support.html) which will hopefully make it into a released version of [Git](/wiki/Git) soon).

```shell
$ wget http://download.lighttpd.net/lighttpd/releases-1.4.x/lighttpd-1.4.28.tar.gz
$ tar xzvf lighttpd-1.4.28.tar.gz 
$ cd lighttpd-1.4.28
$ ./configure 
$ make
$ make install
$ sudo make install
```

And voila, `git instaweb` now just works!
