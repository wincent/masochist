---
title: Force preview window to appear at launch (REnamer, 3c032fa)
---

The preview window won't necessarily appear at launch time unless we force it's associated window to become the main window.

This doesn't seem to work for subsequent "open" events, however (the new window doesn't become main).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
