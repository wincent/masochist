---
title: Avoid NSGetSizeAndAlignment bug (WOTest, 1266032)
tags: snippets
---

Leopard has a bug in the NSGetSizeAndAlignment() function which prevents it from handling structs which have bitfields in them. This in turn breaks the +\[NSValue valueWithBytes:objCType:\] method when used with structs containing bitfields.

So this commit \#ifdefs out the tests which fail as a result of this bug. A simplified testcase demonstrating the problem has be en added to the "other" subdirectory. A Radar has been filed (&lt;rdar://problem/5357040&gt;); currently awaiting on a fix from Apple.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
