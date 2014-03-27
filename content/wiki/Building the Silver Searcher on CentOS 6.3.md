---
tags: centos silver.searcher
---

I had conflicting packages on this box, so the simple version didn't work:

```shell
$ cd the_silver_searcher # a pre-existing clone
$ sudo yum groupinstall 'Development Tools'
$ sudo yum install pcre-devel xz-devel # boom!
```

So, I built a statically-linked version, based on instructions in [this gist](https://gist.github.com/k-takata/5124445).

# Static PCRE

```shell
$ cd ~/build
$ wget http://iweb.dl.sourceforge.net/project/pcre/pcre/8.34/pcre-8.34.tar.bz2
$ tar xjf pcre-8.34.tar.bz2
$ cd pcre-8.34
$ ./configure --prefix=$HOME --disable-shared --enable-jit --enable-unicode-properties
$ make install # note: as it is static, you could get away without even installing it
```

# Static lzma

```shell
$ cd ..
$ wget http://tukaani.org/xz/xz-5.0.5.tar.bz2
$ tar xjf xz-5.0.5.tar.bz2
$ cd xz-5.0.5
$ ./configure --prefix=$HOME --disable-shared
$ make install # note: same...
```

# Static zlib

```shell
$ cd ..
$ wget http://hivelocity.dl.sourceforge.net/project/libpng/zlib/1.2.8/zlib-1.2.8.tar.gz
$ tar xzf zlib-1.2.8.tar.gz
$ cd zlib-1.2.8
$ ./configure --static --prefix=$HOME
$ make install
```

# The Silver Searcher itself

```shell
$ cd ../the_silver_searcher # back to the pre-existing checkout
$ aclocal && autoconf && autoheader && automake --add-missing
$ ./configure \
  PCRE_CFLAGS='-DPCRE_STATIC -I../pcre-8.34' \
  PCRE_LIBS='-static -L../pcre-8.34/.libs -lpcre' \
  LZMA_CFLAGS='-I../xz-5.0.5/src/liblzma/api' \
  LZMA_LIBS='-L../xz-5.0.5/src/liblzma/.libs -llzma' \
  LDFLAGS="-L$HOME/lib" \
  --prefix=$HOME
$ make install
```
