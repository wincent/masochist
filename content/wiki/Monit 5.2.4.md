---
tags: monit wiki
---

Hi, all!

    We have just released Monit 5.2.4 You can download the new release from:

    http://mmonit.com/monit/download/


    Release information:
    ====================


    New features and improvements

    * Added the "procmatch" CLI command which allows for easy testing
      of pattern for process match check. The command takes regular
      expression as an argument and displays all running processes
      matching the pattern. Example usage:
          $ monit procmatch "iChatAgent"

    * Set the default log file mask to 0640 (originally it was 0664).
      Thanks to Sergey B Kirpichev.

    * Reduced monit memory footprint by ca. 10%.


    Bug fixes

    * FreeBSD, NetBSD, OpenBSD, MacOSX, Solaris filesystem check fix:
      If block/character device was used in the filesystem path instead
      of mountpoint, monit reported usage of wrong filesystem.

    * NetBSD filesystem check: Fix space usage report.

    * Fix memory usage monitoring in OpenVZ VPS 2.6.32 virtual hosts.
      Thanks to Kelly for report.

    * If the protocol test failed, show the request in the event. Thanks
      to Marco for report.

    * Randomize the mail message id to prevent duplicates in the case, that
      the same hostname is used on multiple hosts running monit and messages
      are generated in the same second in parallel. Thanks to Sergey B
      Kirpichev.

    * Spelling fixes. Thanks to Sergey B Kirpichev.


    Contact:
    ========

    If you have questions, comments or any other feedback about this release, please reply to this post.


    Best regards from the Monit team
