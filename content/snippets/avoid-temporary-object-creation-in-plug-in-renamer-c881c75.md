---
title: Avoid temporary object creation in plug-in (REnamer, c881c75)
---

Instead of storing the paths in a CFArray (requiring CFString creation, conversion back and forth between file-system representations, and lots of temporary objects) just use raw C strings (UTF-8 strings, actually) and C arrays.

If the contextual menu is slow when used on many thousands of items it definitely won't be because of CF overhead, but because of the Apple Event communication mechanism.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
