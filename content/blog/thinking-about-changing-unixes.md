---
title: Thinking about Changing UNIXes
tags: blog
---

[Sho Fukamachi writes](http://fukamachi.org/wp/2007/10/06/thinking-about-changing-unixes/) that he's thinking about switching away from [RHEL](http://www.wincent.com/knowledge-base/RHEL) 4. I've been thinking about a lot of the same issues lately and rather than cram my response into a comment on his post I'm instead writing it out in full here.





His main gripe with RHEL is that the software it comes with is old and [Red Hat](http://www.wincent.com/knowledge-base/Red%20Hat) only provides security fixes. For example, RHEL 3 comes with Apache 2.0 and even though the OS will have official "maintenance support" up until 2010 (see "[Red Hat Enterprise Linux support policy (EOL dates)](http://www.wincent.com/knowledge-base/Red%20Hat%20Enterprise%20Linux%20support%20policy%20(EOL%20dates))") you will never, ever see Red Hat upgrading the Apache install to the 2.1 or 2.2 series. They simply backport everything.

For the mission-critical applications domain this is brilliant. It basically means that you've got a *solid* platform that won't change underneath you. You're secure because Red Hat pushes out security fixes promptly using their automated `up2date` tool and the Red Hat Network, and you know that your applications won't suddenly stop working due to an upgrade. In short, it's *awesome* peace of mind when you're running a business.

Like Sho, I've got 10 years of experience maintaining servers that run FreeBSD, Solaris, and a number of Linux distros; the novelty wears off after a while and you start to truly appreciate the bedrock-like solidity offered by the RHEL platform.

The problem is that sometimes you don't have any real choice but to run a later version of these server applications. Third-party software starts requiring newer and newer versions of stuff and your only options are to either not install it, install an old version which doesn't have the newer requirements (but probably does have unpatched security flaws), or break with Red Hat support and wing it on your own by installing newer versions of the software.

[Rails](http://www.wincent.com/knowledge-base/Rails) is the highest profile example here, but there are plenty of other humble [PHP](http://www.wincent.com/knowledge-base/PHP) apps like [MediaWiki](http://www.wincent.com/knowledge-base/MediaWiki), for instance, that are bumping up their version requirements and you can no longer run the latest and greatest on RHEL 3 without making some difficult choices.

In my own case I've really appreciated the rock solidity of Red Hat's support, but I've had to pass on installing software which required things not available on RHEL 3, including Rails. The one area in which I really had no choice at all was for my database: I had a critical application that required at least [MySQL](http://www.wincent.com/knowledge-base/MySQL) 4.1, there was no time to modify it, and RHEL 3 still ships with MySQL 3.23. So that's the one core application that I manually maintain, while leaving Apache, PHP, and all the other updates up to Red Hat. I also manually install a bunch of other software with which I want or need to keep current ([Subversion](http://www.wincent.com/knowledge-base/Subversion) and [Git](http://www.wincent.com/knowledge-base/Git), for example, among others).

I personally think that RHEL 5 is the light at the end of the tunnel. Not just because it has newer versions of Apache, PHP and everything else *right now*; after all, in 2014 RHEL 5 will still be officially supported by Red Hat but you can rest assured that its Apache install will be far behind the times at that point.

The real reason why RHEL 5 is the magic bullet is its virtualization technology. Basically, your host OS will always be RHEL 5 with the stock standard, totally bullet-proof Red Hat-supported application stack. When the day comes along that you need to install Apache 3.0 for some ultra-modern application you'll no longer need to break a sweat, because you can create a virtualized "guest" machine and install Apache 3.0 *only in that* sandbox. Suddenly the risks of breaking with Red Hat support don't seem so bad anymore.

You can also rest assured that if you should ever want to upgrade to RHEL 6, or RHEL 7, that you'll be able to set up a new install and just run your old RHEL 5 set-up inside a virtual guest on the new host. You'll have all the time in the world to gradually migrate applications over; in fact, you don't *ever* have to do it if you don't want to.

So basically that's why I'm excited about switching to RHEL 5. It seems like the best of both worlds: the peace of mind that only truly "enterprise" support can bring; and the flexibility that you sometimes need, especially important when you're depending on a third party for your applications and you don't set the requirements.

I'm also excited because moving to RHEL 5 means I'll be able to move this site over to Rails at the same time, and that will be a massive simplification too (despite the fact that Rails is a pain to deploy). Instead of worrying about a host of web applications written in different languages ([Perl](http://www.wincent.com/knowledge-base/Perl), [Python](http://www.wincent.com/knowledge-base/Python), PHP etc) with different requirements, I can just have *one* language, *one* framework, and *one* set of dependencies. Moving will be a *huge* project, and it's not one that I've even contemplated starting in the next few months, but I anticipate that the rewards will make it worthwhile.
