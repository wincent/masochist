---
tags: monit wiki
---

From the official release announcement:

    Hi, everyone!

    We have just released Monit 5.2. You can download the new release from:

    http://mmonit.com/monit/download/

    To simplify things we now also provide prebuilt binaries of Monit. So you can either build Monit from source or download a binary for your system. The binaries have OpenSSL 1.0.0a static linked and support SSL without OpenSSL having to be installed on your system.


    Release information:
    ====================


    New features and improvements

    * Added support for monitoring processes without pidfile using pattern
     matching. You can use POSIX regular expressions or string matching
     process name with arguments as provided by the 'ps' utility. If the
     pattern matches multiple processes, the first match is used.
     Example:
         check process debian 
               matching "/usr/lib/vmware/bin/vmware-vmx .*deb.vmx"

    * Added support for swap monitoring. Example:
         check system myserver
             if swap usage > 25% then alert

    * Allow to override the default action when service doesn't exist. The
     default action is restart, it can be customized with following
     statement:
       if [does] not exist [[<x> times within] <y> cycles] then <action1>

    * Monit automatically registers credentials with M/Monit now, so it's
     not necessary to set it manually in M/Monit anymore. To disable
     credentials registration:
        set mmonit https://monit:monit@10.0.0.1:8443/collector
            and register without credentials

    * Added memcache protocol test. Thanks to Sébastien Debrard for the
     patch.

    * Added openssl FIPS to Monit httpd. Thanks to Lior Okman for the
     patch.

    * The 'check system' can now use start/stop program statements too.

    * Added the option to set the "Reply-To" mail header in mail-format.

    * Display backtrace on error if debug mode is enabled (requires
     backtrace support in libc)


    Bug fixes

    * Show real process uptime - formerly the presented uptime was based
     on create and modify timestamp of process' pidfile which provides
     invalid uptime if the pidfile is replaced and process keeps running
     with original PID. Thanks to Nima Chavooshi for report.

    * When user triggered action for some service (such as stop) and
     before that action completed user triggered another action for the
     same service (such as start), the second action has been ignored.
     Monit will not accept new action and return temporary error until
     the previous action completed.

    * If process resource usage gathering failed, retry next cycle as the
     error can be temporary.

    * Fixed sporadic failures when SSL was used.

    * ICMP echo test (ping):
        - fixed sporadic false positive/negative
        - removed limit of 20 pings per cycle

    * DNS test:
        - accept NS root request refusal as correct response because
          server reacts on request
        - accept authority answer as alternative to record. Thanks to
          Nick Osborn for patch

    * RADIUS test fix. Thanks to Alan DeKok for patch.

    * M/Monit heartbeat is fully independent of testing cycle now to
     prevent false positive when service test blocks.

    * Fixed SMTP STARTTLS protocol, required for servers that adhere
     strictly to RFC 3207 4.2. Thanks to Lorenzo A. Sedano Cadinanos for
     patch.

    * Service name:
        - allow the service name to start with "/"
        - fixed handling of the service names which contain "/" in the
          name in Monit web interface. Thanks to Artyom Khafizov for
          patch.

    * When 'check system' is not defined, monit adds it automatically
     using hostname for service name. If existing service was defined
     with the same service name (matching hostname), monit didn't added
     the entry and reported confusing error message pointing to the end
     of configuration file. Thanks to Thorsten Kampe for report and help.

    * Remove extra NL characters from message when resource succeeded
     event is sent. The extra NL character may break the mail headers.
     Thanks to Hanno Boeck for patch.

    * Fixed display of cpu user/system/wait usage which temporarily
     displayed -1.0% between two monitoring cycles while cpu monitoring
     was initializing. Thanks to Marcus Muelbuesch for report.

    * Fixed display of port response time as -1 if 'monit status' was
     called in the middle of service test.

    * Fixed display of service initializing state after monit start or
     reload.

    * Fixed MONIT_DESCRIPTION environment variable. Thanks to Marco
     Roeland for patch

    * AIX:
        - fixed compilation
        - fixed system load average monitoring
        - fixed ICMP echo test

    * Mac OS X:
        - allow monitoring of system-wide load average, cpu and memory
          usage even if
          Monit is running as non-root user

    * NetBSD:
        - fixed ICMP echo test


    Contact:
    ========

    If you have questions, comments or any other feedback about this
    release, please reply to this post.


    A big thanks to all who have sent us patches and suggestions and helped us make this release.


    Best regards from the M/Monit team
