---
title: Replace prefix header with global header (gdiff, 25903a1)
---

Fall back to standard use of &lt;Cocoa/Cocoa.h&gt; as prefix header and create a separate target-specific global header for target-specific macros.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
