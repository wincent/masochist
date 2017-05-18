---
title: ClamAV + clamassassin + procmail
tags: blog
---

I've been so pleased with the combination of [ClamAV](http://www.clamav.net/), [clamassassin](http://drivel.com/clamassassin/) and [procmail](http://www.procmail.org/) that I've decided to "upgrade" the recipes on the server so as to delete incoming virus-bearing messages on the server.

Previously, I used the set-up to *tag* such incoming messages with an X-Virus-Status header and a "\[VIRUS\]" label in the subject line, but I left it up to the user to delete the messages manually or to set up mail filters to direct them into quarantine folders or into the trash.

After using the set-up for about a month I was satisfied with the accuracy of ClamAV to the point that I was prepared to set up a filter in [Mail.app](http://www.apple.com/macosx/features/mail/) to automatically delete all such messages on receipt, something I would never do with [SpamAssassin](http://spamassassin.apache.org/) (too many false positives to risk it).

Today I took that decision a step further. After months without a single false positive or other problem I've set up a procmail recipe that deletes virus-bearing messages as soon as they hit the server. That should put an end to my father's complaints about the amount of time he spends downloading emails laden with viruses over his very slow dialup connection. He was getting about 15 virus-bearing emails a day, most of them identified by ClamAV as "Worm.Sober.U", so this change should make a considerable difference to the amount of time it takes him to download his email.
