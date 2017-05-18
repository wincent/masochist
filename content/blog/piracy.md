---
title: Piracy
---

Simplifying dramatically, there are basically two main views on piracy among software developers.


### Take 1

The first is simply, *don't worry about it*. Let's take some examples. [Kevin Hoctor](http://nothirst.com/) writes:

> After years of being forced to design stronger and stronger activation/protection systems for the software I created, I'm very done with all that. If a small percentage of my potential customer base are thieves, then they can steal my software and I'm not losing sleep over it. I'm just going to continue to use moderate protection (AquaticPrime combined with limiting functionality prior to licensing) to promote a quicker sales decision and not to pretend I can stop the crackers that will take it no matter what protection I write.

Another example; [Erik J. Barzeski](http://nslog.com/2005/06/26/qotd_piracy):

> Freshly Squeezed Software's approach to piracy... is, basically, to ignore piracy. We always tried, at FSS, to make sure honest people paid up, but nothing more. None of our software even blocked pirated codes -- it wasn't worth the effort to maintain such a list. The pirates would simply generate a new code, and we'd add that to the list, and it'd become a vicious cycle that took development time away from actual features.





[Wil Shipley](http://wilshipley.com/blog/2005/06/piracy.html) says:

> Don't worry much about piracy. If you spend more than a couple days a year worrying about it, you're fooling yourself.\
> \
> Here's the simple facts: pirates steal applications. They don't pay for them. It doesn't hurt you to have something "stolen" that (a) is virtual and (b) wasn't going to be purchased.

[Daniel Jalkut](http://www.red-sweater.com/) adds:

> What complicates this issue even more is that nobody can say definitively whether piracy hurts or helps a small-time startup software business.\
> \
> The complexity only hardens my determination to just keep building better software.\
> \
> Things I know sell software:\
> \
> - Better software (features, aesthetics, usability, reliability).\
> \
> - Word of mouth/buzz/publicity/press.\
> \
> - Good customer service.\
> \
> There's so much work laid out for me right there, why bother working in an area (piracy control) that I'm not sure about? Yet many developers seem to make piracy-control their number one priority. It's because they're too fixated on the concept of a lost dollar. But a lost dollar from a pirate who uses your software is no more real than a lost dollar from a potential customer who hates that you never work on updates that matter to them, or who notices that your app requires activation, or who gets the impression from your sales rhetoric that you hate users, etc.\
> \
> I'm not successful enough at all this yet to really preach the truth, but my sales do go up every month, and it has nothing to do with anti-piracy measures, because I don't work on them at all.

All of these positions are basically the same and amount to doing "nothing" or "almost nothing" with respect to piracy. In reality those that say "nothing" really mean "almost nothing" seeing as they all implement at least basic license code systems, so there really is a high degree of consensus here. These quotes come from developers who are successful and well-known to varying degrees within the Mac software development community, and it's hard to argue with the reasonableness of their positions.

### Take 2

The other perspective on piracy is that you *should* "worry" about piracy. There is plenty of evidence that lots of developers think this way, as evidenced by the number of mailing list posts from people asking about how to implement license code schemes, how to implement activation, whether they should let their apps "phone home" or not, how to obfuscate their executables and so forth. I won't provide concrete quotes to illustrate this but if you spend time observing the developer community sooner or later you'll see the evidence for yourself.

### My take

I basically agree with the first camp. You should encourage honest users to pay and that means implementing a license code scheme. Beyond that you shouldn't worry too much about it. How much is "too much"? Well, unlike Erik I don't think that even blacklists are too much, given that you can maintain such a blacklist in less than ten minutes per month. In fact I'd say that even an hour per month wouldn't be too much work to put into anti-piracy measures as that's still only 12 hours per year. But any more than that and you're starting to get into the diminishing returns zone.

I think that under concrete circumstances a lax approach to piracy really can affect your sales, and measurably, but those concrete examples almost never arise; specifically, if you sell the only product that fills a certain niche, and there are no free competitors, and no cheaper commercial competitors. Nowadays those circumstances only turn up for brief moments; as soon as you have a good idea it is guaranteed that free and commercial competitors copying the idea will pop up. What this means is that in basically all cases piracy is going to hurt your sales much less than competition from other products will; and that in turn means that you should divert your resources towards competing (improving your product) and away from combatting piracy.

This is something I've learnt in my own business. When [Synergy](http://synergy.wincent.com/) first came out back in 2002 it featured some really original ideas. Competitors quickly sprung up and copied those ideas but they didn't have the same "mindshare" and so they weren't really an issue at first. In those days piracy *did* have a measurable effect. Basically you could watch the sales graph respond to two factors: releasing a new version produced an upwards bump in sales followed by a gradual tapering off, and the publication of a new pirate serial number produced a sudden downwards drop in sales. So in that case blacklisting pirate serial numbers really did make sense (and it probably does anyway seeing as it is so darn easy, literally a question of only a couple of minutes' work, and I think there are a significant number of honest people that will readily pay if they can't find a license code; these aren't hardcore pirates bent on getting stuff for free at any cost, but people who will use a pirate serial to get an "extended trial" if it's easy enough, and checking Serial Box is definitely easy).

Now, five years later I am convinced that the impact of piracy has dropped off to the point where it is really irrelevant compared to other factors like marketplace competition. Now there really is no measurable effect. You could speculate, but it would be awfully hard to measure or prove anything.

Back in the days when piracy was a real problem I started to work on anti-piracy technology. I basically explored all the usual methods: license codes generated using strong cryptography, product activation, self-checksumming executables, encrypted executables, obfuscated symbol names, obfuscated strings. My goal with all this was to make stuff that was easy for me to maintain (zero time investment; everything had to be totally automated from within Xcode and require no extra manual work) but which would be enough of a disincentive to dissuade pirates from publishing cracks, or at least from publishing cracks for every single release of the darn software.

It has been fairly effective: [Synergy Advance](http://advance.wincent.com/) has used bits of that technology and has never been cracked (of course it could be cracked if the pirates really wanted to, but the technology as it stands has been sufficient to make it "not worth it" in at least the two years since I first starting publishing preview builds). My view with respect to activation was to try it in an unobtrusive way that didn't impact paying customers and I think I was largely successful in that regard, but my position was always that it was something that I would try out and I'd turn it off without hesitation if I felt that it wasn't meeting the goals I had in mind for it. With respect to the complex stuff like self-checksumming and encrypted executables my perspective was always, "This is a nice thing to have and it's been interesting to develop it, but if Apple changes their OS in such a way as to break it I'll just remove it and throw it out in a heartbeat".

Now that I don't see piracy as so relevant anymore I am thinking of just giving all that anti-piracy stuff away (as open source or in some other format); it may still be useful to some developers who work in sectors where piracy matters.
