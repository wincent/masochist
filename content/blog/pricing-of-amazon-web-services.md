---
title: Pricing of Amazon Web Services
tags: site aws blog
cache_breaker: 1
---

A little over a couple of weeks have passed since the [completion of the server move](/blog/server-migration-now-complete) to [Amazon Web Services](/wiki/Amazon_Web_Services), and enough time has passed to make a reasonable assessment of the costs.

I couldn't be happier with the results.

Prior to the move I made some fairly conservative estimates for things like bandwidth charges, [EBS](/wiki/EBS) fees, [S3](/wiki/S3) storage costs and the like; by "conservative" I mean that I erred on the upper side because I didn't want to receive a nasty surprise when the first bill landed. Really the only cost which I could calculate with near total accuracy were the [EC2](/wiki/EC2) instance hours, because those are a fixed hourly rate and I knew beforehand almost exactly how many hours I would be using and how many instances I would be running. Even with these cautious estimates I was expecting my hosting costs to drop to about 33% of what they had been with my former host, [INetU](/wiki/INetU).

Well, it turns out that my estimates were generous indeed. For a relatively low traffic, small-scale site like this traffic is basically free. The EBS footprint is so tiny as to cost only a few bucks per month, and the I/O transaction count is small enough to be measured in cents per month. S3 storage, also, only adds up to mere cents, even with daily backups (seeing as subsequent snapshots are stored as deltas from previous ones, storing only the changed blocks).

So it turns out that my costs didn't just drop to 33% of their former levels; they've dropped to about 20%. And this is before I've even taken advantage of [AWS EC2 reserved instance pricing](/wiki/AWS_EC2_reserved_instance_pricing). Given that EC2 hours account for over 90% of my hosting costs, and with reserved instance pricing I can drop the per-hour price from 8.5c/instance to 4c/instance, it looks like in the end my costs will have dropped to about 10% of their former levels.

There are [a lot of reasons to move](/blog/moving-to-the-cloud) to [the cloud](/wiki/the_cloud), but the sheer economic advantage is fairly hard to ignore.
