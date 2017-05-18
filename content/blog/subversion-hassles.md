---
title: Subversion hassles
tags: blog
---

I've just spent several hours [working around a Subversion problem](http://www.wincent.com/knowledge-base/Repository_migration#Caveat). I don't know whether the fault lay with the Subversion internals, is limited to the `svnadmin` tool's `load` functionality, or is really the fault of the underlying filesystem on Red Hat Linux. Whatever the root cause, it's cost me a bunch of hours.

The short version: I was trying to migrate a repository from my local Subversion server (on Mac OS X) to a remote Subversion server (on Red Hat Linux). A number of pesky files in old revisions of the repository were preventing the `load` from working, thus derailing the entire process.





Google was of no help, only indicating that Subversion has historically had problems with filenames containing certain characters in the names. But there was no indication of whether this had been addressed, what a workaround might be, and whether this was a limitation of only the `svnadmin load` functionality or something deeper down in the Subversion internals or the limitations of the default Red Hat filesystem (ext3, I believe), and most puzzlingly of all how these files managed to get into my repository in the first place if Subversion wasn't capable of handling them. So the time spent searching Google was essentially wasted time.

So I started trying to get rid of the troublesome paths. This was done by filtering the 90 megabyte repository dump file through `svndumpfilter` to pare out the offending nodes. I'd filter, try the load again, discover another problematic path and repeat the process. Annoyingly, every time the load failed I ended up with a half-written, invalid repository, so I had to painfully delete the new repository, recreate it, reestablish access permissions, set passwords, and tighten filesystem permissions.

In the end I got the new repository up, but the cost was several hours that could have otherwise been spent programming. To add insult to injury I have no idea what the pesky files were doing in the repository in the first place nor why Mac OS X had created them (they were custom folder icons stored inside `.xcode` bundles); and given that they have resource forks the served absolutely no purpose being in the repository at all (where the simple act of adding and committing them turned them into empty, useless files).

This kind of problem is annoying because tools like Subversion are supposed to help you work better, not get in your way and stop you from getting anything else done. But unfortunately it happens all too often with Subversion. It is wonderful software 95% of the time — really top notch — but the other 5% of the time it throws hurdles down in front of you at knee-level, constantly forcing you to break your rhythm, stoop down, and clear the obstruction.

These little road blocks include things like the problem I faced today, [the failure of Subversion to support opaque collections](http://subversion.tigris.org/issues/show_bug.cgi?id=707), and [inadequate handling of composed/decomposed Unicode in paths](http://subversion.tigris.org/issues/show_bug.cgi?id=2464). I want my version control system to work with me, not against me. I don't really expect it to do anything fancy, I really just want it to store "stuff" in a repository, where "stuff" is anything I want to throw at it.
