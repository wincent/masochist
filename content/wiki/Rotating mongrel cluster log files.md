---
tags: rails log.rotation mongrel
---

In my set-up both [mongrel cluster](/wiki/mongrel_cluster) and my [Rails](/wiki/Rails) application itself log to the same directory, and I wind up with a bunch of log files that look like this:

-   access\_log
-   access\_log.1
-   development.log
-   error\_log
-   migrations.log
-   mongrel.123.log
-   mongrel.124.log
-   mongrel.125.log
-   mongrel.126.log
-   production.log
-   test.log

The files ending in `_log` are actually [nginx](/wiki/nginx) log files and are handled separately (see "[nginx log rotation](/wiki/nginx_log_rotation)"); you can see that at the time I took this snapshot the file `access_log` had already been rotated once, producing `access_log.1`.

The files of the form `mongrel.123.log`, where 123 is the port number a particular [mongrel](/wiki/mongrel) instance is listening on, are created by [mongrel cluster](/wiki/mongrel_cluster) and are generally very small.

Finally, the remaining `.log` files are produced by the [Rails](/wiki/Rails) application itself and can get *huge*.

## Setting up [logrotate](/wiki/logrotate)

Seeing as all the files I am interested in rotating end with `.log` I am going to handle them all in one hit. I created a file at `/etc/logrotate.d/rails` with the following contents:

    /home/*/deploy/shared/log/*.log {
        missingok
        notifempty
        copytruncate
    }

To test this file out:

    # -d (debug) causes a verbose dry-run
    sudo logrotate -d /etc/logwatch.conf /etc/logrotate.d/rails

    # add -f (force) to force rotation even if its not needed
    sudo logrotate -d -f /etc/logwatch.conf /etc/logrotate.d/rails

    # if all that looks good, do a real (non-dry) run with verbose output turned on
    sudo logrotate -v /etc/logwatch.conf /etc/logrotate.d/rails

    # or with -f if needed:
    # sudo logrotate -v /etc/logwatch.conf /etc/logrotate.d/rails

I opted to go with the `copytruncate` option because it enables me to rotate the logs without incurring an expensive restart (seeing as [Rails](/wiki/Rails) is so slow to cycle up) and without worrying about undocumented and possibly unsupported (at least as far as I can tell) signals being sent to the [mongrel](/wiki/mongrel) processes.

# See also

-   [nginx log rotation](/wiki/nginx_log_rotation)
-   [Rotating Rails application log files](/wiki/Rotating_Rails_application_log_files)

