---
title: Wikitext 1.7 released
tags: wikitext
---

A new version of the [Wikitext](/wiki/Wikitext) gem, version 1.7, is now available. It contains a couple of bugfixes and a sizeable rewrite of the internals leading to a [big performance boost](/blog/wikitext-speed-improvements) (double the speed or more in many cases). See the [high-level](http://wikitext.rubyforge.org/files/doc/RELEASE-NOTES.html) or [low-level release notes](http://rubyforge.org/frs/shownotes.php?release_id=34439) for more details.

[Wikitext](/wiki/Wikitext) is a fast wikitext-to-[HTML](/wiki/HTML) translator with a syntax very close to that used by [MediaWiki](/wiki/MediaWiki). It is a [Ruby](/wiki/Ruby) extension written with speed and robustness in mind using a [Ragel](/wiki/Ragel)-generated [scanner](http://git.wincent.com/wikitext.git?a=blob;f=ext/wikitext_ragel.rl;hb=HEAD) and a [hand-coded parser](http://git.wincent.com/wikitext.git?a=blob;f=ext/parser.c;hb=HEAD), all in [C](/wiki/C). It has an enormous [spec suite](http://git.wincent.com/wikitext.git?a=tree;f=spec;hb=HEAD).

You can browse the source code repo [here](http://git.wincent.com/wikitext.git), or download the [gem](/wiki/gem) from the [RubyForge](/wiki/RubyForge) [downloads page](http://rubyforge.org/frs/?group_id=5483). For an overview of how to use the extension check out the [RDoc](/wiki/RDoc) [here](http://wikitext.rubyforge.org/). If you have [RubyGems](/wiki/RubyGems) then you can install it with `sudo gem install wikitext` (although it may take some time before the new version has propagated out to all the gem servers).

If you find the extension useful please consider making a [donation](https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=win@wincent.com&item_name=Wikitext+donation&no_note=1&currency_code=EUR&lc=GB) via PayPal to <win@wincent.com>.
