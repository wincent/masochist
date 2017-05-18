---
tags: subversion wiki
---

On 28 October 2006 I branched [WOCommon](/wiki/WOCommon). The existing codebase would continue development on the `tiger` branch and [Leopard](/wiki/Leopard)-related development would take place on the "trunk".

The initial branching was performed as described in the [branching](/wiki/branching) article:

    svn cp svn+ssh://svn.example.com/WOCommon/trunk svn+ssh://svn.example.com/WOCommon/branches/tiger

I then moved the existing `trunk` working copy to `tiger` and adjusted the `svn-files` symlink appropriately:

    mv trunk tiger
    rm svn-files
    ln -s tiger svn-files

It was then necessary to do a "switch" to point the existing working copy at the appropriate location in the repository:

    cd svn-files
    svn info
    svn switch svn+ssh://svn.wincent.com/WOCommon/branches/tiger .
    svn info

As described in the article, [Creating branches with Subversion](/wiki/Creating_branches_with_Subversion), all of this is rooted in a hierarchy that begins with `trabajo/tiger/`:

    trabajo/tiger/buildtools/
    trabajo/tiger/WOCommon/tiger/
    trabajo/tiger/WOCommon/svn-files/
    trabajo/tiger/project/svn-files/WOCommon

In the case of projects which have a [WOCommon](/wiki/WOCommon) external in them, these also need to be updated to point to the appropriate branch:

    cd ~/trabajo/tiger/project/svn-files
    svn propedit svn:externals .

And change:

    WOCommon svn+ssh://svn.example.com/WOCommon/trunk

To:

    WOCommon svn+ssh://svn.example.com/WOCommon/branches/tiger

Then:

    svn proplist --verbose .
    svn up
    svn info WOCommon
    svn commit -m "Update WOCommon external reference to point to newly created Tiger branch"
