---
title: Raise range errors for invalid link text (wikitext, b5ad8d6)
tags: snippets
---

Raise an error if link text includes "&gt;" or "&lt;". In practice this should never happen because the only intended caller is the Wikitext::Parser itself, but put this in just in case.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
