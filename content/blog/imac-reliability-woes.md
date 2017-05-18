---
title: iMac reliability woes
tags: blog
---

Since I switched to this first-gen Intel iMac as my main desktop machine back in May 2006 I've had a pretty bad run with hardware reliability.

Earlier this year I noticed that the integrated iSight camera was no longer working; in fact it didn't even appear in the list of devices in the system profiler. The difficulty of disassembling the iMac dissuaded me from investing further; either it's somehow become unplugged inside (which I doubt) or it's a more fundamental failure requiring replacement. In any case it's not a common enough complaint for Google to turn up any useful traces.

The the other day I had my first [catastrophic filesystem failure](http://www.wincent.com/a/about/wincent/weblog/archives/2007/07/involuntary_reb_12.php) on this machine, requiring a complete format and restore.

Now both of these faults might be due to the quality of the components provided by third-parties. It's disappointing if this is true seeing as Apple has a reputation for choosing quality suppliers; too many corners are being cut when the odds of failure just outside the one-year warranty period start to approach 100%. In the case of the filesystem failure it's too early to know whether it was hardware-induced or caused by a flaw in Mac OS X and/or Apple's implementation of HFS+; the system and the disk have been behaving fine since I restored things.

Along the way I've had ongoing problems with my "Mighty Mice"; one standard and one cordless. I've previously written about the [design flaws](http://www.wincent.com/a/about/wincent/weblog/archives/2006/05/mighty_mouse_de.php) which I think the device suffers from, and my difficulties in [cleaning the scroll wheel](http://www.wincent.com/a/about/wincent/weblog/archives/2007/06/cleaning_the_mi.php); I think this latter issue is actually a design problem, or a series of them, too: firstly, the design makes it all too easy for dirt and grit to accumulate in places which impede the functioning of the ball; secondly, the design makes cleaning said ball difficult; and thirdly, the design requires that you actually break or damage in some way the device if you want to open it (necessary for cleaning).

Anyway, my latest hardware issue is with the built-in Superdrive. I burn [daily backups](http://www.wincent.com/a/about/wincent/weblog/archives/2007/07/new_backup_regi.php) to DVD and with time the success rate on these burns has been going down. Discs are less and less likely to burn, verification succeeds less and less often, and discs won't mount either. Annoyingly, a few months ago the unit developed the habit of ejecting discs in such a way that instead of waiting in the slot for me to grab them they would roll out completely and land on the desk, or worse, the floor.

When things got so bad that of a new batch of 10 DVD+RWs that I'd bought, *not even one worked*, I went out and bought a cleaning kit. First time I've ever done that but I had little choice. After using it I was still unable to burn any discs, or mount any of my previous backups; not very useful backups then, are they?

Finally, today was the last straw: I tried to insert the official Mac OS X install DVD that came with the machine and not even that would mount; it was ejected by the unit (and would've hit the floor if I hadn't caught it; a reflex I have highly developed over the last few months). It's one thing having flakey burns, but having a machine that can't be booted from DVD in an emergency is downright scary. The machine's track record isn't good enough to make me feel comfortable about not having that capability for even a short while.

The unit is the infamous Matshita UJ-846 which isn't flashable to make it regionless. This means that someone like me, born in one region, living in another, is unable to watch half of the DVDs he's paid for.

I didn't bother looking too far afield for replacement units of this kind (none of my usual online retailers carried it) and instead sought an alternative. The best choice looks to be the [Pioneer DVR-K06](http://www.pioneerelectronics.com/pna/v3/pg/product/details/0,,2076_310070061_302357597,00.html). I don't know whether I'll be successful in installing this thing; information is scant but hints suggest that Apple does ship this drive in some of their machines (Mac Minis and some laptops, for example) and there are some unconfirmed claims of people sticking them in Intel iMacs. The published dimensions [seem to match](http://www.command-tab.com/2007/01/01/mac-dvd-burner-upgrades/). Apple itself doesn't seem to consider this to be a "user-serviceable part"; the closest thing I can find is [this set of instructions](http://www.info.apple.com/usen/cip/pdf/imacg5/033-2492.pdf) for swapping a drive in a G5 iMac.

So I've ordered one for $78 and will see if I can get this thing in the Intel iMac. I didn't want to go for an external FireWire burner (none readily available in the stores here in Spain, it's USB 2.0 all the way) and in any case the beauty of an internal unit is that it's automatically protected by the UPS that protects the computer. Besides, having an external enclosures detracts from the all-in-oneness of the iMac (one of its key charms in my opinion); and who wants to sell an iMac with a non-functional camera *and* dead optical drive?

I didn't want to send the machine in to Apple service either; it's out of warranty (last time I stick with the standard 1 year warranty; I've been bitten too many times now!) and I can't afford to have my one and only work machine away for repairs.

So I expect the drive will get here in a week or so. I'll post a report once I've found out with this little project will fly.
