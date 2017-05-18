---
tags: email wiki
---

# Server-level blocking

1.  [Server-side spam-filtering](/wiki/Server-side_spam-filtering) with [SpamAssassin](/wiki/SpamAssassin); more specifically:
    -   [SpamAssassin whitelisting](/wiki/SpamAssassin_whitelisting)
    -   [SpamAssassin Bayesian filtering](/wiki/SpamAssassin_Bayesian_filtering)
    -   [Automatically deleting high-scoring spam](/wiki/Automatically_deleting_high-scoring_spam)
2.  [Blocking non-local senders for local-only recipients](/wiki/Blocking_non-local_senders_for_local-only_recipients)
3.  [Virus filtering](/wiki/Virus_filtering) (see [ClamAV set-up](/wiki/ClamAV_set-up))
4.  [DNS-based blacklisting](/wiki/DNS-based_blacklisting)

# Client-side blocking

1.  [Client-side spam-filtering](/wiki/Client-side_spam-filtering) with [SpamSieve](/wiki/SpamSieve)
2.  [Sorting spam by subject](/wiki/Sorting_spam_by_subject)

# General spam-reduction techniques

1.  [Address obfuscation](/wiki/Address_obfuscation)
2.  [Address secrecy](/wiki/Address_secrecy) (see also [Using temporary email aliases to do spam monitoring and damage control](/wiki/Using_temporary_email_aliases_to_do_spam_monitoring_and_damage_control))
3.  [Address migration](/wiki/Address_migration)

# Efficacy

## Efficacy of server-side spam blocking

The following results show the number of messages blocked (rejected or discarded) at the [wincent.com](/wiki/wincent.com) mail server level in a typical 24 hour period due to the anti-spam technologies and techniques linked to from this page. They are not necessarily statistically valid samples, based on a very small data set collected during June and July of 2006, but they do provide some indication of the amount of spam which is being beaten at the server and never makes it through to the client.

-   [Automatically deleting high-scoring spam](/wiki/Automatically_deleting_high-scoring_spam): 47 messages
-   [Address migration](/wiki/Address_migration): 142 messages
-   [Blocking non-local senders for local-only recipients](/wiki/Blocking_non-local_senders_for_local-only_recipients): 178 messages
-   [DNS-based blacklisting](/wiki/DNS-based_blacklisting): 261 messages
-   [Virus filtering](/wiki/Virus_filtering): 47 messsages (see [ClamAV log sample](/wiki/ClamAV_log_sample))

It is difficult to estimate the number of spam messages that is collectively being blocked by these countermeasures because they operate at different levels and were introduced incrementally. For example, [DNS-based blacklisting](/wiki/DNS-based_blacklisting) was the last countermeasure to be introduced in the above list, and it blocks spam before it gets to any of the other countermeasures. As such, the number of messages stopped per day for the other countermeasures is reduced but that does not mean that their efficacy has diminished.

The order in which the techniques were deployed to the server is:

1.  [Virus filtering](/wiki/Virus_filtering)
2.  [Automatically deleting high-scoring spam](/wiki/Automatically_deleting_high-scoring_spam)
3.  [Blocking non-local senders for local-only recipients](/wiki/Blocking_non-local_senders_for_local-only_recipients)
4.  [Address migration](/wiki/Address_migration)
5.  [DNS-based blacklisting](/wiki/DNS-based_blacklisting)

But the order in which the techniques are actually applied to incoming messages is:

1.  [DNS-based blacklisting](/wiki/DNS-based_blacklisting) (connections rejected with 554 reply code)
2.  [Blocking non-local senders for local-only recipients](/wiki/Blocking_non-local_senders_for_local-only_recipients) (delivery aborted with 5.7.1/551 reply code)
3.  [Address migration](/wiki/Address_migration) ("User unknown" returned to spammer)
4.  [Virus filtering](/wiki/Virus_filtering) (message immediately deleted before arriving at mailbox)
5.  [Automatically deleting high-scoring spam](/wiki/Automatically_deleting_high-scoring_spam) (message immediately deleted before arriving at mailbox)

