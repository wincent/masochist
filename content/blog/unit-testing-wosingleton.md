---
title: Unit testing WOSingleton
tags: blog
---

As part of the move to `WOCommon` I wrote some unit tests for `WOSingleton`. There is some behaviour that I can test entirely deterministically but in trying to test race conditions and concurrency issues I decided that one easy way to do it (if not totally scientific) was just to thrash the hell out of the class and see what happened.

In one of the tests I launch 60 simultaneous threads, 20 for each type of class (the abstract `WOSingleton` class itself, an empty subclass of it, and a non-empty subclass). Each of these 60 threads then loops 1,000 times trying to create a singleton instance of the class, so that's 60,000 iterations. Furthermore, in each iteration the attempt to create a singleton is made in four different ways, giving us 240,000 attempts in all.

Add to this the overhead of the testing paraphernalia, and of checking assertions (ie. that a single shared instance is being returned and not multiple instances) and that's quite a lot of work.

How long does the trusty 1.83 GHz dual-core iMac take to do this? About 0.05 seconds. Like I said, not too scientific, but fairly fun.
