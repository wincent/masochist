---
title: Add LEFT_CURLY and RIGHT_CURLY symbols (wikitext, dd43eff)
tags: snippets
---

In order to avoid ambiguity we have to separately tokenize single curly braces and exclude them from the standard PRINTABLE rule. Otherwise the greedy matching behaviour would match a run like "foo{{bar}}baz" as a single PRINTABLE token rather than a PRINTABLE, IMG_START, PRINTABLE, IMG_END, PRINTABLE sequence.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;
