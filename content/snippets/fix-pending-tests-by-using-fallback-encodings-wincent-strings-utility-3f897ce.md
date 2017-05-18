---
title: Fix pending tests by using fallback encodings (Wincent Strings Utility, 3f897ce)
tags: snippets
---

Instead of using the deprecated NSString stringWithContentsOfFile: method (not sure why no deprecation warnings were being issued) instead use stringWithContentsOfFile:encoding:error:. The problem with the former is that any strings file without a BOM was being interpreted using the normal C string encoding, which was incorrect and would in turn cause parsing to fail.

In this way we can explicitly try NSUTF16StringEncoding (should work for any file that has a BOM) and then fall back to NSUTF16LittleEndianStringEncoding and NSUTF16BigEndianStringEncoding if parsing fails.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
