---
tags: git updates snow.leopard wiki
cache_breaker: 1
---

# Local update

Notes made while performing the update to [Git 1.6.6.1](/wiki/Git_1.6.6.1) on my local [Mac OS X](/wiki/Mac_OS_X) 10.6.1 [Snow Leopard](/wiki/Snow_Leopard) install.

    # start off in local clone of official upstream Git repo
    git fetch

    # verify the tag
    git tag -v v1.6.6.1

    # note that "co" is a shorthand alias I have configured for "checkout"
    git co v1.6.6.1

    # proceed with the build
    make clean
    make prefix=/usr/local test
    sudo make prefix=/usr/local install
    sudo make prefix=/usr/local quick-install-man

    # check for changes in the Bash completion script and install it
    diff -u ~/.git-completion.sh contrib/completion/git-completion.bash 
    cp contrib/completion/git-completion.bash ~/.git-completion.sh 

    # go back to master branch rather than hanging around on detached HEAD
    git co master

# Remote update

I didn't perform a remote update for this release. For an example of such an update see "[Updating to Git 1.6.6](/wiki/Updating_to_Git_1.6.6)".
