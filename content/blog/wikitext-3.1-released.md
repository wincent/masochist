---
title: Wikitext 3.1 released
tags: releases wikitext blog
---

A new release of the [Wikitext](/wiki/Wikitext) gem, version 3.1, is out. This is a minor update containing a bugfix for under-escaped ampersands in links, and a minor feature enhancement in which the `link_proc` parse-time option can now be set at initialization or via an accessor.

See the [release notes for more details](/products/wikitext/doc/file.RELEASE-NOTES.html).

# About the gem

[Wikitext](/wiki/Wikitext) is a fast wikitext-to-[HTML](/wiki/HTML) translator with a syntax very close to that used by [MediaWiki](/wiki/MediaWiki). It is a [Ruby](/wiki/Ruby) extension written with speed and robustness in mind using a [Ragel](/wiki/Ragel)-generated scanner and an extremely fast hand-coded parser, all in [C](/wiki/C). It has an enormous spec suite.

You can browse the source code repo [here](/repos/wikitext), or download the [gem](/wiki/gem) from the [rubygems.org downloads page](http://rubygems.org/gems/wikitext). For an overview of how to use the extension check out the docs [here](/products/wikitext/doc/). If you have [RubyGems](/wiki/RubyGems) then you can install it with either `gem install wikitext` or `sudo gem install wikitext`.

If you find the extension useful please consider making a donation via PayPal.
