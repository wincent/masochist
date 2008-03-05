---
title: Fix products routing (wincent.com, b906a09)
---

I'd mistakenly used "map.resource" instead of "map.resources" which meant that things like "product\_path" didn't work.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
