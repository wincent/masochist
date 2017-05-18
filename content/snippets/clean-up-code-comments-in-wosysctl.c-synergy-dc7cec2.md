---
title: Clean up code comments in WOSysctl.c (Synergy, dc7cec2)
tags: snippets
---

During a GC audit was scanning for the word "release" and a couple of false positives in code comments came up; remove them seeing as they are chatty and superfluous anyway.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
