---
tags: subversion apache.portable.runtime wiki
---

These notes were made during the upgrade from [Subversion](/wiki/Subversion) version 1.4.2 to the new version 1.4.3.

# Local upgrade

    # get and extract Subversion sources
    wget http://subversion.tigris.org/downloads/subversion-1.4.3.tar.bz2
    wget http://subversion.tigris.org/downloads/subversion-deps-1.4.3.tar.bz2
    tar xjvf subversion-1.4.3.tar.bz2
    tar xjvf subversion-deps-1.4.3.tar.bz2

    # get and extract latest version of Apache Portable Runtime (was 1.2.7, now 1.2.8 is available)
    wget http://apache.rediris.es/apr/apr-1.2.8.tar.bz2
    wget http://apache.rediris.es/apr/apr-util-1.2.8.tar.bz2
    tar xjvf apr-1.2.8.tar.bz2
    tar xjvf apr-util-1.2.8.tar.bz2

    # clean out old libraries
    sudo rm -f /usr/local/lib/libsvn*
    sudo rm -f /usr/local/lib/libapr*
    sudo rm -f /usr/local/lib/libexpat*
    sudo rm -f /usr/local/lib/libneon*

    # the APR build
    cd apr-1.2.8
    ./buildconf
    ./configure
    make && make check
    sudo make install
    cd ../apr-util-1.2.8
    ./buildconf --with-apr=../apr-1.2.8
    ./configure --with-apr=/usr/local/apr/bin/apr-1-config
    make

    # unfortunately, "make check" will fail unless you install first
    sudo make install
    make check

    # Subversion build
    cd ../subversion-1.4.3
    rm -r apr apr-util
    ./configure --with-apr=/usr/local/apr/bin/apr-1-config       \
                --with-apr-util=/usr/local/apr/bin/apu-1-config  \
                --disable-mod-activation                         \
                --with-ssl
    make && make check

