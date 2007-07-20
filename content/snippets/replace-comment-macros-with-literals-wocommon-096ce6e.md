---
title: Replace comment macros with literals (WOCommon, 096ce6e)
---

Remove the comment start and end macros which were previoulsy necessary due to an auto-indentation bug in Xcode 2.2.1 (&lt;rdar://problem/4450544&gt;).

In doing so, I also noticed that one of the macros was in fact incorrect (missing a character) although the bug never surfaced in actual use because I never made use of that particular comment mode; the string literal is now corrected.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
