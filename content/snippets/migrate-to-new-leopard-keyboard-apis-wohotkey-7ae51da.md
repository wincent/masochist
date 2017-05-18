---
title: Migrate to new Leopard keyboard APIs (WOHotKey, 7ae51da)
tags: snippets
---

Some of the old APIs previously used are now deprecated in Leopard. To get a warning free build this commit gets rid of all uses of the old APIs and migrates to the new ones.

Along the way it seems that KCHR resources have become deprecated (at least there is no explicit mention of them in the headers), so the related code has been removed; this is expected to have little effect on the results because KCHR-based code was only used as a fallback when uchr-based lookup failed.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
