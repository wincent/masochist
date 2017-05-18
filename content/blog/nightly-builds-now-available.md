---
title: Nightly builds now available
tags: blog
---

In March 2007 I [announced](http://www.wincent.com/a/about/wincent/weblog/archives/2007/03/planned_changes.php) my intention to make nightly builds available, starting with [Synergy](http://synergy.wincent.com) and after a couple of weeks of testing, [Synergy Advance](http://advance.wincent.com) and then [Hextrapolate](http://hextrapolate.wincent.com/), with other products to follow.

First up, what is a nightly build? The folks at [Mozilla](http://mozilla.org/) (makers of [FireFox](http://getfirefox.com/)) describe them as follows:

> Created most weekdays from the previous day's work, these builds may or may not work. Use them to verify that a bug you're tracking has been fixed. We make nightly builds for testing only. We write code and post the results right away so people like you can join our testing process and report bugs. You will find bugs, and lots of them. Mozilla might crash on startup. It might delete all your files and cause your computer to burst into flames. Don't bother downloading nightly builds if you're unwilling to put up with problems.

Nightly builds are produced by many great open source projects such as [WebKit](http://nightly.webkit.org/) and [VLC](http://nightlies.videolan.org/) (as well as other [not-so-great ones](http://wordpress.org/download/nightly/)). But I think they can be beneficial to closed-source projects as well.


### Benefits

-   Users can confirm that [bugs](http://bugs.wincent.com/) are fixed soon after [changes](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/index.php) are committed to the source code repository.
-   Users don't have to wait for an official release in order to start benefitting from new features under development.
-   Greater transparency of the development process: users can see progress as it is being made.





### How it works

I've written a [Ruby](http://www.wincent.com/knowledge-base/Ruby) script that performs the following steps for each product:

1.  Checks the [Git](http://www.wincent.com/knowledge-base/Git) revision number of the latest version of the codebase: if the revision number hasn't changed since the last run then this means that no changes have been finalized and the product is skipped. You can see which changes are being checked in in real-time by subscribing to the [Git log](wincent.com/a/about/wincent/weblog/svn-log/atom.xml).
2.  If changes have been made checks out (clones) a complete copy of the latest version of the codebase.
3.  Performs a full build of the software; this may be a multi-step process.
4.  Runs any automated tests.
5.  Uploads the built software to the server. Each nightly will be identified by a unique combination of product name and Git hash: for example, the first Synergy nightly was labelled as "Synergy (revision 325)"; note that the revision number is *not* the same as the official version number used to label official releases.
6.  Publishes a new entry to the [Nightlog](http://www.wincent.com/a/about/wincent/weblog/nightlog/) ([feed](http://www.wincent.com/a/about/wincent/weblog/nightlog/atom.xml)) including basic information about the build (name, size, checksum, download URL and so forth).

Although the builds are called "nightlies" there are a number of reasons why a new nightly might not appear on any given day:

-   If no changes have been finalized in the previous 24 hours then no new build will be made.
    -   This will often be the case as I tend to work on the same product for a whole day at a time, sometimes several consecutive days, before switching over to work on another product.
    -   Another factor is that some changes only become visible when they are "committed" to the repository (finalized), so work may be in progress but I may not yet be ready to commit it. I try to follow a [continuous integration](http://www.wincent.com/knowledge-base/continuous%20integration) development model which means that only changes which don't cause test failures get committed.
-   If there are any build errors then the nightly isn't uploaded; this should rarely happen as I continuously test my changes as I apply them but it could conceivably occur occasionally.
-   If any automated unit tests fail then the nightly isn't uploaded; again this should rarely happen as I continuously test my changes but it could occur when making larger changes to the codebase (although I try to break such large changes into smaller, incremental steps wherever possible).
-   If there are local network connectivity problems here where I do my development work (in Spain); the builds take place here on my local system, but they depend on connectivity to the Subversion server (USA) and the webserver (USA).

### Links

-   List of [Synergy nightlies](http://www.wincent.com/a/about/wincent/weblog/nightlog/archives/synergy/).
-   List of [Synergy Advance nightlies](http://www.wincent.com/a/about/wincent/weblog/nightlog/archives/synergy_advance/)
-   List of [Hextrapolate nightlies](http://www.wincent.com/a/about/wincent/weblog/nightlog/archives/hextrapolate/)
-   The [Nightlog archives](http://www.wincent.com/a/about/wincent/weblog/nightlog/) for all products.
-   The [Nightlog RSS feed](http://www.wincent.com/a/about/wincent/weblog/nightlog/atom.xml).
-   Summary of recent entries to the Nightlog (see the right-hand column of my [personal weblog](http://colaiuta.net/)).

### Disclaimer

As noted on the Nightlog pages:

> Nightly builds are generated once per day by an automated system; they are not official releases and they receive no human testing prior to being uploaded. They are provided with no warranty of any kind; use them at your own risk.

If you discover a problem please report it via the [bug tracking and feature requests database](http://bugs.wincent.com/), or contact me by sending an email to <win@wincent.com>.

### See also

-   [Wikipedia article on nightly builds](http://en.wikipedia.org/wiki/Nightly_build)
-   Some notes about the process: "[Setting up a nightly build system](http://www.wincent.com/knowledge-base/Setting%20up%20a%20nightly%20build%20system)"
