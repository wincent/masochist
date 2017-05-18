---
title: Handle unexpected link end tokens (wikitext, de1f703)
tags: snippets
---

In this case we want to just emit them literally. We only test a couple of basic scopes here. There are other cases that are known to fail at the moment (EM, for example), so specs for those and fixes will come in another commit.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
