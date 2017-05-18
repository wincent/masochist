---
title: Add database-level constraints for uniqueness (wincent.com, 163821f)
tags: snippets
---

Seeing as validates\_uniqueness\_of is vulnerable to race conditions, it is really only a bit of UI-level polish; at the level of database integrity we have to rely on real constraints.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
