---
tags: leopard subversion wiki
---

wget http://subversion.tigris.org/downloads/subversion-1.4.3.tar.bz2
    wget http://subversion.tigris.org/downloads/subversion-deps-1.4.3.tar.bz2
    tar xjvf subversion-1.4.3.tar.bz2
    tar xjvf subversion-deps-1.4.3.tar.bz2
    wget http://apache.rediris.es/apr/apr-1.2.8.tar.bz2
    wget http://apache.rediris.es/apr/apr-util-1.2.8.tar.bz2
    tar xjvf apr-1.2.8.tar.bz2
    tar xjvf apr-util-1.2.8.tar.bz2
    rm -r subversion-1.4.3/apr
    rm -r subversion-1.4.3/apr-util
    mv apr-1.2.8 subversion-1.4.3/apr
    mv apr-util-1.2.8 subversion-1.4.3/apr-util
    cd subversion-1.4.3/apr
    ./buildconf
    ./configure
    make

This yields the following error:

    network_io/unix/sendrecv.c:965:2: error: [/tags/error #error] APR has detected sendfile on your system, but nobody has written a
    network_io/unix/sendrecv.c:966:2: error: [/tags/error #error] version of it for APR yet. To get past this, either write
    network_io/unix/sendrecv.c:967:2: error: [/tags/error #error] apr_socket_sendfile or change APR_HAS_SENDFILE in apr.h to 0.
    make[1]: *** [network_io/unix/sendrecv.lo] Error 1
    make: *** [all-recursive] Error 1

After changing `APR_HAS_SENDFILE` in `include/apr.h` to `0`:

    make
    make check
    sudo make install
    cd ../apr-util
    ./buildconf
    ./configure --with-apr=/usr/local/apr/bin/apr-1-config 
    make
    sudo make install
    make check
    cd ..
    ./configure --with-apr=/usr/local/apr/bin/apr-1-config --with-apr-util=/usr/local/apr/bin/apu-1-config --disable-mod-activation --with-ssl
    make
    make check
    sudo make install

    # bindings (for SVK)
    make swig-pl
    make check-swig-pl
    sudo make install-swig-pl
    make clean

I later rebuilt [Perl](/wiki/Perl) (see "[Building Perl 5.8.8 on Mac OS X Leopard](/wiki/Building_Perl_5.8.8_on_Mac_OS_X_Leopard)") and then decided to re-build the bindings, just in case they were in some way tied to the pre-existing [Perl](/wiki/Perl) install that came with the system. As I had previously executed `make clean` this required me to build [Subversion](/wiki/Subversion) once more. The basic plan is to do something like this:

    ./configure --with-apr=/usr/local/apr/bin/apr-1-config --with-apr-util=/usr/local/apr/bin/apu-1-config --disable-mod-activation --with-ssl
    make
    make swig-pl
    make check-swig-pl
    sudo make install-swig-pl
    make clean

However, all tests failed at the `make check-swig-pl` stage with error messages like this:

    #   Failed test 'use SVN::Repos;'
    #   at ../../../../../subversion/bindings/swig/perl/native/t/0use.t line 6.
    #     Tried to use 'SVN::Repos'.
    #     Error:  Can't locate loadable object for module SVN::_Repos in @INC (@INC contains: /Users/wincent/trabajo/unversioned/subversion/subversion-1.4.3/subversion/bindings/swig/perl/native/blib/lib /Users/wincent/trabajo/unversioned/subversion/subversion-1.4.3/subversion/bindings/swig/perl/native/blib/arch /usr/local/lib/perl5/5.8.8/darwin-2level /usr/local/lib/perl5/5.8.8 /usr/local/lib/perl5/site_perl/5.8.8/darwin-2level /usr/local/lib/perl5/site_perl/5.8.8 /usr/local/lib/perl5/site_perl .) at /Users/wincent/trabajo/unversioned/subversion/subversion-1.4.3/subversion/bindings/swig/perl/native/blib/lib/SVN/Base.pm line 59
    # BEGIN failed--compilation aborted at ../../../../../subversion/bindings/swig/perl/native/t/0use.t line 6.
    # Compilation failed in require at (eval 6) line 2.
    # BEGIN failed--compilation aborted at (eval 6) line 2.
    ../../../../../subversion/bindings/swig/perl/native/t/0use.............NOK 2

I tried:

    sudo make install
    make swig-pl
    make check-swig-pl

But got the same errors. `find / -name "*_Repos*"` yielded some entries of interest:

    /Library/Perl/5.8.8/darwin-thread-multi-2level/auto/SVN/_Repos
    /System/Library/Perl/Extras/5.8.8/darwin-thread-multi-2level/auto/SVN/_Repos

Using `find . -path "*swig*" | grep Repos` showed the corresponding path, not yet installed:

    ./subversion/bindings/swig/perl/native/Repos.pm

So I decided to force the install anyway:

    sudo make install-swig-pl

This installs, for example:

    /usr/local/lib/perl5/site_perl/5.8.8/darwin-2level/SVN/Repos.pm

But nothing matching `_Repos`.
