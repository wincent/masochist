---
title: Use Wincent Icon Utility for setting custom folder icons (buildtools, 9abc011)
---

The most recent update to the Xcode Tools breaks the previously existing mechanism for applying custom icons to folders.

I've developed a custom Foundation/Carbon tool to replace the old procedure; this commit switches over buildtools to use the new tool. I will document the new dependency in another commit.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
