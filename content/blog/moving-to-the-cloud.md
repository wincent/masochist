---
title: Moving to the cloud
tags: site aws blog
---

In general I have a strong dislike for buzzwords. But from time to time one of them takes root so firmly that you have no choice but to give up and embrace it.

Two such examples are "blog" and "Web 2.0".

I was initially opposed to "blog" as I considered it to be an unnecessary abbreviation of the much more descriptive but already concise "weblog". It also spawned with it a burgeoning collection of annoying associated neologisms such as "blogger", "blogosphere" and so on. But through overwhelming, irresistible repetition, words like "blog" and even the outlandish "blogosphere" have wedged their way into books, magazines, dictionaries, and the minds and mouths of millions. In the end, there's no real reason to cling to "blog's" short-lived ancestor, "weblog". 30 years from now "blog" will probably continue in regular circulation; "weblog" will most likely be a relic of the past.

"[Web 2.0](/wiki/Web_2.0)" is another hyped-up buzzphrase that despite its initial cargo of hot air, has acquired substance and solidity. The initial hype surrounding the word has subsided, leaving behind the actually useful communicative content; it now signifies a set of characteristics that include: ubiquitous tagging as a means of organizing and categorizing content, a "less is more" design philosophy that prioritizes simplicity over flexibility, and a recognizable aesthetic revolving around large, san-serif fonts and strong colors.

The topic I'll be discussing in this post is another example of an irresistible buzzphrase: "the cloud", or "cloud computing". It's a trend that's been gathering momentum over recent years, but one which I could safely ignore as I wasn't really in the target market.

That has changed recently.

Cloud computing has started to make inroads into the bread-and-butter webhosting market. We're no longer talking about just compute-intensive applications, or high-traffic websites with enormous scalability needs, but run-of-the-mill, standard websites like this one which previously would have chosen either shared hosting, virtual private hosting, or dedicated hosting.

# The tipping point

The hype has been building up for a while, but it's recently reached a tipping point. Everywhere you look you'll find phrases like, "Cloud computing is the future, and Amazon is leading the charge", and I've come to the conclusion that these claims are absolutely right.

