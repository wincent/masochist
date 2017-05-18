---
title: Remove redundant system header imports (gdiff, 4e63885)
tags: snippets
---

The prefix header already covers the majority of system header imports throughout the code, so remove those unnecessary imports, saving a few lines in many different files.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
