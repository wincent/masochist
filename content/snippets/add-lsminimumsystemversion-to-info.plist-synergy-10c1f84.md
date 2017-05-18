---
title: Add LSMinimumSystemVersion to Info.plist (Synergy, 10c1f84)
tags: snippets
---

The installer used to advise the user if the system did match the minimum requirements; now that this is a standalone application we instead rely on the system to do so thanks to the LSMinimumSystemVersion key in the Info property list.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
