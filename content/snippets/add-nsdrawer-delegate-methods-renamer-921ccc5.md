---
title: Add NSDrawer delegate methods (REnamer, 921ccc5)
tags: snippets
---

It appears that the automatic resizing of open drawers when the parent window resizes is broken on Leopard (at least, I can't remember it being like this under Tiger and I have seen one mailing list post from someone describing the same problem on Leopard).

The docs would suggest that the delegate should receive a drawerWillResizeContents:toSize: message whenever the parent window is resized, but no such messages are received.

I am not sure whether this is a big enough deal to implement a work around just yet, so for now just making note of this here and in the code.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
