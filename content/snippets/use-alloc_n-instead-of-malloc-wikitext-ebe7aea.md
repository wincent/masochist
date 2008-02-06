---
title: Use ALLOC_N instead of malloc (wikitext, ebe7aea)
---

There was a lone malloc call in the parser which is best replaced with ALLOC\_N (the latter will automatically invoke the Ruby garbage collector if allocation fails, and will raise an exception if allocation fails again after that).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
