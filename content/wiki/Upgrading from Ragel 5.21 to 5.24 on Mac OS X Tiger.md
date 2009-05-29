---
tags: tiger ragel updates
cache_breaker: 1
---

    wget http://www.cs.queensu.ca/~thurston/ragel/ragel-5.24.tar.gz http://www.cs.queensu.ca/~thurston/ragel/ragel-5.24.tar.gz.asc
    gpg --verify ragel-5.24.tar.gz.asc ragel-5.24.tar.gz
    tar xzvf ragel-5.24.tar.gz
    cd ragel-5.24/
    ./configure
    make
    cd test/
    ./runtests 
    cd ..
    sudo make install

Note that in order to verify the signature you will require the public key:

    wget http://www.cs.queensu.ca/home/thurston/thurston.asc
    gpg --import thurston.asc

Now trying out the new build on a sample input file:

    wget http://www.cs.queensu.ca/~thurston/ragel/examples/rlscan.rl
    ragel rlscan.rl | rlgen-cd -G2
