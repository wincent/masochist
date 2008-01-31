---
title: Farewell Rackspace
---

I wrote the other day that I was going to be [moving to RHEL 5](http://www.wincent.com/a/about/wincent/weblog/archives/2008/01/moving_to_rhel.php) in the near future. What I wasn't sure at the time was exactly *how* I'd be making the move. At the time it seemed that the most likely pathway was going to be installing a new drive for RHEL 5 and migrating the data over afterwards; the exact mechanics of this were never really defined (would the drive have RHEL 5 *pre*-installed on it prior to being slotted in? would they need to take the machine down and do the install "in place"?).

*Ideally* my host ([Rackspace](http://rackspace.com/)) would have slotted in a drive with a pre-installed OS on it, brought the server online so I could migrate my data over to the new drive and *then* rebooted from the new drive. I thought they use identical, standard hardware configurations to allow precisely this kind of thing.

So you'd be looking at two reboots, one of them accompanied by a few minutes of downtime to physically install the drive, and then a period in which some services didn't work properly because they'd need to be tweaked, set-up and configured only after booting into RHEL 5 for the first time. But overall impact to your website visitors would be fairly minimal. Once all that was done you'd be looking at another quick powercycle while they shut down the server to remove the old drive (you don't get anything for free from Rackspace).

I wonder how often Rackspace does this type of upgrade. As it was, they were suprisingly slow to offer the details of the procedure and offer options, and that's what makes me wonder.

After quite a bit of deep thought I decided that instead of staying with Rackspace I'd move on to another company. I've chosen [INetU](http://inetu.net/).





Moving hosts is always a risky move. I originally went to Rackspace because all of the evidence I'd seen suggested that they were the very best; if I switched to them I'd never need to switch away again. But now I've been with them for 2.5 years I've experienced both the good and the bad of Rackspace. The "good" is pretty good, and the "bad" isn't all that bad, but I don't think they can really compete with INetU's offering and that's why I'm risking the switch.

[]{#The%20good}
### The good

Rackspace has a great network. They have a great track record, with the exception of [the big data center incident last year](http://blog.wired.com/business/2007/11/rackspace-data-.html). I know some people decided to leave Rackspace because of that incident; personally, for me that's not the reason I'm leaving. I know that even the best companies can make mistakes occasionally and I trust that Rackspace has learned their lesson.

Their support is indeed "fanatical" most of the time, if you measure it in terms of response time. For example, whenever I needed [SPF](http://en.wikipedia.org/wiki/Sender_Policy_Framework) records added to my domain names I could open a ticket and expect that the records would be updated promptly; most often in only a few minutes.

Likewise they have automated server monitoring in place and if a service stops responding they log in, investigate and fix it if possible. In general it seems they responded within a few minutes to such alerts and had solved the problem a few minutes later.

[]{#The%20average}
### The average

However, I don't think the support is "fanatical" as it really could be. Response time is important but it is not the be-all-and-end-all. The "solution" to these alerts usually just meant restarting Apache. No attempt at identifying the real cause was ever made. When they did offer a cursory diagnosis it was wrong; I am not a professional system administrator but I was able to investigate and determine the real cause without too much effort.

It seems that their goal is to just close tickets as quickly as possible, but when you're paying several hundred dollars per month for managed hosting I expect a little better than that. We're not talking about bugs in third-party software or bizarre non-standard configurations; we're talking about the kinds of problems which can crop up in any bog-standard Linux box.

[]{#The%20bad}
### The bad

So why were my Apache processes dying every week or month? It turns out that the load was getting too high during the daily backup and the server was unable to handle all the incoming connections. It didn't happen every day or even every week, but when the backup coincided with enough load from other sources it was enough to make Apache temporarily unavailable to new connections, including the Rackspace monitoring service.

Turning off the backup is not an option, so the real problem here is that the machine is underpowered.

And this is where being with Rackspace starts to feel uncomfortable. Let me explain. According to Rackspace, the monthly fee is for a "solution" which includes the hardware and the support. The "solution" does not include up-to-date hardware, it includes only the hardware that was provided when you first signed the contract. After 2.5 years the value-for-money (performance-per-dollar) of the supplied hardware starts to look worse and worse. If the hardware included in your "solution" doesn't do what you need it to do then you must upgrade to new hardware at your own expense. The set-up fees and ongoing monthly costs for these hardware upgrades are utterly exorbitant.

As an example, I was quoted a $75 setup fee to install a 250 GB hard drive, and an ongoing fee of $50/month for the pleasure of using the new drive. Note that this is not an additional drive; that price is for removing the old 80 GB drive and replacing it with the larger one. This is ridiculous: the average price for a 250 GB SATA drive is now about $90, yet Rackspace would like to charge me $600 per year for the privilege of having one.

And you have to wonder why they even offered me this as an option when I said I wanted to upgrade to RHEL 5. I don't come close to using even half of the 80 GB drive I already have, so why would I want to upgrade to a larger one? When they make this kind of unattractive offer that addresses a problem the customer doesn't even have (lack of diskspace) it makes them seem totally out of touch with their customers' needs.

Let me indulge in another example. Another way of getting to RHEL 5 that they offered me was to set up a completely new server. I'd have to pay a $200 setup fee as well as $60 per month more than I am already paying (the new server would have a larger harddrive and a marginally faster processor than I have now, but it would still have the same amount of RAM — 1 GB — which is arguably the most important resource a web/database server can have). I just can't see the value for money in this offer.

[]{#INetU}
### INetU

In comparison, what can INetU offer? I went to them and explained what my concerns with Rackspace were: in a nutshell, that you get locked in to aging hardware and an aging OS (in my case they provided me with RHEL 3 even though RHEL 4 was already out), and if you want to break out of that jail cell you can only do so at considerable expense. They don't seem to reward customer loyalty and being an ongoing client over a period of years.

INetU is a much smaller company than Rackspace and my current perception of them (still currently an outsider) is that they try harder. They describe their managed support level as similar or better than Rackspace's "intensive" support level (at Rackspace I was merely a "normal" customer, not an "intensive" one). My experience with their sales representatives was very positive. Basically they worked with me to iron out a contract that addressed all my needs and concerns. I got the impression that they were trying to provide me with a solution that was truly satisfactory to me rather than just getting me to sign a contract as quickly as possible.

I did give Rackspace a chance. I told them what INetU was offering and said that I didn't want to leave Rackspace, that I'd much rather continue with Rackspace if they could just address my concerns about hardware and OS lock-in. But all they could offer me were $90 hard drives for $600/year and no ongoing solution to the lock-in problem.

So I'm off to INetU. Dollar-for-dollar, they offer beefier hardware and more IP addresses than Rackspace, they promise better support (which I'll be able to report on when I officially become a customer of theirs; so far all the communication has been excellent), and they provide exactly the kind of hardware upgrade path that I was looking for. Basically, they understand that when a customer pays several hundred dollars per month for a "solution", they want that solution to include up-to-date hardware. I'm not talking about CPU upgrades every six months; I'm just saying that every three years it's most definitely time to migrate to a new box, and you shouldn't be penalized for doing that kind of migration. Instead, they should recognize your loyalty and help you to make the move.

In the case of INetU they can set up a new server for you, put it online, and let you keep the old one online for 30 days while you migrate the data over. When you're ready you flip the switch. Effectively it amounts to a free month every three years, and a means of keeping your hardware up-to-date without incurring excessive expense and downtime. This is the way it should be. I believe this because for me "premium solution" actually really means "premium, up-to-date solution, today and tomorrow". This offer may not last forever, but I got it in writing because I explicitly asked for it, and it's basically *the* reason I'm moving. It's a nice way to start the relationship, with INetU specifically tailoring a solution that addresses my concerns.

So hopefully, this time really *will* be the last time I move hosting companies. The Rackspace server will be up until the end of February and the INetU one will be coming on line in the last week of February. I'll have five days of overlap in which to migrate all the data across before pointing the DNS at the new servers. As such, actual downtime will be zero — there'll be none at all — and there will probably be a day or two of hiccups where creases need to be ironed out on the new box (it is a new OS, after all).

[]{#Update%3A%2013%20February}
### Update: 13 February

Rackspace got in touch with me one last time to see if there was anything they could do to retain my business. It's a bit late for that seeing as I've already signed a new contract, but they did offer to keep my server online for an extra thirty days at no extra cost, just in case I have problems with my new host and decide to run back into Rackspace's open arms.

I don't anticipate having any problems with INetU, but I think this is nice gesture on the part of Rackspace. I've accepted their offer. A little bit of extra insurance never goes astray.
