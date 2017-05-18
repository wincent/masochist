---
tags: svk wiki
---

# Creating a new depot

    svk depotmap --init

Creates a default depot at:

    ~/.svk/local

# Mirroring a remote repository

An [SVK](/wiki/SVK) mirror is more than just a static mirror (a copy) of a remote repository. It is dynamic in the same way that a real, physical mirror is; that is it "reflects" any changes you check in to it back to the remote repository.

    svk mirror svn+ssh://svn.example.com/project_name //mirrors/project_name

Then:

    svk sync //mirrors/project_name

Or:

    svk sync --all

You can list local mirrors as follows:

    svk mirror --list

For a real-world example of remote repository mirroring see "[Mirroring the Growl repository with SVK](/wiki/Mirroring_the_Growl_repository_with_SVK)".

# Checking out

From the mirror (like checking out from the central [Subversion](/wiki/Subversion) repository):

    svk co //mirrors/project_name/trunk

From the local branch (see below):

    svk co //local/project_name/trunk

Telling [SVK](/wiki/SVK) to forget about a working copy:

    svk co --detach

Telling [SVK](/wiki/SVK) to forget about all working copies that no longer exist:

    svk co --purge

Telling [SVK](/wiki/SVK) about a moved working copy:

    svk co --relocate DEPOTPATH|PATH PATH

Getting a list of all existing, known working copies:

    svk co --list

# Creating a branch

A branch which will be visible in the main repository:

    svk cp //mirrors/project_name/trunk //mirrors/project_name/branches/foobar

A local-only branch:

    svk cp //mirrors/project_name/trunk //local/project_name/foobar

For more examples see "[Branching](/wiki/Branching)" and "[Microbranching](/wiki/Microbranching)".

# Setting up default merge editor

For example, on [Mac OS X](/wiki/Mac_OS_X), you could add the following to your `~/.bash_profile`:

    export SVKMERGE=FileMerge

Other environment variables and their effects are described on running:

    svk help environment

# Replacing `svn:externals` dependencies

-   [Working around the lack of svn:externals support in SVK](/wiki/Working_around_the_lack_of_svn%3aexternals_support_in_SVK)
-   <http://lists.bestpractical.com/pipermail/svk-devel/2007-January/000567.html>
-   <http://cwilliams.textdriven.com/articles/2007/02/16/svn-and-svk>

# Typical work cycle

## Using [SVK](/wiki/SVK) like [Subversion](/wiki/Subversion)

Update local mirror:

    svk sync

Update working copy:

    svk up

Or both updates in a single step:

    svk up -s

Or checking for conflicts (not actually updating):

    svk up -C

## Using [SVK](/wiki/SVK) to maintain local-only branches

Pushing changes to another repository (pushing changes back to the branch which was originally copied to create the new branch):

    svk push [DEPOTPATH | PATH]

Get changes from another repository (pulling changes into the branch from the branch which was originally copied to create the new branch):

    svk pull [PATH...]
    svk pull DEPOTPATH

Until you become familiar with the way `push` and `pull` work it is highly recommended that you use the `-C` (`--check-only`) switch to preview the results before proceeding.

See [this mailing list thread](http://lists.bestpractical.com/pipermail/svk-devel/2007-March/000692.html) for some very helpful clarification on the way `push` and `pull` work. Specifically:

-   Working on an [SVK](/wiki/SVK) mirror is identical to working directly with the remote repository (apart from the extra layer of indirection) so *you don't need to use `push` and `pull` at all' in that case.*
-   `svk push BRANCH` merges all changes from `BRANCH` back into the stream that `BRANCH` came from.
-   `svk pull` is the reverse of `svk push`; in other words, it pulls all changes from the stream that the branch came from.

Consequently, if you check out a local working copy of a branch and then use `push` all of the changes made to the branch will be merged back onto the `trunk` (or wherever the branch originated). This may not be what you want. Here is [another mailing list thread](http://lists.bestpractical.com/pipermail/svk-devel/2006-October/000176.html) describing the unexpected merging that can take place as the result of `push`/`pull` if you don't understand the way it works.

If you want to use `push` and `pull` without hitting the actual trunk you must create a *local* branch (using `svk cp`) from the mirrored remote branch. Then `push` and `pull` will only affect/interoperate with the mirrored remote branch (not the trunk).

# See also

-   <http://scottstuff.net/blog/articles/2005/07/07/distributed-development-with-svk>
