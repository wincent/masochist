---
tags: git updates
---

Notes made while updating to [Git 1.6.2.4](/wiki/Git_1.6.2.4) on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.6:

    # working from a clone of the official upstream Git repo
    git fetch
    git tag -v v1.6.2.4

    # note: "git co" is an alias that I made for "git checkout"
    git co v1.6.2.4
    make clean
    make prefix=/usr/local test
    sudo make prefix=/usr/local install
    cp contrib/completion/git-completion.bash ~/.git-completion.sh
    sudo make prefix=/usr/local quick-install-man

    # go back to the master branch rather than hanging around on a detached head
    git co master