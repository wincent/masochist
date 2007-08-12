---
title: Remove newlineCharacterSet method (WOCommon, 34f23e1)
---

The system now implements a newlineCharacterSet method which clashes with the implementation in my NSCharacterSet category, so remove the duplicate method.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
