---
tags: subversion wiki
---

These notes were made during the upgrade from [Subversion](/wiki/Subversion) version 1.3.2 to the new version 1.4.0.

# Upgrade of local install

These notes apply to the upgrade of the local (Mac OS X) install.

    wget http://subversion.tigris.org/downloads/subversion-deps-1.4.0.tar.bz2
    md5 subversion-deps-1.4.0.tar.bz2
    wget http://subversion.tigris.org/downloads/subversion-1.4.0.tar.bz2
    md5 subversion-1.4.0.tar.bz2
    tar xjvf subversion-1.4.0.tar.bz2
    tar xjvf subversion-deps-1.4.0.tar.bz2
    cd subversion-1.4.0
    sudo /usr/local/apache2/bin/apachectl stop
    sudo rm -f /usr/local/lib/libsvn*
    sudo rm -f /usr/local/lib/libapr*
    sudo rm -f /usr/local/lib/libexpat*
    sudo rm -f /usr/local/lib/libneon*

The changelog for APR 0.9.7 (`apr/CHANGES`) appears to suggest that the [`ac_cv_func_poll` workaround](http://subversion.tigris.org/faq.html#tiger-apr-0.9.6) is no longer necessary on Tiger:

      *) Fix issue with poll() followed by net I/O yielding EAGAIN on
         Mac OS 10.4 (Darwin 8). [Wilfredo Sanchez]

So we'll skip that, unlike [in previous upgrades](http://wincent.com/a/knowledge-base/archives/2006/04/subversion_131.php):

    sh ./autogen.sh
    ./configure
    make
    make check

Skipped tests:

    At least one test was SKIPPED, checking /Users/wincent/trabajo/subversion/subversion-1.4.0/tests.log
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

Continuing with the install:

    sudo make install
    svn --version
    sudo /usr/local/apache2/bin/apachectl start

Start-up fails with the following error:

    Syntax error on line 234 of /usr/local/apache2/conf/httpd.conf:
    Cannot load /usr/local/apache2/modules/mod_dav_svn.so into server:
    Library not loaded: /usr/local/lib/libsvn_subr-1.0.dylib\n
    Referenced from: /usr/local/apache2/modules/mod_dav_svn.so\n
    Reason: image not found

And indeed there is no `dylib` at the referenced location:

    lrwxr-xr-x     1 root  wheel  -      15 Sep 12 20:43 libsvn_subr-1@ -> libsvn_subr-1.0
    -rwxr-xr-x     1 root  wheel  -  537712 Sep 12 20:43 libsvn_subr-1.0*
    lrwxr-xr-x     1 root  wheel  -      15 Sep 12 20:43 libsvn_subr-1.0.0.0@ -> libsvn_subr-1.0
    -rw-r--r--     1 root  wheel  -  612588 Sep 12 20:43 libsvn_subr-1.a
    -rwxr-xr-x     1 root  wheel  -     963 Sep 12 20:43 libsvn_subr-1.la*

In fact, on further inspection, I see that no `libapr`, `libexpat` or `libneon` files were installed into `/usr/local/lib` at all. So onto a second attempt, this time explicitly setting the paths to the `apr`, `apr-util` and `neon` directories:

    make clean
    sudo rm -f /usr/local/lib/libsvn*
    sh ./autogen.sh
    ./configure --with-apr=./apr --with-apr-util=./apr-util --with-neon=./neon

But this warning was produced:

    ==================================================================
    WARNING: skipping the build of mod_dav_svn
             --with-apxs or --with-apache must be used
    ==================================================================

So tried again explicitly specifying the path to `apxs`:

    ./configure --with-apr=./apr --with-apr-util=./apr-util --with-neon=./neon \
                     --with-apxs=/usr/sbin/apxs

And got this error:

    checking for Apache module support via DSO through APXS...
    configure: error: no - APXS refers to an old version of Apache
                         Unable to locate /usr/include/httpd/mod_dav.h

So it appears that I need to rebuild Apache as well:

    cd ../..
    mkdir httpd
    cd httpd
    wget http://apache.rediris.es/httpd/httpd-2.0.59.tar.bz2
    tar xjvf httpd-2.0.59.tar.bz2
    cd httpd-2.0.59
    ./configure --with-apr=../../subversion/subversion-1.4.0/apr \
                --with-apr-util=../../subversion/subversion-1.4.0/apr-util \
                --with-ssl --enable-dav --enable-so --prefix=/usr/local/apache2
    make

