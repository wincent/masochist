---
title: Server migration now complete
tags: site blog
cache_breaker: 1
---

The server migration [started a few days ago](/blog/server-migration-now-underway) is now done.

There is still a great deal of work to be done — things like setting up monitoring and additional backups — but the basic functionality of the site is all up and running again, this time in [cloud](/wiki/cloud): [Apache](/wiki/Apache) and [Rails](/wiki/Rails)–backed websites, email ([Sendmail](/wiki/Sendmail), [IMAP](/wiki/IMAP), [POP3](/wiki/POP3), webmail), [Git](/wiki/Git) repositories, [SFTP](/wiki/SFTP), [MySQL](/wiki/MySQL), [memcached](/wiki/memcached) and so on). So while my work is far from finished, for end users the site is effectively as ready as ever.

This marks the end of a 2-year contract with my dedicated hosts at [INetU](/wiki/INetU). I leave them holding a very high opinion of their service and if you're after the very best dedicated hosting, and are prepared to pay the price tag that corresponds with the best-of-the-best, then I wholeheartedly recommend them. I'd definitely rate them as delivering a better product than what you can get from [Rackspace](/wiki/Rackspace) (with whom I've also hosted in the past).

I've previously written about my [reasons for moving to the cloud](/blog/moving-to-the-cloud), but the short version is this: [AWS](/wiki/AWS) offers an incredibly flexible, powerful hosting environment at an absolutely unbeatable price. No matter what arguments you might proffer against Amazon or cloud computing in general, there is no arguing with the absolutely compelling economic advantages it provides.

It's so devastatingly compelling, in fact — devastating for the competition, that is — that in a very small number of years from now dedicated hosting, "old-school" shared hosting, and even virtual private hosting will be viewed as either antiquated relics from an earlier age, or niche services that suit only a tiny proportion of companies that require hosting services.

Companies like Rackspace and INetU will need to be agile over the next decade if they want to continue growing. I suspect that they'll need to do two things: really focus on their position as "niche" providers, and on the other hand expand their own "cloud-like" offerings. On the latter front Rackspace seems to have started early, but they'll need to drop their prices and increase their flexibility in order to compete with Amazon.

In any case, I've taken the move as an opportunity to do a lot of "spring cleaning", update to the latest and greatest pieces of software, and in general make improvements to the architecture of the site. I'll be following up on these things in subsequent posts.
