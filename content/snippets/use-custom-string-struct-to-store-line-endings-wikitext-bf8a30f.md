---
title: Use custom string struct to store line endings (wikitext, bf8a30f)
tags: snippets
---

This shaves off a sliver of time on longer inputs because it allows us to replace a number of calls to rb\_str\_append with the more efficient rb\_str\_cat.

Before:

longer slab of ASCII text 13.510000 0.060000

After:

longer slab of ASCII text 13.450000 0.050000

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
