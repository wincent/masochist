---
title: Upcoming DNS changes
---

In preparation for [the server move](http://www.wincent.com/a/about/wincent/weblog/archives/2008/01/farewell_racksp.php) at the end of this month I'll soon be migrating DNS servers.

I'll be doing everything I can to minimize downtime, and hopefully come close to eliminating it entirely as there will be a one week overlap period in which both the old and the new servers are simultaneously online. But in the spirit of keeping people informed, this post is about the first step in the process: the DNS changes. The old server will continue to run, the IP addresses won't change (yet), but the authoritative DNS servers will be changed from my old to my new host.

The DNS is currently provided by Rackspace, but my new provider, [INetU](http://www.inetu.net/) already has their DNS configured and ready to take over. Throughout the following week I'll be gradually "flipping switches". The first domains to be flipped over will be bansshee.com, bansshee.net and bansshee.org, on Monday. If that goes well then I'll continue switching the other domains (13 of them) to the INetU DNS servers in the course of the week.

If you notice any problems please get in touch with me (<win@wincent.com>). wincent.com itself will probably be the last domain to get switched over.
