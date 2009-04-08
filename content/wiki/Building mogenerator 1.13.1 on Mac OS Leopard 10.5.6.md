---
tags: mogenerator
---

**Note:** [mogenerator](/wiki/mogenerator) 1.13.1 isn't actually an official release; 1.13.1 was just the version number at the HEAD of the source repo at the time I made these notes.

# Getting the source

    mkdir mogenerator
    cd mogenerator
    git clone git://github.com/rentzsch/mogenerator.git mogenerator.git
    svn co http://rentzsch.com/svn/trunk/cocoa/MiscMerge MiscMerge
    cd mogenerator.git

# Building

Just open the `mogenerator.xcodeproj` file and click "Build". I expect `xcodebuild` from the [command line](/wiki/command_line) would also work.

# Installing

    mkdir -p ~/Library/Application\ Support/mogenerator
    cp templates/*.motemplate ~/Library/Application\ Support/mogenerator/
    cp build/Release/mogenerator ~/bin/ # or wherever else you want in your PATH
