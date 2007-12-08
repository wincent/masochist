---
title: Switch to buildtools-based configuration (Synergy, 3d41f2f)
---

To make sure the Garbage Collection conversion is as consistent as possible, switch to a buildtools-based configuration, cleaning out as many custom build settings as possible at the same time (one of these is BASE\_DIR, which has been replaced with SRCROOT).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