Fails with this error:

    libtool: link: cannot find the library
    `/Users/wincent/trabajo/subversion/subversion-1.4.0/apr-util/libaprutil-0.la'
    make[2]: *** [htpasswd] Error 1
    make[1]: *** [all-recursive] Error 1
    make: *** [all-recursive] Error 1

So try building `libapr` and `libaprutil` manually before building Apache:

    cd ../../subversion/subversion-1.4.0/apr
    ./configure
    make
    make check
    cd ../apr-util
    ./buildconf --with-apr=../apr
    ./configure --with-apr=../apr
    make
    make check

The `make check` of `apr-util` ran many of the test successfully but then appeared to hang at this line indefinitely and had to be interrupted (Control-C) after a lengthy wait (15 minutes or more):

    Yes 1219606855000000 Sun, 24 Aug 2008 19:40:55 GMT

While we're at it, may as well try building `libneon` and installing everything as well:

    cd ../neon
    ./configure --with-ssl
    make
    make check

Unfortunately not all tests pass:

    27. write_reset........... FAIL (write got -3 not reset: Broken pipe)
    <- summary for `socket': of 34 tests run: 33 passed, 1 failed. 97.1%
    FAILURE
    make[1]: *** [check] Error 1
    make: *** [check] Error 2

But we'll install anyway ([Google search result 1](http://www.lyra.org/pipermail/neon/2005-October/002093.html), [Google search result 2](http://www.lyra.org/pipermail/neon/2004-December/001831.html), [Google search result 3](http://140.123.103.42/cgi-bin/dwww?type=file&location=/usr/share/doc/libneon23/BUGS), [Google search result 4](https://summersoft.fay.ar.us/repos/svnrpms/neon/tags/neon-0.23.2-1/neon/BUGS)):

    sudo make install
    cd ../apr
    sudo make install

But I see that this installs the libraries into `/usr/local/apr/lib`, not the desired location:

    make clean
    ./configure --libdir=/usr/local/lib
    make
    make check
    sudo make install
    cd ../apr-util
    make clean
    ./buildconf --with-apr=../apr
    ./configure --with-apr=../apr
    make
    make check

Hung again during testing but proceeded with the install anyway:

    sudo make install

Now back to Apache:

    cd ../../../httpd/httpd-2.0.59
    ./configure --with-apr=../../subversion/subversion-1.4.0/apr \
                --with-apr-util=../../subversion/subversion-1.4.0/apr-util \
                --with-ssl --enable-dav --enable-so --prefix=/usr/local/apache2
    make
    sudo make install

Now back to Subversion:

    cd ../../subversion/subversion-1.4.0
    make clean
    sh ./autogen.sh
    ./configure
    make
    make check
    sudo make install
    svn --version
    sudo /usr/local/apache2/bin/apachectl start

Startup again fails with pretty much the same error message:

    Syntax error on line 234 of /usr/local/apache2/conf/httpd.conf:
    Cannot load /usr/local/apache2/modules/mod_dav_svn.so into server: 
    Library not loaded: /usr/local/lib/libsvn_subr-1.0.dylib\n  
    Referenced from: /usr/local/apache2/modules/mod_dav_svn.so\n  
    Reason: image not found

