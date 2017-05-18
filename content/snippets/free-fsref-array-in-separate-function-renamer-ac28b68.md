---
title: Free FSRef array in separate function (REnamer, ac28b68)
tags: snippets
---

There are two places where we walk the FSRef array and free the references; extract this out into a separate function for consistency (in fact, the two different places were discrepant, and one of them didn't correctly NULLify the array after freeing so this is really a bug fix, not just a refactoring).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
