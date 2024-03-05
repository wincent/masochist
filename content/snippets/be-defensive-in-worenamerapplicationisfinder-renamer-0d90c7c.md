---
title: Be defensive in WOREnamerApplicationIsFinder() (REnamer, 0d90c7c)
tags: snippets
---

Be prepared for NULL return values from the CF function calls. It's possible that in applications other than the Finder we could receive NULL here.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;
