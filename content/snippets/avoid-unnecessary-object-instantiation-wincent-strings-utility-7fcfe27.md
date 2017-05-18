---
title: Avoid unnecessary object instantiation (Wincent Strings Utility, 7fcfe27)
tags: snippets
---

There is no need to create a new string object here; we can just return the string object returned to us by the system.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
