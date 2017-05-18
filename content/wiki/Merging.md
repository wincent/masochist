---
tags: version.control wiki
---

# Merging using [SVK](/wiki/SVK)

There are two common use cases that correspond to two types of branches (discussed in the "[Branching](/wiki/Branching)" article).

## Short-lived branches (`push`/`pull`)

These tend to be local-only branches created for the purposes of working on a specific bug or feature without disrupting the trunk (or other important branch from which they were originally created). These are generally created like this:

    # make the local-only branch using "cp"; check out a working copy
    svk cp //mirrors/project/trunk //local/project/bug-351
    svk co //local/project/bug-351 src
    cd src

To merge work being down on the trunk:

    svk pull

To merge back to the trunk once the work is finished:

    svk push --verbatim

If renames are involved, we need to use `svk smerge` and pass the `--track-rename` switch (`svk push` is equivalent to `svk smerge -If .` but `svk push` doesn't support all of the options that `svk smerge` does). In my opinion `--track-rename` should be on by default, but it is somewhat slower than a normal `svk push` so that is probably why it has to be turned on explicitly:

    # if many changes are involved, it may be wise to do a dry-run first
    svk smerge -If . --verbatim --track-rename --check-only
    svk smerge -If . --verbatim --track-rename

Once all the work on the branch is done:

    svk co --detach
    cd ..
    rm -r src

So the basic characteristics here are:

-   At the end we want there to be total synchronization between the branch and the trunk.
-   That is, the development lines are not intended to diverge in the long term.
-   Any divergence is intended to be temporary only.
-   The purpose of the short-lived branch is to shield the trunk from disturbance and temporary breakage during this period of minimal divergence.
-   Merges are wholesale; that is, when pushing and pulling we want all changes to be merged.
-   Once the work on the branch is completed its usefulness has effectively come to an end.
-   With such a short lifetime there is probably no reason for the branch to exist in the remote repository; a local branch is good enough.
-   The local branch provides a degree of backup, redundancy and progress tracking that would not be possible without it (the developer would have to "hold back" their changes and only commit them at the very end).
-   [SVK](/wiki/SVK) makes pushing and pulling very easy, so this kind of short-lived branch is very feasible.

## Long-lived branches (cherry-picking)

As a one-man shop I don't have the time or the resources to actively work on multiple long-lived branches. This does not mean, however, that long-lived branches don't have their usefulness; rather, it means that the branches tend to fall into two categories:

-    **Active branches**: typically there is only *one* active branch, the trunk.
-   **Maintenance branches**: long-lived but not very active branches. These correspond to stable points in the development which may need to receive minimal updates periodically.

These branches are typically created as in the following example. This is a project, `project_x` which has just released version 2.8. Development work is to continue on the trunk (for version 3.0) and a maintenance branch will be created for the 2.8 series:

    svk cp //mirrors/project_x/trunk //mirrors/project_x/branches/2.8
    svk cp //mirrors/project_x/trunk //mirrors/project_x/tags/2.8-release

Note that the created branch is not a remote, non-local branch. We also create a tag for the release. The tag and the branch are very similar; the tag is basically like a read-only branch.

The kind of merging that typically gets done between the active branch and the maintenance branch is called "[Cherry picking](/wiki/Cherry_picking)". Rather than merging *all* of the work that's being done on the trunk into the maintenance branch we are typically interested in an isolated bugfix or minor feature addition. This kind of merge would usually be done as follows; in this example we merge only the change corresponding to revision 2200 (strictly speaking the difference between 2199 and 2200):

    # from inside the 2.8-branch working copy
    svk merge -c 2200 //mirrors/project_x/trunk

You can even back-out a change by prepending the change number with a minus sign:

    svk merge -c -2200 //mirrors/project_x/trunk

Here is a similar example that merges a range of 5 different changes:

    svk merge -r 2130:2135 //mirrors/project_x/trunk

Note that the change/revision numbers you must use are those of the [SVK](/wiki/SVK) repository, not of the remote [Subversion](/wiki/Subversion) repository which you are mirroring. That, is given a log message like this:

    ----------------------------------------------------------------------
    r2340 (orig r330):  wincent | 2007-03-22 19:07:11 +0100

    Add symbolic link to WOCommon (non-nested checkout)

The necessary revision number is `2340` ([SVK](/wiki/SVK)), not `330` ([Subversion](/wiki/Subversion)).

I am not sure, but I believe that [SVK](/wiki/SVK) is smart enough to not re-apply the same merge twice even if you ask it to. I've sought clarification [in this mailing list thread](http://lists.bestpractical.com/pipermail/svk-devel/2007-March/000761.html) but haven't yet received a reply.

# Merging using [Subversion](/wiki/Subversion)

The following example is based on the [procedure described in the Subversion book](http://svnbook.red-bean.com/nightly/en/svn.branchmerge.commonuses.html#svn.branchmerge.commonuses.wholebr). The objective is to merge all the changes that have been made on the `panther` branch into the `trunk`.

Assume we have a working copy of the `panther` branch at `project-name/panther/` and a copy of the `trunk` at `project-name/trunk/`. Both copies must be up to date.


    # either checkout the trunk
    svn co svn+ssh://svn.example.com/project-name/trunk trunk

    # or update an existing copy already on the disk
    svn up trunk

    # make sure the branch from which you wish to merge is up to date and committed
    svn up panther
    svn status panther
    svn commit -m "Commit that bug fix before the merge!"

    # optionally, view the differences between the two branches
    opendiff panther trunk

    # identify the revision number when the branch was first done
    svn log --stop-on-copy panther

In this case we see the following, indicating that the current HEAD is revision 293:

    r293 | wincent | 2006-09-21 21:20:31 +0200 (Thu, 21 Sep 2006) | 1 line

    Synergy Advance now lives in a repository of its own

And the branch was created at revision 274:

    r274 | wincent | 2006-09-19 15:17:24 +0200 (Tue, 19 Sep 2006) | 1 line

    Creating Panther branch

So to perform the merge:

    # do the merge
    svn merge -r 274:293 panther trunk

    # view what actually happened
    svn diff trunk | less

    # if all went well, commit and include the revision numbers in the commit message
    svn commit -m "Merge r274:293 from panther branch to trunk" trunk

It is critical that you include the revision numbers because you'll need them later in future merges to keep track of what has already been merged (you don't want to merge the same changes twice).

    # looking for previous merge
    svn up trunk

    # show current revision
    svn info trunk

    # look for merge details
    svn log trunk

This is what you're looking for:

    r294 | wincent | 2006-10-26 13:50:05 +0200 (Thu, 26 Oct 2006) | 1 line

    Merge r274:293 from panther branch to trunk

This is why we used `svn merge -r 274:293` instead of `svn merge -r 274:HEAD`; it is important to keep track of which changes have already been merged. A subsequent merge would start at revision 294.

## Merging again

See "[Synergy branch notes](/wiki/Synergy_branch_notes)" for information about the changes that have been merged.

    # check out up-to-date working copies
    svn co svn+ssh://.../trunk trunk
    svn co svn+ssh://.../branches/panther panther

    # visually inspect differences between the branches
    opendiff panther trunk

    # determine the current revision number of the branch (330)
    svn log panther|less

    # determine where the branch started (274)
    svn log panther --stop-on-copy|less

    # determine where the last merge was performed (294)
    svn log trunk|less

    # merge unmerged changes back onto trunk (no conflicts)
    svn merge -r 294:330 panther trunk

    # visually inspect the result
    opendiff panther trunk
    svn diff trunk|less

    # commit the changes including the merged range
    svn commit -m "Merge r294:330 from panther branch to trunk" trunk

## One last merge

Finally, prior to releasing 3.1.1 and switching from [Subversion](/wiki/Subversion) to [SVK](/wiki/SVK) for future branch management, I merged the last batch of changes:

    svn co svn+ssh://svn.wincent.com/Synergy/trunk trunk
    svn co svn+ssh://svn.wincent.com/Synergy/branches/panther panther
    opendiff panther trunk
    svn log panther --limit 10
    svn log trunk --limit 1
    svn merge -r 331:332 panther trunk
    svn diff trunk|less
    svn commit -m "Merge r331:332 from panther branch to trunk" trunk
    rm -rf trunk panther

I then disposed of my old [SVK](/wiki/SVK) working copy (of the `panther` branch) and checked out a new copy of the trunk:

    svk co --detach src
    rm -r src
    svk co //mirrors/Synergy/trunk src

    # after setting final version number
    svk ci -m "Set version numbers for 3.1.1 release"

After building the final release:

    # tag
    cd src
    svk cp //mirrors/Synergy/trunk //mirrors/Synergy/tags/3.1.1 -m "Tag 3.1.1 release"

    # after bumping version number (to 3.1.1+)
    svk ci -m "Bump version number post-release"

    # branch
    svk cp //mirrors/Synergy/trunk //mirrors/Synergy/branches/jaguar -m "Create Jaguar branch from trunk"

    # switch
    svk switch //mirrors/Synergy/branches/jaguar
    svk info

    # elsewhere, continue Leopard development
    cd ../path_to_leopard_dev_area
    svk co //mirrors/Synergy/trunk

From this point on I'll be using [SVK](/wiki/SVK) to manage these branches as described elsewhere (expect mostly [cherry picking](/wiki/cherry_picking)). [Leopard](/wiki/Leopard) development will occur on the trunk (version 3.5) and maintenance releases (3.1 series, possibly 3.2, 3.3 and 3.4 as well) will continue on the [Jaguar](/wiki/Jaguar) branch. The ill-fated [Panther](/wiki/Panther) branch will be allowed to die off.

# See also

-   [Branching](/wiki/Branching)
-   [Tagging](/wiki/Tagging)
