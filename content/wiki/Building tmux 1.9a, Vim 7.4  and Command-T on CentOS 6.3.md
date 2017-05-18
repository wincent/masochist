---
tags: ruby python vim libevent command.t tmux centos redhat ncurses wiki
cache_breaker: 1
---

Historically, building [tmux](/wiki/tmux) on [CentOS](/wiki/CentOS) has been a pretty delicate subject, with specific requirements for each version.

This article shows steps that currently work, at least for me, to perform a clean install of:

-   tmux 1.9a
-   Vim 7.4 (including patches 1-192)
-   Ruby 2.1.1
-   Python 3.3.4
-   Command-T (current HEAD of the next branch)

on CentOS 6.3. These are the latest versions of each of the packages.

I have a couple of requirements:

1.  These all get installed in one's `$HOME` directory, which means that you won't clobber the system-installed versions of these things, and we don't need root privileges to install (other than a couple of prerequisites). Doing this requires statically-linking [tmux](/wiki/tmux) with ncurses and libevent, which makes things a little trickier.
2.  Vim needs both Ruby and Python in order to work with some key plug-ins that I use ([Command-T](/wiki/Command-T) needs [Ruby](/wiki/Ruby), for example, and UltiSnips and Gundo need Python)

The following notes assumed you've downloaded and unpacked the corresponding software package source into directories under `~/build` (and in the case of [Vim](/wiki/Vim), we use a clone of its upstream Mercurial repo, because Bram doesn't do point release between major versions; in the case of [Command-T](/wiki/Command-T), I'm using a [Pathogen](/wiki/Pathogen)-managed submodule at `~/.vim/bundle/command-t`).

```shell
$ cd build
$ sudo yum install gcc gcc-c++ glibc-static # this is the only bit you need root for
$ JOBS=32 # make it fast
```

# libevent

```shell
$ cd ~/build/libevent-2.0.21-stable
$ make clean; ./configure --disable-shared --enable-static --prefix=$HOME && make -j$JOBS install
```

# ncurses

```shell
$ cd ../ncurses-5.9
$ make clean; ./configure --disable-shared --enable-static --with-termlib --with-ticlib --prefix=$HOME && make -j$JOBS install
```

# Python

```shell
$ cd ../Python-3.3.4
$ make clean; ./configure --prefix=$HOME && make -j$JOBS install inclinstall && hash -r
```

# Ruby

```shell
$ cd ../ruby-2.1.1
$ make clean; ./configure --prefix=$HOME && make -j$JOBS install
```

# Command-T

```shell
$ cd ~/.vim/bundle/command-t/ruby/command-t
$ ruby extconf.rb && make
```

# tmux

```shell
$ cd ~/build/tmux-1.9a
make clean; env PKG_CONFIG_PATH=$HOME/lib/pkgconfig CPPFLAGS="-I$HOME/include -I$HOME/include/ncurses" CFLAGS="-I$HOME/include -I$HOME/include/ncurses" LDFLAGS="-L$HOME/lib" ./configure --enable-static --prefix=$HOME && make -j$JOBS install
```

# Vim

```shell
$ cd ../vim
$ hg pull && hg update
$ make clean distclean; env LDFLAGS=-L$HOME/lib ./configure --with-features=huge --enable-rubyinterp --enable-python3interp --enable-cscope --disable-nls --prefix=$HOME --with-python-config-dir=$HOME/lib/python3.3/config-3.3m && make -j$JOBS install
```

# Notes

I use `make clean; [command]` rather than `make clean && [command]` above because if this is the first time you've built the projects you might not actually have a `Makefile` present yet.
