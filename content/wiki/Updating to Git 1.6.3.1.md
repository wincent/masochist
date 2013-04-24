---
tags: leopard git updates
---

Notes made while updating to Git 1.6.3.1 on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.7:

    # working from a clone of the official upstream Git repo
    git fetch
    git tag -v v1.6.3.1

    # note: "git co" is an alias that I made for "git checkout"
    git co v1.6.3.1
    make clean
    make prefix=/usr/local test
    sudo make prefix=/usr/local install

    # inspect the changes in the Bash completion script and update it
    diff -u ~/.git-completion.sh contrib/completion/git-completion.bash

    # nothing to install this time, but if there was...
    [/tags/cp #cp] contrib/completion/git-completion.bash ~/.git-completion.sh

    # the pre-built man pages
    sudo make prefix=/usr/local quick-install-man

    # go back to the master branch rather than hanging around on a detached head
    git co master