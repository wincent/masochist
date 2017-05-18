---
title: Run "git status" in backticks (buildtools, 2d25c8b)
tags: snippets
---

As mentioned in the last commit (06d81f7), it's simpler just to run "git status" from backticks seeing as it always seems to return a non-zero exit status; running it through the "command" method is an unnecessary complication.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
