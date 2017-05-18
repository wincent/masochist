---
title: Dreaming about the server upgrade
tags: blog
---

Since the disk corruption on the server [the other day](http://www.wincent.com/a/news/archives/2005/06/synergy_and_syn.php) I have done a lot of thinking about how I could minimize downtime and speed-up disaster recovery. Unfortunately, it all costs a lot of money so I will probably leave things at the "dreaming" stage for some time before I move onto the "action" phase.





#### The current set-up

The current server has served me very well since I bought it in mid-2002. There have been bugs and software problems from time to time (sometimes my fault, sometimes somebody else's) but the hardware itself has been rock solid. I wanted something very reliable and so I decided to buy a pre-built machine from [IBM](http://www.ibm.com/us/) rather than trying to save a few pennies and building one myself.

I wanted to minimize my risk and my costs by buying only an entry-level server. There was some risk involved in the decision to move from paying others for hosting on a shared server to owning my own server and putting it in a colocation facility. I wanted to make the move because I was sick of service interruptions and bad service provided by other people. But full administrative control over the server would also come with a heap of responsibility.

First up there was the financial outlay, undertaken at a moment when I hadn't even released my first product yet (credit card to the rescue)! Then there was the technical risk (the need to set-up, administer and maintain a UNIX server for the first time; which meant going beyond just setting up an Apache webserver to things like mail configuration, DNS set-up, mailing list management, Perl modules, NTP, FTP, SSH, jails, OS updates and a bunch of other stuff). Finally there was the fact that I was assuming responsibility for hardware failures; if a hard drive got frizzled I'd need to take care of replacing it and recovering/restoring all the data. All of this was a bit dicier in the colocation context because I would have to do it all without physical access to the server (and if I wanted physical access at short notice I would have to pay $100 for the privilege). It's become even hairier since then because I'm living in Madrid right now but the server continues to reside over 10,000 kilometres away in Australia.

So I decided to go for a 1-Rack Unit server in IBM's xSeries. A 1-RU server would be cheaper because my colocation provider charges more rent the more rackspace you occupy. The current equivalent to the server I bought is the [306 model](http://www-8.ibm.com/servers/eserver/au/xseries/x306.html); I don't know if the model numbers have changed much since I bought mine three years ago (was it called a 305 back then? I'm not sure). The processors and buses are a bit faster, the drives bigger, more memory, but the machines are still basically the same in spirit.

I hoped to make disaster recovery a bit easier by buying two disks and implementing software RAID (level 1, mirrored). The idea was that if one failed the system could continue to operate and I'd just replace the dead drive. My recent experience showed me that it wasn't so straightforward. The "/usr" filesystem got inexplicably corrupted badly enough that the server dropped off the network and wouldn't reboot. Only someone standing in front of the server console in single-user mode could run "fsck" and return the machine to a bootable state.

It appears that I didn't lose any data, only some time and some money, but things could have been much worse. The worst case scenario would have been the need to do a complete reinstall and restore from backups, which would have been a nightmare considering that I am in Europe and the server is on the other side of the world.

I don't know how much grief the RAID saved me in this instance. It could be that without the RAID the system would have been completely hosed, but it also could be that the RAID made little difference. I'll never know.

#### The dream set-up

For some time now I've been thinking about ways I could make disasters less disastrous and recovery more straightforward. I've been researching having two servers in "failover" configuration (the slave watches the master and keeps a synchronized copy of everything on it and if the master ever goes down the slave takes over).

So we're talking about retiring the old server and replacing it with two new servers set up as a failover cluster. Twice the rackspace, twice the rent, twice the hardware outlay, but hopefully also a huge increase in peace of mind and a near guarantee of 99.9999% uptime even in the event of multiple hardware failures.

The dream set-up has a few key elements that are improvements over the old system:

#### 

The machine I've been looking at is the IBM xSeries [336 model](http://www-8.ibm.com/servers/eserver/au/xseries/x336.html). It uses Xeon processors instead of Pentiums and has more memory capacity, but I'm really not interested in it for the improved performance that it boasts over its little brother the 305; the thing which interests me are its quick disaster recovery features.

Whereas the 306 has "quick swap" drive bays that enable you to quickly change hard drives after powering down the 336 has proper hot swap bays (in fact you can stick up to 4 hot-swappable drives in its 1-RU form factor). It also has hot-swappable fans, a hot-swappable power supply, and you can even install an online spare in one of the memory slots and/or use memory mirroring to allow the server to keep running in the even that a DIMM should fail. Basically, if you're prepared to spend the extra money on the 336 and provision it adequately with spares then there should be very few hardware failures which would require you to take the system down.

Another characteristic of the 336 is that it's capable of doing RAID 5 (the 306 can only do RAID 0 or 1). I'm of the opinion that RAID 5 arrays are more robust than RAID 1 arrays and that disaster recovery is more straightforward. It is true that failures are more likely (if you have four drives instead two then the probabilities dictate that you'll most likely only have to wait half as long before you see at least one of them fail) but the idea is that the failures aren't so scary. My server OS of choice, [FreeBSD](http://www.freebsd.org/), [supports](http://www.freebsd.org/releases/5.4R/hardware-i386.html#DISK) the IBM ServeRAID 6i card.

And this would be a true hardware RAID and not a software one like I am currently using. I've had two nasty experiences in this last month with software RAID (once on the server and once on my development machine here) in which the RAID has not been able to protect me from disaster. One of the weaknesses of software RAID is that the software to manage the RAID usually has to be loaded from the disk itself. If the disk gets too corrupted to read that software then the RAID will become unusable. Hardware RAID on the other hand is an abstraction layer that means the operating system never needs to know that it's working with a RAID; it sees the RAID as a single drive.

The other investment I'd want to make this time is probably in the IBM "Remote Supervisor Adapter II" which IBM claims "provides remote management and control of the system independent of the server status, even if the server is powered off or otherwise disabled". I have to learn more about this product, but it sounds like it means you can remotely manage the server from any standard web browser. Sounds good to me. This would be really handy considering the distance between me and the server.

One final advantage of the 336 over the 306 is that it comes with a 3-year warranty instead of a 1-year one. All round it seems to be a much more serious piece of machinery.

#### Alternatives

It seems that IBM is the only vendor which offers so many hot-swappable drive bays in a 1-RU server (I checked Dell and HP and both only offer 2 bays). Apple comes close with their Xserve unit (3 bays) at a cost of A$6454.01 (with a single G5 processor, three SATA drives and a hardware RAID controller).

#### Conclusions

All of this comes at the price of a pretty penny. If you want RAID 5 with 4 hot-swap drive bays your base model will cost you A$3,699 (this is the bare system with no drives, 1 GB of RAM, and a single 3.0GHz Xeon processor). Add to that A$779 for the IBM ServeRAID-6i+ controller card and four IBM 36GB 2.5" 10K SCSI hot-swappable hard drives at A$779 each (you could go for 3.5" drives or use Serial-ATA instead of SCSI but then you'd only be able to use two hot-swappable bays; likewise you might be able to save some money by sourcing the drives from someone other than IBM, but I am not sure what sort of accessories IBM supplies with their drives to make them work with the hot-swap bays).

The machine already comes with a power supply, needless to say, but if you want a hot-swappable spare you'll be up for another A$599.01 (possibly the most expensive power supply I've ever seen). If you want some spare RAM online you can add A$779 for a gig of "PC2-3200 ECC DDR SDRAM". I can't find an AUD price for the remote management card but on IBM's US website it says it goes for US$599.

So it looks like the price tag on peace of mind is quite steep. I can't remember how much my old 305 system cost me but I think it was around the $3,000 mark whereas the configuration I propose here is in the neighbourhood of $10,000. Multiply that by two if you want a failover cluster (probably overkill). So like I said above, this little project will probably stay firmly in the realm of "dreams" and not "action" for some time yet...
