---
title: Favor member: over containsObject: (Wincent Strings Utility, 40c92d7)
tags: snippets
---

The looser check done by member: (using isEqual:) is more appropriate here than the one done by containsObject: (an identity comparison done using pointer equality, I believe).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
