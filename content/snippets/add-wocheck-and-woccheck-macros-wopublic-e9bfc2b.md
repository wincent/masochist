---
title: Add WOCheck and WOCCheck macros (WOPublic, e9bfc2b)
---

WOCheck is to NSAssert as WOParameterCheck is to NSParameterAssert, and WOCCheck is to NSCAssert as WOCParameterCheck is to NSCParameterAssert. In other words, these are like assertion macros but they are compiled in to both Release and Debug builds. You use them where throwing an exception is not merely helpful to your testing process but is actually necessary to uphold your API contract.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
