---
title: dSYM
tags: blog
---

Now that I've got [`atosym`](http://www.wincent.com/a/products/atosym/) I will be using DWARF debugging information format across all my products. The key missing piece of the puzzle was realizing that Xcode creates dSYM files using `dsymutil(1)`; so instead of letting Xcode handle it I can do it manually, thus avoiding problems with Xcode trying to create dSYM files on already-stripped executables. The first project to be switched over is [WOTest](http://test.wincent.com/). Next: the new app.
