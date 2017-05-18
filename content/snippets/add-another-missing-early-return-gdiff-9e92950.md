---
title: Add another missing early return (gdiff, 9e92950)
tags: snippets
---

During forced failure testing discovered another missing early return; when the installer tool was failure to communicate its process id back to the parent the main appliction wasn't aborting.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
