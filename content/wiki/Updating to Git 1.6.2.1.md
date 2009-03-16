---
tags: git updates
---

Notes made while updating to [Git 1.6.2.1](/wiki/Git_1.6.2.1) on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.6 using a local clone of the upstream official Git repo:

    # basic install
    git fetch
    git tag -v v1.6.2.1

    # note: "git co" is an alias that I made for "git checkout"
    git co v1.6.2.1
    make clean
    make prefix=/usr/local test
    sudo make prefix=/usr/local install
    cp contrib/completion/git-completion.bash ~/.git-completion.sh

    # go back to the master branch rather than hanging around on a detached head
    git co master

    # maintaining the documentation build tool chain is a pain,
    # so just download and install the prebuilt manpages
    wget http://www.kernel.org/pub/software/scm/git/git-manpages-1.6.2.1.tar.bz2 \
         http://www.kernel.org/pub/software/scm/git/git-manpages-1.6.2.1.tar.bz2.sign
    gpg --verify git-manpages-1.6.2.1.tar.bz2.sign git-manpages-1.6.2.1.tar.bz2
    sudo tar xjv -C /usr/local/man -f git-manpages-1.6.2.1.tar.bz2
