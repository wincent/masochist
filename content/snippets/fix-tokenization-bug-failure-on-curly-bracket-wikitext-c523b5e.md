---
title: Fix tokenization bug (failure on curly bracket) (wikitext, c523b5e)
tags: snippets
---

The printable machine wasn't matching the full set of ASCII because I was overlooking one code point. Add that code point and specs to make sure this bug never regresses.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
