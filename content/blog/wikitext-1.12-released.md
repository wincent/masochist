---
title: Wikitext 1.12 released
tags: releases wikitext blog
---

A new version of the [Wikitext](/wiki/Wikitext) gem, version 1.12, is now available. This is a maintenance release which includes a small tweak in preparation for the imminent Rails 3 final release; specifically the strings returned by the `String#w` and `String#to_wikitext` are now marked as "HTML safe" when running under Rails 3. This is a convenience which should make the move from Rails 2 to Rails 3 fairly comfortable for most Wikitext users.

There is still one outstanding issue, involving changes to the templating API in Rails 3; so expect at least one more Wikitext release before Rails 3 can be considered to be fully supported, hopefully within the next day or so.

[Wikitext](/wiki/Wikitext) is a fast wikitext-to-[HTML](/wiki/HTML) translator with a syntax very close to that used by [MediaWiki](/wiki/MediaWiki). It is a [Ruby](/wiki/Ruby) extension written with speed and robustness in mind using a [Ragel](/wiki/Ragel)-generated [scanner](http://git.wincent.com/wikitext.git/blob/HEAD:/ext/wikitext_ragel.rl) and an extremely fast [hand-coded parser](http://git.wincent.com/wikitext.git/blob/HEAD:/ext/parser.c), all in [C](/wiki/C). It has an enormous [spec suite](http://git.wincent.com/wikitext.git/tree/HEAD:/spec).

You can browse the source code repo [here](http://git.wincent.com/wikitext.git), or download the [gem](/wiki/gem) from the [rubygems.org downloads page](http://rubygems.org/gems/wikitext). For an overview of how to use the extension check out the [RDoc](/wiki/RDoc) [here](http://wikitext.rubyforge.org/). If you have [RubyGems](/wiki/RubyGems) then you can install it with either `gem install wikitext` or `sudo gem install wikitext`.

If you find the extension useful please consider making a [donation](https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=win@wincent.com&item_name=Wikitext+donation&no_note=1&currency_code=EUR&lc=GB) via PayPal to <win@wincent.com>.
