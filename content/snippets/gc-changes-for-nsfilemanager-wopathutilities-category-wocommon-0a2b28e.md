---
title: GC changes for NSFileManager+WOPathUtilities category (WOCommon, 0a2b28e)
tags: snippets
---

Under GC and Leopard it no longer makes any sense to use the WO\_RELEASE macro; use CFRelease instead.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
