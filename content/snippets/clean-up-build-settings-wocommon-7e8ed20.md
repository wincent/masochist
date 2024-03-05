---
title: Clean-up build settings (WOCommon, 7e8ed20)
tags: snippets
---

At project and target level there were a lot of redundantly-specified build settings which could be omitted and inherited from a higher level, so this commit cleans-up those redundant settings and eliminates some unnecessary overrides.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;
