---
tags: tmux centos wiki
cache_breaker: 1
---

Having done this for [tmux](/wiki/tmux) 1.7 in "[Building tmux 1.7 on CentOS 5.8](/wiki/Building_tmux_1.7_on_CentOS_5.8)", all that was required was:

```shell
$ wget http://downloads.sourceforge.net/tmux/tmux-1.8.tar.gz
$ tar xzf tmux-1.8.tar.gz
$ cd tmux-1.8
$ PKG_CONFIG_PATH=$HOME/lib/pkgconfig CFLAGS="-I$HOME/include -I$HOME/include/ncurses" LDFLAGS="-L$HOME/lib" ./configure --enable-static --prefix=$HOME
$ make && make install
```
