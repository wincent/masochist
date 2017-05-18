---
title: Location caching
tags: snippets
---

[WOTest](http://test.wincent.com/) now caches the last known location (file path and line number) during testing so that if you get an uncaught exception you can click on the Xcode build results window and be taken directly to the source file which is the most likely culprit. Doesn't always help, but often does. Also added a `WO_TEST_START` macro that you can use to immediately cache the location if you're writing highly experimental tests and there's a high likelihood of raising uncaught exceptions outside of your tests (tests already catch them for you) but inside your test methods.
