---
title: Rename fileCount member (REnamer, 51930fa)
tags: snippets
---

For consistency with selectedFiles member, this should be called selectedFileCount. Also, move it up higher in the struct (it is more conventional for it to precede the selectedFiles member).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
