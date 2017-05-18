---
tags: git updates wiki
---

As [Git 1.5.5.3](/wiki/Git_1.5.5.3) is a very minor update from 1.5.5.2 without much impact, I only installed it on my local machine running [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.2 and didn't bother with an update on my remote ([RHEL 5](/wiki/RHEL_5)) machine. See [Upgrading to Git 1.5.5.2](/wiki/Upgrading_to_Git_1.5.5.2) for an example of a more comprehensive upgrade, with info on setting up [Git](/wiki/Git) aliases, ensuring you have the correct documentation build chain, and updating your [Bash](/wiki/Bash) completion and [gitweb](/wiki/gitweb) installations.

    git fetch
    git st
    git tag -v v1.5.5.3
    git co v1.5.5.3
    make clean
    make prefix=/usr/local test doc && sudo make prefix=/usr/local install install-doc

**Note:** `git st` and `git co` are aliases for `git status` and `git checkout` respectively.
