---
title: Override ARCHFLAGS only temporarily (wikitext, 7b7504d)
tags: snippets
---

When building on Darwin rather than setting an environment variable permanently just set it for the duration of the mkmf run.

I looked at jettisoning this override entirely but experimentation shows that the ANTLR runtime is not built with cross-compilatin in mind; this was later confirmed on the mailing list by the C runtime author.

So for now the override stays.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
