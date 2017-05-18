---
title: Update WOProxy for Objective-C 2.0 (WOCommon, 87ce76e)
tags: snippets
---

Replace deprecated API calls with appropriate alternatives from Leopard. Also remove methods no longer relevant under garbage collection; in addition the "allocWithZone:" method was replaced with "alloc" because zones don't have meaning under garbage collection.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
