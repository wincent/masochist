---
title: Spotlight definitely broken on my machine
tags: blog
---

Lately [Mail.app](http://www.wincent.com/knowledge-base/Mail.app) has only been returning a subset of the expected results when I search for a particular mail. For example, if a customer that purchased a [Synergy](http://synergy.wincent.com/) license in the last week asks for their registration information to be resent then I can find it, usually within seconds; but if someone who purchased back in 2003 asks me then Mail.app never turns up any results. Using [Spotlight](http://www.wincent.com/knowledge-base/Spotlight) from outside of Mail.app also fails to return any results even though the emails are *known* to exist, so I can only conclude that Spotlight is broken. A manual search (sorting by column, manually scrolling, and visually scanning) is not a viable option; I have 6 GB of mail dating as far back as 1996.

In other words, given that Mail.app depends on Spotlight for its searching, a broken Spotlight leads to a broken mail application as well. In these cases I have to engage in a time-consuming search which involves logging into PayPal to find a record of a transaction which took place almost five years ago, and I can then confirm using `grep -R` from the [command line](http://www.wincent.com/knowledge-base/command%20line) that the registration notice is indeed still present in my `~/Library/Mail/` folder.

So Spotlight is great when it works, principally because it's so fast. But if forced to choose between slow and broken, I'll chose slow every time. I just blew away the Spotlight index for my startup volume (`sudo mdutil -E /`) and it will now be rebuilt automatically (will take many hours — the Spotlight menu bar is telling me that there are 23 hours remaining — and the ultra-flakey `mdimportserver` process has *already* crashed, only two minutes into the scan). I'm hoping that that will fix it.
