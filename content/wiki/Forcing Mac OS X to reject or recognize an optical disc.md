---
tags: os.x wiki
---

Lately I've had some problems with Mac OS X 10.4.7 not recognizing or allowing me to eject optical discs.

# Background

I do a daily backup to DVD+RW using Toast. I rotate the discs, erasing the oldest disc in the set each day and using that as the target for the latest backup. I am not sure whether the fault lies with the Finder, Mac OS X, or Toast itself, but the problem manifests itself as follows:

I insert the disc but neither Toast nor the Finder recognize it. No dialog is displayed. The eject key on the keyboard has no effect, nor does the eject button inside Toast. The volume is not mounted at `/Volumes/` nor is it displayed in the top-level "Computer" view in the Finder.

Given that the iMac has a slot-loading drive with no eject button, there seems to be no way to get the disc out short of rebooting. The behaviour is very inconsistent, and I've not been able to identify whether it depends on the order of insertion (whether Toast is running before insertion). On one occasion I was able to get the drive to spin up and eject the disc by trying all manner of things (relaunching Toast, using Disk Utility) but I wasn't able to reproduce this.

# Solution

1.  Put the computer to sleep.
2.  Wake it up.

The system will recognize the disc. You can then erase it, eject it, or access it normally.

# See also

<http://docs.info.apple.com/article.html?artnum=51008>
