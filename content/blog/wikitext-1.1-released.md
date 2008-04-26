---
title: Wikitext 1.1 released
tags: wikitext
cache_breaker: 1
---

Yesterday I pushed out a minor feature release of my [wikitext](/wiki/wikitext) module, version 1.1. The principal enhancement in this release is the addition of a special tokenizer for the purposes of performing full-text search indexing of wikitext markup. More [detailed release notes](http://rubyforge.org/frs/shownotes.php?release_id=21531) are also available.

[Wikitext](/wiki/Wikitext) is a fast wikitext-to-[HTML](/wiki/HTML) translator with a syntax very close to that used by [MediaWiki](/wiki/MediaWiki). It is a [Ruby](/wiki/Ruby) extension written with speed and robustness in mind using a [Ragel](/wiki/Ragel)-generated scanner and a hand-coded parser, all in [C](/wiki/C). It has an enormous spec suite.

You can browse the source code repo [here](http://git.wincent.com/wikitext.git), or download the [gem](/wiki/gem) from the [RubyForge](/wiki/RubyForge) [downloads page](http://rubyforge.org/frs/?group_id=5483). For an overview check out the [RDoc](/wiki/RDoc) [here](http://wikitext.rubyforge.org/). If you have [RubyGems](/wiki/RubyGems) then you can install it with `sudo gem install wikitext`.
