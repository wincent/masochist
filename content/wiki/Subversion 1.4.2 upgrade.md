---
tags: subversion wiki
---

These notes were made during the upgrade from [Subversion](/wiki/Subversion) version 1.4.0 to the new version 1.4.2.

# Upgrade of local install

    # get and extract sources
    wget http://subversion.tigris.org/downloads/subversion-1.4.2.tar.bz2
    wget http://subversion.tigris.org/downloads/subversion-deps-1.4.2.tar.bz2
    tar xjvf subversion-1.4.2.tar.bz2
    tar xjvf subversion-deps-1.4.2.tar.bz2
    cd subversion-1.4.2

    # remove old copies of installed libraries
    sudo rm -f /usr/local/lib/libsvn*
    sudo rm -f /usr/local/lib/libapr*
    sudo rm -f /usr/local/lib/libexpat*
    sudo rm -f /usr/local/lib/libneon*

    # build, test, install
    ./configure --with-ssl 
    make
    make check
    sudo make install

On running, get this error:

    $ svn --version
    dyld: Library not loaded: /usr/local/apr/lib/libaprutil-0.0.dylib
      Referenced from: /usr/local/bin/svn
      Reason: image not found
    Trace/BPT trap

I think from now on I am going to build statically linked copies of Subversion.

    sudo rm -f /usr/local/lib/libsvn*
    sudo rm -f /usr/local/lib/libapr*
    sudo rm -f /usr/local/lib/libexpat*
    sudo rm -f /usr/local/lib/libneon*
    make clean
    ./configure --enable-all-static --with-ssl
    make
    make check

That didn't work, looks like `--enable-all-static` is not enough; lots of [libtool](/wiki/libtool) warnings printed during the build:

    libtool: link: warning: complete static linking is impossible in this configuration

And many test failures in the `make check`. Evidently it will be necessary to manually perform static builds for the dependent libraries prior to proceeding with the build.

I've uploaded the scripts I used to perform the static build here:

-   <http://wincent.com/gpl/svn-1.4.2/intel/svn-mac-build.zip>

These are modifications of the scripts by D.J. Hagberg who maintains static builds of Subversion for various platforms.

The resulting static builds work, but I wanted to get my non-static build working as well:

    cd ..
    wget http://mirrors.hostalia.com/apache/apr/apr-1.2.7.tar.bz2
    tar xjvf apr-1.2.7.tar.bz2
    mv apr-1.2.7 apr
    cd apr
    ./buildconf && ./configure && make && make check
    sudo make install
    cd ..
    wget http://mirrors.hostalia.com/apache/apr/apr-util-1.2.7.tar.bz2
    tar xjvf apr-util-1.2.7.tar.bz2
    mv apr-util-1.2.7 apr-util
    cd apr-util
    ./buildconf
    ./configure --with-apr=/usr/local/apr/bin/apr-1-config
    make

    # for some reason, make check will fail unless you install first
    sudo make install
    make check
    cd ..
    rm -rf apr apr-util

    # clean out subversion and start again
    rm -rf subversion-1.4.2
    tar xjvf subversion-1.4.2.tar.bz2 
    tar xjvf subversion-deps-1.4.2.tar.bz2 
    cd subversion-1.4.2
    rm -r apr apr-util
    ./configure --with-apr=/usr/local/apr/bin/apr-1-config       \
                --with-apr-util=/usr/local/apr/bin/apu-1-config  \
                --disable-mod-activation                         \
                --with-ssl
    make && make check
    sudo make install

# Upgrade of remote install

    # run in a screen session in case we lose the connection
    screen

    # get apr source see http://apr.apache.org/download.cgi for your local mirror
    wget http://mirrors.hostalia.com/apache/apr/apr-1.2.7.tar.bz2
    tar xjvf apr-1.2.7.tar.bz2

    # rename directory because apr-util will later look for source in "apr"
    mv apr-1.2.7 apr
    cd apr

    # the actual apr build
    ./buildconf
    ./configure
    make
    make check
    sudo make install
    cd ..

    # now for apr-util
    wget http://mirrors.hostalia.com/apache/apr/apr-util-1.2.7.tar.bz2
    tar xjvf apr-util-1.2.7.tar.bz2
    mv apr-util-1.2.7 apr-util
    cd apr-util
    ./buildconf
    ./configure --with-apr=/usr/local/apr/bin/apr-1-config
    make
    make check
    sudo make install
    cd ..
    rm -rf apr apr-util

    # now for Subversion
    wget http://subversion.tigris.org/downloads/subversion-1.4.2.tar.bz2
    wget http://subversion.tigris.org/downloads/subversion-deps-1.4.2.tar.bz2
    tar xjvf subversion-1.4.2.tar.bz2
    tar xjvf subversion-deps-1.4.2.tar.bz2
    cd subversion-1.4.2

    # just in case, to be sure that Subversion uses the just-built apr and apr-util
    rm -r apr apr-util

    # the actual build
    sudo chkconfig svn off
    sudo rm -f /usr/local/lib/libsvn*
    ./configure --with-apr=/usr/local/apr/bin/apr-1-config      \
                --with-apr-util=/usr/local/apr/bin/apu-1-config \
                --disable-mod-activation                        \
                --with-ssl
    make
    make check
    sudo make install

    # re-open for business
    sudo chkconfig svn on
    netstat -anp | grep LISTEN | grep 3690
    exit

# See also

-   Release notes: <http://subversion.tigris.org/svn_1.4_releasenotes.html>
-   Change log: <http://svn.collab.net/repos/svn/tags/1.4.2/CHANGES>
