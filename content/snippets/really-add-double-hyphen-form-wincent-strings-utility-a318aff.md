---
title: Really add double-hyphen form (Wincent Strings Utility, a318aff)
tags: snippets
---

The previous commit didn't go far enough because the Fl macro only appends a single hyphen, so explicitly add another.

Also, for better consistency, use Fl everywhere, not just on optional switches. This means that non-optional switches also appear in bold.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
