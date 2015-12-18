---
tags: 
---

Disappointed with the [WordPress](/wiki/WordPress) security track record, I've decided to remove it from my systems. The straw that broke the camel's back was a [cracker replacing the official WordPress 2.1.1 archive on wordpress.org with a trojan](http://wordpress.org/development/2007/03/upgrade-212/).

This decision was made in the context of the [Month of PHP Bugs](/wiki/Month_of_PHP_Bugs) (highlighting security problems with [PHP](/wiki/PHP) in general) and after a series of [WordPress upgrades due to security problems](/tags/wordpress). The problem is that [WordPress](/wiki/WordPress) simply doesn't have the security required of a public-facing, network-enabled application. These upgrades are more or less forced upgrades (that is, "upgrade or your server might get 'owned'"). I am a little tired of having to invest the time required to install all these updates (and not just to [WordPress](/wiki/WordPress) but also [UBB.threads](/wiki/UBB.threads) and [MediaWiki](/wiki/MediaWiki) as well) so I decided to retire my existing [WordPress](/wiki/WordPress) install and replace it with a static mirror of the existing dynamic content.

I made this decision even though I was not exposed to any risk because of my [Subversion](/wiki/Subversion)-based upgrade policy (see "[Upgrading WordPress using Subversion](/wiki/Upgrading_WordPress_using_Subversion)"). Among other issues, I don't think the vulnerability disclosure practices of the [WordPress](/wiki/WordPress) team are really up to scratch. The just-released version 2.1.2 actually includes a fix for another security flaw. The \[<http://wordpress.org/development/2007/03/upgrade-212/>|official announcement\] states that it "includes minor updates", but that's not really an accurate description of what got fixed (an \[<http://trac.wordpress.org/ticket/3879>|XSS vulnerability\]).

So I mirrored my existing dynamic content using [wget](/wiki/wget):

    wget -m -k -K -E "http://example.com/path-to-word-press-installation/"

And uploaded it to the server in the place of my [WordPress](/wiki/WordPress) install. No more updates or security holes to worry about, ever!

# See also

-   [Slashdot](/wiki/Slashdot) coverage of 2.1.1 incident: <http://it.slashdot.org/article.pl?sid=07/03/03/0427211>
-   [Netcraft](/wiki/Netcraft) coverage: <http://news.netcraft.com/archives/2007/03/03/wordpress_distribution_compromised_update_released.html>
-   Other reactions: <http://fukamachi.org/wp/2007/03/03/wordpress-211-dangerous-upgrade-to-212/>

