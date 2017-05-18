---
title: Teach options processor to handle nil values (wikitext, 15a3470)
tags: snippets
---

Previously when looking at the options hash we had no way of distinguishing but nil ("unset") and nil ("explicitly set to nil"). Now we explicitly check for the latter so that overriding is a little easier; the caller can set options to nil in order to suppress them.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
