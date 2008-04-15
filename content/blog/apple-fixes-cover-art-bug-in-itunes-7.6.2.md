---
title: Apple fixes cover art bug in iTunes 7.6.2?
tags: synergy itunes
cache_breaker: 1
---

I was hopeful that in [iTunes](/wiki/iTunes) 7.6.2 [Apple](/wiki/Apple) had fixed the cover art bug that they previously introduced in version 7.6.1.

The bug consisted of a failure to provide artwork when requested. As soon as a new track started [Synergy](/wiki/Synergy) would query iTunes for cover art and iTunes would reply that none was available. As a result you would see a question mark in the Floater instead of album art. If you later paused the track and restarted it, Synergy would again query and this time the artwork would be available.

In local testing it appeared that 7.6.2 fixed the flaw and restored the previous behaviour (new tracks start, Synergy queries for art, and iTunes provides it) but I've had reports from other users that the problem is still present. I suspect that the difference is caused by machine speeds; my machine is slower so it effectively delays the query long enough for the bug not to manifest itself.

I am planning on introducing an artificial delay in the next release to work around this problem (see [bug \#668](/issues/668)), although I am still hopeful that Apple will fix the problem in a later iTunes release. In the meantime I've received multiple reports that going back to 7.6 fixes the problem.
