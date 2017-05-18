---
title: Git 1.5.4-rc4
tags: blog
---

[Git 1.5.4-rc4](http://www.wincent.com/knowledge-base/Git%201.5.4-rc4) is out, and the final 1.5.4 release is likely to come soon, probably before the end of the month. My favorite change in this build is the fix for the performance regression when commiting a single file specified on the [command line](http://www.wincent.com/knowledge-base/command%20line) (eg. `git commit foo`) as this is something that I do *often*.

The regression was only in the development version and has never made it into a released version of [Git](http://www.wincent.com/knowledge-base/Git), but I've been tracking the master branch for some time now (see "[Tracking the Git maint or master branches](http://www.wincent.com/knowledge-base/Tracking%20the%20Git%20maint%20or%20master%20branches)") so I had definitely noticed the problem.
