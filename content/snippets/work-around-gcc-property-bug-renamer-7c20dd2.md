---
title: Work around GCC property bug (REnamer, 7c20dd2)
tags: snippets
---

GCC refuses to synthesize a write accessor for one of the properties, so lose the "declare readonly then redeclare as readwrite" pattern for that property only. It's not known why GCC should do this for one and only one of the properties.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
