---
title: MediaWiki updates
tags: blog
---

Yesterday I updated my [MediaWiki](http://mediawiki.org/) install to the just-released 1.6.4. Today they rolled out 1.6.5. This is not the first time that they've let flaws slip out with a release, requiring a correction immediately afterwards. Let's look at the last month alone:

-   *5 April:* MediaWiki 1.6.0 released
-   *6 April:* MediaWiki 1.6.1 released
-   *8 April:* MediaWiki 1.6.2 released
-   *11 April:* MediaWiki 1.6.3 released
-   *2 May:* MediaWiki 1.6.4 released
-   *3 May:* MediaWiki 1.6.5 released

Unfortunately this is not a little shareware trinket that you download to your desktop machine to play with. This is complex software running on a webserver that is connected to the Internet and accessible by the public. If you don't assiduously apply updates then you run the risk of each unpatched security problem or bug turning into a hole that provides attackers with a way into your server.

Basically that means that when [Brion Vibber](http://www.mediawiki.org/wiki/User:Brion_VIBBER) (the MediaWiki maintainer) decides to release a new version of MediaWiki then you should upgrade or face the consequences at your peril. The fact that this is a remote install and not a drag-and-drop installation makes this less than convenient, even with the help of [Subversion-based upgrades](http://www.mediawiki.org/wiki/Download_from_SVN).

So I'm hoping that in the future months Brion can keep the number of releases down to a much more reasonable number, like one per month.
