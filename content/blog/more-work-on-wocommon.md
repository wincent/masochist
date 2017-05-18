---
title: More work on WOCommon
tags: blog
---

Pulled my `NSString` category out of `WODebug` and moved it into `WOCommon`, splitting it into several categories along the way to allow for finer-grained inclusion: `WOEmailUtilities`, `WOFileUtilities`, `WOTaskUtilities` and `WOURLUtilities`.

Also moved the `WOLogManager`, `WOObject` and `WOSingleton` classes.

In doing all this I was able to clean up the code along the way and make it more robust in places. I also revisited my singleton implementation in light of [my latest ramblings on memory barriers and double-checked locking](http://www.wincent.com/a/about/wincent/weblog/archives/2006/08/doublechecked_l.php) and I think the implementation is now about as solid as it can possibly get.
