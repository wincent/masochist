---
title: Revert "Remove methods which are no-ops under Garbage Collection" (WOCommon, 303c463)
---

This reverts commit ca1fae39ce738fc41d3da3d7c3749b2e3f77fe29. It turns out that evidently the runtime still does send those messages at times even though they are meaningless under Garbage Collection, thus causing some unit tests to fail. This reversion allows the singleton-related unit tests to pass again.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
