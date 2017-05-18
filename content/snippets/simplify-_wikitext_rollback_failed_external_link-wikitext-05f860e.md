---
title: Simplify _Wikitext_rollback_failed_external_link (wikitext, 05f860e)
tags: snippets
---

Now this function too only takes one parameter and can't be made any simpler. While making this change I noticed that the "mailto\_class" instance variable wasn't being used, so this commit incorporates the necessary modifications to remedy that.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
