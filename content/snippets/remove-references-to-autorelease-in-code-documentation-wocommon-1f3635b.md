---
title: Remove references to autorelease in code documentation (WOCommon, 1f3635b)
tags: snippets
---

The code documentation for the CIImage tinting category makes reference to "autoreleased" objects which no longer makes sense under GC.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
