---
tags: subversion updates wiki
cache_breaker: 1
---

These notes were made while upgrading from [Subversion](/wiki/Subversion) 1.4.3 to [Subversion 1.4.4](/wiki/Subversion_1.4.4) on both [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger) and [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux).

# Local ([Mac OS X](/wiki/Mac_OS_X)) upgrade

    # get and extract Subversion sources
    wget http://subversion.tigris.org/downloads/subversion-1.4.4.tar.bz2

    # checksum should be: 1ba850187b3cedb3265850acf32341b7dbe4f945
    openssl sha1 subversion-1.4.4.tar.bz2

    wget http://subversion.tigris.org/downloads/subversion-deps-1.4.4.tar.bz2

    # checksum should be: 85f5ec38794f4350432c32dc581f4f9f898d171e
    openssl sha1 subversion-deps-1.4.4.tar.bz2

    tar xjvf subversion-1.4.4.tar.bz2 
    tar xjvf subversion-deps-1.4.4.tar.bz2 

    # ensure that Subversion uses the latest version of the Apache Portable Runtime
    wget http://ftp.udc.es/apache-dist/apr/apr-1.2.8.tar.bz2

    # verify checksum; should be: C5 73 F1 B3 04 69 91 A2  62 40 02 39 8B 07 8A D5
    md5 apr-1.2.8.tar.bz2 

    wget http://ftp.udc.es/apache-dist/apr/apr-util-1.2.8.tar.bz2

    # verify checksum; should be: B1 22 F3 5E E6 88 3A 21  6C D2 E7 D4 45 04 52 1E
    md5 apr-util-1.2.8.tar.bz2 

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

    # the Subversion build
    cd ../subversion-1.4.4
    rm -r apr apr-util
    ./configure --with-apr=/usr/local/apr/bin/apr-1-config \
                --with-apr-util=/usr/local/apr/bin/apu-1-config  \
                --disable-mod-activation \
                --with-ssl
    make && make check
    sudo make install

    # build Subversion Perl bindings (used by SVK)
    make swig-pl
    make check-swig-pl
    sudo make install-swig-pl

I was very pleased to see that the issues with APR that I encountered last time (see "[Subversion 1.4.3 upgrade](/wiki/Subversion_1.4.3_upgrade)") have now been resolved.

# Remote ([Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux)) upgrade

    # run in a screen session in case we lose the connection
    screen

    # get and extract Subversion sources
    wget http://subversion.tigris.org/downloads/subversion-1.4.4.tar.bz2

    # checksum should be: 1ba850187b3cedb3265850acf32341b7dbe4f945
    openssl sha1 subversion-1.4.4.tar.bz2

    wget http://subversion.tigris.org/downloads/subversion-deps-1.4.4.tar.bz2

    # checksum should be: 85f5ec38794f4350432c32dc581f4f9f898d171e
    openssl sha1 subversion-deps-1.4.4.tar.bz2

    tar xjvf subversion-1.4.4.tar.bz2
    tar xjvf subversion-deps-1.4.4.tar.bz2

    # ensure that Subversion uses the latest version of the Apache Portable Runtime
    wget http://ftp.udc.es/apache-dist/apr/apr-1.2.8.tar.bz2

    # verify checksum; should be: C5 73 F1 B3 04 69 91 A2  62 40 02 39 8B 07 8A D5
    openssl md5 apr-1.2.8.tar.bz2

    wget http://ftp.udc.es/apache-dist/apr/apr-util-1.2.8.tar.bz2

    # verify checksum; should be: B1 22 F3 5E E6 88 3A 21  6C D2 E7 D4 45 04 52 1E
    openssl md5 apr-util-1.2.8.tar.bz2

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
    cd ../subversion-1.4.4
    rm -r apr apr-util
    sudo chkconfig svn off
    sudo rm -f /usr/local/lib/libsvn*
    ./configure --with-apr=/usr/local/apr/bin/apr-1-config \
                --with-apr-util=/usr/local/apr/bin/apu-1-config \
                --disable-mod-activation \
                --with-ssl
    make && make check
    sudo make install

    # re-open for business
    sudo chkconfig svn on
    netstat -anp | grep LISTEN | grep 3690
    exit

