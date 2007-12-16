---
title: Remove WOSingleton class and other cruft (Synergy, d48f69d)
---

Much the same as I did in WOCommon, remove the WOSingleton abstract class in favor of concrete per-class implementations. This is especially overdue in the case of Synergy as its WOSingleton was considerably less sophisticated than the version in WOCommon.

There is now only one class which requires singleton functionality and it now has it thanks to fast double-checked locks with memory barriers.

At the same time as removing WOSingleton, also removed some other cruft classes that had been lying arond for ages as part of an experimental refactoring which was abandoned.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
