---
title: Mark code for review (WOCommon, de92bdc)
tags: snippets
---

The NSThread convenience category needs to be reevaluated in the light of GC; the previous technique of passing pointers around inside NSNumber needs to be reconsidered.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
