---
title: Site improvements
tags: blog
---

Over the last month I've spent a few hours making minor improvements to the navigability of the site. Visitors should now find it a little bit easier to move around the site. These are minor polish details, the kind of stuff you might not even notice unless I told you about it; so here I am to, er, tell you about it.

#### Down with Movable Type search, long live Google search

[Google](http://google.com/) is now so good that it does a better job of searching this site than does the built-in [Movable Type](http://www.movabletype.org/) search functionality. It's better because it's quick, the index is frequently updated, and it allows me to provide a [unified site-wide search](http://wincent.dev/a/site-map/search/) that returns results from all areas of [wincent.dev](http://wincent.dev/), not just the parts that a powered by Movable Type (the Movable Type only search engine probably caused more confusion than anything else, as it wouldn't find pages in the forums, in the bugs and feature requests database, in the mailing list archives or in the [Knowledge Base wiki](http://wincent.dev/wiki/)).

You can access the site wide search by clicking on "[Search](http://wincent.dev/a/site-map/search/)", which appears under the "[Site Map](http://wincent.dev/a/site-map/)" button in the navigation bar at the top of (almost) every page in this site:

![](/system/images/legacy/site-search.png)

#### General cleanup

Fixed some broken links. Fixed a number of places where you could click an item in the "bread crumb" trail that appears below the navigation bar and wind up at a non-existent page; now clicking on such links redirects you to the corresponding archives.

#### Subversion log

The Subversion log which appears in the bottom portion of the left-hand column on my weblog has been significantly improved.

Clicking on an entry in the feed now takes you to a separate page for that entry. Previously there were no such individual pages and you were taken to a gigantic page listing all of the entries.

Now there are individual pages with forward and back links; there is now a [master archive index](http://wincent.dev/a/about/wincent/weblog/svn-log/archives/) with links to month-based archives (all updates for a month on a single page; [example archive](http://wincent.dev/a/about/wincent/weblog/svn-log/archives/2006/11/)). The month-based archives also have forward and back links. Both individual entries and month-based archives also have links which take you back to the master archive index.\
\

#### Mini-log

Much the same treatment has been given to the "Mini-log" in the left-hand column of my weblog.

There are now individual entry pages ([example entry](http://wincent.dev/a/about/wincent/weblog/mini-log/archives/2006/10/interface_build.php)) linked to from the, date-based archives, and a [master archive index](http://wincent.dev/a/about/wincent/weblog/mini-log/archives/index.php) that provides links to the date-based archives.

Individual entries and date based archives feature forward and back links, as well as "up" links to the master archive index.

#### Quick links

Again, improvements to the archives for the "Quick links" section that appears in the left column of the main site news page: individual entry pages ([example](http://wincent.dev/a/news/quick-links/archives/2006/11/flickrexport_fo_4.php)) linked to from the feed with forward and back links, and an "up" link to the [master archive index](http://wincent.dev/a/news/quick-links/archives/) (previously there was just one gigantic page containing all the entries ever posted). The master archive index provides links to new date-based archive pages ([example](http://wincent.dev/a/news/quick-links/archives/2006/10/)).

#### Personal weblog

There were some places where you could hit a non-existent page if you tried moving "up" a level by manually deleting the last component in a URL; now in most of these places you either see an appropriate index or be redirected to the archives.

Most of these "holes" have been filled in thanks to the introduction of date-based archives ([example archive](http://wincent.dev/a/about/wincent/weblog/archives/2006/11/)).

Category archives now show a list of article titles rather than titles plus excerpts ([example](http://wincent.dev/a/about/wincent/weblog/archives/opinion/)); this is to keep the category archive pages down to a reasonable size. The date-based archives should be more reasonable in size, so those do include excerpts as well as titles.

The [master archive index](http://wincent.dev/a/about/wincent/weblog/archives/) is now a set of links to the date-based archives instead of a gigantic long list of titles.

#### Product and site news

The [master archive index](http://wincent.dev/a/news/archives/) for the [product and site news](http://wincent.dev/a/news/) section is now a set of links to the date-based archives instead of a gigantic long list of titles.

#### Parting comments

Please [let me know if you](http://wincent.dev/a/contact/mail/) find any broken links or have any suggestions for other improvements to the navigability of the site.
