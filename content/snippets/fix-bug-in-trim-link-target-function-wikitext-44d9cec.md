---
title: Fix bug in "trim link target" function (wikitext, 44d9cec)
tags: snippets
---

This was a bug exposed thanks to a "value computed is not used" warning emitted when building on RHEL 5.1 (but which doesn't appear on Mac OS X or RHEL 3). Although it was a bug, looks harmless enough: basically the leftmost character would be altered instead of the desired behaviour of moving the leftmost boundary. So the worst-case scenario would be an aesthetic glitch in the output, but it turns out that in the spec suite the glitch never appeared in practice.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
