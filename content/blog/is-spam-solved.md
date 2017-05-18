---
title: Is spam "solved"?
tags: blog
---

Just over a year ago I wrote about [Bill Gates' failed prediction](http://www.wincent.com/a/about/wincent/weblog/archives/2006/01/spam_to_be_elim.php) that spam would be "solved" by the beginning of 2006. Microsoft tried to deny the demonstrable failure of this prediction by redefining the meaning of the word "solved" in a [way that does not bear inspection](http://www.wincent.com/a/about/wincent/weblog/archives/2006/01/spam_will_be_so.php).

So it's time for my annual review of the spam situation (in fact, I'm a few weeks late). What's the view on spam like from here a year later?





#### Countermeasures

During 2006 I [gradually toughened up my anti-spam arsenal](http://www.wincent.com/a/knowledge-base/archives/2006/06/clamping_down_o.php) by introducing a number of new measures at the server level which reduce the amount of spam getting downloaded to the local machine and increase the likelihood that the spam which does get through will be tagged as such before it even hits Mail.app's filters:

-   Tougher scoring on non-English messages.
-   Automatic deletion of extremely high-scoring spam.
-   Auto-whitelisting.
-   Bayesian training.

I later took [further steps](http://www.wincent.com/knowledge-base/Combatting_spam) at the server level:

-   [Blocking non-local senders for local-only recipients](http://www.wincent.com/knowledge-base/Blocking_non-local_senders_for_local-only_recipients).
-   Conservative [DNS-based blacklisting](http://www.wincent.com/knowledge-base/DNS-based_blacklisting).

And at the policy level:

-   Reducing the number of web-visible email addresses on sites that I control.
-   Using easily cancellable addresses when providing email addresses to third parties.
-   Migrating away from old addresses which receive a lot of spam to newer addresses.

As [discussed here](http://www.wincent.com/knowledge-base/Combatting_spam) these changes combined to significantly reduce the number of spam messages getting to my mail box each day; I don't have any hard figures for the entire period but the evidence I do have suggests that the number of spams thwarted by these measures is of the order of several hundred per day.

#### SpamSieve

Spam that does get through to the client level is largely handled by [SpamSieve](http://www.wincent.com/a/about/wincent/weblog/archives/2005/11/spamsieve_one_y.php). The current client-level statistics are as follows:

    Filtered Mail
    190,575 Good Messages
    61,118 Spam Messages (24%)
    74 Spam Messages Per Day


    SpamSieve Accuracy
    232 False Positives
    735 False Negatives (76%)
    99.6% Correct


    Corpus
    2,986 Good Messages
    4,215 Spam Messages (59%)
    240,681 Total Words


    Rules
    1,029 Blocklist Rules
    5,126 Whitelist Rules


    Showing Statistics Since
    10/11/2004 11:42

Observations:

-   67,000 good messages where received in the last year.
-   46,000 spam messages where received in the last year.
-   Spam now accounts for 24% of all mail *ever received* (since statistic recording began), up from 11% at the same time last year; of the messages received in the last year, nearly 41% were spam.
-   There were only 48 false positives in the last year, and 378 false negatives. False negatives accounted for a larger proportion of the mistakes: 76%, up from 66% last year (this is an improvement because false positives are more undesirable than false negatives).
-   Overall the accuracy of SpamSieve remained solid at 99.6%.
-   SpamSieve's corpus of good messages grew by nearly 50%; the corpus of spam message nearly doubled.
-   Likewise the number of rules in the blocklist doubled, and those in the whitelist nearly doubled.

#### Conclusions

Looking at these figures there's only one conclusion to be drawn: spam wasn't "solved" in 2006 and in my case it actually got much, much worse. This is especially true considering the number of spams that were stopped by the additional countermeasures which otherwise would have made it through and made things even worse.

Despite the fact that spam is out of control, SpamSieve continues to be an effective measure of shielding the user from the annoyance of spam. I'm troubled by less than one false positive per week, and about one false negative per day. The accuracy is good enough that I can mostly forget about spam most of the time; messages classified as spam by SpamSieve get routed to a folder called "Zpam", which due to its alphabetization is almost perpetually out of side at the bottom of my folder listing (scrolled out of view). Out of sight, out of mind. I revise the contents of this folder about twice per week.

So spam is getting worse but life is still good thanks to some good tools. I will be interested to see if the same trends continue in the coming year.
