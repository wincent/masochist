---
title: GC changes for NSThread convenience category (WOCommon, 40d4f3f)
---

Basically just removing the release messages, using "drain" instead of "release" on autorelease pools, and relying on the "invalidate" method to remove the connection's ports from the run loop.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
