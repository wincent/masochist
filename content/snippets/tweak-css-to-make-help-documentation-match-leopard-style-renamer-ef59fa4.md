---
title: Tweak CSS to make help documentation match Leopard style (REnamer, ef59fa4)
tags: snippets
---

These are simple, low-risk changes involving font size, color and weight.

A slightly higher-risk change would be using the CSS3 border-image property to replicate the new "box" style in the Leopard help documentation (higher-risk because it would only work with WebKit; it may be necessary to use it only in the embedded help, which will always be viewed with WebKit by definition, and not use it in the online version, where people might be browsing using Firefox or some other alternative). The alternative to using border-image is to do what Apple does and add a bunch of CSS for each corner and edge, but that's not a very attractive change as it would require lots of source files to be edited and kind of defeats the purpose of CSS.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
