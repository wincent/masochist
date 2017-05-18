---
title: Rails memory leaks
tags: rails blog
cache_breaker: 1
---

Since [deploying a new version of the site yesterday](/twitter/1) I've been very interested in monitoring the memory usage of the [Mongrel](/wiki/Mongrel) processes. You see, somewhere in the move from [Rails](/wiki/Rails) 2.1.2 to 2.2.2, the formerly leak-free servers started to leak steadily. Mongrels which had previously run for literally months on end without a restart were slowly filling up memory until hitting the cap and being restarted by [Monit](/wiki/Monit) every few days or so.

At the time I [posted to the Rails talk group](http://groups.google.com/group/rubyonrails-talk/browse_thread/thread/1934e8453c17e48c) and a couple of people chimed in saying they'd seen similar leaks. A couple of known leaks were fixed in the meantime, but it was only yesterday that I was able to finally deploy an updated version of the app running on Rails 2.3.2 which includes those fixes.

Right now the four mongrel processes are sitting at 44456, 44316, 44352 and 44428 kilobytes respectively. Quite a bit higher than they used to run back in the Rails 2.1.x days, when they would sit at 35 to 40 meg a piece. Unfortunately I didn't take note of the memory usage when I first did the deployment (about 28 hours ago now), but I do recall that it was around the 44000K mark, so it looks like memory usage just might be stable.

This really is a great relief. There is nothing worse than trying to track down memory leaks in a garbage-collected language like [Ruby](/wiki/Ruby), especially when the leak is occurring in a complex framework like Rails packed with metaprogramming, "clever" stuff, and "magic" (read: pain in the butt to debug). I'm really hoping that the leaks are gone for good.

# Update: 24 hours later

Memory usage now sitting at 44368, 47328, 44352, and 44308 KB, so the changes over 24 hours have been -88, +3012, 0, -120 KB. So one of the processes has bloated by 3 meg but the others have remained steady or have actually shrunk. It certainly looks like the steady leaking I was seeing before has definitely been fixed, although I'll still have to keep an eye on that one process which has swelled up.

# Update 2: another 24 hours later

Usage is now sitting at 48288, 48240, 47928 and 44392 KB; ie. a change of +3920, +912, +3576 and +84 KB, so looks like there is still a leak.
