---
title: Additional Leopard-related project changes (Synergy, f2d4f39)
tags: snippets
---

The change to GCC 4.0 from commit da40c00 wasn't really complete because it did not include changes to the "build rules", although they were in my local working copy. I then accidentally threw away those changes by doing a "git checkout -f master" (was puzzled as to why merely "git checkout master" didn't work; was bailing with "not uptodate. Cannot merge."; I had forgotten that my local fix\_deprecation\_warnings branch was actually forked from my leopard\_conversion branch and not from master; in fact, I'd forgotten that there even was a leopard\_conversion branch!; this will teach me to use "git branch" and "git show-branch" more often to remind me where I actually am).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
