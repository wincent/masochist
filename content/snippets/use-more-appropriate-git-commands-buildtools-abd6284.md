---
title: Use more appropriate Git commands (buildtools, abd6284)
tags: snippets
---

Update git.rb to use commands which are a better match for the goals that git.rb is trying to achieve (ie. "git rev-parse --short" swapped in for "git show --pretty=format", "git diff --quiet" swapped in for "git status").

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
