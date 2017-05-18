---
tags: vim wiki
cache_breaker: 1
---

# Getting the source

You can get the source from this [Git](/wiki/Git) mirror of the upstream Mercurial repo:

-   <https://github.com/b4winckler/vim>

(kindly provided by Björn Winckler, maintainer of [MacVim](/wiki/MacVim))

# Building

In this example, I check out the HEAD of the current master branch (which is usually pretty solid/stable), build, and install into my home directory:

```shell
$ cd vim.git
$ git checkout master
$ git pull
$ ./configure --with-features=huge --enable-rubyinterp --enable-pythoninterp --enable-cscope --disable-nls --prefix=$HOME
$ make install
```

# Linking against a specific version of Python

## Python 3.3

```shell
$ wget http://www.python.org/ftp/python/3.3.3/Python-3.3.3.tgz
$ tar xzvf Python-3.3.3.tgz
$ cd Python-3.3.3
$ ./configure --prefix=$HOME
$ make && make install && inclinstall # install headers, otherwise Vim won't have Python support
$ hash -r
```

And explicitly tell Vim to link against it:

```shell
$ cd vim.git
$ make clean distclean # make sure no cached reference to system Vim is hanging around
$ ./configure --with-features=huge --enable-rubyinterp --enable-pythoninterp --enable-cscope --disable-nls --prefix=$HOME --with-python-config-dir=$HOME/lib/python3.3/config-3.3m
$ make install
```

## Python 2.7.3

```shell
$ wget http://python.org/ftp/python/2.7.3/Python-2.7.3.tar.bz2
$ tar xjvf Python-2.7.3.tar.bz2 
$ cd Python-2.7.3
$ ./configure --prefix=$HOME
$ make && make install && inclinstall # install headers, otherwise Vim won't have Python support
$ hash -r
```

And explicitly tell Vim to link against it:

```shell
$ cd vim.git
$ make clean distclean # make sure no cached reference to system Vim is hanging around
$ ./configure --with-features=huge --enable-rubyinterp --enable-pythoninterp --enable-cscope --disable-nls --prefix=$HOME --with-python-config-dir=$HOME/lib/python2.7/config
$ make install
```

# See also

-   [Building MacVim from source](/wiki/Building_MacVim_from_source)
