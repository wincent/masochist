---
tags: wiki
---

In order to better communicate with users I've decided to set up a Subversion activity RSS feed. My plan is to use post-commit hook scripts to generate simple RSS feeds showing the repository name, revision number (in the title) and the commit log message (in the body). I don't plan on including any more detail seeing as some of the repositories in question are closed-source. Even for the open-source repositories I don't intend to include any additional information; the intention of the feed is not to drive people to the Subversion repository but to keep people aware of the changes that I'm working on in a general sense.

I'll be using Ruby seeing as it has in built RSS support (in the standard library). Given the simple requirements of the proposed idea, I think this will end up being much shorter and cleaner than the Python solutions already available.

# Movable Type integration

In the end I decided to send posts to Movable Type via XML-RPC (also supported in the [Ruby](/wiki/Ruby) standard library) and let Movable Type generate the RSS feeds; that way I get HTML archives and the ability to embed the Subversion log into other web pages "for free". In part this decision was motivated when I discovered that every entry in an RSS feed requires a unique URL, and my original idea didn't really have any suitable destination URL to which to link (given that many of the commit messages will not relate to any publicly accessible repository). Another benefit is that I can post updates from diverse Subversion repositories hosted on different servers (for example the public Subversion server at svn.wincent.com and also my private locally hosted Subversion server) and Movable Type will handle the aggregation into a single RSS feed and web page.

-   The result: <http://colaiuta.net/> (in left hand sidebar, scroll down)
-   Archives: <http://wincent.com/a/about/wincent/weblog/svn-log/archives.php>
-   Feed: feed://wincent.com/a/about/wincent/weblog/svn-log/atom.xml
-   Explanatory article: <http://wincent.com/a/about/wincent/weblog/archives/2006/09/keeping_up_to_d.php>

# See also

-   <http://www.friday.com/bbum/2006/08/17/howto-adding-an-rss-feed-to-a-subversion-server/>
