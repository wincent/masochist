---
title: Speed-up FixtureReplacement (wincent.com, 6c036a7)
tags: snippets
---

Call send() directly rather than update\_attribute(), thus avoiding a potentially expensive save() operation on each attribute.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