Unfortunately, some lock-related tests failed:

    At least one test FAILED, checking /Users/wincent/trabajo/unversioned/subversion/subversion-1.4.3/tests.log
    FAIL:  lock_tests.py 1: lock a file and verify that it's locked
    FAIL:  lock_tests.py 2: commit a file and keep lock
    FAIL:  lock_tests.py 3: commit a file and release lock
    FAIL:  lock_tests.py 4: commit a locked file with a prop change
    FAIL:  lock_tests.py 5: lock a file and verify lock breaking behavior
    FAIL:  lock_tests.py 6: lock a file and verify lock stealing behavior
    FAIL:  lock_tests.py 7: examine the fields of a lockfile for correctness
    FAIL:  lock_tests.py 8: verify behavior when a lock in a wc is defunct
    FAIL:  lock_tests.py 9: verify svn:needs-lock read-only behavior
    FAIL:  lock_tests.py 10: verify svn:needs-lock behavior with defunct lock
    FAIL:  lock_tests.py 11: verify lock removal on a deleted path
    FAIL:  lock_tests.py 12: lock and unlock some files
    FAIL:  lock_tests.py 13: verify removal of a directory with locks inside
    FAIL:  lock_tests.py 14: verify status of lock in working copy
    FAIL:  lock_tests.py 15: verify status of stolen lock
    FAIL:  lock_tests.py 16: verify status of broken lock
    FAIL:  lock_tests.py 17: verify error on locking non-existent file
    FAIL:  lock_tests.py 18: lock an out-of-date file and ensure failure
    FAIL:  lock_tests.py 19: update handles svn:needs-lock correctly
    FAIL:  lock_tests.py 20: verify svn:needs-lock behavior with revert
    FAIL:  lock_tests.py 21: examine the fields of a lock from a URL
    FAIL:  lock_tests.py 22: lock/unlock several files in one go
    FAIL:  lock_tests.py 23: lock/unlock switched files
    FAIL:  lock_tests.py 24: lock and unlock a file with an URI-unsafe name
    FAIL:  lock_tests.py 25: svn:needs-lock and svn:executable, part I
    FAIL:  lock_tests.py 26: svn:needs-lock and svn:executable, part II
    FAIL:  lock_tests.py 27: commit file with xml-unsafe name and release lock
    FAIL:  lock_tests.py 28: verify info path@X or path -rY return repos lock
    FAIL:  lock_tests.py 29: (un)lock set of files, one already (un)locked
    FAIL:  lock_tests.py 30: show correct lock info on moved path
    FAIL:  lock_tests.py 31: ls locked path needing URL encoding
    FAIL:  lock_tests.py 32: veriy unlocking with wrong lock token
    FAIL:  lock_tests.py 33: verify recursive info shows lock info
    At least one test was SKIPPED, checking /Users/wincent/trabajo/unversioned/subversion/subversion-1.4.3/tests.log
    SKIP:  utf8_tests.py 1: conversion of paths and logs to/from utf8
    SKIP:  svnsync_tests.py 14: verify that unreadable content is not synced
    SKIP:  svnsync_tests.py 15: verify that copies from unreadable dirs work
    SKIP:  authz_tests.py 1: authz [/issues/2486 issue #2486] - open root
    SKIP:  authz_tests.py 2: authz [/issues/2486 issue #2486] - open directory
    SKIP:  authz_tests.py 3: broken authz files cause errors
    SKIP:  authz_tests.py 4: test authz for read operations
    SKIP:  authz_tests.py 5: test authz for write operations
    SKIP:  authz_tests.py 6: test authz for checkout
    SKIP:  authz_tests.py 7: test authz for log and tracing path changes
    SKIP:  authz_tests.py 8: test authz for checkout and update
    SKIP:  authz_tests.py 9: test authz for export with unreadable subfolder
    SKIP:  authz_tests.py 10: test the authz validation rules
    make: *** [check] Error 1

So tried again, this time renaming the [APR](/wiki/APR) source directories to their default values instead of relying on passing the `--with-apr` option to `buildconf`:

    make clean
    cd ..
    mv apr-1.2.8 apr
    mv apr-util-1.2.8 apr-util
    sudo rm -f /usr/local/lib/libapr*
    cd apr
    ./buildconf
    ./configure
    make && make check
    sudo make install
    cd ../apr-util
    ./buildconf
    ./configure --with-apr=/usr/local/apr/bin/apr-1-config
    make
    sudo make install
    make check
    cd ../subversion-1.4.3
    ./configure --with-apr=/usr/local/apr/bin/apr-1-config       \
                --with-apr-util=/usr/local/apr/bin/apu-1-config  \
                --disable-mod-activation                         \
                --with-ssl
    make && make check
    sudo make install

This time it worked, so the moral of the story is: don't rely on the `--with-apr` switch to `buildconf` on [Mac OS X](/wiki/Mac_OS_X), even though the same switch worked fine on [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux) (see below).

# Remote upgrade

    # run in a screen session in case we lose the connection
    screen

    # get and extract Subversion sources
    wget http://subversion.tigris.org/downloads/subversion-1.4.3.tar.bz2
    wget http://subversion.tigris.org/downloads/subversion-deps-1.4.3.tar.bz2
    tar xjvf subversion-1.4.3.tar.bz2
    tar xjvf subversion-deps-1.4.3.tar.bz2

    # get and extract latest version of Apache Portable Runtime (was 1.2.7, now 1.2.8 is available)
    wget http://apache.rediris.es/apr/apr-1.2.8.tar.bz2
    wget http://apache.rediris.es/apr/apr-util-1.2.8.tar.bz2
    tar xjvf apr-1.2.8.tar.bz2
    tar xjvf apr-util-1.2.8.tar.bz2

    # build the Apache Portable Runtime
    cd apr-1.2.8
    ./buildconf
    ./configure
    make && make check
    sudo make install
    cd ../apr-util-1.2.8
    ./buildconf --with-apr=../apr-1.2.8
    ./configure --with-apr=/usr/local/apr/bin/apr-1-config
    make && make check
    sudo make install

    # Subversion build
    cd ../subversion-1.4.3
    rm -r apr apr-util
    sudo chkconfig svn off
    sudo rm -f /usr/local/lib/libsvn*
    ./configure --with-apr=/usr/local/apr/bin/apr-1-config      \
                --with-apr-util=/usr/local/apr/bin/apu-1-config \
                --disable-mod-activation                        \
                --with-ssl
    make && make check
    sudo make install

    # re-open for business
    sudo chkconfig svn on
    netstat -anp | grep LISTEN | grep 3690
    exit

# See also

-   Change log: <http://svn.collab.net/repos/svn/tags/1.4.3/CHANGES>
-   Release notes: <http://subversion.tigris.org/svn_1.4_releasenotes.html>
-   Upgrade notes from other versions: [Subversion upgrades](/wiki/Subversion_upgrades).
-   [Installing Subversion 1.4.3 on Mac OS X Leopard](/wiki/Installing_Subversion_1.4.3_on_Mac_OS_X_Leopard)
