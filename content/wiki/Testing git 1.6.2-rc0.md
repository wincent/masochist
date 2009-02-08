---
tags: git updates
---

Just making sure that [Git 1.6.2-rc0](/wiki/Git_1.6.2-rc0) builds and passes the test suite on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.6:

    git fetch
    git tag -v v1.6.2-rc0
    git co v1.6.2-rc0
    make clean && make prefix=/usr/local test

**Note:** `git co` is an alias for `git checkout`.