I notice that the modification date on the `mod_dav_svn.so` module is quite old, only a couple of days [after 1.3.2](http://subversion.tigris.org/project_status.html) came out. It is as though the 1.4.0 installation is failing to install an updated module:

    -rwxr-xr-x    1 root     wheel    -  33952 Jun  2 04:19 mod_authz_svn.so*
    -rwxr-xr-x    1 root     wheel    - 455340 Jun  2 04:19 mod_dav_svn.so*

As a next step I downloaded the alternate archives (tar.gz), expanded them, and performed a [diff](/wiki/diff) against the other archives (expanded from the tar.bz files), and confirmed that there were no differences.

I suspect that the root cause of all my woes is that the system-installed `apxs` (at `/usr/sbin/apxs`) is being picked up by the build process instead of the correct (Apache 2) one at `/usr/local/apache2/bin/apxs`. In one of my attempts above I tried explicitly passing `--with-apxs` but I used `whereis` to grab the path, causing the wrong one to be used that time as well.

Will try again, this time pulling in Apache via Subversion:

    svn co http://svn.apache.org/repos/asf/httpd/httpd/branches/2.0.x httpd-2.0
    cd httpd-2.0/srclib
    svn co http://svn.apache.org/repos/asf/apr/apr/branches/0.9.x apr
    svn co http://svn.apache.org/repos/asf/apr/apr-util/branches/0.9.x apr-util
    cd ..
    ./buildconf
     ./configure --enable-dav --enable-so
    make
    sudo make install
    cd ../../subversion/subversion-1.4.0
    ./configure --with-apxs=/usr/local/apache2/bin/apxs

The output from `configure` indicates that Subversion will use the `apr` and `apr-util` libraries from within the source tree, but these correspond to 0.9.12, not the 0.9.13 version I just checked out and built with Apache:

      setting APRUTIL_EXPORT_LIBS to "/Users/wincent/trabajo/subversion/subversion-1.4.0/apr-util/xml/expat/lib/libexpat.la"
      setting APRUTIL_INCLUDES to "-I/Users/wincent/trabajo/subversion/subversion-1.4.0/apr-util/xml/expat/lib"
      setting APRUTIL_LDFLAGS to "-L/Users/wincent/trabajo/subversion/subversion-1.4.0/apr-util/xml/expat/lib"
      setting APRUTIL_LIBS to "/Users/wincent/trabajo/subversion/subversion-1.4.0/apr-util/xml/expat/lib/libexpat.la"

So I am going to try again removing the subdirectories and explicitly setting the paths to those libraries:

    make clean
    rm -rf apr apr-util neon
    sudo rm -f /usr/local/lib/libsvn*
    sudo rm -f /usr/local/lib/libapr*
    sudo rm -f /usr/local/lib/libexpat*
    sh autogen.sh 
    ./configure --with-apxs=/usr/local/apache2/bin/apxs \
                --with-apr=/usr/local/apache2/bin/apr-config \
                --with-apr-util=/usr/local/apache2/bin/apu-config \
                --with-neon=/usr/local/bin/neon-config

Interestingly, `configure` complains that an appropriate version of `neon` cannot be found:

    configure: checking neon library

    An appropriate version of neon could not be found, so libsvn_ra_dav
    will not be built.  If you want to build libsvn_ra_dav, please either
    install neon 0.25.5 on this system

    or

    get neon 0.25.5 from:
        http://www.webdav.org/neon/neon-0.25.5.tar.gz
    unpack the archive using tar/gunzip and rename the resulting
    directory from ./neon-0.25.5/ to ./neon/

    no suitable neon found

Nevertheless, such a version is installed (it was built previously):

     /usr/local/bin/neon-config --version
    neon 0.25.5

Trying again; it seems that unlike the `--with-apr` and `--with-apr-util` options, the `--with-neon` option only wants a prefix, not the full path to the config tool:

    make clean
    sh autogen.sh
    ./configure --with-apxs=/usr/local/apache2/bin/apxs \
                --with-apr=/usr/local/apache2/bin/apr-config \
                --with-apr-util=/usr/local/apache2/bin/apu-config \
                --with-neon=/usr/local
    make && make check
    sudo make install
    sudo /usr/local/apache2/bin/apachectl start

Looks as though I should have passed `--disable-mod-activation` ("Do not enable mod\_dav\_svn in httpd.conf") to `configure`:

    [Wed Sep 13 14:11:05 2006] [warn] module dav_svn_module is already loaded, skipping
    [Wed Sep 13 14:11:05 2006] [warn] module authz_svn_module is already loaded, skipping

Will have to edit `httpd.conf` by handle to remove the duplicate.

So in all the upgrade to 1.4.0 proved to be one the nastiest, messiest Subversion installs yet. In the [many, many Subversion upgrades I've done in recent years](http://www.google.com/search?client=safari&rls=es&q=site:wincent.com+subversion&ie=UTF-8&oe=UTF-8) I don't remember ever having had problems with `apxs` like I did this time (turns out that I avoided these problems [last time](http://wincent.com/a/knowledge-base/archives/2006/06/intel_imac_setu.php) but I'd forgotten about that). Perhaps some devilish changes were made to my `PATH` since the last time that caused all this difficulty.

## Update, October 2006

I've just discovered while trying to do a checkout from an HTTPS server that this build did not end up including HTTPS support despite the fact that I built Neon with the SSL option. Back to the old drawing board. Output of `svn --version`:

    svn, version 1.4.0 (r21228)
       compiled Sep 13 2006, 13:38:13

    Copyright (C) 2000-2006 CollabNet.
    Subversion is open source software, see http://subversion.tigris.org/
    This product includes software developed by CollabNet (http://www.Collab.Net/).

    The following repository access (RA) modules are available:

    * ra_dav : Module for accessing a repository via WebDAV (DeltaV) protocol.
      - handles 'http' scheme
    * ra_svn : Module for accessing a repository using the svn network protocol.
      - handles 'svn' scheme
    * ra_local : Module for accessing a repository on local disk.
      - handles 'file' scheme

# Remote install

These notes apply to the upgrade performed on the remote (Red Hat) server.

    screen
    wget http://subversion.tigris.org/downloads/subversion-deps-1.4.0.tar.bz2
    wget http://subversion.tigris.org/downloads/subversion-1.4.0.tar.bz2
    tar xjvf subversion-1.4.0.tar.bz2
    tar xjvf subversion-deps-1.4.0.tar.bz2
    cd subversion-1.4.0
    sudo chkconfig svn off   
    sudo rm -f /usr/local/lib/libsvn*
    sh ./autogen.sh

Some warnings were printed which indicate to me that I should probably update my local copy of `apr` and `apr-util`; for example:

    buildcheck: local copy of find_apr.m4 does not match APR's copy.
                An updated copy of find_apr.m4 may need to be checked in.
    buildcheck: local copy of PrintPath does not match APR's copy.
                An updated copy of PrintPath may need to be checked in.
    buildcheck: local copy of find_apu.m4 does not match APRUTIL's copy.
                An updated copy of find_apu.m4 may need to be checked in.

I am using quite old versions: 0.9.4 as part of the standard Red Hat distribution, and 0.9.7 (I presume built and installed in `/usr/local/` as part of the previous Subversion install):

    $ apr-config --version
    0.9.4
    $ apu-config --version
    0.9.4
    $ /usr/local/apr/bin/apr-config --version
    0.9.7
    $ /usr/local/apr/bin/apu-config --version
    0.9.7

I am going to take the opportunity to update and force Subversion to use the new versions; unfortunately because I deleted my Subversion libraries in a previous step I have to bootstrap first and built another working copy of Subversion so that I can check out the `apr` and `apr-util` sources:

    cd ..
    rm -rf subversion-1.4.0
    tar xjvf subversion-1.4.0.tar.bz2
    tar xjvf subversion-deps-1.4.0.tar.bz2
    cd subversion-1.4.0
    sh ./autogen.sh
    ./configure && make && make check
    ./subversion/svn/svn co http://svn.apache.org/repos/asf/apr/apr/branches/0.9.x apr-new
    ./subversion/svn/svn co http://svn.apache.org/repos/asf/apr/apr-util/branches/0.9.x apr-util-new
    rm -rf apr apr-util
    mv apr-new apr
    mv apr-util-new apr-util
    cd apr
    ./buildconf
    ./configure
    make
    make check
    sudo make install
    cd ../apr-util
    ./buildconf
    ./configure --with-apr=/usr/local/apr/bin/apr-config
    make
    make check
    sudo make install
    cd ..
    make clean
    sh autogen.sh
    ./configure --with-apr=/usr/local/apr/bin/apr-config \
                --with-apr-util=/usr/local/apr/bin/apu-config \
                --with-neon=/usr/local
    make
    make check
    sudo make install

Now comment out these lines added to `/etc/httpd/conf/httpd.conf` (once again should probably have used the `--disable-mod-activation` option):

    #LoadModule dav_svn_module     /usr/lib/httpd/modules/mod_dav_svn.so
    [/tags/LoadModule #LoadModule] authz_svn_module   /usr/lib/httpd/modules/mod_authz_svn.so

Load and dump:

    sudo -s
    cd /var/lib/svn
    mv repositories old-repositories
    mkdir repositories
    chmod 700 repositories
    chown svn:svn repositories
    sudo -u svn svnadmin dump old-repositories/project-name > project-name.dump
    sudo -u svn svnadmin create repositories/project-name
    cp old-repositories/project-name/conf/svnserve.conf \
       repositories/project-name/conf/svnserve.conf
    cp old-repositories/project-name/conf/passwd \
       repositories/project-name/conf/passwd
    chmod 600 repositories/project-name/conf/passwd
    sudo -u svn svnadmin load repositories/project-name < project-name.dump
    exit

Repository size approximately halved as a result of the dump/load cycle using the new version:

    du -sh old-repositories
    14M     old-repositories
    du -sh repositories
    7.1M    repositories

Re-open for business:

    sudo chkconfig svn on
    netstat -anp | grep LISTEN | grep 3690
    exit

# Notes for future upgrades

Given that I've been working on a post-commit hook script written in [Ruby](/wiki/Ruby) I think that the next time I upgrade [Subversion](/wiki/Subversion) I will also build [SWIG](/wiki/SWIG) and the Ruby bindings. For more information see:

-   <http://www.pjhyett.com/articles/2005/10/25/installing-ruby-svn-bindings>
-   <http://svn.collab.net/repos/svn/trunk/subversion/bindings/swig/INSTALL>
