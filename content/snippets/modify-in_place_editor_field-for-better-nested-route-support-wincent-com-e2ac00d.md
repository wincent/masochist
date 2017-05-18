---
title: Modify in_place_editor_field for better nested route support (wincent.com, e2ac00d)
tags: snippets
---

Instead of requiring the caller to manually specify the URL, add a ":nested" option which can be passed a model name. The helper method then constructs a URL appropriately.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
