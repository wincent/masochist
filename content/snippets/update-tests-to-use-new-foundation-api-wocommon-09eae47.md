---
title: Update tests to use new Foundation API (WOCommon, 09eae47)
---

In ripping out my old NSRect-to-CGRect functions I overlooked a couple of places in the test suite where they were still used. This commit replaces those instances with calls to the system-provided functions.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
