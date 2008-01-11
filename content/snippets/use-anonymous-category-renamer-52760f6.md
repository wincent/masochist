---
title: Use anonymous category (REnamer, 52760f6)
---

This fixes the mysterious GCC issue mentioned in 7c20dd2. Evidently, the @synthesize directive only synthesizes accessors which have been declared in the exact same class or category interface. Anonymous categories are evidently an exception to this rule.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
