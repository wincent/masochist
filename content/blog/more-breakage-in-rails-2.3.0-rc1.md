---
title: More breakage in Rails 2.3.0 RC1
tags: rails blog
cache_breaker: 1
---

The update to Rails 2.3.0 RC1 was deceptively quiet. It looked like everything went smoothly, and all the specs kept passing with very few of the adjustments I'm used to having to perform when updating Rails.

But as time goes by more and more subtle issues start to come out of the cracks. I [wrote about](/blog/rails-update-headaches) some of the issues a week ago. The latest is [this](http://rails.lighthouseapp.com:80/projects/8994/tickets/2039) subtle but important breakage in the routing code. I'm actually quite glad that I started doing this local testing early, so as to allow time for all this insidious code-churn-induced bustage to bubble up to the surface and hopefully be fixed.

# Update: 8 hours later

Just found [even more bustage](http://rails.lighthouseapp.com/projects/8994/tickets/2043).

# Update: 1 March 2009

And [more](http://rails.lighthouseapp.com/projects/8994/tickets/2108).
