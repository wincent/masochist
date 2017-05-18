---
title: Perform manual lookahead for H1_END and friends (wikitext, c461466)
tags: snippets
---

Ragel is much closer to the metal than ANTLR; in order to check if we've found the last token before a newline or the end-of-file we have to do manually lookahead using pointers.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
