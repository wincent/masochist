---
tags: git wiki
cache_breaker: 1
---

# Editing or amending

From the [Git](/wiki/Git) [FAQ](/wiki/FAQ), "[How do I edit the root commit](https://git.wiki.kernel.org/index.php/GitFaq#How_do_I_edit_the_root_commit.3F)":

```shell
$ git tag oldroot SHA1_OF_OLD_ROOT_COMMIT # tag the old root
$ git checkout -b newroot oldroot         # create a temporary branch wherein to create the modified root
$ git commit --amend                      # after editing, staging etc as desired
$ git checkout @{-1}                      # back to previous branch
$ git rebase --onto newroot oldroot       # rebase everything on top of amended root
$ git branch -d newroot                   # clean up temporary branch
$ git tag -d oldroot                      # and temporary tag
```

# Squashing

From:

-   <http://stackoverflow.com/questions/598672/git-how-to-squash-the-first-two-commits>
-   <http://stackoverflow.com/questions/435646/how-do-i-combine-the-first-two-commits-of-a-git-repository>

Based on this history:

    old
    root
    v 
    A---B---C---D---etc
        ^
        new
        root

We want to squash `A` and `B` together to produce a new root commit, `AB`:

    AB---C'---D'---etc

```shell
$ git log --oneline --reverse   # inspect SHA1 of old and new roots
$ A=12bed43a                    # old root
$ B=4dde1290                    # new root
$ git show $B                   # take note of commit message
$ git checkout $B               # detached head corresponding to B
$ git reset --soft $A           # leave index and working tree from B
$ git commit --amend            # commit message for A shown, merge or replace with commit message from B
$ git tag newroot               # remember this for later
$ git checkout @{-1}            # go back to last branch (eg. master or whatever)
$ git rebase --onto newroot $B  # replay all commits after B onto new initial commit
$ git tag -d newroot            # remove temporary tag
```
