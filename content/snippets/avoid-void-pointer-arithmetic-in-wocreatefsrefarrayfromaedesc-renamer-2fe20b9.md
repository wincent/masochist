---
title: Avoid void pointer arithmetic in WOCreateFSRefArrayFromAEDesc() (REnamer, 2fe20b9)
---

This code reads more nicely and is perhaps less error prone if we do it without void pointer arithmetic.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
