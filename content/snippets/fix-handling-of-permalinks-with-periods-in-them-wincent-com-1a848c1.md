---
title: Fix handling of permalinks with periods in them (wincent.com, 1a848c1)
tags: snippets
---

Rails considers periods to be a route separator, which I think is very unfortunate. Fortunately, you can use the :requirements option in the routes file to override this on a per-resource basis. This means that wiki articles with periods in the title will work, as will tags.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
