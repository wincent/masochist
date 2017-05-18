---
title: Fix WOLog redefinition warning (WOCommon, 1e78769)
tags: snippets
---

Now that WOLog is a macro rather than a global external, one of the definitions is redundant, so remove it.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
