---
title: Upcoming site changes: repo browsing functionality
tags: site blog
cache_breaker: 1
---

Seeing as my [weekly progress reports](/tags/progress) have proved to be everything but weekly, given that they rely on me actually remembering to prepare them, I've started work on integrating [Git](/wiki/Git) repository browsing functionality right into the site.

Instead of a weekly progress report, you'll be able to subscribe to an [Atom](/wiki/Atom) feed of all commits as they get published. This will also replace the [GitWeb](/wiki/GitWeb) installation that I currently have running at <http://git.wincent.com/>. Unlike GitWeb, which is only for public, [open source](/wiki/open_source) code, the integrated repository browser will allow me to publish info about private, closed source repositories as well (commit logs, for example, but not the actual source code itself).

As [I've written elsewhere](/blog/embracing-open-source), I expect to migrate more and more of my code from closed to open source as time goes by, and having an integrated repository browser will make things like the [issue tracker](/wiki/issue_tracker) even more useful.

Still early (design) stages yet, but solid progress is being made. Feel free to watch [ticket \#1135](/issues/1135) (there is an [Atom](/wiki/Atom) feed on the page) if you'd like to keep abreast of developments.
