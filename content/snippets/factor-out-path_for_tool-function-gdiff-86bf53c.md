---
title: Factor out path_for_tool function (gdiff, 86bf53c)
tags: snippets
---

Move tool-locating code into a separate function where it can be used by both the command-line tool (to locate git-diff) and the GUI tool (to locate git-cat-file).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
