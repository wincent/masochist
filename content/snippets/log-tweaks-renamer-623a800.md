---
title: Log tweaks (REnamer, 623a800)
tags: snippets
---

Prefix all log messages with "REnamer" so as to distinguish them from other messages emitted by the Finder to the console.

We only want to use the log function to notify of real errors that impede functionality, so as to keep console noise down to a minimum.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
