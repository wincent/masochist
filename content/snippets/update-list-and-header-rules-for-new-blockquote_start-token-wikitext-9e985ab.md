---
title: Update list and header rules for new BLOCKQUOTE_START token (wikitext, 9e985ab)
---

These rules previously held if at the start of the line or immediately after a BLOCKQUOTE token; now that we have BLOCKQUOTE\_START as well we need to add that to the lsit of conditions too.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
