---
title: Add extension and description to products model (migration) (wincent.dev, 4eb5a36)
tags: snippets
---

We don't need to store the full path to the icon file but we do need to store the icon file extension; with this we can reconstruct the full path on demand.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;
