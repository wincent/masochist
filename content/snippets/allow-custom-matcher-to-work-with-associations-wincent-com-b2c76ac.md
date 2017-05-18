---
title: Allow custom matcher to work with associations (wincent.com, b2c76ac)
tags: snippets
---

This fixes some more spec failures; basically, associations don't appear in the attributes hash, so testing for mass assignment o such attributes won't work; we have to message the model object directly instead asking for the value of the attribute.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
