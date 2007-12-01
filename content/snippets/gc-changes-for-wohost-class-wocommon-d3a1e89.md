---
title: GC changes for WOHost class (WOCommon, d3a1e89)
---

Get rid of retain/release calls, and use a simpler storage logic (no need for using NSValue wrappers any more; circular retain cycles are no longer an issue).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
