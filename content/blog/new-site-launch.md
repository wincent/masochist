---
title: New site launch
tags: site
cache_breaker: 1
---

At the end of last month I completed my migration from my old webhost ([Rackspace](/wiki/Rackspace)) to my new one ([INetU](/wiki/INetU)), but that was only half the story. For some time now I've been working on a custom [Rails](/wiki/Rails) application which would replace the mish-mash of software that I previously used on the old server:

-   [UBB.threads](/wiki/UBB.threads) for the forums
-   [Bugzilla](/wiki/Bugzilla) for the bug tracking and feature requests database
-   [MediaWiki](/wiki/MediaWiki) for the wiki
-   [Movable Type](/wiki/Movable_Type) for the various weblog-like parts of the site (like the news pages, my personal weblog, and my commit log)
-   [Mailman](/wiki/Mailman) for mailing lists
-   a bunch of custom [Perl](/wiki/Perl), [PHP](/wiki/PHP) and [Ruby](/wiki/Ruby) code for all the rest

While these are all fine applications, considered by many to be "best of class", they presented an inconsistent interface and required users to sign up in multiple places if they wanted to participate in all parts of the site.

Now, in their place we have one integrated Rails application that should provide a simplified, unified experience. This initial version is basically an early prototype, but I hope that when it's done it will be more powerful, useful and attractive than what we had before. For now the feature set is very spartan and there is a great deal that I still wish to add — the groundwork for full-text search, for example, is laid down but not yet activated — but the basics are there and things should be usable: you can participate in the forums, the weblog and wiki are up, and the issue tracker is working.

Importantly, almost all the data and user accounts from the old server have been brought over intact (although with some cosmetic glitches in places). If you had an account on the old server you should find that you have one on this one too; got to the [login](/wiki/login) page and hit the "Forgot your passphrase?" link to have an email sent out to you with details on how to choose a new passphrase.

So this is in part the launch of the "new site". The old site is still up (things like the product and purchase pages, for example) and it will be some time before the new site completely takes over, but the basic core of the new site is up and running and should give you an idea of what's to come.
