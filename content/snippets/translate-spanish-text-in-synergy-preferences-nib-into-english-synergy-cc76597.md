---
title: Translate Spanish text in Synergy Preferences nib into English (Synergy, cc76597)
---

Leopard's Interface Builder has a new behaviour: when running on a non-English system new nibs are created in the current language rather than English. This true even when the development language is set to English and it's a deviation from the established behaviour in Tiger (and Panther, and Jaguar).

As a result some of the menu items in the 3.5a3 release were in Spanish when they should have been in English. This commit translates them into English.

See:

http://www.wincent.com/a/support/bugs/show\_bug.cgi?id=637

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
