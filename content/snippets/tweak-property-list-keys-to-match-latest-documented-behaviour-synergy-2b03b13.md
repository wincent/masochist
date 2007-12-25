---
title: Tweak property list keys to match latest documented behaviour (Synergy, 2b03b13)
---

Keep in line with latest recommendations in the Apple "Property List Key Reference". At the same time I used wincent-strings-util to regenerate all of the localized variants, which means that the key order and comments are now consistent across al localizations. I also added in the InfoPlist.strings files for localizations which were lacking them (at this stage untranslated).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
