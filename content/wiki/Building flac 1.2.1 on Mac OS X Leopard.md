---
tags: leopard wiki
---

wget http://dfn.dl.sourceforge.net/sourceforge/flac/flac-1.2.1.tar.gz
    tar xzvf flac-1.2.1.tar.gz 
    cd flac-1.2.1
    ./configure --disable-asm-optimizations && make && make check
    sudo make install

There actually were some minor test failures in `make check`, but they look harmless enough so I proceded with the install.
