---
tags: leopard git updates os.x
cache_breaker: 1
---

These notes were made while upgrading to [Git 1.5.4-rc5](/wiki/Git_1.5.4-rc5) on [Mac OS X](/wiki/Mac_OS_X) 10.5.1 [Leopard](/wiki/Leopard), using a local clone of the central [Git](/wiki/Git) repository. I didn't perform the same upgrade on the server.

    # get new stuff from upstream
    git fetch

    # check the signature on the tag
    git tag -v v1.5.4-rc5

    # switching working tree to v1.5.4-rc5
    git checkout v1.5.4-rc5

    # clean up any cruft that might be lying around
    make clean

    # build, run tests, and generate docs
    make prefix=/usr/local test doc

    # install
    sudo make prefix=/usr/local install install-doc

In order to build the docs you need the documentation toolchain in place; see "[Setting up the Git documentation build chain on Mac OS X Leopard](/wiki/Setting_up_the_Git_documentation_build_chain_on_Mac_OS_X_Leopard)".
