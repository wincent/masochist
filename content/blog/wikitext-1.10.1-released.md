---
title: Wikitext 1.10.1 released
tags: releases wikitext blog
cache_breaker: 1
---

A new version of the [Wikitext](/wiki/Wikitext) gem, version 1.10.1, is now available. This is a bugfix release which fixes building on 64-bit Darwin machines and corrects the CSS class applied to explicit "mailto" URIs.

[Wikitext](/wiki/Wikitext) is a fast wikitext-to-[HTML](/wiki/HTML) translator with a syntax very close to that used by [MediaWiki](/wiki/MediaWiki). It is a [Ruby](/wiki/Ruby) extension written with speed and robustness in mind using a [Ragel](/wiki/Ragel)-generated scanner and an extremely fast hand-coded parser, all in [C](/wiki/C). It has an enormous spec suite.

You can browse the source code repo or download the [gem](/wiki/gem) from the [rubygems.org downloads page](http://rubygems.org/gems/wikitext). For an overview of how to use the extension check out the [RDoc](/wiki/RDoc) [here](http://wikitext.rubyforge.org/). If you have [RubyGems](/wiki/RubyGems) then you can install it with either `gem install wikitext` or `sudo gem install wikitext`.

If you find the extension useful please consider making a donation via PayPal.
