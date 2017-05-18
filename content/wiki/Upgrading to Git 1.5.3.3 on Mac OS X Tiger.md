---
tags: tiger git updates os.x wiki
cache_breaker: 1
---

These notes were made while upgrading to [Git 1.5.3.3](/wiki/Git_1.5.3.3) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger), using a local clone of the central [Git](/wiki/Git) repository.

    # get new stuff from upstream
    git fetch

    # check the signature on the tag
    git tag -v v1.5.3.3

    # switching working tree to 1.5.3.3
    git checkout v1.5.3.3

    # clean up any cruft that might be lying around
    make clean

    # build
    make prefix=/usr/local all

    # run tests
    make prefix=/usr/local test

    # install
    sudo make prefix=/usr/local install

    # get man pages
    cd ..
    wget http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.3.3.tar.bz2 \
         http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.3.3.tar.bz2.sign

    # verify
    gpg --verify git-manpages-1.5.3.3.tar.bz2.sign git-manpages-1.5.3.3.tar.bz2

    # install
    sudo tar xjv -C /usr/local/man -f git-manpages-1.5.3.3.tar.bz2
