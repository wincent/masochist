---
title: Modernize loops (WOCommon, 05a1822)
tags: snippets
---

Remove deprecated WO_ENUMERATE/foreach macros and modernize all loops to use the new Objective-C 2.0 fast enumeration construct. The WO_REVERSE_ENUMERATE and WO_KEY_ENUMERATE macros are retained because they have no equivalent language-level constructs.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;
