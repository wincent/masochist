---
tags: git wiki
---

# Basic use case

    # create a topic branch based on current master
    git checkout -b my_cool_new_feature

    # work on feature...
    vi file
    git add file
    git commit -s

    # meanwhile, someone else has made changes to master...
    git checkout master
    git pull

    # now rebase so that your topic branch applies on top of current HEAD of master
    git checkout my_cool_new_feature
    git rebase master

    # fix any conflicts that may be discovered on the way
    vi file
    git add file
    git commit -s

    # resume the rebase
    git rebase --continue

    # rebase done, prepare patch set based on topic branch
    git format-patch master

    # alternatively, just merge it in locally
    git checkout master
    git merge my_cool_new_feature
    git branch -d my_cool_new_feature

    # and propagate it back out to the origin
    git push

For information on sending out patches see "[Creating and submitting a patch via email](/wiki/Creating_and_submitting_a_patch_via_email)".

# Advanced usage (interactive cleanup)

# See also

-   [Git rebase explained](/wiki/Git_rebase_explained)