And it looks like I am not the only one. High-profile [Rails](/wiki/Rails) host [Engine Yard](http://www.engineyard.com/) have reinvented themselves as a cloud-based hosting solution provider whose offerings are built on top of [Amazon Web Services](/wiki/Amazon_Web_Services). [Rackspace](/wiki/Rackspace), the poster-child of the managed, dedicated hosting market is now pushing [their own cloud-flavoured hosting](http://www.rackspacecloud.com/). High-traffic sites like Reddit have decommissioned all their "old fashioned" hosting infrastructure (dedicated servers in data centers) and have [migrated wholesale to Amazon](http://blog.reddit.com/2009/11/moving-to-cloud.html).

Cloud computing really *is* the future and the hosting companies which are leading the way now by embracing it are the ones whose survival is guaranteed in the medium to long term. Those who don't heed this warning do so at their peril.

Before I get into explaining why all this has come to be, and why I think the "tipping point" has been reached, I want to make a brief historical digression looking at how webhosting has changed over the last 10 or 15 years.

# My journey through the world of webhosting

Like many users, my first experience publishing a website was back in the 1990s, uploading some images and hand-coded [HTML](/wiki/HTML) files via [FTP](/wiki/FTP) to a directory that was included with my [ISP's](/wiki/ISP%27s) dial-up Internet package, and accessed via a [URL](/wiki/URL) like "<http://example.com/~wincent/>". Simple and effective, this was before anyone had really heard of [PHP](/wiki/PHP) (invented in 1995), almost all websites were completely static and the few that weren't used [Perl](/wiki/Perl) (like Slashdot, created in 1997).

## Shared hosting

My first "real" website — one with its own domain name — was actually wincent.org, which if the WHOIS results don't deceive me, was registered back in September 1999. My chosen webhost had just about the best name you could hope to have: [webhosting.com](http://webhosting.com/). (Despite this auspicious beginning, the company in question eventually dwindled out of existence, and the webhosting.com domain now takes you to an AT&T page.)

This was a shared hosting environment, costing about $24.95 per month. I remember logging in via [SSH](/wiki/SSH) ([shell](/wiki/shell) access was permitted), doing a `cd .. && ls`, and observing the literally *thousands* of other customers that were cohabiting on the poor, overloaded server. It was no wonder that performance would occasionally drop through the floor when one of those customers had a runaway [PHP](/wiki/PHP) or [Perl](/wiki/Perl) app which exhausted all of the available connections to the database server. The [POP](/wiki/POP) and [SMTP](/wiki/SMTP) server was another machine and was similarly unreliable; I didn't have shell access to that one, but the regular outages lead me to expect that once again thousands of users were all competing for the scarce resources on the poor little server.

It seemed that the general trend in the market was for companies to engage in a "race to the bottom"; that is, drive down the price as a matter of priority, even when it inevitably compromised the quality of the service. It became commonplace for hosting packages to be offered for less than $10 or $5 per month. Evidently the solution to my problems did not lie that way.

## Do-it-yourself dedicated hosting

Frustration at the lack of reliability of shared hosting drove me towards dedicated hosting in 2002. Having a machine all to myself would solve two problems: resource scarcity would be a thing of the past without thousands of competing customers installing CPU and database-hungry applications; and I would no longer depend on clueless system administrators to set things up the right way (goodbye security holes, hello [RFC](/wiki/RFC)-compliance).

Costs for dedicated hosting in the USA were outside my budget at the time. In Australia however, I could purchase a 1-RU IBM server for a couple thousand dollars and then rent space in a local data center for about A$200 per month. Traffic charges were the largest part of that bill, funnily enough, but at least my traffic was predictable. (I eventually organized some additional, shared hosting in the US via [pair.com](http://pair.com/) in order to host large files like software downloads, and I also accepted the offers of volunteers to host download mirrors.)

The benefits of dedicated hosting were tremendous: rock solid reliability, excellent performance, full control over DNS, mail and all other configuration, total customization of installed software to suit exact needs, security.

The downside, however, was a big one: although the software reliability was wonderful ([FreeBSD](/wiki/FreeBSD), like [Linux](/wiki/Linux), tends to work indefinitely if you set it up right), any hardware problems could only be solved by me arranging for access to the data centre and going in there myself. Access wasn't free.

Being the prudent individual I am, the server itself had a mirrored RAID (RAID 1), multiple copies of important data were kept on disk, and offsite copies were regularly made using sync. But in the event of hardware failure there would inevitably be some downtime while I organized access, did troubleshooting, and fixed the problem. Setting up a failover machine to have on standby would largely solve this problem, but would also double my running costs.

After a couple of happy years with this arrangement, one of the disks went kaput while I was on the other side of the world in Spain. I had to locate a consultant near the data centre, arrange physical access for him, and pay him a handsome sum for going in there, running `fsck` and reporting that there were a bunch of errors. Evidently one of the disks in the RAID was probably bad, but I didn't know which one and my first priority was to just get the server back online. A month later the disk failed again, I was still on the other side of the world, and I decided that it was time to bid farewell to the world of do-it-yourself dedicated hosting.

## Managed dedicated hosting

The site was offline and I had to act quickly. I hammered out a contract with [Rackspace](/wiki/Rackspace), widely recognized as one of the most expensive providers of managed dedicated hosting, but also one of the best. I wanted to kiss my headaches goodbye, and know that if the same kind of hardware failures cropped up again in the future, Rackspace would step up and solve the problem no matter where I was in the world, and that they would do it at no additional cost.

I was with Rackspace for a two and a half years and never had to take advantage of their so-called "fanatical support" (there were no hardware failures, and no software issues either really). But I did appreciate the peace of mind I got from knowing that they were monitoring the server at all times and could intervene whenever necessary.

With Rackspace I had the same benefits I had already enjoyed with my do-it-yourself dedicated hosting — full control, good performance — but the drawback was the cost. I was in the US now, so no longer had to worry about bandwidth charges, but my hosting bill had nevertheless doubled.

## The road not taken: Virtual Private Servers

At this point I should probably mention the option that I *didn't* take up: Virtual Private Servers. These offer the pretty much the same level of control as dedicated servers (i.e. root access) but at about half the cost or less.

In the end though they are just another form of shared hosting: you end up sharing the actual physical machine with an unknown number of other clients. In *theory* the isolation from them is much more complete than in a traditional shared hosting environment, but it is still possible that a rogue client could degrade machine performance in a way that will negatively impact your own service. Ultimately, if you *really* cared about performance and robustness, you'd eschew such virtual servers and go for a dedicated machine of your own.

I guess one of my misgivings about Virtual Private Servers was that, unsurprisingly, they are *virtual* rather than *real*. A problem on the host machine running a VPS can cause that VPS to just go "poof" and disappear in way that an actual physical server never could (outlandish scenarios involving cat-burglars and tidal waves aside). Despite the fact that VPSs are marketed as though they were your very own machine, the fact remains that they are nothing more than a collection of ephemeral bits with access to some network and computing resources, and at the end of the day their robustness is always going to be somewhat limited.

Another concern with these Virtual Private Servers is that, being shared resources, the amount of memory available per client tends to be somewhat modest. If you require a larger memory allocation then you'll find that your prices will rapidly trend upwards towards the point where you'll end up saying, I might as well just go dedicated for this price...

## The move from [Rackspace](/wiki/Rackspace) to [INetU](/wiki/INetU)

In early 2008 I moved to INetU because I [was dissatisfied](http://wincent.com/a/about/wincent/weblog/archives/2008/01/farewell_racksp.php) with Rackspace's upgrade pathways. Basically I was starting to outgrow my two-and-a-half-year-old machine and Rackspace couldn't provide any means of switching to up-to-date hardware without making my already expensive hosting costs balloon prohibitively.

If you sign a contract for $400 a month with Rackspace in 2005 you'll get 2005 hardware and 2005 software. If another person signs up for $400 a month in 2007 they'll get 2007 hardware and 2007 software. As the older client do you think there might be a way for you to get the same value for money that the new client is getting? It would seem that with Rackspace, no. Your loyalty means nothing to them and the only way you can update your hardware or perform major OS upgrades is paying hefty once-off charges and then higher ongoing fees as well. As I noted in my ["Farewell Rackspace" article](http://wincent.com/a/about/wincent/weblog/archives/2008/01/farewell_racksp.php), the upgrades they offered — like swapping in a larger hard drive at a cost of $75 set-up plus *$600 per year* — were completely out of touch with my actual needs (I was not short on diskspace).

INetU's offering was slightly dearer than Rackspace's, while promising the same levels of network quality and support. The key difference was that they were willing to commit to providing periodic hardware upgrades in the agreed-upon price. Rackspace got in touch with me multiple times begging for me to stay, but they wouldn't address any of my concerns about their upgrade pricing; no amount of begging and pleading that "we wish you'd stay" can compensate painful price hikes.

# On to the cloud

So fast-forward to 2009 and I'm still with INetU. I've been totally satisfied with their customer service, the robustness of their network, and the performance of the machine that I'm leasing. But even though I'm satisfied, I haven't stopped observing the market, and since signing my contract with INetU back at the beginning of 2008, the tide has turned. Cloud computing has progressed from "interesting development" to "compelling alternative".

But underneath the glossy marketing hype, cloud computing is based on Virtual Private Servers, the very technology that I rejected in past years. So what's changed? Let me explain by way of 11 key strengths of Amazon's Web Services:

## 1. Price

Due to their immense popularity and enormous economy of scale, Amazon is basically unbeatable on price. You can look around at other supposedly cheaper "cloud" offerings from competitors, but when you actually stop and analyze what they offer you for your money you'll see that they can't match Amazon for performance, features or resources. The same is true for people peddling "traditional", non-cloud-based VPS hosting.

Not only this but Amazon charges by the hour so you only ever pay for what you actually use, never for what you "might possibly have to use" some day.

## 2. Performance

Even the humblest of Amazon's EC2 offerings, the so-called "small instance", packs a generous helping of 1.7 GB of RAM, which is far above the normal memory allotment of 512 MB or less that you'll get with most alternative VPS plans. This is adequate for most general purpose hosting needs, and for sites which need more grunt, more grunt is always available on tap in the form of larger instances, or more of them.

## 3. Flexibility

As already mentioned, Amazon charges by the hour, and new instances can be created in mere minutes. This enables all sorts of flexible, economical development models. For example, if you want to test out a potentially risky software update you can create an instance just for that purpose, confirm that everything works as you hope, and then shut it down. Your little experiment will have cost you less than 10 cents per hour.

This kind of rapid, easy and cheap creation and destruction of instances on the fly just isn't possible with other companies, which normally charge set-up fees for creating new VPSs and obviously also expect you to actually continue using the instance over a period of months.

## 4. Truly disposable VPSs

I said earlier that the problem with VPSs is that they're not real. Would you prefer to rent a house that was made out of software, software which might have bugs in it and disappear behind a sudden "blue screen of death", or one that was made out of bricks? I imagine that you're probably thinking you'd go for the bricks...

The breakthrough with Amazon's EC2 is that the VPSs are finally recognized for exactly what they are: disposable. You shouldn't have to depend on your VPS as though it were a rock solid piece of physical hardware from a reputable vendor, because it is *not*.

Amazon's VPSs are so easily created, configured, cloned and destroyed, that the ephemeral nature of virtual machines is no longer a handicap and in fact becomes a strength because of the flexibility that comes with it. Swapping an instance is as easy (and easier) than changing a light bulb.

This "philosophy of disposability" is made possible and desirable because Amazon provides a bunch of related technology for making things like persistent storage, snapshots, backups, clones and so on so very easy, cheap and reliable.

## 5. Durability and scalability

The virtual nature of EC2 instances divorces them from the actual hardware that they are running on. This means that concerns about things like hardware age and reliability go away. A host your instance depends on fails catastrophically? No problem: instances are effectively disposable so you can have a new one up and running on a different machine immediately.

Worried about hardware performance degrading over time? Don't worry, be happy! The disk, memory and CPU resources allocated to each instance are fixed, so you're always dealing with a known quantity. If you ever need more performance than you've got you can scale easily because the ability to switch to bigger instances, or more instances, is an integral feature of the infrastructure.

In a nutshell, AWS isolates you from hardware, and you'll never have to worry about it or face the unpleasant hardware "lock-in" that I did when I was with Rackspace. Your solution is "durable" in the sense that if it works today, you know it will work just as well tomorrow, and next month, and next year, and so on.

## 6. No vendor lock-in

Your EC2 instances are running standard Linux distributions, so you don't have to worry about vendor lock-in. If Amazon were to go broke tomorrow — unlikely, I know, given their success — you could take your existing configuration and migrate it to any of thousands of Linux hosting providers out there (you *are* running some kind of off-site, off-Amazon backup, aren't you?).

## 7. Ease of migration *to* AWS

Just as there is no real friction if you ever want to migrate away from AWS, migrating *to* AWS is easy for exactly the same reason. The standard [Apache](/wiki/Apache), [Sendmail](/wiki/Sendmail), [MySQL](/wiki/MySQL) and other tools which we are all familiar with are the ones that you'll be using in your EC2 instance.

Not only that, but because of Amazon's flexible and cheap per-hour pricing, you can get started preparing your migration ahead of time at very little cost. I've already started by [moving my DNS nameservers](/blog/dns-changes) away from [INetU](/wiki/INetU), and [my outgoing mail](/blog/outgoing-mail-changes) as well.

## 8. Reliability

If you don't want to put all of your eggs in one virtual basket, instances are cheap enough that you can probably afford 2 or 3 of them, fully monitored, and running behind a load-balancer, for under half the price you would pay for a dedicated server. The economic advantage here makes the ephemeral, "disposable" nature of instances a non-issue.

My current plan is to replace my existing dedicated server with two EC2 instances, which will offer me close to double the computing power for about a third of the price.

## 9. Removal of technical barriers

When AWS first started there *were* some technical barriers — things like the lack of static IP addresses and persistent storage — which made it a poor choice for replacing traditional webhosting arrangements. But these have largely gone away now with "Elastic IP addresses" (static IPs) and reliable, fast, easily-cloned persistent storage (Amazon's "Elastic Block Store").

Now for most general purpose hosting needs (serving web pages, running web applications, databases, mail exchanges, source code repositories etc) AWS is a practical, viable and downright attractive solution.

## 10. Nice UI/API for everything

Amazon provides a cutting edge web-based interface as well as a flexible [command line](/wiki/command_line) [API](/wiki/API) for doing pretty much everything you can imagine with AWS. If the scale of your operations is small then you can easily get what you want done through the web interface, and if you are working with larger numbers of servers then the sky is the limit in terms of automation.

## 11. Community momentum

As the market leader in this segment, Amazon has already built up a huge community around its AWS offerings, involving countless individuals as well as some big-name commercial collaborators like Red Hat, Sun and IBM.

I like to get my hands dirty when it comes to server configuration so I won't really be taking advantage of any of these community-published VPS images (known as "AMIs" or "Amazon Machine Images") but you can see how the existence of this thriving, active community could make the platform attractive to a lot of people.

# See you in the cloud!

Weighing up all these advantages, it's awfully hard to ignore the cloud computing. Perhaps if the economic incentives weren't so appealing you could dismiss cloud computing, for now, as still too much of a novelty. Why would you switch from a tried-and-tested hosting model to a newer alternative still in its infancy just to save a few bucks per month?

But we're not just talking about "a few bucks per month"; rather, we're talking about slashing costs by more than half, and as a bonus switching to a platform that provides us with some excellent mechanisms for snapshots and backups, and shields us from worrying about pesky hardware reliability.

I still have a couple of months to go on my INetU contract, but I'm already running my tests on AWS and really can't wait to finish the move (in February 2010).
