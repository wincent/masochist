---
tags: leopard ragel updates wiki
cache_breaker: 1
---

These notes were made while upgrading from [Ragel 5.24](/wiki/Ragel_5.24) to [Ragel 6.0](/wiki/Ragel_6.0) on [Mac OS X](/wiki/Mac_OS_X) 10.5.1 [Leopard](/wiki/Leopard).

    # get the latest version
    wget http://www.cs.queensu.ca/~thurston/ragel/ragel-6.0.tar.gz \
         http://www.cs.queensu.ca/~thurston/ragel/ragel-6.0.tar.gz.asc

    # verify download: see note below about the required public key
    gpg --verify ragel-6.0.tar.gz.asc ragel-6.0.tar.gz

    # extract
    tar xzvf ragel-6.0.tar.gz
    cd ragel-6.0

    # build
    ./configure
    make

    # test
    cd test/
    ./runtests

Unlike in [Tiger](/wiki/Tiger), one of the tests fails on [Leopard](/wiki/Leopard):

    running cond6 ... passed
    ../ragel/ragel -C -n -T0 -o cppscan1.cpp cppscan1.rl
    g++ -pedantic -ansi -Wall -O3 -o cppscan1.bin cppscan1.cpp
    In file included from cppscan1.rl:7:
    cppscan1.h:5:20: error: malloc.h: No such file or directory

To make it pass we make a minor change to the `cppscan1.h` file:

    --- cppscan1.h.old	2008-01-31 00:10:00.000000000 +0100
    +++ cppscan1.h	2008-01-30 23:58:36.000000000 +0100
    @@ -2,7 +2,7 @@
     [/tags/define #define] _CPPSCAN1_H
     
     [/tags/include #include] <iostream>
    -#include <malloc.h>
    +#include <malloc/malloc.h>
     [/tags/include #include] <string.h>
     
     using namespace std;

Now we can proceed with the install:

    cd ..
    sudo make install

Note that in order to verify the signature you will require the public key:

    wget http://www.cs.queensu.ca/home/thurston/thurston.asc
    gpg --import thurston.asc

Now trying out the new build on a sample input file:

    wget http://www.cs.queensu.ca/~thurston/ragel/examples/rlscan.rl
    ragel rlscan.rl

Note that this has changed from how things were under 5.24:

    ragel rlscan.rl | rlgen-cd -G2
