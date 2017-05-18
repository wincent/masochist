---
title: Fix deprecation warnings (Synergy, 3fc1880)
tags: snippets
---

Compiling under Leopard and GCC 4.0 yields various warnings about deprecated APIs and some questionable C constructs. This commit replaces all calls to deprecated APIs with calls to new APIs, and makes other changes to eliminate C-related warnings.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
