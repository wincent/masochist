---
title: Myriad changes for GC (WOCommon, 38e4bea)
tags: snippets
---

Although this is by no means complete, this commit makes myriad changes to many classes and categories for Garbage Collection. Autorelease pool release calls have been replaced with drain calls, no-op retains, releases and autoreleases have been removed, simpler initialization idioms have been used in many places, some variables have been renamed for clarity (where previously a temporary mutable object was created and then an immutable copy returned we now just return the mutable one), and convenience creation methods have been deprecated in favor of a simpler copy idiom.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
