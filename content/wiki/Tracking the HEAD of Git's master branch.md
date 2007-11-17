---
tags: git
---

Every now and again an enhancement will make it into the [Git](/wiki/Git) `master` branch that you'd like to start using immediately. As described in "[Structure of git.git](/wiki/Structure_of_git.git)", the `master` branch is "Reasonably tested and ready to be used in a production setting". Feature releases (eg 1.5.2, 1.5.3, 1.5.4) are occasionally cut from the tip of this branch. If you want to track the branch then the procedure is fairly straight forward.

    # in an existing Git repository
    git checkout master
    git pull
    git st

    # build, test, install
    make clean
    make prefix=/usr/local all
    make prefix=/usr/local test
    sudo make prefix=/usr/local install

Of course, this is not without its risks but you may consider it worthwhile for enhancements that are really important to you. I think that tracking the tip of `master` is a better idea than back-porting a specific enhancement, because `master` as a whole is intended to be a well-tested, dependable unit.

# Note

A more detailed version of this article is available as "[Tracking the Git maint or master branches](/wiki/Tracking_the_Git_maint_or_master_branches)".
