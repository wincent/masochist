---
title: Start conversion to Garbage Collection (Synergy, e657e06)
---

As first phase, replace dealloc methods with finalize ones; in fact many of the dealloc methods could be entirely removed, and were.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
