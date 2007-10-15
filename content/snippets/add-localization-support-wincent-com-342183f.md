---
title: Add localization support (wincent.com, 342183f)
---

This commit adds a Locale class, a Translation class, and corresponding controllers and migrations. It also modifies the application controller so as to set up the locale if possible using a before\_filter. The actual utility methods on the String class are added in lib/string\_additions.rb.

This is only a partial implementation, not a full localization stack. Later on may add special support for localized model attributes and possibly other things if the need arises.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
