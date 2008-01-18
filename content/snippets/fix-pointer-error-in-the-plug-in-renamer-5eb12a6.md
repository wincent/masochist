---
title: Fix pointer error in the plug-in (REnamer, 5eb12a6)
---

We were copying to argv\[1\] when we really wanted to copy to &argv\[1\].

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
