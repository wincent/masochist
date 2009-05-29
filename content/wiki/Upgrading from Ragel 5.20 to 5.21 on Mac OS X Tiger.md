---
tags: tiger ragel updates
cache_breaker: 1
---

These notes were made while installing [Ragel 5.21](/wiki/Ragel_5.21) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger).

# Prerequisites

As noted in "[Installing Ragel 5.2.0 on Mac OS X Tiger](/wiki/Installing_Ragel_5.2.0_on_Mac_OS_X_Tiger)", in order to build [Ragel](/wiki/Ragel) from [Subversion](/wiki/Subversion) you need to have [Kelbt](/wiki/Kelbt) installed. Alternatively, you can build using the tarball.

# Upgrading [Kelbt](/wiki/Kelbt)

[Kelbt](/wiki/Kelbt) (by [Ragel](/wiki/Ragel)'s author) is used when building from [Subversion](/wiki/Subversion). A new version, [Kelbt 0.12](/wiki/Kelbt_0.12), was available; for more information see "[Installing Kelbt 0.12 on Mac OS X Tiger](/wiki/Installing_Kelbt_0.12_on_Mac_OS_X_Tiger)".

# Installation using the tarball

I tried to install via [Subversion](/wiki/Subversion):

    svn co svn://mambo.cs.queensu.ca/ragel/tags/ragel-5.21

But the server was down, so I fell back to using the tarball instead:

    wget 'http://www.cs.queensu.ca/~thurston/ragel/ragel-5.21.tar.gz'
    tar xzvf ragel-5.21.tar.gz 
    cd ragel-5.21/
    ./configure 
    make
    cd test
    ./runtests 
    cd ..
    sudo make install
