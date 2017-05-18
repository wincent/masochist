---
title: Keeping up to date
tags: blog
---

There a number of official channels for keeping up-to-date with what's happening with Wincent products, both the public face of things (product releases and updates) and the behind-the-scenes aspects (development activity, technical articles).





#### Official product and site news

The official product and site news weblog is located at <http://www.wincent.com/a/news/>. You can get to it from almost every page on this website by clicking the "News" button in the navigation bar that spans to the top of most pages. As a shortcut, you can also get there via automatic redirection when you visit [wincent.org](http://wincent.org/), a historical wink to the fact that before entering the software business I edited a popular news, rumors and commentary weblog at wincent.org.

An [XML feed](feed://wincent.com/a/news/atom.xml) of the product and site news weblog is also available.

#### Mailing lists

An alternative means of finding out about new product releases and updates is to subscribe to one of the opt-in mailing lists. The purpose and functioning of the lists are described [on this page](http://www.wincent.com/a/support/lists/) and you can subscribe or browse the archives by visiting <http://lists.wincent.com/>.

#### Wincent Colaiuta's personal weblog

I also maintain a personal weblog at <http://www.wincent.com/a/about/wincent/weblog/> (shortcut: [colaiuta.net](http://colaiuta.net/); [XML feed](feed://wincent.com/a/about/wincent/weblog/atom.xml)). The vast majority of posts are about my development work and provide a sneak peak at the problems I am working on and the progress that I am making behind the scenes.

#### Mini-log

In a sidebar on the left-hand side of [my personal weblog](http://colaiuta.net/) you can find the "Mini-log". This is where I post quick comments or links that are too short to warrant a full entry on my weblog. A separate feed for the Mini-log is [available here](feed://wincent.com/a/about/wincent/weblog/mini-log/atom.xml), and the archives can be found [here](http://www.wincent.com/a/about/wincent/weblog/mini-log/archives/).

#### Git log (formerly the Subversion log)

For an extremely low-level look at the development work I'm doing you can check out my "Git log" (formerly called the "Subversion log"). This appears in the sidebar of [my personal weblog](http://colaiuta.net/), below the "Mini-log". The Git log shows the commit log messages that accompany every finalized set of changes to the code bases for my products. The general pattern is to work on a discrete set of changes and then "commit" them to the repository when they reach some sort of important milestone; the "milestone" may be something as simple as the elimination of a particular compiler warning during the build or the addition of a new file, and they can be as significant as implementing a big new feature or importing an entirely new product into the repository. For more information see this [brief outline of Subversion](http://www.wincent.com/knowledge-base/Subversion) and [Git](http://www.wincent.com/knowledge-base/Git).

A feed is [available](feed://wincent.com/a/about/wincent/weblog/svn-log/atom.xml) of the Git log, as are [archives](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/).

The Git log was [set up](http://www.wincent.com/knowledge-base/Setting_up_a_Subversion_RSS_feed) in late September 2006, so the archives start from that date. The name change from "Git log" to "Subversion log" took place in mid-July 2007, and there are quite a few articles on Git in my weblog [archives for that month](http://www.wincent.com/a/about/wincent/weblog/archives/2007/07/).

#### Gitweb

Along with the move from Subversion to Git we get a nice web-based interface for browsing the public source code repositories which correspond to the open source projects used in my development. The Gitweb interface can be found at [git.wincent.com](http://git.wincent.com/) and provides multiple ways of viewing the repository and its history, including RSS feeds.

#### Nightly builds

In the right-hand column of my [weblog](http://colaiuta.net/) you'll see a section labelled "Nightlog". This is a collection of links to the latest automated nightly builds that have been uploaded to the server. If you click on those links you'll see a disclaimer like this one:

> Nightly builds are generated once per day by an automated system; they are not official releases and they receive no human testing prior to being uploaded. They are provided with no warranty of any kind; use them at your own risk.

An [RSS feed](http://www.wincent.com/a/about/wincent/weblog/nightlog/atom.xml) as well as [archives](http://www.wincent.com/a/about/wincent/weblog/nightlog/archives/) are available for the Nightlog.

For background information see [this article](http://www.wincent.com/a/about/wincent/weblog/archives/2007/03/planned_changes.php) where I talk about introducing the nightly builds and [this follow-up](http://www.wincent.com/a/about/wincent/weblog/archives/2007/03/nightly_builds.php) written after the build system went live in March 2007.

#### Bugs and feature requests database

If you're interested in keeping up to date with progress towards a specific bug fix or feature implementation you can add yourself as a "CC" to the corresponding issue in the bugs and feature requests database (<http://bugs.wincent.com/>). You can then tailor your preferences to control how and when you'll be notified when changes are made to the issue.

The database also features a [powerful query interface](http://www.wincent.com/a/support/bugs/query.cgi). For example, I made [this query](http://www.wincent.com/a/support/bugs/buglist.cgi?query_format=advanced&short_desc_type=allwordssubstr&short_desc=&long_desc_type=allwordssubstr&long_desc=&bug_file_loc_type=allwordssubstr&bug_file_loc=&keywords_type=allwords&keywords=&bug_status=UNCONFIRMED&bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&emailassigned_to1=1&emailtype1=substring&email1=&emailassigned_to2=1&emailreporter2=1&emailcc2=1&emailtype2=substring&email2=&bugidtype=include&bug_id=&votes=&chfieldfrom=-7d&chfieldto=Now&chfield=%5BBug+creation%5D&chfield=alias&chfield=assigned_to&chfield=bug_file_loc&chfield=bug_severity&chfield=bug_status&chfield=cclist_accessible&chfield=component&chfield=deadline&chfield=everconfirmed&chfield=keywords&chfield=op_sys&chfield=priority&chfield=product&chfield=qa_contact&chfield=rep_platform&chfield=reporter&chfield=reporter_accessible&chfield=resolution&chfield=short_desc&chfield=status_whiteboard&chfield=target_milestone&chfield=version&chfield=votes&chfieldvalue=&cmdtype=doit&order=Reuse+same+sort+as+last+time&field0-0-0=noop&type0-0-0=noop&value0-0-0=) by entering "-7d" in one of the relative date fields; it shows all of the issues which have changed in some way over the last seven days.

#### Forums

Although I try to post most of the information about my progress to my [personal weblog](http://colaiuta.net/), questions occasionally crop up in the forums (<http://forums.wincent.com/>) which may be of interest. Once you have an account for the forums you can "subscribe" to them and be notified once per day (if there are new posts).

#### Knowledge base

I often make notes in the [knowledge base](http://www.wincent.com/knowledge-base/) about things I am working on and technical problems I am solving.

The knowledge base is wiki-based and features a ["Recent changes"](http://www.wincent.com/knowledge-base/Special:Recentchanges) page and a corresponding [XML feed](feed://wincent.com/a/kb/index.php?title=Special:Recentchanges&feed=atom) that you can use to monitor activity.
