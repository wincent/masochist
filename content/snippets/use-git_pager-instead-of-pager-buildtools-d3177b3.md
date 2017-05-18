---
title: Use GIT_PAGER instead of PAGER (buildtools, d3177b3)
tags: snippets
---

The previous commit (fd2e869) worked but using GIT\_PAGER rather than PAGER is strictly more correct in terms of the intention behind the commit (stopping Git from using the pager).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
