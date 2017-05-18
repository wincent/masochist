---
title: Updates for GC (WOCommon, ab457ab)
tags: snippets
---

Update many classes to use Leopard's GC; retains and releases have been eliminated, and dealloc methods have been trimmed down (and replaced with finalize methods) or entirely eliminated.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
