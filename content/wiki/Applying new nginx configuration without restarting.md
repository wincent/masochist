---
tags: nginx wiki
cache_breaker: 1
---

Test the configuration:

    /usr/nginx/sbin/nginx -t -c conf/nginx.conf

Find the process ID of the master process:

    ps auxww | grep 'nginx: master process'

(You can also just inspect `/var/run/nginx.pid`.)

Send a `HUP` signal:

    kill -s HUP 1234

Alternatively, you can instruct nginx to reload it's configuration file using the `-s` switch.

    /usr/nginx/sbin/nginx -s reload

# See also

-   <http://wiki.nginx.org/NginxCommandLine>
