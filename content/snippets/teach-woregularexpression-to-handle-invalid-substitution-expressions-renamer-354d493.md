---
title: Teach WORegularExpression to handle invalid substitution expressions (REnamer, 354d493)
tags: snippets
---

If a substitution is invalid we return nil.

We check for substitution validity at the time when the substitution string is set, to avoid doing it repeatedly in a tight loop when working on many files.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
