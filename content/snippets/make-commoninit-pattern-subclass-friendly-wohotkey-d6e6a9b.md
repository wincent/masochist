---
title: Make "commonInit" pattern subclass-friendly (WOHotKey, d6e6a9b)
tags: snippets
---

The "commonInit" pattern previously used by the WOHotKeyCaptureTextField and WOHotKeyCaptureTextFieldCell classes could produce unexpected results if anyone ever tried to create a subclass that itself called a "commonInit" method.

This commit proofs these classes against that (albeit highly unlikely) possibility by using a class-specific name for the commonInit method. In this way the shared initialization code is still kept in one place, in a "subclass-friendly" way.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
