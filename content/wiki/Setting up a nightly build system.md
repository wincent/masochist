---
tags: xcode development wiki
---

# A preliminary note

This article was written back when I was still using [Subversion](/wiki/Subversion), before moving to [Git](/wiki/Git). The content is still basically valid, but where the "Subversion revision number" is referred to I'm actually using the Git equivalent, the SHA-1 hash of the HEAD commit.

# Overview

A single [Ruby](/wiki/Ruby) script is responsible for performing all nightly builds and uploading them to the server. Its basic responsibilities include (for each product):

1.  Check the [Subversion](/wiki/Subversion) revision number of the last version of the code base; if it has not increased since the last nightly build for that product then the product will be skipped.
2.  Export a clean, complete copy of the latest version of code base.
3.  Build using the `xcodebuild` command-line tool.
4.  Run unit tests.
5.  Upload the built product to the webserver.
6.  Publish a new entry to the "Nightlog" (provides an [RSS](/wiki/RSS) feed so that users can keep informed about new nightlies).

The upload only proceeds if all of the previous steps complete successfully; the build must be error-free and all unit tests must pass.

# Error-handling

In daily use I like to have `PBXBuildsContinueAfterErrors` set to `YES` so that I can maximize the number of errors reported in a single edit-build-debug cycle. But this doesn't work so well for nightlies where you really want them to fail immediately if something goes wrong.

At first I turned the setting off (there is also a setting for it in the [Xcode](/wiki/Xcode) [GUI](/wiki/GUI)). I tried overriding the setting temporarily from the command line but that didn't work; the only other solutions that sprang to mind were:

1.  Run `xcodebuild` as a different user.
2.  Use `defaults` tool to temporarily override the setting.

In August 2007 Apple's [Scott Tooker](/wiki/Scott_Tooker) posted [this message](http://lists.apple.com/archives/Xcode-users/2007/Aug/msg00075.html) to the [xcode-users](/wiki/xcode-users) mailing list explaining how to override the setting from the [command line](/wiki/command_line):

    xcodebuild -PBXBuildsContinueAfterErrors=NO

# Embedding the [Subversion](/wiki/Subversion) revision number

In order for users to be able to distinguish between different nightlies it's necessary to include the [Subversion](/wiki/Subversion) revision number in the version string.

## Synergy

In [Synergy](/wiki/Synergy) at the project level I set up a build setting `SVNREV` with value `release`.

Then in the `Info.plist` file in which I wish to embed the revision number I include it like this:

    3.1.1 (${SVNREV})

The dollar sign and brackets are mandatory.

In this way I have default value for that build setting which will show up whenever I do a manual build, including official releases:

    3.1.1 (release)

And when the setting is overridden from the commandline (as it will be in nightly builds) we get the Subversion revision number instead:

    3.1.1 (322)

## Other projects

My other projects already had an automated build numbering system in place so I just had to add another step to my build process to pull the current revision number in from the repository and insert that into the right spot in the existing system.

## Quirks

In setting this up I discovered some bugs in the way [Xcode](/wiki/Xcode) (at least at the time of writing, [Xcode 2.4.1](/wiki/Xcode_2.4.1)) handles things.

There are actually two different relevant build settings:

    INFOPLIST_PREPROCESS = YES

This is a newer setting which allows you to run your `Info.plist` files through the C preprocessor. You can pick up macros from a prefix file or passed in as build settings. I've been using this in [Synergy Advance](/wiki/Synergy_Advance) to maintain auto-incrementing build numbers for some time now.

    INFOPLIST_EXPAND_BUILD_SETTINGS = YES

This is a separate, older setting which expands your build settings if they are preceded by a dollar sign and enclosed in brackets. If both are `YES` then Xcode will run the preprocessing phase first and then the build setting expansion phase. The former will show up as "Preprocessing" in the Build window and the latter as "Processing".

When I was first trying to get this to work with an existing project ([Synergy](/wiki/Synergy)) I found that my build settings weren't being expanded. I created a new project and tried it out in that and it worked. Bizarrely, things like `${EXECUTABLE_NAME}` were expanding correctly but `${SVNREV}` was expanding to a blank string. It made no difference whether the setting was made at a project or target level.

Cleaning and re-building, as well as blowing away the "Build" and "Build-intermediates" folders had no effect. In the end, Xcode finally decided to start doing the right thing. So the moral of the story is, if you're convinced that you're doing everything correctly but Xcode is still not doing as requested then you may just have to keep trying until things come around:

-   Quit Xcode.
-   Remove absolutely everything in your "Build" and "Build-intermediates" folders.
-   Touch the time stamp on you `Info.plist` files.
-   Try, try, and try again.

# See also

-   Wincent nightlies information page: <http://wincent.com/s/nightlies/>
