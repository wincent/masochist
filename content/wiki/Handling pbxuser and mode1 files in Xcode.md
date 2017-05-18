---
tags: wiki
---

According to [Apple's Chris Espinosa](http://lists.apple.com/archives/Xcode-users/2005/Jul/msg00541.html):

> One thing you could do is take your daniel.pbxuser and rename it to default.pbxuser, then commit it with the project. Xcode loads default.pbxuser unless there's a username-matching pbxuser file.

# What is actually stored in a `.pbxuser` file?

-   Scott Tooker (Apple): "the locations for built products and intermediates files."
-   David Ewing (Apple): "The currently active target, executable, and build style are all stored in the file ... Other information includes window/view sizes, bookmarks, breakpoints, custom executables, smart groups and code sense settings."

# What is actually stored in a `.mode1` file?

-   Scott Tooker: "The .mode1 file contains layout information for the project (like window positions and sizes, including sizes of sub-views and the like)."
-   Scott Tooker: "\[T\]he various \*.mode\* files track information about your workspace configuration. It's nothing critical to the project so it is safe to throw them away."

Another post from Scott:

> Currently we already separate project settings data into two parts:
>
> project.pbxproj - per project data (file & group hierarchy, target build settings, for example) &lt;username&gt;.pbxuser - per user per project data (user bookmarks, custom executables, UI layout)
>
> In future releases we want to separate project data from UI layout data (so the &lt;username&gt;.pbxuser file would split into two files). The .mode1 files are step in this direction.
>
> We've also talked about separating out target-specific data from the project.pbxproj file.

# Suggested action

## Git

If using [Git](/wiki/Git), you can add a `.gitignore` file inside your project bundle with contents like this:

    *.mode1
    *.pbxuser
    !default.pbxuser

## Subversion

After closing Xcode:

    svn mv wincent.pbxuser default.pbxuser
    svn mv wincent.mode1 default.mode1
    svn commit

Although it appears that Xcode ignores the `default.mode1` file. So consider this instead:

    cd path_to_project_bundle
    svn commit -m "Pre-rename pbxuser commit" 
    svn mv wincent.pbxuser default.pbxuser
    svn commit -m "Create default.pbxuser"
    svn propset svn:ignore 'wincent.*' .
    svn commit -m "Ignore wincent.pbxuser, wincent.mode1 etc"

You can still check-in the files occasionally but will no longer see them in status listings.

If the files in question are already in the repository you'll need to get rid of them:

    svn del URL_TO_PBXUSER_FILE_IN_REPOSITORY
    svn del URL_TO_MODE1_FILE_IN_REPOSITORY
    svn up