In future upgrades I might run the `make check` phase using `nice`; the test suite is so resource intensive that it drove the [server load](/wiki/server_load) as high up as 20 thus causing temporary interruptions to the [SMTP](/wiki/SMTP) service ([sendmail](/wiki/sendmail) will reject connections whenever server load is above 12). The only downside to using `nice` is that the test suite will take longer to run (it already takes quite a long time; I'd say around 20 minutes at a guess).

## Rebuild notes

I later tried to build the [Perl](/wiki/Perl) bindings (for use with [Git](/wiki/Git), specifically with `git svnimport`) but all tests failed catastrophically. Searching revealed [this post](http://svn.haxx.se/users/archive-2006-12/0108.shtml) which seems to indicate a strange behaviour in the build process that requires `--enable-shared` to be passed to `configure` even though that is supposedly set by default.

So I changed back into the `subversion-1.4.4` directory (which was still present) and built as follows; note the use of the `nice` utility to reduce the impact on the [server load](/wiki/server_load):

    # insurance in case our SSH connection dies
    screen

    # clean up
    cd full_path_to_subversion_1_44_source_tree
    make clean
    rm -r apr apr-util

    # close shop
    sudo chkconfig svn off

    # build
    sudo rm -f /usr/local/lib/libsvn*
    ./configure --with-apr=/usr/local/apr/bin/apr-1-config \
                --with-apr-util=/usr/local/apr/bin/apu-1-config \
                --disable-mod-activation \
                --with-ssl \
                --enable-shared
    nice make
    time nice make check
    sudo make install

    # re-open for business
    sudo chkconfig svn on
    netstat -anp | grep LISTEN | grep 3690

    # now for the Perl bindings
    make swig-pl
    make check-swig-pl

The use of `nice` slowed down things considerably; the output of `time` for the `make check` phase was:

    real    45m38.582s
    user    2m37.700s
    sys     1m44.020s

But [server load](/wiki/server_load) was not as scandalously high as last time, although it was still much, much higher than I would like (I might try going all the way to a priority of 20 next time instead of going with the default 10; unfortunately the problem doesn't seem to be all that CPU-bound, there is probably some sort of filesystem or lock contention going on):

    # load averages at 10-minute intervals
    sar -Hqt         | \
     cut -f3,6 -d';' | \
     tr  ' ;' ',,'   | \
     cut -f2,3 -d ','

Output:

    10:10:01,0.05
    10:20:01,0.39
    10:30:01,0.10
    10:40:01,0.11
    10:50:01,0.14
    11:00:01,0.00
    11:10:01,0.27
    11:20:02,6.97
    11:30:01,1.98
    11:40:13,9.27
    11:50:05,10.35
    12:00:08,11.70

Unfortunately the [possible lead](http://svn.haxx.se/users/archive-2006-12/0108.shtml) on the [Subversion](/wiki/Subversion) [Perl](/wiki/Perl) bindings didn't work out, as `make check-swig-pl` still failed catastrophically with error messages such as these (small excerpt):

    ../../../../../subversion/bindings/swig/perl/native/t/8lock............Can't locate loadable object for module SVN::_Repos in @INC (@INC contains: /home/xxxx/work/subversion-1.4.4/subversion/bindings/swig/perl/native/blib/lib /home/xxxx/work/subversion-1.4.4/subversion/bindings/swig/perl/native/blib/arch /usr/lib/perl5/5.8.0/i386-linux-thread-multi /usr/lib/perl5/5.8.0/i386-linux-thread-multi /usr/lib/perl5/5.8.0 /usr/lib/perl5/site_perl/5.8.0/i386-linux-thread-multi /usr/lib/perl5/site_perl/5.8.0/i386-linux-thread-multi /usr/lib/perl5/site_perl/5.8.0 /usr/lib/perl5/site_perl/5.8.0/i386-linux-thread-multi /usr/lib/perl5/site_perl/5.8.0 /usr/lib/perl5/site_perl /usr/lib/perl5/vendor_perl/5.8.0/i386-linux-thread-multi /usr/lib/perl5/vendor_perl/5.8.0/i386-linux-thread-multi /usr/lib/perl5/vendor_perl/5.8.0 /usr/lib/perl5/vendor_perl/5.8.0/i386-linux-thread-multi /usr/lib/perl5/vendor_perl/5.8.0 /usr/lib/perl5/vendor_perl . /usr/lib/perl5/5.8.0/i386-linux-thread-multi /usr/lib/perl5/5.8.0 /usr/lib/perl5/site_perl/5.8.0/i386-linux-thread-multi /usr/lib/perl5/site_perl/5.8.0 /usr/lib/perl5/site_perl /usr/lib/perl5/vendor_perl/5.8.0/i386-linux-thread-multi /usr/lib/perl5/vendor_perl/5.8.0 /usr/lib/perl5/vendor_perl /usr/lib/perl5/5.8.0/i386-linux-thread-multi /usr/lib/perl5/5.8.0 .) at /home/xxxx/work/subversion-1.4.4/subversion/bindings/swig/perl/native/blib/lib/SVN/Base.pm line 59
    BEGIN failed--compilation aborted at /home/xxxx/work/subversion-1.4.4/subversion/bindings/swig/perl/native/blib/lib/SVN/Repos.pm line 5.
    Compilation failed in require at ../../../../../subversion/bindings/swig/perl/native/t/8lock.t line 7.
    # Looks like your test died before it could output anything.
    ../../../../../subversion/bindings/swig/perl/native/t/8lock............dubious
            Test returned status 255 (wstat 65280, 0xff00)
    DIED. FAILED tests 1-8
            Failed 8/8 tests, 0.00% okay
    Failed Test                               Stat Wstat Total Fail  List of Failed
    -------------------------------------------------------------------------------
    ../../../../../subversion/bindings/swig/p    6  1536     7    6  2-7
    ../../../../../subversion/bindings/swig/p  255 65280     6   12  1-6
    ../../../../../subversion/bindings/swig/p  255 65280    16   32  1-16
    ../../../../../subversion/bindings/swig/p  255 65280   117  228  2-3 5-117
    ../../../../../subversion/bindings/swig/p  255 65280     6   12  1-6
    ../../../../../subversion/bindings/swig/p  255 65280     2    4  1-2
    ../../../../../subversion/bindings/swig/p  255 65280     3    6  1-3
    ../../../../../subversion/bindings/swig/p  255 65280     7   14  1-7
    ../../../../../subversion/bindings/swig/p  255 65280     1    2  1
    ../../../../../subversion/bindings/swig/p  255 65280     8   16  1-8
    Failed 10/10 test scripts. 170/173 subtests failed.
    Files=10, Tests=173,  2 wallclock secs ( 1.48 cusr +  0.11 csys =  1.59 CPU)
    Failed 10/10 test programs. 170/173 subtests failed.
    make[1]: *** [test_dynamic] Error 255
    make[1]: Leaving directory `/home/xxxx/work/subversion-1.4.4/subversion/bindings/swig/perl/native'
    make: *** [check-swig-pl] Error 2

A couple of other posts ([1](http://svn.haxx.se/users/archive-2007-01/0712.shtml), [2](http://osdir.com/ml/version-control.svk.devel/2007-01/msg00089.html)) suggested that starting from scratch might solve things but alas it was not to be:

    Failed 1/10 test scripts. 2/173 subtests failed.
    Files=10, Tests=173,  9 wallclock secs ( 1.75 cusr +  0.11 csys =  1.86 CPU)
    Failed 1/10 test programs. 2/173 subtests failed.
