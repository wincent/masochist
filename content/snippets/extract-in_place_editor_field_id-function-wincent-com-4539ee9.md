---
title: Extract in_place_editor_field_id function (wincent.com, 4539ee9)
tags: snippets
---

Rather than hardcoding in two places the id of the field that will be replaced via AJAX, make a helper function that returns the id and call that.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
