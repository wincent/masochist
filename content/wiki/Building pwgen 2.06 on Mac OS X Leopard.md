---
tags: leopard pwgen
---

    # get
    wget http://mesh.dl.sourceforge.net/sourceforge/pwgen/pwgen-2.06.tar.gz
    tar xzvf pwgen-2.06.tar.gz 
    cd pwgen-2.06

    # build
    ./configure
    make

    # see if it works
    ./pwgen
    ./pwgen -A0

    # install
    sudo make install
