---
title: Fix broken subpattern matching (REnamer, 8c006bb)
tags: snippets
---

Subpatterns weren't being incorporated into the match objects because of an inverted conditional introduced when extracting the functionality out into the WORegularExpressionMatch class.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
