---
title: Wikitext 1.0.3 released
tags: wikitext blog
---

I just pushed out a minor maintenance release of my [wikitext](/wiki/wikitext) module, version 1.0.3. [Wikitext](/wiki/Wikitext) is a fast wikitext-to-[HTML](/wiki/HTML) translator with a syntax very close to that used by [MediaWiki](/wiki/MediaWiki). It is a [Ruby](/wiki/Ruby) extension written with speed and robustness in mind using a [Ragel](/wiki/Ragel)-generated scanner and a hand-coded parser, all in [C](/wiki/C). It has an enormous spec suite.

You can browse the source code repo [here](http://git.wincent.com/wikitext.git), or download the [gem](/wiki/gem) from the [RubyForge](/wiki/RubyForge) [downloads page](http://rubyforge.org/frs/?group_id=5483). For an overview check out the [RDoc](/wiki/RDoc) [here](http://wikitext.rubyforge.org/). After a few hours it should propagate out to the mirrors and you'll be able to install it with `sudo gem install wikitext`.
