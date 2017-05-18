---
title: More array wrapper instrumentation: delete calls (wikitext, ea8fc88)
tags: snippets
---

This time we instrument delete calls. Turns out that almost all of them (about 2,000) are popping off the end (with an index of -1); another 18 has an index parameter other than -1 but there were still popping items of the end.

So we'll optimize for exactly that case: deleting from the end (most likely by simply changing the count).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
