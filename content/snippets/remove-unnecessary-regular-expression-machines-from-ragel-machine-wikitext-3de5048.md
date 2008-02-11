---
title: Remove unnecessary regular expression machines from Ragel machine (wikitext, 3de5048)
---

I just learned that the "i" (case-insensitive) modifier can be applied equally to standard concatenation literals as it can to regular expressions. Simplify the grammar (fewer escape sequences) and make life easier on the syntax highlighter by replacing the regular expression machines with concatentation literals. The generated code is identical before and after.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
