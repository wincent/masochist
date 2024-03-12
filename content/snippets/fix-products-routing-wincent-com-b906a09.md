---
title: Fix products routing (wincent.dev, b906a09)
tags: snippets
---

I'd mistakenly used "map.resource" instead of "map.resources" which meant that things like "product_path" didn't work.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;
