---
title: RSTRING_PTR and RSTRING_LEN fixes for Ruby 1.8.5 compatibility (wikitext, 7e157f8)
---

Testing on RHEL 5.1, which comes with Ruby 1.8.5, indicates that 1.8.5 doesn't define the RSTRING\_PTR and RSTRING\_LEN macros, so define them if they're not already defined.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
