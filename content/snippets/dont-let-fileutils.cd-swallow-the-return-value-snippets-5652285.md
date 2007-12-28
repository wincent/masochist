---
title: Don't let FileUtils.cd swallow the return value (snippets, 5652285)
---

Explicitly return the value from the block (the block itself) will evaluate to nil.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
