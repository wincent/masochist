---
tags: monit wiki
---

From the official release announcement:

    Hi, all!

    We have just released Monit 5.2.5 You can download the new release from:

    http://mmonit.com/monit/download/


    Release information:
    ====================

    * Fix the process match check - when the monitored process failed
      and was restarted by Monit, Monit didn't recognized  it is  running
      after the restart and reported  start failure (similar on stop).
      Thanks to  Kenichi Futatsumori for report and  helping to root
      cause the problem.

    * Fix Debian #617259: symbolic links in the filesystem check doesn't
      work. Thanks to Sergey B Kirpichev for report.

    * Fix Debian [/issues/614984 bug #614984]: smtp protocol test issues both EHLO and
      HELO. Thanks to Sergey B Kirpichev for report.

    * Fix [/issues/32583 bug #32583]: Multiple SIP OPTIONS messages use the same header
      data. Thanks to Hugh Waite for patch.

    * Try harder to get FQDN hostname for the host where monit is running.
      The hostname in the $HOST variable which is used in the mail sender
      may thus change. Thanks to Sergey B Kirpichev for patch.

    * AIX: Fix the time display which was off by GMT difference. Thanks
      to Helen Chen for report.

    * AIX: Fix the M/Monit heartbeat. Thanks to Helen Chen for report.

    * Support symbolic link to monit configuration file.

    * Fix crash when monit daemon start delay option was used and monit
      was signalized to stop before the start delay passed. Thanks to
      John Schult for report.


    Contact:
    ========

    If you have questions, comments or any other feedback about this release, please reply to this post.


    Best regards from the Monit team
