---
title: Use link target as link text when nothing follows separator (wikitext, 2d744ae)
tags: snippets
---

Without this change we'll end up with empty anchor spans in the case that the user supplies a link like "\[\[foo|\]\]".

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;
