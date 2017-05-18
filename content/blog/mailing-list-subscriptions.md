---
title: Mailing list subscriptions
tags: blog
---

When I first got a home-based Internet connection 10 years ago Google didn't exist. Spam was an insignificant problem. I freely posted to news groups and mailing lists without fear of getting inundated with spam or forfeiting my privacy to an omniscient search engine or an [infinite memory that never forgets](http://web.archive.org/).

Now, 10 years later, I can type my name into Google and see a trail that stretches across time and space. All the dumb questions I ever asked to a mailing list are on record. All the misguided suggestions or incorrect assertions I ever posted in a newsgroup are engraved into the annals of history. Every joke I tried that wasn't funny is recorded, as is every sarcastic comment or annoyed utterance.

Back when I started none of this mattered, but in the age of Google there is is no such thing as comfortable anonymity. This is partly why I never make posts to mailing lists like [cocoa-dev](http://lists.apple.com/mailman/listinfo/cocoa-dev). I have a corporate image to uphold; maybe it's stupid vanity but I just don't want the author of [Synergy](http://synergy.wincent.com/) to be seen asking dumb questions about Cocoa Bindings. Sadly, this means I'm a lurker.





If I had known then what I know now I would never, ever have posted to a mailing list or a newsgroup with anything other than a throwaway address. Just think of all the spam I could have avoided...

So my advice is this: subscribe to mailing lists and news groups using only throwaway email addresses. Once the spam starts to roll in you can just dump the old address and move on to a new one.

There are two possible strategies, each with its pros and cons. In the first, you create a different address (or alias) for each mailing list and in that way have more fine-grained control. If one of the addresses starts receiving spam then you need only migrate that one, not all the others. The downside to this is that you must set-up and maintain multiple accounts/aliases, and in having multiple addresses you also increase the number of potentially targets for spammers. That's why it is important to use pseudo-random addresses which spammers are unlikely to guess; in other words, "yookexai@wincent.com" is better than "john@wincent.com" or even "cocoa-dev@wincent.com".

You see, if you include the name of the mailing list in the address then you make it easier for spammers to guess deliverable addresses. Same goes for when you have to put your email address into a web form. Instead of creating an alias like "microsoft.com@wincent.com" create one like "aefoofon-microsoft.com@wincent.com" which includes a pseudo-random component. The `pwgen` commandline utility is great for this ([SourceForge project page](http://sourceforge.net/projects/pwgen/)); for this purpose I invoke it with the `-A`, `-0` and `-B` switches to produce strings with no capital letters, no numbers, and no ambiguous characters.

The other approach is to use a single account for all your mailing lists. The benefit is that you only have to create one account; the downside is that if you start to get spam then you have to update every single mailing list subscription to a newly created address and that can be very time consuming if you have a lot of subscriptions.

In the long run a hybrid approach may be the best. If you're subscribed to a read-only list (announcements) then you don't need to create full accounts; you can get away with aliases. If the alias gets compromised then you can painlessly update it. A prerequisite for this approach is that the mailing list software allow you to confirm your email address by clicking on a link in the confirmation email ([Mailman](http://www.gnu.org/software/mailman/index.html) is one such piece of software, and fortunately it is very popular). Other mailing list managers which require you to reply to the confirmation email may not work, because if you are using aliases then your reply will not originate from the address that you're trying to subscribe to the list; but you can still give it a try.

In the case of non-read-only lists (discussion lists) you can't really get away with aliases. This is because most such lists only accept posts from subscribers and your outgoing address is not going to match your subscribed address (the alias). Even if the list allows you to add other addresses to the "permitted senders" list (I believe that the [Courier mailing list manager](http://www.courier-mta.org/couriermlm.html) allows you to do this; others may as well) it's still not a perfect solution because you end up exposing the underlying address to spammers.

This is unfortunate because it means you'll almost inevitably have to set up multiple accounts and Mail.app tends to be a pretty heavy abuser of server connections. If you have many accounts set up all on the same server then Mail.app can quickly eat up a huge number of available connections. Using POP instead of IMAP may be of some help but it's still not ideal. That's why you may need to elect to have a single account for all the mailing lists to which you intend to make posts, and then set up aliases for all the rest.

There are other possible workarounds to the alias problem. You could do some server-level hackery to change outgoing addresses depending on the recipient, but that won't help you when you're trying to mail someone off-list.

So that's why I've gone with the one-account strategy for now. When the spam starts to hit I'll just have to update all my subscriptions; unfortunately, a pretty painful process.
