---
title: Involuntary Reboot Log #39
tags: blog
---

In an endless Build-Debug-Edit, Build-Debug-Edit cycle for [Synergy Advance](http://synergyadvance.com/), click "Debug" and wait for 10 seconds while Xcode thinks. Notice that the music has stopped. Switch to Safari, which has a list of MP3 files in a window. Command-Click a couple of MP3s with the intention of opening them in tabs and previewing them (using the Quicktime plug-in). Safari beachballs.





Wait a few seconds. Notice that Toast is still running and in the Dock. Control-click with the intention of quitting it seeing as the daily backup to DVD is now complete. No response. Dock freezes. "Toast Titanium" tool-tip frozen above its icon.

Don't bother trying to use the Command-Tab application switcher because that's provided by the now-frozen Dock. Notice that the Toast window is partially visible so bring it to the front by clicking on it. Click on the "File" menu so as to select "Quit". Witness as the menu does not open and Toast also freezes.

Click on the time in the menu bar (which is still updating every second) so as to see the date. Witness as the menu extra freezes (beachballing).

Knowing that Mac OS X is a delicate little beast, rather than pointing and clicking and making things worse, go have a shower and hope that the machine has come to its senses when you get back. This is a machine that you shut down over night and booted cleanly in the morning because you know that [daily reboots are good for the health of the system](http://mjtsai.com/blog/2006/01/27/daily-reboot/).

When you get back, notice that Xcode has joined the ranks of frozen applications. Try Option-Command-Escape to bring up the Force Quit dialog. Nothing.

Notice that the Adium window is partially visible. Click on it to bring it to the front and tell your friend that very likely you'll soon be disappearing from his list of online contacts when you're forced to do an involuntary reboot. Witness as Adium starts to beachball before coming to the front.

Notice that NetMonitor continues to update in the Dock, but that the network traffic has stalled, indicating that the hidden Azureus application has effictively stopped working.

Notice that the CPU graph provided by the Activity Monitor in the graph, which up until now has shown that both 2.5GHz 64-bit CPUs have been idling away at about 1 or 2% utilization throughout this entire fiasco (although the machine's fans continued to roar at their usual hair-dryer volume the whole time), has stopped updating.

Notice that the only window which doesn't show a beachball when you mouse over it is the one belong to Mail.app. Try clicking on that window. Beachball.

Boot laptop. Ping the hung machine. It responds. Try to log in via SSH. Hangs. Do a portscan. The SSH port is open, but it doesn't allow you to connect.

Depress the power key and perform a hard reset. Decide that just to be safe you'll follow your standard policy of booting from optical media and running Disk First Aid, seeing as [neither Apple's journaling file system nor their software RAID implementation have proven to be adequate protection](http://www.wincent.com/a/about/wincent/weblog/archives/2005/05/1041_kernel_pan.php) in the past.

Insert Tiger install disc. Reboot with "C" key held. Witness as machine boots back from startup disk anyway. Reboot again, this time forceably electing the start-up disk prior to initiating the reboot.

Fire up Disk First Aid. Witness as it shows you a progress dialog instead of the usual list of volumes. The dialog says, "Reconstruyendo fragmento del RAID "disk0s4"; in other words, "Reconstructing RAID fragment". Start to get very nervous. Ask yourself, "How many times is this machine going to screw me? How much hassle is it going to cause me despite my obsessive daily backup regimen, my UPS and RAID protection, my journaling file system, my avoidance of third-party software?". Ask yourself, "Why is this happening to me when all I am trying to do is be productive, work hard (even on a Sunday afternoon) and get the next version of my software out to my customers?"

Witness that the "Tiempo resetante estimado para la reconstrucción" is clipped and you can't actually read the time remaining. Try resizing the dialog (it has a resize gadget); it cannot be resized.

Note that this debacle started at roughly 5 PM and it's now already 5:50 PM. The progress bar is less than 10% complete and is not moving.

Vow to never depend on Apple's software RAID again, and get a proper hardware RAID with your next machine. Long for the day when Apple will release said machine (Intel pro-desktop) and when you'll actually have the money to get said machine and said RAID.

**7:30 PM:** The rebuilding is complete and the RAID is shown as "en línea" (online). Now doing a verification of the volume. No errors reported. Fingers crossed.

#### Totals for this machine

9 kernel panics.\
30 hard resets.\
Total time wasted in this incident: nearly 3 hours.
