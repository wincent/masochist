---
title: Safety fixes for check-series script (snippets, 44b1750)
tags: snippets
---

Now refuses to run if there are any staged or unstaged changes, and actually updates both index and working tree back to old HEAD upon finishing (previously we just manipulated the HEAD directly; this was a kludge and incorrect anyway because it didn't touch the index or working tree).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
