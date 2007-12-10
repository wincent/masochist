---
title: Use WOMakeCollectable function where appropriate (WOCommon, 6eb9559)
---

There are a couple of places where the Apple docs don't mention the possibility of returning a NULL ref and where the code doesn't bother to check for such a ref. To be on the safe side, use WOMakeCollectable here rather than CFMakeCollectable.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
