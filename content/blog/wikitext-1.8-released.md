---
title: Wikitext 1.8 released
tags: wikitext blog
---

A new version of the [Wikitext](/wiki/Wikitext) gem, version 1.8, is now available. It adds one new feature — the ability to specify a CSS class on `<pre></pre>` blocks so that they can be targeted by [JavaScript](/wiki/JavaScript), or other, syntax-highliters — and some performance enhancements. See the [high-level](http://wikitext.rubyforge.org/files/doc/RELEASE-NOTES.html) or [low-level release notes](http://rubyforge.org/frs/shownotes.php?group_id=5483&release_id=34957) for more details.

[Wikitext](/wiki/Wikitext) is a fast wikitext-to-[HTML](/wiki/HTML) translator with a syntax very close to that used by [MediaWiki](/wiki/MediaWiki). It is a [Ruby](/wiki/Ruby) extension written with speed and robustness in mind using a [Ragel](/wiki/Ragel)-generated scanner and a hand-coded parser, all in [C](/wiki/C). It has an enormous spec suite.

You can browse the source code repo, or download the [gem](/wiki/gem) from the [RubyForge](/wiki/RubyForge) [downloads page](http://rubyforge.org/frs/?group_id=5483). For an overview of how to use the extension check out the [RDoc](/wiki/RDoc) [here](http://wikitext.rubyforge.org/). If you have [RubyGems](/wiki/RubyGems) then you can install it with `sudo gem install wikitext`.

If you find the extension useful please consider making a donation via PayPal.
