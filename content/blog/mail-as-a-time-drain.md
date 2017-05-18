---
title: Mail as a time drain
tags: blog
---

When I first got on the Internet I used to want to know about email as soon as it was sent to me. I always set the checking interval to the minimum available; I can't remember what this was at first, but it was in the ballpark of 5, 10 or 15 minutes. When I got a mail client that could check every minute I dropped the interval to a minute.

Then came spam. The came customers. Then came mailing lists with ever greater traffic. Over the years I've tried to get smarter and smarter about spam, principally by using good filtering and classifying ([SpamSieve](http://c-command.com/spamsieve/) is the shining star of the troop), some conservative server-side blacklisting, and not by trying to hide my email address (<win@wincent.com>).

Nowadays spam "only" takes about an hour of my time each month; the hour in which I clean out my spam mailbox, looking for false positives, and training [SpamAssassin](http://www.wincent.com/knowledge-base/SpamAssassin) on its false negatives (for me SpamAssassin still only catches less than half the spam that SpamSieve does). In fact one of the reasons I'm writing this post is that today was my cleanout day; I've processed over 9,000 spam messages.

But even with good anti-spam tech that still left me with a lot of email. I'm not sure exactly when I did this, but some time ago, probably about a year or two I cranked my checking interval up from the minimum to the maximum: 1 hour in the case of [Mail.app](http://www.wincent.com/knowledge-base/Mail.app). In this way I could still respond to customers promptly but I was no longer getting distracted by mailing list posts spilling into my inbox and clamouring for my attention in my [Dock](http://www.wincent.com/knowledge-base/Dock).

Last night and today I took a step further, unsubscribing from some non-essential lists and putting pretty much all the high-volume ones into digest mode. I don't like digests -- they're hard to read and hard to search -- but I need to do something to free myself from the time tyranny that email has had over me up until now. The truth is that in most cases I am a lurker, a reader; I tune in in the hope of picking up tips, keeping up to date and learning about stuff. But even skimming and scanning, quickly glancing at about 5% of all that comes in, still takes too much time when you're dealing with large volumes. If you're not an active participant then a digest is probably good enough.





### Is spam getting better or worse?

Comparing with [the numbers](http://www.wincent.com/a/about/wincent/weblog/archives/2007/02/is_spam_solved.php) from the last time (about 8 months ago) things look decidedly worse; these are the numbers at the client level, excluding spam that was blocked by the server:

    Filtered Mail
    238,770 Good Messages
    91,796 Spam Messages (28%)
    86 Spam Messages per Day

    SpamSieve Accuracy
    268 False Positives
    917 False Negatives (77%)
    99.6% Correct

    Corpus
    4,001 Good Messages
    5,274 Spam Messages (57%)
    306,099 Total Words

    Rules
    1,318 Blocklist Rules
    6,817 Whitelist Rules

    Showing Statistics Since
    10/11/2004 11:42

So the number of spams per day has jumped up by 12, and as a whole spams now account for 28% of all mail arriving at the client, up from 24%. SpamSieve's accuracy has stayed constant at about 99.6%, and there have only been 36 false positives in the last 8 months (not bad out of nearly 50,000 messages).
