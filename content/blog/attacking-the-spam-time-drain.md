---
title: Attacking the spam time drain
---

The other day I [wrote](http://www.wincent.com/a/about/wincent/weblog/archives/2007/10/mail_as_a_time.php) about how much time I waste each month on dealing with spam messages; specifically with training [SpamAssassin](http://www.wincent.com/knowledge-base/SpamAssassin) to learn from its mistakes. [Scott Guelich](http://guelich.net/) wrote in with a couple of suggestions to trim some time off the process:

-   Take your wrapper script (the one that invokes `sa-learn`) and set it up in a cron job so that you don't have to manually run it when you want to train bad messages.
-   Have the wrapper delete messages once processed.

So in my case this means setting up a couple of new crontab entries that look something like this:

    15 14 1 * *     sa-learn --spam --mbox "${HOME}/mail/train-spam" > /dev/null && echo -n "" > "${HOME}/mail/train-spam"
    20 14 1 * *     sa-learn --ham --mbox "${HOME}/mail/train-ham" > /dev/null && echo -n "" > "${HOME}/mail/train-ham"

Even more valuable for me, however, was that Scott's email prompted me to think about *the* major element which causes spam training to be such a pain for me. The problem is that [SpamSieve](http://www.wincent.com/knowledge-base/SpamSieve) dumps all of your spam into one folder, even if it came from different accounts, and that makes SpamAssassin training difficult because to properly train you should really train each account separately. Sorting the messages according to which account they came from can be quite painful because spammers often use garbage "To:" headers and [Mail.app](http://www.wincent.com/knowledge-base/Mail.app) doesn't provide an "Account" column which would make sorting easy.

So on thinking about it a bit more I realize that although the SpamSieve docs lead me to set up things this way there is really no reason why I can't have it process each account's incoming mail separately and then store the spam in per-account folders. I think this simple change is going to save me a *lot* of time. I expect my time wasted on spam to drop down from about 1 hour to 5 minutes or less per month.

[]{#Update}

### Update

Playing with the new set-up reveals only one glitch in the workflow: if I use the "Train as spam" menu item to flag false negatives to SpamSieve then they wind up in my general spam folder, the one shared by all email accounts, rather than in the appropriate account-specific folder. Hopefully given SpamSieve's accuracy this won't become too much of a problem.
