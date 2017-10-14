---
tags: python macos wiki
cache_breaker: 1
---

wget http://www.python.org/ftp/python/2.5/Python-2.5.tar.bz2
    tar xjvf Python-2.5.tar.bz2 
    cd Python-2.5/
    ./configure
    make
    make test
    make test
    sudo make install

Strangely, `whereis python` reports the older installed version 2.3.5 (in `/usr/bin/`) instead of the new version (in `/usr/local/bin/`) even though `/usr/local/bin/` appears before `/usr/bin/` in the `PATH` environment variable. Typing `python` launches version 2.3.5; typing `env python` launches 2.5. (Update: when opening new console windows typing `python` actually does launch 2.5.)
