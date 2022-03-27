---
description: On the great Lilliputian question of whether to mock
tags: blog
title: Why I don't like mocking (much)
---

This comes from something I wrote internally at FB some years ago, back when [Jest](https://jestjs.io/) used to default to auto-mocking (ie. providing automatically generated stubs for every imported module). Seeing as it doesn't contain any sensitive internal information, I'm turning it into a blog post. I still feel pretty much the same way about mocking, but the good news is that Jest changed its defaults, so I no longer have to persuade people about the downsides of auto-mocking.

---

A lot of the problems I have with auto-mocking are really just extensions of the problems I have with mocking. There are a couple of really obvious, compelling use cases for mocks:

- Verification of interaction behavior of the system at a well-defined, stable service boundary.
- Isolation from unwanted or extraneous side-effects (often because they are expensive and so make things slow, or because they are hard to rollback).

Note that the definition of "service boundary" here permits some flexibility. It could be a service on a network, but it could also be a central module in the system that serves some kind of coordinating role. The important part is actually the "stable" qualifier. If the interaction is well-defined and stable over time, then using a mock probably won't hurt you, even for a small module. In these cases you can build a robust, well-vetted fake, and sub it in for the real service. The fact that you do this for stable abstractions means that the "well-vetted" part won't stop being true.

Once you stray from that well-trodden path, mocks can start to cost more than they're really worth. It's very easy to fall in one of two complementary pits of failure:

- The mock itself is brittle and dependent on the (often irrelevant) implementation details of the system, requiring it to be constantly updated. It's basically like a duplicate implementation expressed in a less convenient form.
- The mock isolates too well, allowing tests to continue passing when they should fail.

Of course, by virtue of the fact that auto-mocking is, er, automatic, you end up having to deal with these deleterious effects all over the place. Or, you `dontMock` everywhere to get control back and apply mocking deliberately in specific cases. In the absence of deep white-listing, auto-mocking is a particularly heavy-handed hammer.

Before coming to FB, I spent a lot of time exploring different testing strategies, particularly varying along the axes of test-before/test-after and mock (verify interactions) vs black box (verify state). I really tried to give each one a fair shot, but I came down strongly preferring tests that bias towards integration, minimize the use of mocks, and do a lot of state-based verification. Ultimately the only thing that matters about a system is its externally visible behavior (side effects); so asking it to do something and then inspecting the result is more likely to deliver you a test that actually verifies the property that you're interested in (ie. the behavior) and is less likely to break because of an unrelated change in implementation details (which by definition should not matter). Note that this is a "lesser of two evils" thing, where black-box/state-based testing ends up sucking less than mock-centric/interaction-based testing, but it's still not a panacea. The way to elevate your code above this axis entirely is to frame as much of it as possible in purely functional code (not always possible of course, but still desirable).

We noticed on [Relay](https://relay.dev/) that we spent a lot of time `dontMock`-ing in our tests, because for better of for worse, stuff is interrelated in complex ways. Maintaining accurate mocks would have us dancing near those two pits of failure that I mention above. On the other hand, we have a well-defined external API boundary. Most of the things that Relay itself depends on are low-level enough to not be mocked or to have good fakes available. This means that we can effectively live in a no-mock bubble, where we treat everything in Relay as an integration test with every other part of Relay. The system is small enough that there's no significant speed penalty, and the absence of indirection and magic make test failures easier to troubleshoot.

We do use mocks where it makes sense (ie. where verifying an interaction between components is more important to us, or easier, than verifying a stateful side effect). But these are generally manual mocks that we explicitly set up. When we create new modules, our default is to create a "passthrough" mock using `require.requireActual` and stick it under `__mocks__`, which gives us a place to later embellish with special behavior if we need (we don't often need to). This is definitely boilerplate, but it keeps the mocks out of the way and allows us to work everywhere the code is synced to without special configuration.
