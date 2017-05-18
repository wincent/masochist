---
tags: monit wiki
---

From the official release announcement:

    We have just released Monit 5.2.2 You can download the new release from:

    http://mmonit.com/monit/download/

    To simplify things we now also provide prebuilt binaries of Monit. So you can either build Monit from source or download a binary for your system. The binaries have OpenSSL 1.0.0a static linked and PAM support dynamic linked. This means that the Monit binary will support SSL even if you do not have SSL installed on your system.


    Release information:
    ====================

    This is a bug fix release which address the following issues

    * Fix crash on MacOSX

    * ICMP echo test (ping):
        - [/issues/31128 bug #31128]: do not log error if different response type is received
        - [/issues/31129 bug #31129]: do not require root to use ping test. Privilege to create
          raw socket is still required, but on some platforms such as Solaris it
          can be granted to non-root users too. If the user has no permission to
          perform ping, monit will skip the icmp test and log message (in debug
          mode only).

    * rsync protocol test:
        - wait for full server response and verify exit was received
        - [/issues/31249 bug #31249]: send full version to rsync server. Thanks to John Hall
          for report
