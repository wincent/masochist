---
title: Using MediaWiki markup from within MovableType
tags: blog
---

I like to keep an eye on [Gervase Markham's weblog](http://weblogs.mozillazine.org/gerv/). Today he published an article about [converting MediaWiki markup to HTML](http://weblogs.mozillazine.org/gerv/archives/2007/03/mediawiki2html.html).

It turns out that that is something I've wanted to do for some time now. Well, not so much the general markup itself (we already have [Markdown](http://www.wincent.com/knowledge-base/Markdown) for that) but the wiki links where you can write words or phrases surrounded by double square brackets and they'll be turned into links to articles on the wiki.

Thanks to Markham's article I learned about the [Text::MediawikiFormat module](http://search.cpan.org/~dprice/Text-MediawikiFormat-0.05/lib/Text/MediawikiFormat.pm), which is a [Perl](http://www.wincent.com/knowledge-base/Perl) module that can convert text written using [MediaWiki](http://www.wincent.com/knowledge-base/MediaWiki) markup to [HTML](http://www.wincent.com/knowledge-base/HTML) using a simple [API](http://www.wincent.com/knowledge-base/API):

    my $converted = Text::MediawikiFormat::format($text);

I use [MovableType](http://www.wincent.com/knowledge-base/MovableType) to write these weblog entries and I have often wanted to be able to type a wiki-style link to "something" in an entry and have it link to the "something" page on the [Knowledge Base](http://www.wincent.com/knowledge-base/Knowledge%20Base). About 20 minutes of learning the [MovableType](http://www.wincent.com/knowledge-base/MovableType) API later I have a nice little plug-in that allows me to write entries like this one and link to the wiki with ease. It's literally one line of meaningful code; the rest is just plug-in registration and other bookkeeping. The only limitation I've found so far is that it doesn't seem to support the "nowiki" and "pre" directives in the same way that [MediaWiki](http://www.wincent.com/knowledge-base/MediaWiki) does (see tickets [25417](http://rt.cpan.org/Ticket/Display.html?id=25417) and [25418](http://rt.cpan.org/Ticket/Display.html?id=25418)).

See "[Writing a WikiText plug-in for MovableType](http://www.wincent.com/knowledge-base/Writing%20a%20WikiText%20plug-in%20for%20MovableType)" for the not-very-gory details.
