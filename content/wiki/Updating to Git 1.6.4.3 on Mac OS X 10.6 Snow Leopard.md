---
tags: git updates snow.leopard wiki
---

# Local update

Notes made while updating to [Git 1.6.4.3](/wiki/Git_1.6.4.3) on [Mac OS X](/wiki/Mac_OS_X) 10.6 [Snow Leopard](/wiki/Snow_Leopard):

    # working from a clone of the official upstream Git repo
    git fetch
    git tag -v v1.6.4.3

    # note: "git co" is an alias that I made for "git checkout"
    git co v1.6.4.3
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

I chose not to update the remote server this time as [Git 1.6.4.3](/wiki/Git_1.6.4.3) doesn't seem to include any changes that are really relevant to its workload. See "[Updating to Git 1.6.4](/wiki/Updating_to_Git_1.6.4)" for an example of the update procedure on [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux).

## Changes in [gitweb](/wiki/gitweb)

There were no changes:

```shell
$ git diff v1.6.4.1..v1.6.4.2 -- gitweb
```

## Other changes

Note that `git oneline` is an alias for `log --pretty=format:'%Cgreen%h%Creset %s'`:

```shell
$ git oneline v1.6.4.2..v1.6.4.3
7fb6bcf GIT 1.6.4.3
d3d7d47 svn: properly escape arguments for authors-prog
45c58ba Merge branch 'cb/maint-1.6.3-grep-relative-up' into maint
59b8d38 http.c: remove verification of remote packs
90e4311 git-pull: do not mention --quiet and --verbose twice
6d71c1d githooks.txt: put hooks into subsections
493b7a0 grep: accept relative paths outside current working directory
929e37d grep: fix exit status if external_grep() punts
14b772a push: re-flow non-fast-forward message
e1f8f0c push: fix english in non-fast-forward message
bc29df6 Merge branch 'maint-1.6.3' into maint
ba7e814 Merge branch 'maint-1.6.2' into maint-1.6.3
4059237 git-clone: add missing comma in --reference documentation
d2feb01 git-cvsserver: no longer use deprecated 'git-subcommand' commands
12d4996 clone: disconnect transport after fetching
```

For more detail, run `git log -p v1.6.4.2..v1.6.4.3`; the changes are small enough to make reviewing feasible:

```shell
$ git diff --stat v1.6.4.2..v1.6.4.3
 Documentation/RelNotes-1.6.4.3.txt |   29 ++++++++++++++++++++++++++
 Documentation/fetch-options.txt    |    2 +
 Documentation/git-clone.txt        |    2 +-
 Documentation/git.txt              |    3 +-
 Documentation/githooks.txt         |   33 ++++++++++++++++-------------
 GIT-VERSION-GEN                    |    2 +-
 RelNotes                           |    2 +-
 builtin-clone.c                    |    4 ++-
 builtin-grep.c                     |   39 ++++++++++------------------------
 builtin-push.c                     |    6 ++--
 git-cvsserver.perl                 |   40 ++++++++++++++++++------------------
 git-svn.perl                       |    1 +
 grep.h                             |    1 +
 http.c                             |   11 ---------
 t/t5601-clone.sh                   |    6 +++-
 t/t7002-grep.sh                    |   17 +++++++++++++++
 t/t9138-git-svn-authors-prog.sh    |   14 ++++++++++++
 17 files changed, 129 insertions(+), 83 deletions(-)
```
