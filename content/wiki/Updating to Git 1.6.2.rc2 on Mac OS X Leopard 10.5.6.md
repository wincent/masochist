---
tags: git updates wiki
---

Didn't install; just wanted to confirm that the build was error-free and that the test-suite passed.

    git fetch
    git tag -v v1.6.2-rc2

    # "git co" is an alias I set up for "git checkout"
    git co v1.6.2-rc2
    make clean
    make prefix=/usr/local test

# See also

-   [Git 1.6.2.rc2](/wiki/Git_1.6.2.rc2)
