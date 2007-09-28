---
title: Remove private API support code (WOTest, 2e0037d)
---

The signatureWithObjCTypes: method in NSMethodSignature is at last exposed in Leopard, so remove the all the support code that was previously used to (carefully) work with (or around) it and just use the now-official API.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
