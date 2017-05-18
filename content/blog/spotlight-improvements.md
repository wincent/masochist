---
title: Spotlight improvements
tags: blog
---

Not sure when this happened, but somewhere along the road to Mac OS X 10.4.3 Spotlight got a whole lot better.

First thing I noticed when I upgraded to 10.4.3 is that it got much, much faster. I actually can use it as an app launcher now (previously it was almost always quicker to switch to the Finder, navigate to the Applications folder, and double-click on the app you wanted to launch).

The second thing, and one I only just noticed today, is that Apple has removed the brain-dead implicit exclusion of certain paths on the hard drive. In 10.4, for example, Spotlight didn't index the "/Developer/" folder. If you wanted to find documentation you had to search from within Xcode. If you wanted to find a header file, say, "/usr/include/objc-runtime.h", you would have to navigate to it manually in the Terminal because if you searched in the Finder you'd get no results.

Well, I now see that typing "objc-runtime" in the Finder or in the Spotlight menu bar interface results in the desired file being found, as well as the variants of it in the various SDKs installed in "/Developer/SDKs/". And despite the fact that Spotlight is now indexing more and returning more search results, it seems to be doing it all much faster than before. Well done, Apple. Spotlight is actually starting to fulfill its promise.
