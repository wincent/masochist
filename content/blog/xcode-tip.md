---
title: Xcode tip
tags: blog
---

I've always had "Continue building after errors" turned off in Xcode for the same reason that I have warnings turned on in the first place: namely, I don't want to miss seeing any problems (or potential problems) in my code.

Today I realized that I've probably been thinking about this the wrong way. In the case where you undertake lots of refactoring and break lots of things setting "Continue building after errors" to on is probably the best thing you can do. Instead of repeating a build/fix-one-bug cycle/check-again-for-errors cycle, you can do a build/fix-lots-of-bugs/check-again-for-errors cycle. The compiler discovers more errors in each cycle because it continues building after the first error, so you can fix more bugs per cycle and spend less time waiting for builds to finish.
