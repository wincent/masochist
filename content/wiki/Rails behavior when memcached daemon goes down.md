---
tags: rails memcached wiki
cache_breaker: 1
---

I was curious about how [Rails](/wiki/Rails) would behave if the [memcached](/wiki/memcached) server used by an application went offline.

In my testing using [Rails 3](/wiki/Rails_3) (3.0.0 to be precise) I observed:

-   if [memcached](/wiki/memcached) is down when the application boots up, Rails will render the needed fragments every time the page is displayed; no errors are raised or logged
-   if memcached comes back up, Rails continues to re-render on each display of the page; no errors are raised or logged
-   if memcached is up when the application boots up, Rails uses the cache as expected
-   if memcached then goes down, Rails re-renders the needed fragments on each page load; no errors are raised or logged
-   if memcached then comes back up, Rails continues to re-render on each display of the page; no errors are raised or logged

So, the good news: your application won't die or start throwing "Internal Server Errors" just because your memcached goes down.

The bad news: if your memcached comes back up, Rails won't see it or use it until the next time the application is booted.
