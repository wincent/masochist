---
title: Fix bad emission of BLOCKQUOTE inside NO_WIKI spans (wikitext, f8384a1)
---

Here we were emitting a literally greater-than sign when we should have been producing a named entity.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
