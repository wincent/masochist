---
title: Add commit-msg hook (snippets, ad67256)
tags: snippets
---

Very simple hook that does three things:

- warns if any line in the commit message exceeds a predefined width - warns if the commit hasn't been signed off - in the event of a warning advises the user that the hook can be bypassed with the --no-verify switch

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
