---
title: Synergy Advance build number changes
tags: blog
---

As of today the build numbering system used in [Synergy Advance](http://advance.wincent.com/) has undergone a once-off change and I wanted to explain here to help clear up any confusion that it may cause.

The changes are described in full in the "[Build numbers](http://www.wincent.com/knowledge-base/Build%20numbers)" article but here's the brief overview:

Previously Synergy Advance used a build number scheme that incremented by 1.0 for each release build and 0.1 for each debug build. So the last publicly released version (0.4) had a build number of 1192.0.

As of today, I've started using the [Subversion](http://www.wincent.com/knowledge-base/Subversion) revision number instead because this is non-arbitrary and exactly identifies the source code used to produce the built product. That means that as of right now the current build number is actually 399, corresponding to revision 399 in the [Subversion](http://www.wincent.com/knowledge-base/Subversion) repository. By the time 0.5 comes out (hopefully quite soon) that revision number will have jumped up a few notches. Build numbers like "399+" indicate that the build was produced from the code corresponding to revision 399 in the repository plus some local modifications that haven't been checked in yet. In reality only I will see build numbers like that with plus signs on the end; customers will always see straight build numbers.

I'm making these changes to provide increased transparency in the development process. You can keep your eye on the [Subversion Log](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/index.php) (a live list of checkins) and see exactly which code changes correspond to the build that you're using.
