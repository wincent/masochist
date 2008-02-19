---
title: Add ability to set and override image prefix (wikitext, 60c9b60)
---

By default a reference like {{foo.png}} will now create an img tag which sources "/images/foo.png". This can be overridden using the img\_prefix attribute, or by passing an option when initializing the parser. See the specs for a demonstration of the various options.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
