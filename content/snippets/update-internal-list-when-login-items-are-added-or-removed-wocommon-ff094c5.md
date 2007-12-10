---
title: Update internal list when login items are added or removed (WOCommon, ff094c5)
---

Add a refreshList method (internal use only) which is called whenever we add or remove a login item.

This also moves some of the addition logic from WOLoginItemList into a new addToList: method in WOLoginItem; in this way each login item can keep track of its corresponding LS ref without breaking encapsulation.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
