---
title: Drop volatile keyword from singleton initializers (WOCommon, 23a9a8a)
---

The use of the volatile keyword in the WOLogManager, WOMachine and WOSysctl singleton initializers is unnecessary, as correct ordering is already guaranteed by the use of memory barriers, so drop it.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
