---
title: Get integration specs passing (fix OL/UL nesting in BLOCKQUOTE) (wikitext, ae0ffab)
---

When starting a brand new list may need to pop back to (but not including) the nearest BLOCKQUOTE; this fixes the case where a new list is started inside a BLOCKQUOTE on the line immediately after an open paragraph. It is necessary to pop the paragraph in order for things to be correctly formatted.

With this change all the specs are back passing again.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
