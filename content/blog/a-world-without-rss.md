---
title: A world without RSS
---

After [yesterday's hard reset](http://www.wincent.com/a/about/wincent/weblog/archives/2007/11/involuntary_reb_17.php) it looked for a moment like I was going to have to live in a world without RSS. Possibly without mail too. Probably wouldn't be a bad thing.

After rebooting, dancing the merry Disk First Aid jig, and rebooting again, my copy of [Mail.app](http://www.wincent.com/knowledge-base/Mail.app) wouldn't start up. Basically, it would beachball permanently on startup using almost zero CPU. Samples taken with Activity Monitor showed some kind of thread deadlock, all threads blocking in either `__semwait_signal` (most threads) or `mach_msg_trap` (in the thread running the main runloop).

So something was hosed. I used `lsof` to get the list of open files, looking for corruption. One of the frames in the stack trace was `handleSqliteError`, but the only obvious SQLite database that was open was `~/Library/PubSub/Database/Database.sqlite3` and it looked to be fine.

So I restored my `~/Library/Mail` folder from a backup; it was only a few hours old (I backup obsessively, from a cron-job run every 6 hours; this machine has proven so unreliable that mere daily backups would amount to reckless foolhardiness) so only lost a small quantity of mail, hopefully none of it important. I'm seriously thinking about doubling the number of back-up runs (to once every three hours). This is getting ridiculous.

But on relaunching Mail.app I saw the "first run" wizard and a number of my preferences had been reset. Most notably, there were no RSS feeds configured at all. That would have been the end of RSS for me forever, as there was no way I was going to reconfigure all those feeds. Luckily, copying over the `~/Library/Mail/RSS` folder from the old (corrupt) version seems to have worked. I'm my very own human Time Machine, it would seem. I have no idea why the `RSS` folder was absent from the backup copy.
