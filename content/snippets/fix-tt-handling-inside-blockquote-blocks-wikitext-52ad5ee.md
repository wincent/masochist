---
title: Fix TT handling inside BLOCKQUOTE blocks (wikitext, 52ad5ee)
---

This was a corner case which was failing: a BLOCKQUOTE block with some text on one line (which starts a nested P block) followed by a new line (the P block continues) with a TT span.

We fix this by cleaning up the handling of excess element popping.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
