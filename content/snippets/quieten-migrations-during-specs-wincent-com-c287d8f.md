---
title: Quieten migrations during specs (wincent.com, c287d8f)
tags: snippets
---

One of my specs creates an in-memory SQLite database; prevent ActiveRecord from littering the spec output with progress and profile information by setting the verbose flag.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
