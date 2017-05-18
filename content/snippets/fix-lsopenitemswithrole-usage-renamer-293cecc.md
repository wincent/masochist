---
title: Fix LSOpenItemsWithRole usage (REnamer, 293cecc)
tags: snippets
---

Function expects (a pointer to) an array of structs, not a pointer to an array of pointers to structs.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
