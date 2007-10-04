---
title: Mail spring cleaning
---

*In general* I never throw out any mail, apart from spam that is. I have personal mails dating back as far as 1996; prior to that I only had email at my university and I never had an archive of the very oldest messages (which probably date from 1994).

Lately my homedir backups have been getting uncomfortably large because my `~/Library/Mail/` folder alone was weighing in at over 6GB.

Instead of hanging on to my mailing list archives (my [cocoa-dev](http://lists.apple.com/mailman/listinfo/cocoa-dev) folder is now a gigabyte) I've decided that I'm going to trust [Google](http://www.wincent.com/knowledge-base/Google) to index them for me and Apple to keep a copy of every message.

I've also been throwing out old attachments. Generally if an attachment is important I save it elsewhere immediately (media, for example, usually end up getting imported into iTunes or iPhoto). But I've started going back over old emails and stripping off all attachments. I figure if I haven't looked at it in the last month or so then I'll probably never need to. Note that this doesn't actually result in any size saving until you rebuild the corresponding mailbox.

The other thing is that the oldest messages have survived many generations of import/export from and to various email clients. I've used [Mail.app](http://www.wincent.com/knowledge-base/Mail.app) pretty much from the beginning on [Mac OS X](http://www.wincent.com/knowledge-base/Mac%20OS%20X), but prior to that I used Eudora, Outlook Express and Entourage; I may even have used Netscape Mail at one point but I can't remember.

Along the way some information has been lost of mangled. After rebuilding I noticed that a lot of really old mails were showing up with today's date and the time at which I performed the rebuild. On inspecting the corresponding `mbox` file (200 megabytes in size and containing 300 million lines) I saw entries that had headers like this:

    From ???@??? Fri Oct 06 12:07:24 2000
    Date: Sun, 16 Apr 2000 12:20:21 +0930
    From: Actual sender <sender@example.com>

Presumably the October 2000 datestamp is corresponds to one of my imports because lots of emails shared that date. The April 2000 datestamp looks to be correct one.

I was pleased to see that if I replaced the string `???@???` with a valid address then the timestamp showed up correctly in Mail.app again, even without rebuilding. This is a relatively simple change to make and can be semi-automated; unfortunately only *semi*, so I won't be doing it for all my mailboxes just yet.

**Update:** Looks like I spoke to soon. Although my test modification worked, going back and fixing and the occurrences in the mailbox didn't have any effect at all, even after rebuilding.
