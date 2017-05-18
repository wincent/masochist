---
title: The future
tags: blog
---

I haven't been posting updates to the "Mini-log" (visible in the box on the left-hand side of my [weblog](http://colaiuta.net/)) lately because I've been working on some big changes to the back end of the site (basically, a Rails re-write of *absolutely everything*). This is a huge task and I haven't wanted to make too many posts using the old tools knowing that I'd just have to migrate everything in the future anyway.





#### The problem

For a long time I haven't liked the fact that this website uses so many different pieces of software — [Bugzilla](http://www.bugzilla.org/) for the [bug tracker](http://bugs.wincent.com/), [Movable Type](http://www.sixapart.com/movabletype/) for the weblog and weblog-like parts of the site, [UBB.threads](http://www.ubbcentral.com/) for the [forums](http://forums.wincent.com/), [Mailman](http://www.gnu.org/software/mailman/index.html) for the [mailing lists](http://lists.wincent.com/), Perl scripts for the registration back end, hand-coded PHP for the rest — and none of them share a common authentication infrastructure, customization format or even a common language.

In other words, if users want to retrieve a lost license code they enter their email address, but if they want to file a bug report and post in the forums they must create two accounts. Subscribing to a mailing list involves yet another password. It would be nice if users could have just one account and use it to access absolutely everything.

The other problem is that all these separate technologies have no common parts, making customization difficult. Bugzilla is written in Perl, Mailman in Python, UBB.threads is written in PHP, and MovableType is written in Perl (with some PHP). I've done my best to provide a consistent look and feel across the entire site but there are limitations.

In addition, instead of keeping just one codebase up-to-date I'm forced to track security patches and other updates for multiple pieces of software.

#### The solution

A couple of weeks ago I stumbled across the [Hog Bay Software](http://hogbaysoftware.com/) website and was impressed by two things: the uniform look and integration across the entire site (which [I soon learned](http://www.hogbaysoftware.com/node/1413) was powered by [Drupal](http://www.drupal.org/)), and their innovative and novel approach (what they call "[user-powered software](http://www.hogbaysoftware.com/node/75)").

I looked at Drupal (not for the first time) and decided it wasn't exactly what I was looking for. It's written in PHP (not my favourite), is probably too big and unnecessarily complicated for my needs, and it would be a lot of work to move to Drupal and I'd still be faced with the problem of integrating my registration back end.

But my desire for unifying everything into a single piece of software was as strong as ever and perhaps even stronger given that I had recently added [MediaWiki](http://www.mediawiki.org/) to the line-up of software powering my website (I finally gave in and admitted that a wiki would be a much better engine for the [Knowledge Base](http://www.wincent.com/a/knowledge-base/) part of the website; the new Knowledge Base is a fresh install of MediaWiki, almost empty, but you can [take a sneak peek at it here](http://www.wincent.com/knowledge-base/) if you're interested).

[Ruby on Rails](http://www.rubyonrails.org/) is a powerful web framework with the emphasis on *rapid* application development. Would it live up to the hype? Could I use it to write an entirely new website back end — tantamount to writing my own issue tracker, forums software, weblog software, wiki software... a huge task in anyone's book — in a not-inordinate amount of time?

I decided to give it a try. So over the last few weeks I have been experimenting with Rails (ironically, requiring me to learn Ruby at the same time, but I can already see Ruby becoming my favorite scripting language). If the experiment works then you'll eventually see a brand new, unified website for which you can use a single account to access absolutely everything: forums, wikis, weblogs, issues (support tickets, bug reports, feature requests) and so on.

If the experiment doesn't work then it just means that I'll have learnt Ruby and Rails for nothing... I don't think that's too high a price to pay. I'm very impressed with what I've learnt of Rails so far, and I believe it is possible to do what I want. The need to keep the project simple (doable by a single person) is constantly in my mind and I think it will lead to a very simple, clean interface (nothing like [this](http://www.wincent.com/a/support/bugs/query.cgi?format=advanced)).

#### Event log

So although activity on the website has been minimal of late I've actually been incredibly busy behind the scenes. It's really a case of too much work and not enough time to do it all.

I mean to get the [Synergy](http://synergy.wincent.com/) 3.0 update out in the first half of this month, but I've also got a [Synergy Advance](http://www.wincent.com/a/products/synergy-advance/) update 90% done which I'd like to get out soon but that's been slowed down because I've been working on a brand new, to-be-announced product that I expect to release in the first half of this month (about 75% done at this point). And there's another unreleased product (about 50% done) that has been hanging around on the back burner for a long while that I'd like to get onto soon. Also on the "must ship soon" list are updates to WinHex (already done, but administrative chores have to be dealt with before release) and [Bansshee](http://www.wincent.com/a/products/bansshee/) (again, the software is done but before release I have to finish the documentation and supporting material).

Also waiting in the wings: [WOTest](http://test.wincent.com/) (which I am thinking of renaming to WOSpec after seeing [this presentation](http://video.google.com/videoplay?docid=8135690990081075324); see also [this article](http://blog.daveastels.com/files/BDD_Intro.pdf)) and a new version of [Wincent Strings Utility](http://strings.wincent.com/) with powerful new InfoPlist preprocessing support and bugfixes. Both of these pieces of software are done and being used in-house here, but I haven't had the time to prepare release packages and all the supporting material that goes with them.

Some of the latest notable activity (most recent activity first):

-   Movable Type 3.31 upgrade.
-   Purchased a license for [SuperDuper!](http://www.shirt-pocket.com/SuperDuper/SuperDuperDescription.html).
-   [MySQL upgrade from 4.1.20 to 4.1.21](http://www.wincent.com/knowledge-base/Upgrading_from_MySQL_4.1.20_to_4.1.21_on_Red_Hat_Enterprise_Linux) (first attempt failed due to MySQL packaging flaw; second attempt with corrected package succeeded)
-   Wrote tool for PHP-to-HTML conversion and preparation of Apple Help Indices.
-   Bug fixes to [Wincent Strings Utility](http://strings.wincent.com/).
-   `WORegularExpression`, a ([PCRE](http://www.pcre.org/)) wrapper class.
-   Learnt the API for adding a contextual menu plug-in to the Finder.
-   A huge amount of work on [anti-spam measures](http://www.wincent.com/knowledge-base/Combating_spam), requiring me to do a lot of learning about [Sendmail](http://www.wincent.com/a/kb/index.php?title=Special:Search&ns0=1&redirs=0&searchx=1&search=Sendmail&limit=500&offset=0)
