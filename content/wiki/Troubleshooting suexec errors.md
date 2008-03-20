---
tags: suexec apache
---

Sometimes you will see errors in your `error_log` which look like this:

    [Tue Feb 26 04:52:56 2008] [error] [client 209.235.192.147] suexec policy violation: see suexec log for more details
    [Tue Feb 26 04:52:56 2008] [error] [client 209.235.192.147] Premature end of script headers: gitweb.cgi

On [RHEL 5.1](/wiki/RHEL_5.1) the `suexec.log` itself can be found in `/etc/httpd/logs` (itself just a symlink to `/var/log/httpd`); if you are using another [distro](/wiki/distro) or [OS](/wiki/OS) then you may have to look elsewhere. It is a per-server log, not per [VirtualHost](/wiki/VirtualHost).

# `cannot run as forbidden uid`

You'll see this error if you try to run as a user with a system account (which on most systems means an account with a [UID](/wiki/UID) below 500). I discovered this because I initially tried to run my [Gitweb](/wiki/Gitweb) install as the `git` user with a UID below 500.

The solution is to either change your `SuexecUserGroup` directive to another (non-system account) user and group, or to change the user and group ID numbers using `groupmod` and `usermod`. I went for the latter solution.

# `command not in docroot`

[suexec](/wiki/suexec) requires the CGI script to be under the *server's* [DocumentRoot](/wiki/DocumentRoot) (not the [VirtualHost](/wiki/VirtualHost) DocumentRoot). It is permitted, however, for the VirtualHost DocumentRoot to be a [symlink](/wiki/symlink) to a directory that appears under the real DocumentRoot.

# See also

-   <http://httpd.apache.org/docs/2.2/programs/suexec.html>
-   <http://httpd.apache.org/docs/2.2/mod/mod_suexec.html>

