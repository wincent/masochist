---
title: Initial version of Git build number scripts (buildtools, bd6ad3d)
---

This commit adds a simple Git utility module which doesn't do much yet, just reports "revision numbers" (corresponding to the abbreviated hash of the most recent commit), and a script intended for use in an Xcode Shell Script build phase that leverages this module and uses it to create or update a "build number" file that can then be used for as a header for Info.plist preprocessing or other purposes.

This replaces the old scripts which did the same thing in Subversion terms; in the end I decided to go with the abbreviated hash as the build number despite the fact that it's not very human intelligible: its most important attribute is that it uniquely identifies the exact version of the source code that was used to produce a build.

Note that due to a bug in Git the "local changes" variant does not yet work (this is where the build number has a "+" appended to it to indicate local changes since the last commit).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
