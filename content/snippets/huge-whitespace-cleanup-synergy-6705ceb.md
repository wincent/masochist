---
title: Huge whitespace cleanup (Synergy, 6705ceb)
tags: snippets
---

Massive whitespace cleanup throughout entire codebase (over 15,000 lines in the diff): substitute spaces for tabs, kill trailing whitespace, improve alignment in some places.

In some cases the search for unwanted tabs and trailing whitespace lead to lines containing redundant comments; rather than fixing the whitespace on those lines the entire comment was just removed.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
