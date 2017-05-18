---
tags: git wiki
---

There are two types of branching that you might want to do with [Git](/wiki/Git):

-   local-only branches (often short-lived "[topic branches](/wiki/topic_branches)")
-   long-lived remote branches visible on a central repository

# Local branches

Local branches are easily created:

    git branch my_cool_branch
    git checkout my_cool_branch

Or you can create a branch and switch your working copy to it in one step:

    git checkout -b my_cool_branch

# Remote branches on a central repository

Let's say you want to create a long-lived branch that will be visible to all on a remote, central repository. If you create such a branch in your local clone of the repository there is no way for you to "push" it back out to the central repository for others to see it; if you try doing a `git push` [Git](/wiki/Git) will probably respond with:

    Everything up-to-date

You'll get the same message even if you try to set up the same kind of tracking configuration that's automatically set up for you when you do a `git clone`:

    git config branch.my_cool_branch.remote origin
    git config branch.my_cool_branch.merge refs/heads/my_cool_branch

Note that once I'd finished experimenting to see if this was possible I removed those configuration items to avoid possible confusion:

    git config --unset branch.my_cool_branch

I also deleted the local-only branch:

    git checkout master
    git branch -d my_cool_branch

The solution is to create the remote branch on the remote server:

    # now on the remote server
    sudo -H -u git git branch my_cool_branch

And only then update your local clone:

    git config branch.my_cool_branch.remote origin
    git config branch.my_cool_branch.merge refs/heads/my_cool_branch
    git fetch

Alternatively (and probably more properly), you can also do this:

    git branch --track my_cool_branch
    git co my_cool_branch

This creates tracking refs not quite the same as the manually created ones above, but which still work as you would expect when you do a `git push`:

    branch.my_cool_branch.remote=.
    branch.my_cool_branch.merge=refs/heads/master

# See also

-   [Branching](/wiki/Branching)
