---
tags: mldonkey tiger updates
cache_breaker: 1
---

These notes were made while performing the upgrade to [mldonkey 2.8.7](/wiki/mldonkey_2.8.7) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger).

    wget "http://puzzle.dl.sourceforge.net/sourceforge/mldonkey/mldonkey-2.8.7.tar.bz2"
    tar xjvf mldonkey-2.8.7.tar.bz2 
    cd mldonkey-2.8.7
    ./configure && make && sudo make install

# Running

    /usr/local/bin/mlnet

# Using the web interface

Connect to: <http://localhost:4080/>

# Using the [telnet](/wiki/telnet) interface

    telnet localhost 4000
