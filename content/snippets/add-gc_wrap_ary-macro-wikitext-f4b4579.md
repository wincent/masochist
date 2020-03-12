---
title: Add GC_WRAP_ARY macro (wikitext, f4b4579)
tags: snippets
---

Clean up Data_Wrap_Struct usage a little by encapsulating the pattern of "call Data_Wrap_Struct() and store return value on stack in a variable marked as volatile" in a macro.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
