---
title: Site DNS changes
tags: site
cache_breaker: 1
---

A little later today the DNS records will be updated as wincent.com and www.wincent.com will be moving to a new IP address (209.235.214.139) from the old address (209.235.192.161).

I'm not anticipating any downtime but there is a small possibility that things could act a little weird during the change over. I'll post an update here once everything has been completed.

**Update:** The DNS updates have taken effect. In my case it didn't take too long for the changes to propagate from the authoritative DNS servers in the US to where I am here in Spain, although I did have to force [Mac OS X](/wiki/Mac_OS_X) to take notice using `dscacheutil -flushcache`.

If you've been accessing this, the new part of the site, via rails.wincent.com you can now do so using the shorter URL of <https://wincent.com/> instead. Non-HTTPS access to <http://wincent.com/> will continue to provide access to the older parts of the site.
