---
tags: development wiki
---

# Setting up an empty repository

    sudo svnadmin create ~/Developer/svnrep/WOCommon
    sudo chown -R svn:svn ~/Developer/svnrep/WOCommon
    cd trabajo
    mkdir WOCommon
    cd WOCommon
    mkdir trunk tags branches
    svn import http://localhost:8080/svnrep/WOCommon
    rmdir branches tags trunk
    svn co http://localhost:8080/svnrep/WOCommon/trunk trunk

# Setting up other projects to use [WOCommon](/wiki/WOCommon)

First set up the `svn:externals` property:

    cd path_to_project_working_copy
    svn propset svn:externals "WOCommon URL_to_WOCommon_trunk" .
    svn commit -m "Set up WOCommon external"
    svn up

Then add `WOCommon` *as a folder reference* to your Xcode project; this allows you to automatically see any new files that get added to [WOCommon](/wiki/WOCommon) from within Xcode. Unfortunately to be able to actually use a file you must drag a copy of it into your Xcode project (the folder reference is not enough in itself). For this reason create a separate "WOCommon" group to which you can drag used files; this has the added benefit of allowing you to see the in-use files at a glance.

In order for Xcode to find the files you'll need to change your `HEADER_SEARCH_PATHS` in your [xcconfig](/wiki/xcconfig) file from this (assuming you're using [buildtools](/wiki/buildtools)):

    HEADER_SEARCH_PATHS                 = "$(SOURCE_ROOT)"

To this:

    HEADER_SEARCH_PATHS                 = "$(TARGET_BUILD_DIR)" "$(SOURCE_ROOT)"

# Adding new files to [WOCommon](/wiki/WOCommon)

There are two ways to add new files to [WOCommon](/wiki/WOCommon):

-   In the [WOCommon](/wiki/WOCommon) checkout created above, new files can be added to the repository using the normal [Subversion](/wiki/Subversion) `add` and `commit` commands.
-   If you add files to the `WOCommon` directory in an external checkout they will be ignored whenever you perform a `commit` but you can explicitly commit them with a `svn commit WOCommon`.

# Keeping copies in sync

In the main [WOCommon](/wiki/WOCommon) repository you can pull in changes made in other projects with an `svn up`. Likewise in other projects you can pull in changes made elsewhere with an `svn up`.

# Switching branches

To switch to another [WOCommon](/wiki/WOCommon) branch it won't be sufficient to just use the `svn switch` command. You'll actually have to do an `svn propedit svn:externals .` and change the repository URL to point to the new branch, then do an `svn up`.
