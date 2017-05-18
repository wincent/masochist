---
title: Make window draggable by background (REnamer, e1f154b)
tags: snippets
---

Seeing as the "background" of the window is actually the NSTableView subclass that fills the entire window, implementing this means overriding the mouseDown method in the subclass and running an event loop to allow the user to drag the window around.

In doing so I'm suppressing selection of table rows, which is not a bad thing seeing as they are not editable or reorderable anyway; I also conveniently sidestep the need to worry about overriding the default selection highlighting behaviour, which isn't appropriate for a HUD panel anyway.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
