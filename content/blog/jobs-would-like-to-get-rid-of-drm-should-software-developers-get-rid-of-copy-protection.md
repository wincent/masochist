---
title: Jobs would like to get rid of DRM, should software developers get rid of copy protection?
tags: blog
---

Steve Jobs would love to [abolish DRM on Apple's music downloads](http://www.apple.com/hotnews/thoughtsonmusic/). Am I surprised that he feels this way? Not really. Am I surprised that he went on the record and said it to the public? Very much so. This is a gutsy move because he's built up a dominant position in the music downloads marketplace and then basically defying the public to challenge his "allies" (the record labels). This is going to make some serious waves. I hope that they end up actually turning the tide. Could this be a revolution?

Why do I care? I personally don't mind the iTMS DRM because it doesn't really impact my fair-use rights in any way. But I'd be happy to see it go because it would be good for Apple, and what's good for Apple is good for me seeing as I am both a consumer of Apple's products and I want to see them bring ever-better products to market, and a vendor within the Apple marketplace (selling software that runs on Apple operating systems). I'll bet that if the iTMS sold DRM-free tracks then Apple's already-brisk sales would positively sky-rocket.

But I think there's an interesting question here: is there an analogy between DRM on music and copy-protection on software? I think there is, but the distribution models are currently different.





#### Why it wouldn't work for software

Let me explain: when you download music from the iTMS it is protected by DRM; when you download software like [Synergy](http://synergy.wincent.com/) it is protected by a serial number system.

Jobs is basically saying that he'd embrace a model in which you could download DRM-free music from the iTMS. Does that mean that I could or should start distributing software without any serial number system?

I think the answer is no because the distribution models are different. Ask yourself this, do you think Jobs would advocate a system in which people could download music from the iTMS without paying for it? That is, that the music would be like shareware; you'd download it and *then* pay for it. I don't think so...

That's really the reason why Jobs' proposal for DRM-free music downloads would work; because it's predicated on the distribution model being a pay-to-download one. Most Internet-distributed commercial software today does not use that model; it instead uses a pay-to-authenticate or a pay-to-unlock model, or a "pay to switch from trial to full ownership" model.

I think if we switched to a pay-to-download model then yes, we could throw all our serial number and product activation schemes out the window. These systems limit piracy but never eradicate it completely. In an ideal implementation, a pay-to-download model would be approximately as effective in limiting the damage done by piracy. Instead of sharing patches, cracked versions and serial numbers, people would exchange the software itself. This is all too easy today thanks to [BitTorrent](http://en.wikipedia.org/wiki/BitTorrent) and the various torrent community sites and search engines, so the implementation would have to be carefully constructed if it were to deliver the same kinds of conversion rates (sale to downloads ratio).

#### Benefits of the pay-to-download model

You no longer have to spend time writing serial number systems, nor maintaining blacklists, nor engaging in any of the other ongoing anti-piracy police work that you must undertake when you rely on a serial number system. You no longer have to write code to support timed trial periods, or limited numbers of runs (which are easily defeated anyway).

The extra time that has suddenly become available to you can be put towards new features and bug fixes, which ultimately pleases customers and drives sales.

When there are no protection mechanisms you're freed of having to worry about keeping them secret. This removes one of the barriers to eventually open-sourcing your products. (I love open source; I'd open source everything if I could figure out a way to make it financially viable.)

Users can't lose their serial numbers if there aren't any serial numbers to lose. This is one less thing for them to worry about and it means that you as a developer will avoid the support costs related to helping customers find lost serial numbers.

Being free of serial numbers can build good will with customers, and that's good for business. But you'll only build up that good will if you provide them with an experience that is as good or better than the experience that they currently get with serial numbers. Doing this well requires considerable thought.

#### Downsides to the pay-to-download model

You lose the convenience of building a single product which is a trial version which can be unlocked. You instead have to build a separate demonstration version with limited capabilities. Admittedly you can probably use pre-processor macros and conditional compilation to build both products from the same code base, but it's still two builds instead of one. And instead of testing one built product you've got to test two.

The same problem applies when it comes to rolling out updates. When someone running the trial version wants to check out a new version you can just point them at the download URL for the new trial. But what do you do when someone running the full version wants to upgrade? Do you provide unique URLs for each customer to discourage sharing? Do you provide incremental upgrade packages which can only be applied to full versions? How do you provide a smooth and hassle-free upgrade experience for paying customers without weakening the security of the distribution model too much?

In the case of major, paid upgrades, how do you identify previous customers? Instead of requiring a serial number from a previous version what do you require? An email address? These change far too often.

You can no longer distribute the full version of your software on magazine cover CDs, or give it away at conferences or user group meetings. This really isn't such a big deal, but it does mean that you'll have to invest time in making it very easy for people to upgrade to the full version of your application (ideally from within the application itself).

Some of the time you save in maintaining copy protection technology must be spent developing the server-side support for the pay-to-download system itself. This means providing unique download URLs for each purchaser which should be made available to them immediately upon purchase. Once again, this should ideally be done from within the application itself. For obvious reasons, URLs should be both time-limited and the number of downloads should be restricted.

You no longer have to worry about lost serial numbers but you instead have to worry about people who lose or delete their copy of the product whether due to hardware failure or some other cause. This requires you to develop a system which will mail purchasers with a new URL to download the software again.

One of the disincentives to sharing serial numbers is that they can be loosely "tied" to the identity of the purchaser. "`steve@example.com`" is less likely to share the license that he purchased if it means that he has to hand out his email address along with the serial number. You lose some of this disincentive when you switch to the pay-to-download model, unless you can find some way of personalizing or watermarking each download on the fly. This is much easier said than done.

#### Update: 8 February 2007

Another viewpoint emailed to me by [Pierce Wetter](%20http://www.opinionatedbastard.com/archives/000748.html):

> Note: I work for PACE (www.paceap.com/www.ilok.com)
>
> The other side of DRM, especially for software is that software companies always forget the R in DRM.
>
> If you shell out $400 for a piece of software, and you lose the disk, how do you prove that you used to own the software?
>
> Most insurance companies won't insure software.
>
> Something we've learned over in iLok land is that when you start enabling features purely for the end users (multiple licenses per dongle, secure transfers of licenses, backups of licenses, etc.) users don't mind DRM so much.
>
> Perhaps its worth $.99/song for Apple to be effectively backing up every song I own. (You can re-download your music library once/customer.)
>
> Just some thoughts.
