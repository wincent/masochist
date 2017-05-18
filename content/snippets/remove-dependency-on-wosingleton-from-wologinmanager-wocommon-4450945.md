---
title: Remove dependency on WOSingleton from WOLoginManager (WOCommon, 4450945)
tags: snippets
---

Give WOLoginManager its own local implementation of the singleton pattern rather than using the abstract one inherited from WOSingleton.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
