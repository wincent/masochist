---
tags: email sendmail procmail spamassassin wiki
---

# Quarantining recipe

    LOGFILE=$HOME/procmail.log
    VERBOSE=off
    LOGABSTRACT=all

    # mail very likely to be spam (>= 15) quarantined in "spam" folder
    # or piped directly to /dev/null
    :0
    * ^X-Spam-Level: \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    #/dev/null
    spam

    # clean the environment before continuing
    LOGFILE=
    LOGABSTRACT=
    VERBOSE=

# Auto-deletion recipe

    LOGFILE=$HOME/procmail.log
    VERBOSE=off
    LOGABSTRACT=all

    # mail very likely to be spam (>= 15) quarantined in "spam" folder
    # or piped directly to /dev/null
    :0
    * ^X-Spam-Level: \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    /dev/null
    [/tags/spam #spam]

    # clean the environment before continuing
    LOGFILE=
    LOGABSTRACT=
    VERBOSE=

# Efficacy

This auto-deletion system intercepted 749 messages to my business account and 8 messages to my personal account in a test period of just under sixteen days (late June/early July of 2006) with no false positives. This equates to an average block count of just over 47 messages per day.

For other efficacy statistics see [combatting spam](/wiki/combatting_spam).

# Log sample

    From schepler@sammimail.com  Thu Jun 29 22:16:14 2006
     Subject: [SPAM] Tired of being overweight? We can help!
      Folder: /dev/null                                                        4825
    From kurihara@uymail.com  Thu Jun 29 22:16:17 2006
     Subject: [SPAM] Be leaner and slimmer by next week!
      Folder: /dev/null                                                        4725
    From kinch@miho-nakayama.com  Thu Jun 29 22:16:21 2006
     Subject: [SPAM] Watch your body change with Hoodia
      Folder: /dev/null                                                        4846
    From lzap@asistencia.org  Thu Jun 29 22:16:21 2006
     Subject: [SPAM] Tired of being overweight? We can help!
      Folder: /dev/null                                                        4811
    From uucp@ranmamail.com  Thu Jun 29 22:16:24 2006
     Subject: [SPAM] Doctors and Celebrities endorse Hoodia!
      Folder: /dev/null                                                        4727
    From Consulting@BusinessExpert.prserv.net  Sat Jul  1 18:57:00 2006
     Subject: [SPAM] Start your business today
      Folder: /dev/null                                                        3623
    From Consulting@BusinessExpert.prserv.net  Sat Jul  1 18:57:56 2006
     Subject: [SPAM] Start your business today
      Folder: /dev/null                                                        3818
    From markb@indiya.com  Sun Jul  2 11:58:55 2006
     Subject: [SPAM] Be leaner and slimmer by next week!
      Folder: /dev/null                                                        4713
