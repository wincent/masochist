---
title: Fix whitespace trimming when reallocating in the encoder (wikitext, 0b85588)
tags: snippets
---

Must update the "non\_space" pointer when reallocating the buffer in the link encoder, otherwise we can crash.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
