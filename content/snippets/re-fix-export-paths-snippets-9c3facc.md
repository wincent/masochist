---
title: Re-fix export paths (snippets, 9c3facc)
---

Commit 1823803 didn't go far enough in fixing the relative path problem in the Synergy nightlies script. Not only were we missing the trailing "src" directory; we were also operating at the wrong depth.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
