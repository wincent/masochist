---
title: Porting to Objective-C 2.0
tags: blog
---

I am pleasantly suprised to report that it only took me 2 days to get [WOTest](http://test.wincent.com/) ported to Objective-C 2.0, and in reality not really 2 whole days because I've had a lot of other tasks and chores to do as well; we're probably talking about 6 to 8 hours of actual coding time to move replace deprecated runtime manipulation with calls to the new API, switching to properties, moving to fast enumeration, and finally migrating to garbage collection. There are still some minor issues and possible bugs in Leopard to solve (either bugs in Leopard or I'm misunderstanding the documentation), but the workarounds currently in place all work and all tests pass. There were various problems which slowed me down along the way, but that's what you get when you're working with pre-release software; the actual coding in itself was very straightforward.

I say "pleasantly surprised" because I feared that a low-level framework like WOTest would require a lot more work (being a unit-testing framework it does lots of low-level manipulation of the runtime). It turns out that the code looks a whole lot better (and shorter) thanks to Apple's changes. Will be able to talk about it all in more detail once Leopard is out and the NDAs no longer apply.

The current plan is that the Tiger branch of WOTest will continue to run and work on Leopard, even though it makes use of some deprecated stuff in the runtime. This will be for use with non-garbage collected code. For work on garbage collected code the new Leopard-only code will be used.
