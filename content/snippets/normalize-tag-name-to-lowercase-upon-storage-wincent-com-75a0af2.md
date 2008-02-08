---
title: Normalize tag name to lowercase upon storage (wincent.com, 75a0af2)
---

This is for consistency. Note that the case-insensitivity of the uniqueness constraints means that it was already impossible to create two tags with names like "Foo" and "foo", but this change rules out different but inconsistent tag names like "Tennis" and "football" (they would be "tennis" and "football" instead).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
