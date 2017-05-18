---
title: Interesting developments from Rackspace: OpenStack
tags: rackspace cloud blog
---

Was very surprised to see that [Rackspace](/wiki/Rackspace) has gone [open source](/wiki/open_source) with the software that powers their [cloud computing](/wiki/cloud_computing) offering, [Rackspace Cloud](http://www.rackspacecloud.com/). They're calling it [OpenStack](http://www.openstack.org/).

I guess they've done the numbers on it, and must figure that they can compete with Amazon [EC2](/wiki/EC2) even giving away the technology that they use to power their service.

# The vendor lock-in thing

According to the marketing that accompanies the launch, the main reason they're doing this is that they don't like the "vendor lock-in" that comes with choosing a particular cloud provider. This is evidently a jab at the 500-pound gorilla that currently dominates the cloud marketplace, Amazon.

For the small fish in the pond, like me, however, this vendor lock-in thing is irrelevant. I was never going to run my own cloud, and was always going to end up paying someone else for time on *their* cloud. I ended up choosing Amazon because of their economies of scale. For my particular use case, literally nobody could beat them on price.

And as the leaders in the marketplace, they had both the expertise in doing the cloud thing right, and also the certainty of sticking around for a long, long time.

I was never scared of lock-in because fundamentally, everything I do is on such a small scale that it can easily be ported to any other host. Give me a machine (virtual or dedicated) running Linux, and I can get everything I need up and running on it. I do use [S3](/wiki/S3) to serve some big files, but I am not a heavy S3 user. If S3 went "poof" tomorrow, I could restore the files from local copies that I have here.

Likewise, my backup strategy is tied to Amazon because its based on taking [EBS](/wiki/EBS) snapshots, which get stored on [S3](/wiki/S3). If I had to move to another vendor, I'd evidently have to find another backup strategy. In the meantime, [rsync](/wiki/rsync), gives me a backup that is independent of Amazon.

# The real reason Rackspace is doing this

Wild speculation, of course, but it seems to me that Rackspace's *real* motivation here has nothing to do with keeping things open. Keeping things open is only a means to an end.

On the one hand they get some nice PR for being a good, open citizen, at the same time as making nasty old closed Amazon look like a big baddie in contrast.

Secondly, ask yourself who has the resources and financial clout to actually contemplate running their own cloud? Answer: big companies, the kind that use Rackspace already. It seems to me that this move is actually about injecting some life back into Rackspace's dedicated hosting service in the face of a climate of mass-exodus to the cloud.

Like I said, I guess they've done their numbers, and they figure this is going to work out best for them in the long run. Perhaps it will exert some downwards pressure on their dedicated hosting prices, but it might bring in enough new business to compensate too.
