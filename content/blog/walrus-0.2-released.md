---
title: Walrus 0.2 released
tags: walrus releases blog
cache_breaker: 1
---

I just pushed out version 0.2 of the [Walrus](/wiki/Walrus) gem. This is a maintenance release which doesn't include any new features or even bugfixes. It is largely just work towards Ruby 1.9 compatibility, but there is still more required, so for now this continues to be a Ruby 1.8-only project.

Walrus is an [object-oriented templating](/wiki/object-oriented_templating) system written in [Ruby](/wiki/Ruby) and heavily inspired by the [Cheetah template engine](/wiki/Cheetah_template_engine) (written in [Python](/wiki/Python)). It doesn't set out to be a full clone of Cheetah, but it does implement a very large subset of its functionality, and it employs the same directive syntax wherever possible.

Object-oriented templating is one of those brilliant, flash-of-insight kind of ideas that once you've grasped them, you find it difficult to think about working in any other way. I've written about this previously (eg. [here](http://www.wincent.com/a/about/wincent/weblog/archives/2006/10/objectoriented.php) and [here](http://www.wincent.com/a/about/wincent/weblog/archives/2007/04/payoff_time.php)), but I'll try to come up with a more up-to-date post on their benefits at some point in the not-too-distant future.

# Future plans

Walrus development has been quiet (almost dead) for the last few years because with the 0.1 release it was already where I needed it to be for the purposes of generating help documentation for my apps. There *are* things that could be done to improve it — things like Ruby 1.9 support or a faster parser — but seeing as Walrus is just a tool that is part of the build process, and is neither performance-critical nor does it require any dazzling new functionality, I couldn't really justify spending any more time on it.

Nevertheless, now that I've been using [Wikitext](/wiki/Wikitext) markup on this website for years now, I have become so dependent on it that I just can't stomach the idea of having to maintain documentation using Textile markup. So that is at least one change (Wikitext markup support) that is definitely in the wind for Walrus. I still need to decide how I am going to go about doing this, but I am thinking that a plug-in system might actually be the way to go (ie. a plugin mechanism would be used to add an entirely new `#wikitext` directive to the parser).

While I'm at it, I will also try to get around to some other features that have long been on the "to do" list, such as Ruby 1.9 compatibility, extraction of the PEG parser generator into a separate gem, and possibly even replacing the parser with a much faster [Ragel](/wiki/Ragel)-generated lexer and hand-coded parser. Those things, however, are definitely going to be long-term, low-priority undertakings.

# See also

For more information see the [Walrus](/wiki/Walrus) product pages.
