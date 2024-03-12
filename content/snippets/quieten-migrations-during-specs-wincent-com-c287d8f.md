---
title: Quieten migrations during specs (wincent.dev, c287d8f)
tags: snippets
---

One of my specs creates an in-memory SQLite database; prevent ActiveRecord from littering the spec output with progress and profile information by setting the verbose flag.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;
