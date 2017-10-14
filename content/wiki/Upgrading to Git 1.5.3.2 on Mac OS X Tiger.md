---
tags: tiger git updates macos wiki
cache_breaker: 1
---

These notes were made while upgrading to [Git 1.5.3.2](/wiki/Git_1.5.3.2) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger), using a local clone of the central [Git](/wiki/Git) repository.

For notes on upgrading to 1.5.3.2 from the tarball, see "[Upgrading to Git 1.5.3.2 on Red Hat Enterprise Linux](/wiki/Upgrading_to_Git_1.5.3.2_on_Red_Hat_Enterprise_Linux)".

    # get new stuff from upstream
    git fetch

    # check the signature on the tag
    git tag -v v1.5.3.2

    # switching working tree to 1.5.3.2
    git checkout v1.5.3.2

    # clean up any cruft that might be lying around
    make clean

    # build
    make prefix=/usr/local all

    # run tests
    make prefix=/usr/local test

    # install
    sudo make prefix=/usr/local install

# Installing the documentation

As before I didn't bother building the documentation myself -- it just takes too long; instead I just downloaded and installed it:

    # get man pages
    cd ..
    wget http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.3.2.tar.bz2 \
         http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.3.2.tar.bz2.sign

    # verify
    gpg --verify git-manpages-1.5.3.2.tar.bz2.sign git-manpages-1.5.3.2.tar.bz2

    # install
    cd /usr/local/man
    sudo tar xjvf full_path_to_manpages_archive/git-manpages-1.5.3.2.tar.bz2
