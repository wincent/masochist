---
title: Make "special link" matching a little stricter (wikitext, 9012ad4)
---

Expect "special links" to conform to a narrower syntax, /\\A\[a-z\]+\\/\\d+\\z/, to minimize the risk of false positives.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
