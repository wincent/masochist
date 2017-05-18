---
title: Remove WOSysctl dependency on WOSingleton (WOCommon, 6587b27)
tags: snippets
---

Move from the abstract singleton implementation provided by WOSingleton to a local, "advisory" pattern provided within the WOSysctl wrapper class itself.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
