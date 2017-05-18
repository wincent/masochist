---
title: Custom string methods for Rails (wikitext, c58b779)
tags: snippets
---

These are the additions to the String class that I've been using in my Rails app. They consist of a "to\_wikitext" method and a shorter "w" alias for it.

"Foo".w

Would evaluate to:

&lt;p&gt;Foo&lt;/p&gt;\\n

This also demonstrates the use of a simple pre-processing phase. In this case I'm looking for strings like "bug \#12" and converting them to "\[\[bug/12|bug \#12\]\]" before handing them over to the wikitext parser, which has the effect of turning text like "bug \#12" into autolinks.

In reality you'd probably provide your own custom implementation seeing as your needs are likely to be different form mine, but this demonstrates the kind of thing that you would do.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
