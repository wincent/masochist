---
tags: git updates snow.leopard wiki
---

# Local update

Notes made while updating to [Git 1.6.4.2](/wiki/Git_1.6.4.2) on [Mac OS X](/wiki/Mac_OS_X) 10.6 [Snow Leopard](/wiki/Snow_Leopard):

    # working from a clone of the official upstream Git repo
    git fetch
    git tag -v v1.6.4.2

    # note: "git co" is an alias that I made for "git checkout"
    git co v1.6.4.2
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

I chose not to update the remote server this time as [Git 1.6.4.2](/wiki/Git_1.6.4.2) doesn't seem to include any changes that are really relevant to its workload. See "[Updating to Git 1.6.4](/wiki/Updating_to_Git_1.6.4)" for an example of the update procedure on [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux).

## Changes in [gitweb](/wiki/gitweb)

```shell
$ git diff v1.6.4.1..v1.6.4.2 -- gitweb
diff --git a/gitweb/gitweb.perl b/gitweb/gitweb.perl
index 4f05194..2cb8327 100755
--- a/gitweb/gitweb.perl
+++ b/gitweb/gitweb.perl
@@ -405,7 +405,7 @@ sub gitweb_get_feature {
                @{$feature{$name}{'default'}});
        if (!$override) { return @defaults; }
        if (!defined $sub) {
-               warn "feature $name is not overrideable";
+               warn "feature $name is not overridable";
                return @defaults;
        }
        return $sub->(@defaults);
```

## Other changes

Note that `git oneline` is an alias for `log --pretty=format:'%Cgreen%h%Creset %s'`:

```shell
$ git oneline v1.6.4.1..v1.6.4.2 
82c3e21 GIT 1.6.4.2
e71c008 Remove unused t/t8005/iso8859-5.txt
48ae73b Merge branch 'rc/maint-http-fix' into maint
4b9fa0e http.c: set slot callback members to NULL when releasing object
749086f Merge branch 'maint-1.6.3' into maint
5e64650 Merge branch 'maint-1.6.2' into maint-1.6.3
9319789 Fix overridable written with an extra 'e'
891182f Merge branch 'maint-1.6.1' into maint-1.6.2
66fd74e Merge branch 'maint-1.6.0' into maint-1.6.1
82d97da Documentation: git-archive: mark --format as optional in summary
a1eb73d Merge branch 'maint-1.5.6' into maint-1.6.0
607a9e8 Round-down years in "years+months" relative date view
d8526a4 git-log: allow --decorate[=short|full]
8d95184 Minor improvement to the write-tree documentation
21d0bc2 git-bisect: call the found commit "*the* first bad commit"
1d2a7e0 Merge branch 'js/maint-cover-letter-non-ascii' into maint
b813234 Merge branch 'jc/maint-clean-nested-dir-safety' into maint
bd30037 Merge branch 'jk/maint-merge-msg-fix' into maint
6b37b3d Merge branch 'jc/apply-epoch-patch' into maint
6dfa213 Merge branch 'jp/symlink-dirs' into maint
bb0c806 Merge branch 'maint-1.6.3' into maint
9e4a90b Merge branch 'tr/maint-1.6.3-add-p-modeonly-fix' into maint-1.6.3
800324c http.c: don't assume that urls don't end with slash
3d79216 add -p: do not attempt to coalesce mode changes
87ca2ea git add -p: demonstrate failure when staging both mode and hunk
0a7f448 Correctly mark cover letters' encodings if they are not pure ASCII
28e9cf6 Expose the has_non_ascii() function
69a8b7c merge: indicate remote tracking branches in merge message
751c597 merge: fix incorrect merge message for ambiguous tag/branch
ce06461 add tests for merge message headings
b6b0737 t6035-merge-dir-to-symlink depends on SYMLINKS prerequisite
b6986d8 git-checkout: be careful about untracked symlinks
7771675 lstat_cache: guard against full match of length of 'name' parameter
4f6339b Demonstrate bugs when a directory is replaced with a symlink
a0f4afb clean: require double -f options to nuke nested git repository and work tree
c4593fa apply: notice creation/removal patches produced by GNU diff
```

For more detail, run `git log -p v1.6.4.1..v1.6.4.2`; the changes are small enough to make reviewing feasible:

```shell
$ git diff --stat v1.6.4.1..v1.6.4.2 
 Documentation/RelNotes-1.6.4.2.txt     |   32 +++++++++++
 Documentation/git-archive.txt          |    2 +-
 Documentation/git-clean.txt            |    3 +
 Documentation/git-gc.txt               |    2 +-
 Documentation/git-log.txt              |    8 ++-
 Documentation/git-write-tree.txt       |    3 +-
 Documentation/git.txt                  |    3 +-
 GIT-VERSION-GEN                        |    2 +-
 RelNotes                               |    2 +-
 bisect.c                               |    2 +-
 builtin-apply.c                        |   82 +++++++++++++++++++++++++++-
 builtin-clean.c                        |    7 ++-
 builtin-log.c                          |   20 ++++++-
 builtin-merge.c                        |   20 ++++---
 cache.h                                |    3 +
 commit.h                               |    1 +
 date.c                                 |    2 +-
 dir.c                                  |   12 +++-
 dir.h                                  |    5 +-
 entry.c                                |   15 +++++-
 git-add--interactive.perl              |    4 +
 git-bisect.sh                          |    2 +-
 gitweb/gitweb.perl                     |    2 +-
 http.c                                 |   11 +++-
 log-tree.c                             |   19 +-----
 log-tree.h                             |    2 +-
 pretty.c                               |   14 ++++-
 refs.c                                 |    2 +-
 revision.c                             |    2 +-
 revision.h                             |    3 +
 symlinks.c                             |    4 +
 t/t3409-rebase-preserve-merges.sh      |    2 +-
 t/t3701-add-interactive.sh             |   11 ++++
 t/t4013-diff-various.sh                |    1 +
 t/t4013/diff.log_--decorate=full_--all |   34 +++++++++++
 t/t4132-apply-removal.sh               |   95 ++++++++++++++++++++++++++++++++
 t/t4202-log.sh                         |    4 +-
 t/t6030-bisect-porcelain.sh            |   18 +++---
 t/t6035-merge-dir-to-symlink.sh        |   93 +++++++++++++++++++++++++++++++
 t/t7300-clean.sh                       |   39 +++++++++++++
 t/t7608-merge-messages.sh              |   60 ++++++++++++++++++++
 t/t8005/iso8859-5.txt                  |    2 -
 42 files changed, 587 insertions(+), 63 deletions(-)
```
