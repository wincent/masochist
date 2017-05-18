---
title: Remove deprecated method call in NSScanner lexing utilities (WOCommon, 18702b0)
tags: snippets
---

"copy" is now recommended in favor of the deprecated "string" method, but in this case we don't even need to worry about that: just pass back the temporary string, even though it's mutable.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
