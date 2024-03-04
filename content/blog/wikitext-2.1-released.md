---
title: Wikitext 2.1 released
tags: releases wikitext blog
cache_breaker: 1
---

A minor update to the [Wikitext](/wiki/Wikitext) gem, version 2.1, is now available. This release adds the ability to apply a `rel="nofollow"` attribute to external links, which [may be useful for search-engine optimization purposes](http://en.wikipedia.org/wiki/Nofollow); for example, if you use wikitext markup in your blog you may wish to add "nofollow" links to all user-submitted comments, but omit them from the content that you yourself write for your blog posts. Thanks to Mike Stangel for submitting the patch to implement this feature.

See [the documentation](/products/wikitext/doc/) for information on how to use this functionality.

# About the gem

[Wikitext](/wiki/Wikitext) is a fast wikitext-to-[HTML](/wiki/HTML) translator with a syntax very close to that used by [MediaWiki](/wiki/MediaWiki). It is a [Ruby](/wiki/Ruby) extension written with speed and robustness in mind using a [Ragel](/wiki/Ragel)-generated scanner and an extremely fast hand-coded parser, all in [C](/wiki/C). It has an enormous spec suite.

You can browse the source code repo, or download the [gem](/wiki/gem) from the [rubygems.org downloads page](http://rubygems.org/gems/wikitext). For an overview of how to use the extension check out the docs [here](/products/wikitext/doc/). If you have [RubyGems](/wiki/RubyGems) then you can install it with either `gem install wikitext` or `sudo gem install wikitext`.

If you find the extension useful please consider making a donation via PayPal.
