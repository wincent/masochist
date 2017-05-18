---
tags: git updates wiki
---

# Local update

Notes made while updating to [Git 1.6.4.4](/wiki/Git_1.6.4.4) on [Mac OS X](/wiki/Mac_OS_X) 10.6 [Snow Leopard](/wiki/Snow_Leopard):

    # working from a clone of the official upstream Git repo
    git fetch
    git tag -v v1.6.4.4

    # note: "git co" is an alias that I made for "git checkout"
    git co v1.6.4.4
    make clean
    make prefix=/usr/local test
    sudo make prefix=/usr/local install

    # inspect the changes in the Bash completion script
    diff -u ~/.git-completion.sh contrib/completion/git-completion.bash
    # no changes this time, so no need to update it
    [/tags/cp #cp] contrib/completion/git-completion.bash ~/.git-completion.sh

    # the pre-built man pages
    sudo make prefix=/usr/local quick-install-man

    # go back to the master branch rather than hanging around on a detached head
    git co master

# Remote update

I chose not to update the remote server this time as [Git 1.6.4.4](/wiki/Git_1.6.4.4) doesn't seem to include any changes that are really relevant to its workload. See "[Updating to Git 1.6.4](/wiki/Updating_to_Git_1.6.4)" for an example of the update procedure on [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux).

## Changes in [gitweb](/wiki/gitweb)

There were no changes:

```shell
$ git diff v1.6.4.3..v1.6.4.4 -- gitweb
```

## Other changes

Note that `git oneline` is an alias for `log --pretty=format:'%Cgreen%h%Creset %s'`:

```shell
$ git oneline v1.6.4.3..v1.6.4.4
cb57220 GIT 1.6.4.4
af4f640 Merge branch 'jc/maint-unpack-objects-strict' into maint
6674d31 Merge branch 'tf/diff-whitespace-incomplete-line' into maint
bd91890 Merge branch 'jk/maint-1.6.3-checkout-unborn' into maint
bba2875 Merge branch 'jc/maint-checkout-index-to-prefix' into maint
4197ce3 Merge branch 'rc/maint-http-no-head-pack-check' into maint
b202514 http.c: avoid freeing an uninitialized pointer
cc580af checkout: do not imply "-f" on unborn branches
3b5ef0e xutils: Fix xdl_recmatch() on incomplete lines
78ed710 xutils: Fix hashing an incomplete line with whitespaces at the end
da02ca5 check_path(): allow symlinked directories to checkout-index --prefix
9a21739 Fix "unpack-objects --strict"
```

For more detail, run `git log -p v1.6.4.3..v1.6.4.4`; the changes are small enough to make reviewing feasible:

```shell
$ git diff --stat v1.6.4.3..v1.6.4.4
 Documentation/RelNotes-1.6.4.4.txt |   26 +++++++++++
 Documentation/git.txt              |    3 +-
 GIT-VERSION-GEN                    |    2 +-
 RelNotes                           |    2 +-
 builtin-checkout.c                 |   12 +----
 builtin-unpack-objects.c           |   16 ++++---
 cache.h                            |    2 +-
 entry.c                            |   12 +++--
 http.c                             |    2 +-
 t/t2000-checkout-cache-clash.sh    |    9 ++++
 t/t2015-checkout-unborn.sh         |   40 +++++++++++++++++
 t/t5531-deep-submodule-push.sh     |   35 +++++++++++++++
 xdiff/xutils.c                     |   86 ++++++++++++++++++++++--------------
 13 files changed, 189 insertions(+), 58 deletions(-)
```
