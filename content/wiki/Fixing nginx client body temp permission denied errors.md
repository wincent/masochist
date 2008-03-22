---
tags: nginx
cache_breaker: 1
---

This is a problem that I stumbled across because of the particular way in which I use [nginx](/wiki/nginx) to host multiple [Rails](/wiki/Rails) applications.

If you use a single master process that handles multiple [virtual hosts](/wiki/virtual_hosts) then you most likely won't see this problem. I did, however, because I actually use *two* master processes and each runs as a different user.

## The problem

Most requests for your [Rails](/wiki/Rails) application seem to work but all of a sudden you get an [internal server error](/wiki/internal_server_error) for a particular request. Upon looking in the `error_log` you see something like this:

    2008/03/22 09:44:33 [crit] 18223#0: *642 open() "/usr/local/nginx/client_body_temp/0000000002" failed (13: Permission denied)

## Diagnosis

Upon inspection, you see that `/usr/local/nginx/client_body_temp/` is owned by the user that corresponds to *one* of your [Rails](/wiki/Rails) applications (the first one that tried to create it). You'll see the problem only when the second application actually tries to use the `client_body_temp` folder.

The problem may take a while to materialize because the `client_body_temp` folder is only used if the body is sufficiently large enough to require it. In my case I saw the error the first time I tried to submit an edit for a [wiki](/wiki/wiki) article that was beyond a certain size.

## The fix

The fix is clear: each [nginx](/wiki/nginx) master process must have it's own `client_body_temp` folder. The directive required is `client_body_temp_path` and it's documented [here](http://wiki.codemongers.com/NginxHttpCoreModule#client_body_temp_path).

So we alter the two config files and then restart the servers (in my case, with [monit](/wiki/monit)).

At the same time I noticed two other directories under `/usr/local/nginx` owned by one of the users:

-   `fastcgi_temp` (the corresponding directive is `fastcgi_temp_path`, documented [here](http://wiki.codemongers.com/NginxHttpFcgiModule#fastcgi_temp_path))
-   `proxy_temp` (the directive is `proxy_temp_path`, documented [here](http://wiki.codemongers.com/NginxHttpProxyModule#proxy_temp_path))

Just in case these also cause problems in the future per-worker-process (per-user) paths should be specified for those as well.

## Rationale

It's worth commenting on my rationale for having two master processes rather than using [virtual hosts](/wiki/virtual_hosts). In short:

-   [nginx](/wiki/nginx) processes are extremely lightweight so it is feasible to run separate processes for each user as an analogue to [Apache](/wiki/Apache)'s [suexec](/wiki/suexec) functionality; in my case I have two applications and therefore two users, so this is quite reasonable
-   Having each process run as a different user brings all of the isolation and security benefits that [suexec](/wiki/suexec) brings to Apache
-   In my case the two applications are actually just two instances of the same application, but one is for staging and one is for production; as a result, I only *sometimes* want to run both applications (ie. when testing a new version of the application in the staging environment) but most of the time only the production environment will be running, so it isn't at all wasteful to occasionally fire up another worker process

