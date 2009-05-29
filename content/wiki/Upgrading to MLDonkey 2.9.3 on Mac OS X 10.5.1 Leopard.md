---
tags: mldonkey updates
cache_breaker: 1
---

These notes were made while upgrading to [MLDonkey 2.9.3](/wiki/MLDonkey_2.9.3) on [Mac OS X](/wiki/Mac_OS_X) 10.5.1 [Leopard](/wiki/Leopard).

# Building

    wget http://garr.dl.sourceforge.net/sourceforge/mldonkey/mldonkey-2.9.3.tar.bz2
    tar xjvf mldonkey-2.9.3.tar.bz2 
    cd mldonkey-2.9.3
    ./configure

Note that seeing as this is the first time I've tried to build [MLDonkey](/wiki/MLDonkey) on [Leopard](/wiki/Leopard), I received the following prompt during configuration:

    --------------------------------
         Checking Ocaml compiler.
    --------------------------------
    checking for ocamlc.opt... no
    checking for ocamlc... no
    checking for camlp4... no
    ********  Objective-Caml 3.10.1 is required  *********
    *******  Check http://caml.inria.fr/  ********
    Do you want this script to try to download and install ocaml
    LOCALLY in mldonkey directory ?
    y
    Downloading ...

When that is done (several minutes later):

    make

# Testing

To make sure things work first run `mlnet`:

    ./mlnet

You can then test using the web interface (connect to: <http://localhost:4080/>) or via [telnet](/wiki/telnet):

    telnet localhost 4000

# Installing

    sudo make install
