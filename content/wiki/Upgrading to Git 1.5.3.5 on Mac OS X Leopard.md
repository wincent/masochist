---
tags: leopard git updates os.x
cache_breaker: 1
---

These notes were made while upgrading to [Git 1.5.3.5](/wiki/Git_1.5.3.5) on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard), using a local clone of the central [Git](/wiki/Git) repository. I didn't perform the same upgrade on the server (which is still running [Git 1.5.3.2](/wiki/Git_1.5.3.2)) because none of the changes really benefit in that setting (not actively working from that machine; just using it to host a central repository).

    # get new stuff from upstream
    git fetch

    # check the signature on the tag
    git tag -v v1.5.3.5

    # switching working tree to 1.5.3.5
    git checkout v1.5.3.5

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
    wget http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.3.5.tar.bz2 \
         http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.3.5.tar.bz2.sign

    # verify
    gpg --verify git-manpages-1.5.3.5.tar.bz2.sign git-manpages-1.5.3.5.tar.bz2

    # install
    sudo tar xjv -C /usr/local/share/man -f git-manpages-1.5.3.5.tar.bz2
