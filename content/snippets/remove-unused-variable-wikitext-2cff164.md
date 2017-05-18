---
title: Remove unused variable (wikitext, 2cff164)
tags: snippets
---

While it is true that we often need to know what's at the top of the stack, we never actually used this variable. Seeing as we often look ahead we are constantly advancing through the token stream and so have to look up the top item dynamically on demand.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
