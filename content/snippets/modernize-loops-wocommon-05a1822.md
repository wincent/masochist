---
title: Modernize loops (WOCommon, 05a1822)
---

Remove deprecated WO\_ENUMERATE/foreach macros and modernize all loops to use the new Objective-C 2.0 fast enumeration construct. The WO\_REVERSE\_ENUMERATE and WO\_KEY\_ENUMERATE macros are retained because they have no equivalent language-level constructs.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
