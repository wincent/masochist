---
title: Memory for the Intel iMac
tags: blog
---

[With the last batch of trouble](http://www.wincent.com/a/about/wincent/weblog/archives/2006/05/involuntary_reb_1.php) with my G5 I decided it was time to switch development over to my shiny new iMac. Although it is technically less powerful (only a 32-bit Intel Core Duo 1.83 GHz compared with a 64-bit dual 2.5 GHz G5) I suspect that performance will be almost as good for most things.





It's a good time to sell a G5 in any case, before the new Intel-based pro-desktop machines come out and make the current crop of G5s look like undesirable, noisy paperweights.

Ah the noise... or rather, the silence. The silence using the new iMac is golden, the noise of the hard drives purring almost imperceptible. If the machine has fans I've never heard them. Now isn't that a great compliment? Not even knowing if the machine has fans at all?

In the meantime my G5 sits behind me literally roaring like a hair dryer while I do a free-space wipe on it and prepare it for sale. It has done this blow-heater impression since new without any apparent rhyme or reason. The CPU load and ambient temperature seem to have all too little to do with the way the fans speed up and slow down with schizophrenic lability. That's partly what makes it so annoying: it's not only loud, it's variably loud. In any given 60-second period the fans may alternate between roaring, whining, complaining, blasting, surging and screaming, or any of a number of adjectives that describe annoying sounds. I can sleep with this noise only because I am accustomed to it, but when I have guests in my room I feel almost ashamed of the way the machine strives to drown out whatever music I might have playing in iTunes for their entertainment, or whatever DVD might be struggling to make itself heard over the din of the machine's blow-heater-like cooling system.

In short, the noise factor alone is enough to make me thrilled to be selling this machine. Even though it supposes a step down in computing power. And I am a power addict.

It turns out that the new iMacs are very memory hungry: or rather, Mac OS X is memory hungry and the new iMacs are underequipped with only 512 MB of RAM.

I've found that it's basically a one-app machine. Performance is reasonable when running any single app at a time. But try to fire up two memory hungry apps and the machine slows to a crawl. It's evidently starved for memory because the CPU load remains very low, close to zero, but the user interface begins to behave as though it were buried under a sea of treacle and every action is accompanied by many seconds (up to 30) of disk thrashing. The worst of course is switching apps.

Even Front Row doesn't work properly with so little memory. The delay between pressing a button on the remote and the machine actually responding can be several seconds long. This is not a very good experience. I think Apple made a mistake shipping these machines with only 512 MB. Mac OS X evidently needs 1 GB, minimum. Switchers are going to buy these machines and get utterly confused when their remote seems to stop working.

Even the most basic usage pattern for me is impossibly slow with the standard configuration. Let's take the example of working in Xcode and having Mail open in the background. I frequently need to flip back and forth between the two. Firing up Mail only when I need it is not a viable option because I would spend half the day waiting for it to load.

At boot time free physical memory is immediately down to only a few meg. With a few basic apps open (such as TextEdit and Activity Monitor) I can then launch the two heavyweights, Mail and Xcode. A freshly launched copy of Mail with a single mail box selected takes up about 60 meg of physical memory and 265 meg of virtual. Xcode with a single project open uses more and more memory even when it is just sitting there in the background (what is it doing? indexing?); on opening the project it uses about 40 meg of physical memory but left alone for a while it soon climbs to 50 meg. Virtual memory use starts off at about 257 meg.

A serious app like Toast running under Rosetta uses 54 meg physical and nearly 500 virtual. Using this machine the number of page-in and page-outs grows steadily almost without cease. If I start a compilation job I can watch both figures steadily grow at the rate of about 100 every few seconds.

Under these circumstances doing anything at all in Mail (such as switching mailboxes) becomes unbearably slow. Xcode remains relatively responsive at the user interface level, but compilation crawls along like a crippled turtle. A clean-and-build of Synergy Advance on the G5 took about 6.5 minutes. On the iMac my first test run took over 26 minutes (measured using `time xcodebuild clean build -target "Synergy Advance.app" -configuration Release`):

    real    26m19.688s
    user    5m36.100s
    sys     3m11.155s

So it became immediately apparent that if I was to live with this machine without hurling it from the second-floor balcony in a fit of rage that I would need more memory. It is no exaggeration to describe the machine as "unusable" with the amount of RAM that it ships with from the factory.

It has two RAM slots, one of which ships with a 512 MB module from the factory. You can either stick another 1 GB module in the remaining slot to bring the total up to 1.5 GB, or throw out the old module (or sell it on eBay, or keep it as a spare) and get two 1 GB modules for a total of 2 GB. The manual offers instructions on how to perform the upgrade although it warns you can void your warranty if you make a mistake; evidently Apple is aware that the iMacs are memory impoverished because RAM is the only user-installable part that is mentioned in the manual and they took special pains at the design stage to make the memory slots accessible behind a small door on the bottom edge of the case secured by two conventional screws.

Given my experience with the G5 (which had 2.5 GB) and with the 512 MB iMac, I concluded that the only option was to upgrade to the maximum, 2 GB. If upgrading to 4 GB had been an option I probably would've considered it. I tried to get memory from the stores here in Madrid (seeing as I don't have net access at the moment, online shopping wasn't really an easy option) but it seems that the iMac's ultra-fast and compact PC2-5300 memory (DDR2 667) is as rare as hen's teeth here. So much for the benefits of standardisation... the standard evidently hasn't even arrived here yet.

So in the end I had to go into the Internet cafe and order from my trusty online vendor, [OWC](http://macsales.com/) (Other World Computing). I have bought memory and hard drives from them many times over the years. This will mean a slight additional cost for freight but that will be more than outweighed by the better prices available when ordering from the US. And they're very quick. I placed the order yesterday (around lunchtime in Spain), and OWC immediately prepared the order (morning of the same day in the US); FedEx collected it early in the afternoon and shipped it off on the next hope that same evening. When I receive the memory I'll do another compilation time test.

This is an interesting opportunity to do a comparison of memory prices over time because for the first time ever I've ended up purchasing that same quantity (2 GB) at two widely-separated points in time. Normally I find that as memory prices go down I buy more memory; this time I've bought a fixed quantity on two occasions.

Back in October 2004 when I got the G5 my 2 GB of RAM, also ordered from OWC, cost me US$429.99, or $215.00 per gigabyte:

> 2GB PC3200 PowerMac G5 Memory Upgrade (2x1GB Matched Pair) DDR 400 MHz CAS 3.0 184 Pin 8-Layer TRUE PC3200 Modules

The 2 GB for the iMac, ordered just over a year and a half later, costs $225.00, or about $112.50 per gigiabyte:

> 2.0GB Matched Pair (1024MB (1GB) x 2) PC5300 DDR2 667MHz 200 pin SO-DIMM Modules

I've seen it even cheaper (as low as $80) elsewhere, but OWC is a reputable vendor with good service and I know them, so I preferred to stick with what I know.

So it appears that memory has roughly halved in price over the last 18 months, in addition to getting smaller and faster, so "Moore's Law" is definitely holding true with respect to memory (even though the "law" as such was never conceived to be applied to memory).
