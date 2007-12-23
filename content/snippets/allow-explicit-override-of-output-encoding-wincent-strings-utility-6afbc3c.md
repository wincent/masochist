---
title: Allow explicit override of output encoding (Wincent Strings Utility, 6afbc3c)
---

This allows wincent-strings-util to be used as a general "clean up" tool for localizations. For example, a localization might be completed but have excess whitespace and be encoded with a different endianness (ie. the original version is sent to the localizer as little-endian but the localizer uses an editor which saves it in big-endian encoding).

To make performing diffs easier we can use wincent-strings-util to normalize these non-significant differences, hopefully making the task of integrating changes much easier.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
