---
title: Fix initialization of mutable string in test rig (REnamer, 2b6cf06)
tags: snippets
---

We should be starting with an empty string and populate it as we go. This fixes about 242 test failures.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
