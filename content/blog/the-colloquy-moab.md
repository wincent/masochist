---
title: The Colloquy MOAB
tags: blog
---

So today's [MOAB](http://www.wincent.com/a/about/wincent/weblog/archives/apple/moab/) entry is [a bug in Colloquy](http://projects.info-pull.com/moab/MOAB-16-01-2007.html), the [open source IRC client](http://colloquy.info/).

As was the case with the [earlier VLC bug](http://projects.info-pull.com/moab/MOAB-02-01-2007.html), it was fixed promptly as soon as it was reported. But this is open source. Why did the organizers choose to publish the vulnerability without first notifying the vendors? Why didn't they just submit patches?

[They state](http://applefun.blogspot.com/2007/01/colloquy-is-vulnerable-to-format-string.html):

> Colloquy development people fortunately fixed the issue promptly in the changeset 3558. Thanks to Joe for bringing this to our attention. Kudos to the Colloquy development team, that's the way to go!

*Fortunately* fixed the issue promptly? If they're so happy to see it fixed, why didn't they just send a fix to the team themselves?

Check out [the stated goals](http://projects.info-pull.com/moab/index.html#about) of the project:

> This initiative aims to serve as an effort to improve Mac OS X, uncovering and finding security flaws in different Apple software and third-party applications designed for this operating system. A positive side-effect, probably, will be a more concerned (security-wise) user-base and better practices from the management side of Apple.

This vulnerability, like the VLC one, is a case of "uncovering and finding" a security flaw, but it has nothing to do with Apple and will have no effect on the "practices from the management side of Apple".

I grudgingly concede that publishing the advisory may help produce a "more concerned (security-wise) user base" (ask yourself, what would have happened if they just quietly submitted a fix?) but the choice of Colloquy as a target seems to be more about making the ["MOAB Fixes" group](http://groups.google.com/group/moabfixes?lnk=oa) look like fools by targeting one of the tools they use.

There is no doubt in my mind that the people behind MOAB know much more about security than the bulk of the developers in the fixes group; I don't think there's any need to go around proving it or "teaching lessons". Wouldn't focussing on *Apple* vulnerabilities be much more congruent with the stated aims of the project?
