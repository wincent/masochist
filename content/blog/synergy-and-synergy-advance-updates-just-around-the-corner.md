---
title: Synergy and Synergy Advance updates just around the corner
tags: blog
---

A few minor disasters and an unexpected event or two have taken place during this last month that have set back development a bit. Things are now getting back to normal; I'm making this post to let you know that a new version of [Synergy](http://www.wincent.com/a/products/synergy-classic/) is ready for release and the next public preview release of [Synergy Advance](http://synergyadvance.com/) will follow closely. Read on if you are interested in knowing what happened during this last month:





#### Hard disk failures on my development machine

Ouch. Despite my painstaking efforts to keep my one-and-only development machine in the best possible working order and to implement as many levels of protection as possible (filesystem journaling, RAID, UPS protection, daily backups and so forth) I suffered a series of kernel panics and crashes and my RAID got into an irrecoverable state. I lost over a week to troubleshooting and recovery. I made some notes about the very unpleasant process on my [personal weblog](http://www.wincent.com/a/about/wincent/weblog/) in [this article](http://www.wincent.com/a/about/wincent/weblog/archives/2005/05/1041_kernel_pan.php). No data was lost overall thanks to my fanatical backup regimen, but I did lose a lot of time.

#### A personal crisis

A good friend of mine wound up in hospital with multiple fractures including a broken spine. She has no family here in Madrid and only a small number of friends so I've been doing the best I can to support her. I've spent enough hours in the hospital as part of my daily visits that I never really want to set foot in another again if I can help it. She was recently discharged and spent five days at my home where I did my best at being full-time nurse (totally unprepared for it!). She's now getting better and is staying with another friend, so I'll have more time to devote to development from this point on. It was just one of those situations where I felt that I was needed and that helping out was the right thing to do.

#### Apple's Intel announcement

Not really a crisis, a disaster, or a set-back (in fact it's something I am quite optimistic about) but it did prompt me to divert some development resources away from my [existing products](http://www.wincent.com/a/products/synergy-classic/) and towards my unit testing framework. I wrote about why I think unit testing is particularly important in this transition in [this article](http://www.wincent.com/a/about/wincent/weblog/archives/2005/06/unit_testing_an.php) (other notes [here](http://www.wincent.com/a/about/wincent/weblog/archives/2005/06/handling_except.php) and [here](http://www.wincent.com/a/about/wincent/weblog/archives/2005/06/mock_objects_in.php)).

#### Server downtime

A few days ago the wincent.com webserver went down like a stone just when I was ready to release an update to [Synergy](http://www.wincent.com/a/products/synergy-classic/) (I had literally packaged the update the night before). It was a stressful situation because there was absolutely no indication that something was wrong, yet the server was up one minute and down the next; doubly nerve-wracking because the server is in Australia and I am in Spain.

The server had been up for 40 days when it suddenly stopped responding. The only reason I had rebooted it 40 days earlier was to apply a security patch; prior to that it had an uptime of well over 400 days. The folk in the data centre tried powering it off and on again, and although the lights came on and the fans were spinning it was completely dead to the network.

So a call to a $185/hour UNIX consultant and a couple of hours later, the server was back up. We still don't know what caused it; all we know is that the /usr filesystem got into a bad enough state that the machine went dead and wouldn't reboot. The consultant was able to run fsck and everything now appears to be working fine. This machine also has a RAID just like my development machine, but this makes the second time in one month in which a RAID hasn't been enough to save me from disaster. Luckily no data was lost and to my knowledge no customers were affected by the downtime.

When I go back to Australia in August I plan to do some serious work on implementing a more robust server solution. I am thinking about retiring that server and replacing it with a pair of new servers in a failover configuration. I still have to sort out the technical details but I think it will be worthwhile for peace of mind given that I live so far away from the server.

And so that's the summary of things that have happened this month which have ended up robbing me of quite a bit of development time. Things are returning to normal, however, so expect to see some releases soon: Monday for Synergy if all goes well and soon after that for Synergy Advance.
