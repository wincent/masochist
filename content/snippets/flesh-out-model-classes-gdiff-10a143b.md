---
title: Flesh out model classes (gdiff, 10a143b)
tags: snippets
---

Provide basic implementations of the model classes that are used to represent diffs, and modify the state machine implementation to make use of them. In its current form gdiff can now produce WODiff objects containing a list of WOFile objects which themselves contain a list of WOChange objects for the sample input files (basic diffs); support for special case diffs is still to be added.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
