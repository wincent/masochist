---
title: New site layout
tags: blog
---

I'm very pleased to present the brand new site layout for [wincent.com](http://www.wincent.com/), [wincent.org](http://wincent.org/) and all their subdomains. There have been minor tweaks to the appearance of the site, but the shining star of the new layout is the new navigation bar that appears at the top of each and every page. You can now skip to any section of the site -- [Products](http://www.wincent.com/a/products/), [Services](http://www.wincent.com/a/services/), [Support](http://www.wincent.com/a/support/), [About](http://www.wincent.com/a/about/), [News](http://www.wincent.com/a/news/), [Knowledge Base](http://www.wincent.com/a/knowledge-base/), [Contact](http://www.wincent.com/a/contact/), and [Site Map](http://www.wincent.com/a/site-map/) -- with a single click, and the "bread crumb" display shows you at a glance exactly where you are in the site hierarchy.

To reduce confusion, the different product websites ([synergy.wincent.com](http://synergy.wincent.com/), [winswitch.wincent.com](http://winswitch.wincent.com/), [winhex.wincent.com](http://winhex.wincent.com/), [install.wincent.com](http://install.wincent.com/)) and the forums ([forums.wincent.com](http://forums.wincent.com/)) have all been moved to logical places within the [wincent.com](http://www.wincent.com/) hierarchy. Likewise, the weblog that was previously hosted at [wincent.org](http://wincent.org/) has been rolled into the main [wincent.com](http://wincent.com) site, at [wincent.com/a/news/](http://www.wincent.com/a/news/). You can still point your browsers at the old subdomains if you wish, and you'll be redirected to the new locations. The main benefit is that people can move around the different sections much more easily; in the past visitors may not even have known that those other sections existed!

My favorite part of the new navigation bar, however, is the set of pop-up menus that you'll see when you move the mouse pointer over the navigation bar buttons. These hierarchical menus allow you to navigate not only to the top-level sections on the site, but to sub-sections and pages several levels down with a single click. There's not a single line of JavaScript behind these menus; it's all done with CSS (Cascading Style Sheets), so they'll display correctly in just about every modern browser. This really is a dream come true for me... The day has at last arrived where it's possible to use CSS for complex layout and dynamic elements and actually have it work on most users' browsers!

The following browsers have been tested with the new layout (all running on Mac OS X 10.3.6):

-   [Apple Safari 1.2.4 (v125.11)](http://www.apple.com/safari/): correct display.
-   [Mozilla Firefox 1.0 RC2, 1.0](http://www.mozilla.org/products/firefox/): correct display.
-   [Mozilla 1.7.3](http://www.mozilla.org/products/mozilla1.x/): correct display.
-   [Camino 0.8.1](http://www.mozilla.org/products/camino/): correct display.
-   [OmniWeb 5.0.1](http://www.omnigroup.com/applications/omniweb/): correct display.
-   [Opera 7.54](http://www.opera.com/): correct display.
-   [Netscape 7.2](http://channels.netscape.com/ns/browsers/download.jsp): correct display.
-   [Internet Explorer 5.2.3 (5815.1)](http://www.microsoft.com/mac/products/internetexplorer/internetexplorer.aspx?pid=internetexplorer): popup menus do not appear, but page layout is correct and the row of buttons in the navigation bar works.
-   [iCab 2.9.8](http://www.icab.de/): page layout completely broken, but site is navegable.

I am hoping that this will be a win-win situation for site visitors and for me. Although it has been a big task perfecting the new layout and moving all the material from the old sites into position, the administration burden in the future should be greatly reduced. Most of the dynamic elements are either stored on the server as [PHP](http://www.php.net/) includes (so that a single file can be edited and every page on the site will immediately reflect any changes), or built using [Movable Type](http://movabletype.org/) (where I can post content from my desktop using [ecto](http://ecto.kung-foo.tv/); no need to fire up a browser or a behemoth like [Dreamweaver MX 2004](http://www.macromedia.com/software/dreamweaver/)). Site appearance is largely controlled through a single, site-wide style sheet (once again, editing one file can change the appearance of the entire site). And apart from the maintenance improvements, if people can find their way around more easily and access support services like the [forums](http://forums.wincent.com/), the [bug-tracking and feature requests database](http://bugs.wincent.com/), and the [lost license code retrieval system](http://www.wincent.com/a/support/registration/), then I'll be able to spend more time working on new products.

If you've got any feedback on the new layout, please [get in touch with me](http://www.wincent.com/a/contact/).
