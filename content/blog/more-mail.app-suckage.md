---
title: More Mail.app suckage
tags: blog
---

$ cd ~/Library/Mail/Mailboxes/listas/xcode-users.mbox
    $ ls -lh Messages
    total 48
    -rw-r--r--   1 wincent  wincent    3K Oct  4 23:37 1722199.emlx
    -rw-r--r--   1 wincent  wincent    2K Oct  4 23:37 1722200.emlx
    -rw-r--r--   1 wincent  wincent    3K Oct  4 23:37 1722201.emlx
    -rw-r--r--   1 wincent  wincent    8K Oct  4 23:37 1722202.emlx

That's my xcode-users mailing list folder after cleaning it out, emptying the trash *and* rebuilding the mailbox. But get this:

    $ ls -lh
    total 78640
    -rw-------   1 wincent  wincent        1M Apr 20  2005 Incoming_Mail
    -rw-r--r--   1 wincent  wincent       47K Apr 20  2005 Incoming_Table_of_Contents
    -rw-r--r--   1 wincent  wincent      357B Apr  3  2007 Info.plist
    drwx------   6 wincent  wincent      204B Oct  4 23:37 Messages/
    -rw-r--r--   1 wincent  wincent        5M Mar 30  2005 content_index
    -rw-------   1 wincent  wincent       30M Mar 30  2005 mbox
    -rw-r--r--   1 wincent  wincent      132K Dec  2  2003 mbox.SKindex
    -rw-r--r--   1 wincent  wincent        0B Dec  2  2003 mbox.SKindex.isValid
    -rw-r--r--   1 wincent  wincent        1M Mar 30  2005 table_of_contents

Notice how the mbox file is still *30 megabytes*, the index is 5 meg, and the table of contents is another meg. All this for a mailbox with only 4 puny messages which don't even add up to 20K:

    $ wc Messages/*
         103     367    3960 Messages/1722199.emlx
          62     232    2165 Messages/1722200.emlx
          78     254    3114 Messages/1722201.emlx
         264    1121    9137 Messages/1722202.emlx
         507    1974   18376 total

How do I trim the mbox down to size? Do I have to open a 700,000-line file in BBEdit and trim it by hand?


### Update

Michael Tsai contacted me with the answer:

> The mbox and mbox.SKindex files are left over from Panther. Tiger's Mail doesn't use them at all. So it's not a bug but rather that it doesn't clean up after itself when you first update to Tiger.

Looking at the mod dates on the files corroborates this (see the [Mac OS X timeline](http://www.wincent.com/knowledge-base/Mac%20OS%20X%20timeline) for the dates), so I'll just blow them away.

The funny thing is, I was mentally hanging on to a bit of misinformation that I read way back then... someone somewhere (don't remember) claimed that because that [Spotlight](http://www.wincent.com/knowledge-base/Spotlight) was a per-file thing Apple had to split up the mailboxes into individual messages (true) but that they kept the monolithic mailboxes around for use by Mail.app (evidently false)... so I've been carrying that misconception all this time.

    # this alone trims the size down by over a gig
    cd ~/Library/Mail/Mailboxes
    find . -name "mbox" -delete
    find . -name "mbox.SKindex" -delete
