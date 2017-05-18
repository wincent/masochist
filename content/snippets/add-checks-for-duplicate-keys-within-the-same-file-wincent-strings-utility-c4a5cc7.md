---
title: Add checks for duplicate keys within the same file (Wincent Strings Utility, c4a5cc7)
tags: snippets
---

Emit error messages during parsing if duplicate keys found. This is a serious-enough problem to warrant issuing an error rather than a mere warning, but we continue processing anyway.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
