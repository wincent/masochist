---
title: Add trimming function for link targets (wikitext, d4ff4f5)
tags: snippets
---

Unfortunately I found a case where the early scan-time suppression of leading and trailing whitespace gets tripped up by faulty input; I had forgotten that newlines and end-of-files do not auto-close still-open link spans, and so in those cases you actually do a rollback and by then you've already eaten your whitespace.

So this commit adds a trimming function which is called only when the link is fully parsed, confirmed valid, and ready to be emitted.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
