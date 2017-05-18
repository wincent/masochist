---
title: Handle pathological case in post permalink generation (wincent.com, e4136b1)
tags: snippets
---

Handle case where the suggested permalink evaporates away to nothing due to the presence of illegal charactes and nothing else. There are actually two eventualities here: one where the record has never been saved and doesn't even have an id to fall back to (here we use the word "post" as a starting point); the other where the record does have an id and we can use that.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
