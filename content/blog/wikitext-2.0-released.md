---
title: Wikitext 2.0 released
tags: releases wikitext blog
---

A major new version of the [Wikitext](/wiki/Wikitext) gem, version 2.0, is now available. This release offers full support for [Rails](/wiki/Rails) 3 (while retaining support for Rails 2) and conforms fully to the new HTML5 specification (while maintaining backwards compatibility with HTML4/XHTML).

# New features in 2.0

## Full support for Rails 3

-   compatibility with the Rails 3 template handler [API](/wiki/API)
-   use of Rails 3 "hooks" to auto-initialize when listed in the Gemfile

## HTML5 compliance

-   all output is now a valid HTML5 fragment (while retaining compliance with HTML4/XHTML)
-   while `<tt>` tags may still be used in the _input_, we no longer _emit_ `<tt>` tags in the _output_ (`<tt>` was removed from HTML5); we instead output `<code>` tags
-   explicit support for the two HTML5 output syntaxes, HTML (the new default) and XML (available via the new `output_style` setting)

# About the extension

[Wikitext](/wiki/Wikitext) is a fast wikitext-to-[HTML](/wiki/HTML) translator with a syntax very close to that used by [MediaWiki](/wiki/MediaWiki). It is a [Ruby](/wiki/Ruby) extension written with speed and robustness in mind using a [Ragel](/wiki/Ragel)-generated scanner and an extremely fast hand-coded parser, all in [C](/wiki/C). It has an enormous spec suite.

You can browse the source code repo, or download the [gem](/wiki/gem) from the [rubygems.org downloads page](http://rubygems.org/gems/wikitext). For an overview of how to use the extension check out the [RDoc](/wiki/RDoc) [here](http://wikitext.rubyforge.org/). If you have [RubyGems](/wiki/RubyGems) then you can install it with either `gem install wikitext` or `sudo gem install wikitext`.

If you find the extension useful please consider making a [donation](https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=win@wincent.com&item_name=Wikitext+donation&no_note=1&currency_code=EUR&lc=GB) via PayPal to <win@wincent.com>.
