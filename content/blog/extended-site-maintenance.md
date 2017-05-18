---
title: Extended site maintenance
tags: site blog
cache_breaker: 1
---

There will be extended site maintenance later this morning (around 10 AM GMT/7AM EDT) in order to migrate the site to the updated [Rails 3](/wiki/Rails_3) code base. By "extended" I mean approximately 1 hour, although it may be less.

This is a huge update, incorporating about 1,000 commits since the last deployment. I won't say that every line has been touched by the update, but certainly every file has been reviewed, audited, and adapted. And given that every file was reviewed, many other incidental improvements were made along the way.

**Update:** the maintenance is now complete. In the end it was carried out a few hours later than planned while I spent time investigating problems building the [memcache](/wiki/memcache) gem. The actual downtime (ie. time during which all incoming requests were shown the [maintenance page](/maintenance.html)) was only 7 minutes.
