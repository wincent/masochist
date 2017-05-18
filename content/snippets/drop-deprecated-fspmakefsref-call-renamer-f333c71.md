---
title: Drop deprecated FSpMakeFSRef call (REnamer, f333c71)
tags: snippets
---

There is no useful substitute for this call, and testing shows that this codepath is never exercised, at least not on Mac OS X 10.5.1, so drop it.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
