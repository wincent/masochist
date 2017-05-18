---
title: All Quiet on the Western Front
tags: blog
---

Nothing very exciting to report. Now that all the plumbing is done for [Synergy Advance's](http://synergyadvance.com/) multithreaded Apple Event implementation I am busy doing the refactoring required to make use of the new routines. Basically everywhere where I was previously sending Apple Events I need to make at least two changes: firstly, dispatch the calls to my thread-based queueing mechanism instead; and secondly, implement callback methods for when iTunes doesn't respond in a timely fashion.

In short, lots of not-very-exciting busy work.
