---
tags: subversion wiki
---

# Example: creating "tiger" branch for [buildtools](/wiki/buildtools)

    # perform the actual branch
    svn cp svn+ssh://svn.wincent.com/buildtools/trunk
           svn+ssh://svn.wincent.com/buildtools/branches/tiger

    # check out clean copies of the two trees in the appropriate locations
    cd trabajo
    svn co svn+ssh://svn.wincent.com/buildtools/branches/tiger tiger/buildtools
    svn co svn+ssh://svn.wincent.com/buildtools/trunk leopard/buildtools

Previously all work was gather undered the `trabajo` directory. Now it is structured like so:

    trabajo/leopard/buildtools/
    trabajo/tiger/buildtools/
    trabajo/panther/
    trabajo/jaguar/
    trabajo/non-svn/

Projects that depend on the [Leopard](/wiki/Leopard) buildtools go in `trabajo/leopard/`. Almost everything else depends on the [Tiger](/wiki/Tiger) buildtools so they go in `trabajo/tiger/`. Note that the "trunk" for each checked out working copy will vary; for example, the [buildtools](/wiki/buildtools) checked out into the `leopard` directory will be from the "trunk", because that's what corresponds to [Leopard](/wiki/Leopard), but the [buildtools](/wiki/buildtools) checked out into the `tiger` directory will be from the "tiger" branch. In other cases the trunk may appear in the `panther` folder or even the `jaguar` one (the current release of [Synergy](/wiki/Synergy) is one such project).

For uniformity note that the [buildtools](/wiki/buildtools) are stored directly in the `buildtools` folder. The other projects should all be stored using the following format:

    trabajo/os-version/project-name/svn-files

This is so that relative paths will work. Projects should have long ago abandoned the practice of storing branches in a folder named after the branch. It is tempting to get rid of the `svn-files` convention but I think it's still useful to have it even if only because it justifies the presence of a conversely named `non-svn-files` folder which can be useful at times.

Given that I often check things out with the branch name as the principal folder in many cases I will need to set up a symlink:

    cd ~trabajo/panther/SynergyAdvance
    ln -s trunk svn-files

# Example: creating "panther" branch for [Synergy](/wiki/Synergy)

As an example, consider the procedure taken to create a new branch, "panther", based on the current trunk of the [Synergy](/wiki/Synergy) codebase:

    # rename checked out "trunk" to "panther"
    mv trunk panther

    # update "svn-files" symlink to point at "panther"
    rm svn-files
    ln -s panther svn-files

    # check in changes to synchronize repository with working copy
    cd panther
    svn commit -m "Pre-branch commit"

    # get the URL in the repository corresponding to the working copy
    svn info

    # copy the current trunk to a newly created branch
    svn cp http://localhost:8080/svnrep/Synergy/trunk \
           http://localhost:8080/svnrep/Synergy/branches/panther \
           -m "Creating Panther branch"

    # update the working copy to point at the new branch in the repository
    svn switch http://localhost:8080/svnrep/Synergy/branches/panther

    # confirm that the working copy corresponds to the new branch
    svn info

It would be possible to check out a copy of the trunk into another directory and start working on Leopard-specific features but at the time of writing (September 2006) my plan is the following:

1.  Do at least 1 or 2 more Jaguar-compatible releases; all this work will occur in the "panther" branch
2.  When ready to switch to Leopard-centric development, check out a copy of the trunk and merge in changes from the "panther" branch
3.   Continue new feature-related work in the "trunk"; only bug-fixes and maintenance will continue in the "panther" branch
