---
title: More consistent normalization of Unicode forms (REnamer, a1ecf6e)
---

This commit includes tests to probe the Unicode normalization issues and fixes to get them all passing. I believe that normalization is now applied everywhere it needs to be.

The key change is that WOCreateMatchDictionary has been changed to work using byte ranges rather than character ranges. A nice side effect is that the WOCharacterCountForUTF8String function can be entirely removed.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
