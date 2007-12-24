---
title: Avoid stat calls (buildtools, c639a41)
---

Shave off some lines and clean up the code a little by avoiding the stat invocations and using the -nt and -ot test primaries instead.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
