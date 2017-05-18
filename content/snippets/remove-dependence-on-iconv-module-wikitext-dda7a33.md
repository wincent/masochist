---
title: Remove dependence on Iconv module (wikitext, dda7a33)
tags: snippets
---

So as to depend on one less module, perform the UCS-2/UTF-8 conversion using a pair of custom methods written in C. The code would be easy to extend to handle UTF-32 when/if I move to it.

This change doesn't break any of the existing specs, but I'll be adding additional specs to specifically test the conversion methods and confirm that they appropriately reject invalid input (unlike the old wrapper functions these ones are public).

I also intend to add some benchmarks in a future commit to compare performance with the old implementation.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
