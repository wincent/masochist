---
title: Add missing header import (gdiff, 4679d86)
---

Add back in a missing header import. This was actually in there before but I shot myself in the foot trying to amend the last commit (used git-reset when I should have used git-checkout; all I wanted to do was exclude a file from the commit that I really wanted to be in a separate, later commit). In reconstructing the history I missed out the header import. Rather than rewrite the history again I'll just chalk this up as a lesson learned and do this as a separate commit.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
