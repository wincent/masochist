---
title: Xcode tip: kill the index
tags: blog
---

Just now [Xcode](http://wincent.com/wiki/Xcode) crashed while in the background. I immediately checked for `project.pbxproj` corruption but [Git](http://wincent.com/wiki/Git) showed me that the file was unchanged. Each time I tried to open the project Xcode would beachball for a few seconds and then crash, 100% reproducibly.

The tip is this: Xcode 3 creates a new folder in your `SRCROOT` named `index` whose data could possibly become corrupt or unpalatable to Xcode in some mysterious way; if your copy starts crashing it's worth blowing away that folder and seeing what happens. Cured the crashes instantly.
