---
title: Pare down dealloc method (REnamer, e0e2007)
---

In this case most of the old dealloc method is redundant under Garbage Collection; keep only the relevant bit and stick it in a finalize method.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
