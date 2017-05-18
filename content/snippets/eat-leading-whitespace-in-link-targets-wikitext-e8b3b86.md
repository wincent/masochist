---
title: Eat leading whitespace in link targets (wikitext, e8b3b86)
tags: snippets
---

We do this during the sanitization phase because its only at that point that we know we've got valid input and are actually going to emit a link. If we did it during parsing but prior to confirming that we had a valid link then we might end up throwing away a space that we'll later need.

A follow-up link will make the same change for link encoding.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
