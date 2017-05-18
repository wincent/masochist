---
title: Correct error in User spec (wincent.com, d55c2c6)
tags: snippets
---

Should have been using delete\_all, not delete(:all); the delete method expects as a parameter the id of the row to be deleted.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
