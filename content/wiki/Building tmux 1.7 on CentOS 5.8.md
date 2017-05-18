---
tags: tmux wiki
cache_breaker: 1
---

My initial naïve attempt at this didn't work, nor did the tip provided in [this gist](https://gist.github.com/sturadnidge/4185338). Finally, I (mostly) followed the recipe found [here](http://simon.heimlicher.com/articles/2012/10/19/compile-tmux-on-rhel-5), which installs static versions of both the libevent and ncurses libraries:

```shell
$ wget https://github.com/downloads/libevent/libevent/libevent-2.0.21-stable.tar.gz
$ tar xzvf libevent-2.0.21-stable.tar.gz
$ cd libevent-2.0.21-stable
$ ./configure --disable-shared --enable-static --prefix=$HOME
$ make && make install
$ cd ..
$ wget http://ftp.gnu.org/pub/gnu/ncurses/ncurses-5.9.tar.gz
$ tar xzvf ncurses-5.9.tar.gz
$ cd ncurses-5.9
$ ./configure --disable-shared --enable-static --prefix=$HOME
$ make && make install
$ cd ..
$ wget http://downloads.sourceforge.net/tmux/tmux-1.7.tar.gz
$ tar xzf tmux-1.7.tar.gz
$ cd tmux-1.7
$ PKG_CONFIG_PATH=$HOME/lib/pkgconfig CFLAGS="-I$HOME/include -I$HOME/include/ncurses" LDFLAGS="-L$HOME/lib" ./configure --enable-static --prefix=$HOME
$ make && make install
```

# See also

-   [Building tmux 1.7 on OS X 10.8 Mountain Lion](/wiki/Building_tmux_1.7_on_OS_X_10.8_Mountain_Lion)
