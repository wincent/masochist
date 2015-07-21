---
title: Wikitext 4.1.1 and 4.1.2 released
tags: releases wikitext
cache_breaker: 1
---

\[**Update:** A faulty build led to version 4.1.1 shipping with a broken `wikitext` executable; this has been corrected in 4.1.2, although there are no code changes in the gem.\]

A new release of the [Wikitext](/wiki/Wikitext) gem, version 4.1.1, is out. This version adds support for Ruby 2.2.0 (and continues to work on Ruby 2.0.x; for older versions of Ruby, you'll need to use the 3.x series of the Wikitext gem).

See the [release notes for full details](/products/wikitext/doc/file.RELEASE-NOTES.html).

# About the gem

[Wikitext](/wiki/Wikitext) is a fast wikitext-to-[HTML](/wiki/HTML) translator with a syntax very close to that used by [MediaWiki](/wiki/MediaWiki). It is a [Ruby](/wiki/Ruby) extension written with speed and robustness in mind using a [Ragel](/wiki/Ragel)-generated [scanner](http://git.wincent.com/wikitext.git/blob/HEAD:/ext/wikitext/wikitext_ragel.rl) and an extremely fast [hand-coded parser](http://git.wincent.com/wikitext.git/blob/HEAD:/ext/wikitext/parser.c), all in [C](/wiki/C). It has an enormous [spec suite](http://git.wincent.com/wikitext.git/tree/HEAD:/spec).

You can browse the source code repo [here](https://github.com/wincent/wikitext), or download the [gem](/wiki/gem) from the [rubygems.org downloads page](http://rubygems.org/gems/wikitext). For an overview of how to use the extension check out the docs [here](/products/wikitext/doc/). If you have [RubyGems](/wiki/RubyGems) then you can install it with either `gem install wikitext` or `sudo gem install wikitext`.
