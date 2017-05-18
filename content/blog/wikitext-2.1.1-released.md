---
title: Wikitext 2.1.1 released
tags: releases wikitext blog
cache_breaker: 1
---

A minor bugfix release of the [Wikitext](/wiki/Wikitext) gem, version 2.1.1, is now available. It handles a couple of edge cases in which supplying invalid link markup would cause the unexpected token to be omitted from the output (the desired behavior is for the link to be "rolled back" and the unexpected token to be included in the output so as to provide feedback to the markup author about his/her mistake).

# About the gem

[Wikitext](/wiki/Wikitext) is a fast wikitext-to-[HTML](/wiki/HTML) translator with a syntax very close to that used by [MediaWiki](/wiki/MediaWiki). It is a [Ruby](/wiki/Ruby) extension written with speed and robustness in mind using a [Ragel](/wiki/Ragel)-generated [scanner](http://git.wincent.com/wikitext.git/blob/HEAD:/ext/wikitext_ragel.rl) and an extremely fast [hand-coded parser](http://git.wincent.com/wikitext.git/blob/HEAD:/ext/parser.c), all in [C](/wiki/C). It has an enormous [spec suite](http://git.wincent.com/wikitext.git/tree/HEAD:/spec).

You can browse the source code repo [here](http://git.wincent.com/wikitext.git), or download the [gem](/wiki/gem) from the [rubygems.org downloads page](http://rubygems.org/gems/wikitext). For an overview of how to use the extension check out the docs [here](/products/wikitext/doc/). If you have [RubyGems](/wiki/RubyGems) then you can install it with either `gem install wikitext` or `sudo gem install wikitext`.

If you find the extension useful please consider making a [donation](https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=win@wincent.com&item_name=Wikitext+donation&no_note=1&currency_code=EUR&lc=GB) via PayPal to <win@wincent.com>.
