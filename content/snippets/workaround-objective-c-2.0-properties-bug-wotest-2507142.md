---
title: Workaround Objective-C 2.0 properties bug (WOTest, 2507142)
tags: snippets
---

It turns out that the public-readonly/private-readwrite property pattern is not broken after all, and a simple workaround is available (redeclare all the attributes "in whole" rather than "in part" as the documentation suggests).

This commit applies the new workaround and references the Radar and test case that correspond to the issue.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt; Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
