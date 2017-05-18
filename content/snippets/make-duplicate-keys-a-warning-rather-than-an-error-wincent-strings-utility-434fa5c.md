---
title: Make duplicate keys a warning rather than an error (Wincent Strings Utility, 434fa5c)
tags: snippets
---

Instead of disallowing duplicate keys during a combine operation, issue a warning and allow the "target" version to take precedence.

This facilitates a common workflow wherein a localization is incomplete and its strings file contains a number of key/value pairs that are unlocalized. In this case those pairs will be extracted with extract() and the partial strings file that results can be localized. When it comes time to integrate the partial file, it is necessary to allow those new strings to override the existing, unlocalized ones in the previous version of the localizations' string file.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
