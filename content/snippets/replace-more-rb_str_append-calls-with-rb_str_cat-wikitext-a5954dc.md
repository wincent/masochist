---
title: Replace more rb_str_append calls with rb_str_cat (wikitext, a5954dc)
tags: snippets
---

This time for token text, and it yields an even bigger speed-up. Before:

short slab of ASCII text 2.380000 0.010000 2.390000 ( 2.461861) short slab of UTF-8 text 4.860000 0.000000 4.860000 ( 5.016289)

After:

short slab of ASCII text 1.570000 0.010000 1.580000 ( 1.705596) short slab of UTF-8 text 3.280000 0.020000 3.300000 ( 3.353919)

So that one change alone cuts 33% off the execution time. The combined scanner/parser is now nearly 8 times faster than it was under ANTLR and nearly 3 times faster than it was after the move to Ragel but before I started optimizing the parser.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
