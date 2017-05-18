---
title: Xcode 2.2 and Universal Binary goodness
tags: blog
---

[Xcode](http://www.apple.com/macosx/features/xcode/) 2.2 is out and it's got lots of improvements and bugfixes. The top two items for me are:

#### Improvements in the handling of [Universal Binaries](http://developer.apple.com/transition/)

There are some new build settings which make it easier to produce binaries that will run both natively on PowerPC machines (from version Mac OS X 10.2 and up) and on Intel machines (from 10.4 and up). Previously it was possible to make such binaries but it required some fiddling. You had to produce two binaries and then stitch them together into a single one. Now you can specify architecture dependent settings for MACOSX\_DEPLOYMENT\_TARGET, GCC\_VERSION and SDKROOT (and some others) and Xcode will take care of the rest.

Now this clears that way for making [Synergy](http://www.wincent.com/a/products/synergy-classic/) a Universal Binary ([Synergy Advance](http://www.wincent.com/a/products/synergy-advance/) already is), putting the last nail in the coffin of my [doubts](http://www.wincent.com/a/news/archives/2005/06/position_statem.php) about what the minimum OS version requirements would be for Universal Binaries. I'm also hoping that by the end of today I will have [Install](http://www.wincent.com/a/products/install/) running as a Universal Binary (technically, it already is running but there are some warnings to eliminate in the i386 build and I want to do some thorough testing on it).

#### Speed improvements when editing large files

No more beach balls when saving long source files (several thousand lines long or more).

Great work, Apple!
