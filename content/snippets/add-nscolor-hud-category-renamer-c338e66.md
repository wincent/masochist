---
title: Add NSColor HUD category (REnamer, c338e66)
---

Not sure whether this is a good idea or not so I haven't included this code in the application, but it is a demonstration of how we could get rid of our macros (which re-instantiate the color objects on every use) and replace them with persistent singleton objects.

This is a space-for-time tradeoff which we probably only need to make if profiling indicates that it's required.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
