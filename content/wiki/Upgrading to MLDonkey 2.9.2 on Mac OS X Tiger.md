---
tags: mldonkey updates wiki
cache_breaker: 1
---

These notes were made while upgrading to [MLDonkey 2.9.2](/wiki/MLDonkey_2.9.2) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger).

# Building and installing

    wget "http://switch.dl.sourceforge.net/sourceforge/mldonkey/mldonkey-2.9.2.tar.bz2"
    tar xjvf mldonkey-2.9.2.tar.bz2 
    cd mldonkey-2.9.2
    ./configure && make
    sudo make install

# Testing

To make sure things work first run `mlnet`:

    mlnet

You can then test using the web interface (connect to: <http://localhost:4080/>) or via [telnet](/wiki/telnet):

    telnet localhost 4000
