---
title: Try multiple encodings in -info/-strings code path (Wincent Strings Utility, fb6f577)
tags: snippets
---

Although we don't strictly need to parse the input file passed in using the -strings switch (as we're just doing a simple find and replace) parse it anyway because in this way we can hopefully get the encoding right on files which don't have BOMs.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
