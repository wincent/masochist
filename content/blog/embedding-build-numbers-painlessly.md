---
title: Embedding build numbers painlessly
tags: blog
---

Earlier today I was lamenting in the "mini-log" that lives on the left-hand side of my [weblog](http://www.wincent.com/a/about/wincent/weblog/):

> [Synergy Advance](http://synergy.wincent.com/) is a huge project with lots of dependencies. I'd really like to know why it insists on rebuilding almost all of the dependent projects every time I build... It means that if I change a single line of code I end up having to recompile the entire project and that takes many, many minutes. Do that lots of times in the day and it starts to add up.

Well, after identifying the problem I think I've now come up with a solution.





#### The problem

The problem was easy enough to identify. I like to embed build numbers in my binaries so that you get meaningful, informative output when you run the `what` command-line tool on them. The problem is that embedding these numbers on every build makes Xcode think that the source code has changed, so it will recompile the project even if nothing else has changed. Then every other project that depends on that project will need to be rebuilt (or at the very least re-linked) as well. This becomes a problem when you have a complex hierarchy of projects like I do in Synergy Advance. The tree looks something like this:

-   Synergy Advance application
    -   Synergy Advance framework
        -   WOBase framework
            -   WOTest framework
            -   WODebug framework
                -   WOTest framework
        -   WODebug framework
            -   WOTest framework
        -   WOTest framework
    -   WOBase framework
        -   WOTest framework
        -   WODebug framework
            -   WOTest framework
    -   WOBezel framework
        -   WOTest framework
        -   WODebug framework
            -   WOTest framework
    -   WOHotKey framework
        -   WOTest framework
        -   WODebug framework
            -   WOTest framework
    -   Various plug-ins
        -   Synergy Advance Framework
            -   WOBase framework
                -   WOTest framework
                -   WODebug framework
                    -   WOTest framework
            -   WODebug framework
                -   WOTest framework
            -   WOTest framework
    -   Various Preference Panes
        -   Synergy Advance Framework
            -   WOBase framework
                -   WOTest framework
                -   WODebug framework
                    -   WOTest framework
            -   WODebug framework
                -   WOTest framework
            -   WOTest framework
    -   WOTest framework

And this chart hides some of the complexity because the plug-ins and preference panes are all grouped together under the two "various" headings, and the WODebug framework itself includes an application (Wincent Crash Reporter) which itself depends on the framework; so everywhere you see "WODebug framework" in the list above the actual dependency graph looks like this (references to WOTest omitted for clarity):

-   WODebug framework
    -   Wincent Crash Reporter
        -   WODebug framework without Wincent Crash Reporter

All that modularity is a trade-off of one type of complexity for another. The dependency graph starts to look horrible and compile times go up, but it allows me to work on smaller pieces of code at a time and benefit from code re-use and so in theory speeds up development. In practice, however, things are not so pretty. Every time I built the project the and the build numbers were getting bumped on the lower-level dependencies (WODebug, for example) everything that depended on it was getting needlessly re-built and/or re-linked.

#### The solution

The solution is to selectively bump the build numbers only when something actually changes in the source tree. I came up with the following script that checks for file hierarchy changes and calculates a hash that represents the state of the hierarchy. It produces a different hash whenever the modification date of any file in the source tree is changed, or any file is added, removed or renamed. I've omitted the "-a" switch to "ls" so it won't consider invisible files.

    #!/bin/sh


    /bin/mkdir -p "${DERIVED_FILE_DIR}"


    TREEINFO=`/bin/ls -lTR "${SOURCE_ROOT}"`
    NEWHASH=`echo "${TREEINFO}" | /usr/bin/openssl sha1`
    HASHFILE="${DERIVED_FILE_DIR}/${FULL_PRODUCT_NAME}.sourcehash"
    INFOFILE="${DERIVED_FILE_DIR}/${FULL_PRODUCT_NAME}.treeinfo"


    echo "Source tree hash: ${NEWHASH}"


    if [ -f "${HASHFILE}" ]; then
      OLDHASH=`/bin/cat "${HASHFILE}"`
      echo "Old source tree hash: ${OLDHASH}"
      if [ $OLDHASH = $NEWHASH ]; then
        echo "Source tree unchanged: not updating build number"
        exit 0
      else
        if [ -f "${INFOFILE}" ]; then
          echo "Tree differences:"
          echo "${TREEINFO}" | /usr/bin/diff "${INFOFILE}" -    
        fi
      fi  
    fi


    echo "Updating build version number"
    . "${SOURCE_ROOT}/../../WOBase/svn-files/UpdateBuildVersionNumbers.sh" \
      "WODebug_Version.h"


    # updating the build number changes the hash, so must update it:
    TREEINFO=`/bin/ls -lTR "${SOURCE_ROOT}"`
    NEWHASH=`echo "${TREEINFO}" | /usr/bin/openssl sha1`


    echo "Writing hash to disk"
    echo "${NEWHASH}" > "${HASHFILE}"
    echo "Writing tree info to disk"
    echo "${TREEINFO}" > "${INFOFILE}"

The `UpdateBuildVersionNumbers.sh` script referenced above is hideously complex and so rather than show it/explain here I'll leave imagining how it might work in the "exercise for the reader" category. It suffices to say that it parses the "WODebug\_Version.h" file and bumps the build number and updates the other info as appropriate.

I can't foresee any problems with rolling the functionality of this script into the `UpdateBuildVersionNumbers.sh` script itself so I'll probably do that shortly so that I can benefit from this work in all of my projects which use that script.

#### Does it work?

In the small amount of testing I've done since putting together the solution it does indeed appear to work as you would expect. If you rebuild a project the dependent projects only get rebuilt if they've actually changed. If you hit "Clean All" then you blow away the hash and "tree info" files and so the dependent projects get rebuilt too (which is what you'd expect when you hit "Clean All"!).

I included the `diff` output that shows the differences between source trees because I wanted to see what changes were being made which would provoke a full rebuild. It turns out that occasionally Xcode makes changes to the `xcodeproj` bundle and the files inside it and these are enough to provoke a build number update. I don't know what it is that Xcode's doing to these files nor why, but it doesn't seem to happen often enough to warrant specifically excluding those files from the hash calculation (on the next build Xcode tends to leave the files untouched, and so the hash remains unchanged and unnecessary build number bumping and rebuilding is avoided).

A limitation of the script is that it will be easily fooled by nested source hierarchies. For example, my "Synergy Advance Framework" source hierarchy is actually a subdirectory of the main "Synergy Advance" folder. This means that if the framework build number is bumped the application build number *will* get bumped even if there are no changes to the application's source itself. This may be exactly the behavior that you're looking for but in my case I prefer that the build number for "X" be independent of the build number for "Y" even if "X" depends on "Y"; it's the combination of the two that's meaningful anyway. So I think that I'll end up moving the framework source to a separate location so that this kind of thing doesn't happen.

This has shaved huge amounts of time off of my builds. It's still a large project and it still takes a non-trivial amount of time to build (Xcode still checks the project dependencies, still runs any other shell script phases set to run in the dependent projects, and still links the dependent projects and makes Universal Binaries of them) but even so we are still talking of a time saving that is probably in the "several orders of magnitude" ballpark. I just wish I'd done this sooner. *Why didn't I?*
