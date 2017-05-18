---
title: Define macro for "/dev/null" (gdiff, 799c018)
tags: snippets
---

Reduce the likelihood of typing errors by defining a symbolic macro for "/dev/null", which has special meaning in Git. If this ever changes in Git the macro can be modified and gdiff should continue to work.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
