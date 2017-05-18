---
title: Run UpdateXibs.sh and integrate old localization info (Synergy, 350ab66)
tags: snippets
---

Set up the initial strings and untranslated.strings files using UpdateXibs.sh. In so far as is possible, I have tried to use the old localization info extracted from a previous release. In many cases this applies cleanly to the new xibs, but there are many where it does not, and these will still need to be updated by hand; even in the cases where the old strings applied cleanly any custom geometry will have to be added back in by hand because this did not carry across.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
