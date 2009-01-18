---
tags: ack
---

So I thought I'd give [Ack](/wiki/Ack) a try. I installed it manually rather than using [CPAN](/wiki/CPAN) because I like to do stuff like inspecting READMEs and what not when I unpack archives and chase up dependencies.

    mkdir ack
    cd ack
    wget http://search.cpan.org/CPAN/authors/id/P/PE/PETDANCE/ack-1.86.tar.gz
    tar xzvf ack-1.86.tar.gz 
    wget http://search.cpan.org/CPAN/authors/id/P/PE/PETDANCE/File-Next-1.02.tar.gz
    tar zxvf File-Next-1.02.tar.gz 
    cd File-Next-1.02
    perl Makefile.PL 
    make
    make test
    sudo make install
    cd ../ack-1.86/
    perl Makefile.PL 
    make
    make test
    sudo make install
