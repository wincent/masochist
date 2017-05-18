---
tags: mail.app gmail wiki
---

There are plenty of articles on how to do this out there, as well as official instructions from Google, but the most useful write-up I've found is [this one](http://complexdiagrams.com/2009/01/imap-for-gmail-mailapp-iphone/).

Note that the advice here actually contradicts Google's advice, but seems to work well in practice:

1.  Set up Gmail settings:
    1.  Under "Forwarding and POP/IMAP":
        1.  Under "IMAP Access:"/"Status:", select "Enable IMAP"
        2.  Under "Auto-Expunge", select "Do not automatically expunge messages"
        3.  Under "When a message is expunged from the last visible IMAP folder", "Move the message to the Trash"
    2.  Under "Labels":
        1.  Only "Show in IMAP" the following folders:
            -   "Sent Mail"
            -   "Drafts"
            -   "Spam"
            -   "Trash"
2.  Set up [Mail.app](/wiki/Mail.app):
    1.  Under "Preferences" &gt; "Accounts" &gt; \[your Gmail account\] &gt; "Mailbox Behaviors":
        1.  Under "Drafts", check the box, "Store draft messages on the server"
        2.  Under "Sent":
            1.  Check the box, "Store sent messages on the server"
            2.  Make sure "Delete sent messages when" is set to "Never"
        3.  Under "Junk":
            1.  Check the box, "Store junk messages on the server"
            2.  Make sure "Delete junk messages when" is set to "Never"
        4.  Under "Trash":
            1.  Check the box, "Move deleted messages to the Trash mailbox"
            2.  Check the box, "Store deleted messages on the server"
            3.  Make sure "Permanently erase deleted messages when" is set to "One month old"
    2.  Trust Gmail to handle filtering of your Gmail account, which means turning off junk mail filtering; in my case, as I use SpamSieve and want to continue using it for my other accounts, I set up a special rule to stop processing further rules for any messages coming into my Gmail account, and all other messages will hit the next rule which is SpamSieve's own "handle everything" rule.
    3.  Tell Mail.app to use Gmail's folders for Sent, Drafts, Trash and Junk, by selecting the corresponding folders ("\[Gmail\] Sent Mail" and so on) and then choosing "Use This Mailbox For" from the "Mailbox" menu
3.  Set up the Gmail account on the iPhone; under "Settings" &gt; "Mail, Contacts, Calendars" &gt; \[your Gmail account\]
    1.  Make sure "Mail" is turned on (I have "Notes" turned off, instead syncing those with my own IMAP account on my own server)
    2.  Under the account settings, in the "Advanced" section:
        1.  Set "Drafts Mailbox" to your Gmail Drafts mailbox
        2.  Set "Sent Mailbox" to your Gmail Sent Mail mailbox
        3.  Set "Deleted Mailbox" to your Gmail Trash mailbox
        4.  Make sure "Deleted Messages" &gt; "Remove" is set to "After one month"

So these instructions differ from Google's official instructions in that it recommends that you don't store sent messages on their servers. In the past, it was reported that this would cause duplicates to appear in your local mail client, but this no longer seems to be the case.

Likewise, there should be no problem with keeping deleted messages on the server either.
