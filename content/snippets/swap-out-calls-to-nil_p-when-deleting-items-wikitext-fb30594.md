---
title: Swap out calls to NIL_P when deleting items (wikitext, fb30594)
tags: snippets
---

Without this substitution we can never empty the stack because we never notice when we're done.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;
