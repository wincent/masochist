---
title: Add alternate methods for adding login items (login-tool, 62e266f)
---

It appears that System Events is broken on Leopard: telling it to add a new login item fails in all three ways that I tried to do so (using the scripting bridge, using raw Apple Events, and even trying from the Script Editor using the script that Apple itself documents as being the way to do it).

So this commit preprocesses the non-working solutions away and falls back to old-fashioned direct manipulation of the loginwindow.plist. This actually is supported by Apple and is listed in their docs as one of the ways of adding login items.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
