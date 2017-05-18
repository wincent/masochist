---
title: Wikitext 4.0 released
tags: releases wikitext blog
---

A new release of the [Wikitext](/wiki/Wikitext) gem, version 4.0, is out. The major version number has been bumped because this release breaks compatibility with versions of [Ruby](/wiki/Ruby) prior to 2.0.0. For older versions of Ruby the 3.x series will continue to be supported and available from RubyGems with a `[sudo] gem install wikitext --version 3.1` or similar.

The reason I'm doing it this way is to avoid the overhead of maintaining a single package which is compatible across multiple versions of Ruby; this is a trade off I need to make because I only have time for [open source](/wiki/open_source) projects like Wikitext outside of my fulltime day-job at [Causes](/wiki/Causes).

See the [release notes for more details](/products/wikitext/doc/file.RELEASE-NOTES.html).

# About the gem

[Wikitext](/wiki/Wikitext) is a fast wikitext-to-[HTML](/wiki/HTML) translator with a syntax very close to that used by [MediaWiki](/wiki/MediaWiki). It is a [Ruby](/wiki/Ruby) extension written with speed and robustness in mind using a [Ragel](/wiki/Ragel)-generated [scanner](http://git.wincent.com/wikitext.git/blob/HEAD:/ext/wikitext_ragel.rl) and an extremely fast [hand-coded parser](http://git.wincent.com/wikitext.git/blob/HEAD:/ext/parser.c), all in [C](/wiki/C). It has an enormous [spec suite](http://git.wincent.com/wikitext.git/tree/HEAD:/spec).

You can browse the source code repo [here](http://git.wincent.com/wikitext.git) or [here](/repos/wikitext), or download the [gem](/wiki/gem) from the [rubygems.org downloads page](http://rubygems.org/gems/wikitext). For an overview of how to use the extension check out the docs [here](/products/wikitext/doc/). If you have [RubyGems](/wiki/RubyGems) then you can install it with either `gem install wikitext` or `sudo gem install wikitext`.

If you find the extension useful please consider making a [donation](https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=win@wincent.com&item_name=Wikitext+donation&no_note=1&currency_code=EUR&lc=GB) via PayPal to <win@wincent.com>.
