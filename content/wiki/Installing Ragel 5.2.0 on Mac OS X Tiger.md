---
tags: tiger ragel wiki
---

-   Get link to latest source code from: <http://www.cs.queensu.ca/~thurston/ragel/>

<!-- -->

    wget http://www.cs.queensu.ca/~thurston/ragel/ragel-5.20.tar.gz
    tar xzvf ragel-5.20.tar.gz
    cd ragel-5.20

-   Or checkout via [Subversion](/wiki/Subversion):

<!-- -->

    svn co svn://mambo.cs.queensu.ca/ragel/tags/ragel-5.20
    cd ragel-5.20

**NOTE:** The first time you install [Ragel](/wiki/Ragel) you must use the tarball distribution or `./configure` will fail with:

    error: ragel is required to build the parsers

This is because of the following differences between the tarball and the [Subversion](/wiki/Subversion) version:

    1258c1258
    < BUILD_PARSERS=false
    ---
    > BUILD_PARSERS=true
    diff ragel-5.20/configure.in svn/configure.in
    27c27
    < AC_SUBST(BUILD_PARSERS,false)
    ---
    > AC_SUBST(BUILD_PARSERS,true)

Likewise you need [Kelbt](/wiki/Kelbt): <http://www.cs.queensu.ca/~thurston/kelbt/>

    wget http://www.cs.queensu.ca/~thurston/kelbt/kelbt-0.11.tar.gz
    tar kelbt-0.11.tar.gz
    ./configure
    make 
    cd tests
    ./runtests
    cd ..
    sudo install kelbt/kelbt /usr/local/bin/

-   Build:

<!-- -->

    ./configure
    make
    cd tests
    ./runtests
    cd ..
    sudo make install
