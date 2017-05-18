---
title: Getting ready for Rails 3
tags: rails blog
---

The second beta of [Rails](/wiki/Rails) 3 [came out](http://weblog.rubyonrails.org/2010/4/1/rails-3-0-second-beta-release) at the start of this month, and was followed up by a third beta [only yesterday](http://weblog.rubyonrails.org/2010/4/13/rails-3-0-third-beta-release), so soon enough we'll be seeing release candidates and a final release.

I am definitely not planning on being an early adopter because, like all major updates, I am expecting this one to have its fair share of headaches. I will, however, probably fork off an experimental branch and do a "test" update just to see what happens.

I've had some decidedly un-agile changes hanging around in my working tree for literally months now — 2,652 passing specs, 0 failures, and 74 pending specs at the `HEAD` of the `master` branch (which I deploy from); and in my very dirty working tree I have a hideous number of failures (37, mostly spurious), pending specs (60), and untracked files — but I really need to get those under control so that I have a clean base which I can start from when the time to update arrives.

In order to inject some discipline into my development I'm declaring a "feature freeze" as of right now, until I'm back to a totally clean working tree with no failures and hopefully very few pending specs. No more features, no more non-critical bug fixes, and no enhancements. Let's see if I can dedicate a half-hour a day to this and get those numbers under control.
