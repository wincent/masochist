---
title: Instrument array functions to pick optimal buffer size (wikitext, 2199333)
---

Add basic instrumentation to the array wrapper functions to see how big they grow in typical use. Running the entire spec suite the lengthiest array seen had 26 entries, so we'll use this information in setting a default size in our custom array implementation.

64 entries (64 bytes) is probably more than enough for most uses.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
