---
title: Add early returns to the rollback functions (wikitext, 1c5c4a6)
tags: snippets
---

This should make life easier for callers who may want to rollback but aren't sure: basically they can just rollback anyway and if there is nothing to be done the functions will return early.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
