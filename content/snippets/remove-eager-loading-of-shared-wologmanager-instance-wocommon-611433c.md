---
title: Remove eager loading of shared WOLogManager instance (WOCommon, 611433c)
---

For faster startup times and greater simplicity, remove the eager loading of the shared WOLogManager instance.

I did consider instead eagerly loading a lightweight proxy which would allow the deferral of loading the real log manager until first use, but in the end this wasn't the simplest thing which would work (a macro).

The shared manager access already occurs via a thread-safe double-checked locking method with memory barriers, so it should be both fast and safe. In this light the macro is the sanest solution.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