So as messages pass through the various lines of defense, the number of spam messages getting through to subsequent levels is successively reduced. [DNS-based blacklisting](/wiki/DNS-based_blacklisting) is the numerically most important countermeasure, stopping the largest number of messages, and this means that subsequent levels have to defend against fewer spam messages.

## Efficacy of client-side filtering

The following results are from a test period of 24 hours in mid-July 2006:

-   62 [spam](/wiki/spam) messages made it through to my email client (two accounts: one business and one personal).
-   An additional 102 messages were received by the client during the same period, bringing the total count to 164 messages ([spam](/wiki/spam) and [ham](/wiki/ham)) in all.
-   38% of all email received by the client was [spam](/wiki/spam)
-   Of the [spam](/wiki/spam) messages 25 were correctly tagged as [spam](/wiki/spam) by [SpamAssassin](/wiki/SpamAssassin).
-   The remaining 37 were not tagged by [SpamAssassin](/wiki/SpamAssassin) (false negatives).
-   [SpamAssassin](/wiki/SpamAssassin) did not produce any false positives.
-   [SpamAsssassin](/wiki/SpamAsssassin)'s accuracy at the client level during the test period was a disappointing 77.4%, but this number does not reflect the [high-scoring spam that was automatically deleted](/wiki/Automatically_deleting_high-scoring_spam) by [SpamAssassin](/wiki/SpamAssassin) at the server level.
-   [SpamSieve](/wiki/SpamSieve) correctly identified all 62 spam messages as spam, with no false positives and no false negatives.
-   [SpamSieve](/wiki/SpamSieve)'s accuracy during the test period was a perfect 100%.

These results show that the new server-level measures have had a significant impact on the number of spam messages reaching the client. Prior to implementing the measures the average spam count (the average of spam messages received at the client level per day) was steadily climbing and had reached over 170 spam messages per day. The [oldest stats that I have available](http://wincent.com/a/about/wincent/weblog/archives/2005/11/spamsieve_one_y.php) are for a one year period between November 2004 and November 2005 in which I had received an average of about 40 spam messages per day and 11% of all email I received was spam. Today (mid-July 2006) the cumulative average is 75 spam messages per day and 22% of all email I've received has been spam. It seems likely that this proportion can only increase from here given that on the day of the test 38% of all mail received by the client was spam, approaching the average of 50% [claimed by Symantec](http://www.washingtonpost.com/wp-dyn/content/article/2006/05/16/AR2006051601873.html?referrer=email&referrer=email).

So these statistics show that the volume of [spam](/wiki/spam) attacks has spectacularly increased but that the new server-level measures have been effective in curbing their impact.

# Areas for improvement

The [SpamAssassin](/wiki/SpamAssassin) accuracy figures are disappointing despite using [Bayesian training](/wiki/SpamAssassin_Bayesian_filtering) followed by weeks of corrective training. I will continue the corrective training in the hope that accuracy improves. If the accuracy improves sufficiently then I may be able to consider lowering the threshold for [automatically deleting high-scoring spam](/wiki/automatically_deleting_high-scoring_spam).

Of the 62 spam messages received at the client, 19 were directed to postmaster addresses and these unfortunately cannot be blocked due to [RFC 2821](/wiki/RFC_2821).

8 were sent to my personal account, 32 were sent to my business account, and the remaining had headers that were so munged that it was not easy to discern the original recipient address.

In the future I may consider undertaking another [address migration](/wiki/address_migration), at least for my business account, as well as adding additional [DNS-based blacklists](/wiki/DNS-based_blacklists). Another option is [grey-listing](/wiki/grey-listing), but I am hesitant to use it given that in many cases I rely on the near-instantaneous nature of email.
