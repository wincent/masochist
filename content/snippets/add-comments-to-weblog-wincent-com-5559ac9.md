---
title: Add comments to weblog (wincent.com, 5559ac9)
tags: snippets
---

This required some nasty dynamic programming due to the nature of nested polymorphic associations. Basically if you want to avoid having to repeat basically the same comment form for all your "commentable" models (which would almost entirely defeat the purpose of having a polymorphic comments model in the first place) then you have to jump through some hoops at runtime to figure out which resource you are nested inside at runtime.

The other change which tags along for the ride here is per-page page title overrides.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
