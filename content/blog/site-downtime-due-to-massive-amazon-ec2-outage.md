---
title: Site downtime due to massive Amazon EC2 outage
tags: site blog
cache_breaker: 1
---

[The recent, massive Amazon EC2 outage](http://www.theregister.co.uk/2011/04/22/amazon_elastic_compute_cloud_still_experiencing_problems/) which started on early Thursday morning brought the site down for a little over 3 full days (about 80 hours). This is probably one of the longest outages the site has ever had, rivaled only by the Great RAID Disintegration Incident of 2005, which led me to move from a self-hosted box in a co-lo to [Rackspace](/wiki/Rackspace).

I actually have two hosts running in [Amazon](/wiki/Amazon) [EC2](/wiki/EC2) in the affected region, and the one I use as my MX (mail) host was the first to come back up, after about 48 hours of downtime. The host which serves wincent.com, however, was much slower in being recovered, and has only just come back up now. Bad luck it would seem, as the amount of downtime is really a bit like a lottery; some hosts were recovered much sooner than others, and it was really in Amazon's hands the order in which things got recovered.

Does this dint my enthusiasm for [cloud computing](/wiki/cloud_computing), and particularly the [AWS](/wiki/AWS) flavor of it?

Not really, to be honest. I think, given Amazon's track record, they will take steps to significantly reduce the likelihood of such an event occurring again in the future, and also to ensure the effect is mitigated if it ever does. Not only this, but there are two complementary facts that still apply: one is that cloud hosting is still insanely, compelling cheap, even when its reliability goes through a less than spectacular moment; the other is that for truly mission-critical applications the replicability of resources within the cloud means that this kind of incident can be resolved very quickly indeed (for example, by relaunching instances in another availability zone).

I chose not to take any drastic action, but I certainly could have if my site had been critical enough to warrant it. I imagine that some of the big-name sites which were brought down (the likes of [reddit.com](http://reddit.com), [quora.com](http://quora.com) etc) did exactly that.
