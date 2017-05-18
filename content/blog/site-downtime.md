---
title: Site downtime
tags: site blog
cache_breaker: 1
---

Early this morning I discovered that the site was down. This was about 9 AM local time, and [Monit](/wiki/Monit) had sent its first alert around 1 AM.

Unfortunately I wasn't able to perform in-depth investigation until late this evening. Luckily, an [EC2](/wiki/EC2) instance restart cured the problem, so the total downtime was around 20 hours, but this was still the longest downtime I've had for about 3 or 4 years now.

I'll be watching the instance carefully over the next few days, but my gut feeling is that everything will be ok now. One of the joys of hosting on [AWS](/wiki/AWS) is that instances are basically disposable because they are so easily recreated, and [EBS](/wiki/EBS) volume snapshots provide effectively unlimited, almost-free backup.
