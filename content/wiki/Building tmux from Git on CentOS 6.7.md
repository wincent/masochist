---
tags: libevent tmux centos redhat ncurses wiki
---

Notes from my latest foray:

```
JOBS=32
sudo yum install automake glibc-static
wget https://github.com/libevent/libevent/releases/download/release-2.0.22-stable/libevent-2.0.22-stable.tar.gz
tar xzf libevent-2.0.22-stable.tar.gz
cd libevent-2.0.22-stable
./configure --disable-shared --enable-static --prefix=$HOME && make -j$JOBS install
cd ..
wget http://ftp.gnu.org/gnu/ncurses/ncurses-6.0.tar.gz
cd ncurses-6.0
./configure --disable-shared --enable-static --with-termlib --with-ticlib --prefix=$HOME --with-pkg-config-libdir=$HOME/lib/pkgconfig --enable-pc-files && make -j$JOBS install
cd ..
git clone https://github.com/tmux/tmux.git
cd tmux
sh autogen.sh
env PKG_CONFIG_PATH=$HOME/lib/pkgconfig CPPFLAGS="-I$HOME/include -I$HOME/include/ncurses" CFLAGS="-I$HOME/include -I$HOME/include/ncurses" LDFLAGS="-L$HOME/lib" ./configure --enable-static --prefix=$HOME && make -j$JOBS install
```

Observations:

- Updated to ncurses 6.0 (last time was 5.9).
- Updated to libevent 2.0.22 (last time was 2.0.21).
- tmux failed to find ncurses until I built the latter with explicit `--enable-pc-files` and `--with-pkg-config-libdir`.
