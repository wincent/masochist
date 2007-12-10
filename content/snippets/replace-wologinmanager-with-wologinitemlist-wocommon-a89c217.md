---
title: Replace WOLoginManager with WOLoginItemList (WOCommon, a89c217)
---

The new Launch Services API for managing login items is well suited to encapsulation in two classes: WOLoginItem (previously added) and WOLoginItemList (added in this commit). This makes all of the API previously implemented in the WOLoginManager class redundant, so remove the class.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
