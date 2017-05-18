---
tags: subversion wiki
---

Notes made while installing Subversion 1.4.0 (client-side only) on my development machine:

    curl -O http://subversion.tigris.org/downloads/subversion-1.4.0.tar.bz2
    mkdir trabajo/subversion
    mv subversion-* trabajo/subversion/
    cd trabajo/subversion/ 
    tar xjvf subversion-1.4.0.tar.bz2
    cd subversion-1.4.0
    sh ./autogen.sh && ./configure && make
    make check
    sudo make install

Note that this is a basically install (no HTTP or HTTPS support) because my initial attempt at building with the dependencies ran off the rails due to errors. Supported access schemes:

    * ra_svn : Module for accessing a repository using the svn network protocol.
      - handles 'svn' scheme
    * ra_local : Module for accessing a repository on local disk.
      - handles 'file' scheme

For this reason I'm not overwriting the standard (1.3.2) install:

    * ra_dav : Module for accessing a repository via WebDAV (DeltaV) protocol.
      - handles 'http' scheme
      - handles 'https' scheme
    * ra_svn : Module for accessing a repository using the svn network protocol.
      - handles 'svn' scheme
    * ra_local : Module for accessing a repository on local disk.
      - handles 'file' scheme
