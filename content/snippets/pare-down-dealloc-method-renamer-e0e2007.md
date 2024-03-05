---
title: Pare down dealloc method (REnamer, e0e2007)
tags: snippets
---

In this case most of the old dealloc method is redundant under Garbage Collection; keep only the relevant bit and stick it in a finalize method.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;
