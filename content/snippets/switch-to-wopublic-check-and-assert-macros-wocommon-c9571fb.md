---
title: Switch to WOPublic check and assert macros (WOCommon, c9571fb)
tags: snippets
---

Remove the old assertion macros defined in WOCommon and replace references to them with the new macros provided by WOPublic.

There is now a clear semantic distinction between assertions (debugging aids used only at development-time) and checks (always-enforced confirmations of expectations, present in both debug and release builds). Checks are used in unit tests and wherever a normal assertion would be inadequate (for example, when the assertion is used to uphold an API contract, but can't do so in release builds because it gets preprocessed away to nothing).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
