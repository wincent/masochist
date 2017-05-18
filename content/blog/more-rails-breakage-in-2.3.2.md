---
title: More Rails breakage in 2.3.2
tags: rails blog
cache_breaker: 1
---

For me the [Rails](/wiki/Rails) 2.3 release cycle was pretty painful. Here are the posts that I wrote during the cycle chronicling my suffering, in chronological order:

-   [Lack of stability in the Rails/Ruby ecosystem (rant)](/blog/lack-of-stability-in-the-rails-ruby-ecosystem-rant)
-   [Rails update headaches](/blog/rails-update-headaches)
-   [More breakage in Rails 2.3.0 RC1](/blog/more-breakage-in-rails-2.3.0-rc1)
-   [Living in a world of bugs](/blog/living-in-a-world-of-bugs)
-   [What is a "release candidate"](/blog/what-is-a-release-candidate)

I had thought that by installing the release candidates I could at least mitigate the pain by distributing it over a period of time, and by filing bug reports I could at least contribute and stop any show-stoppers from making it into the final release.

After doing that penance, I thought I had earned a smooth and trouble-free transition to the final release, version 2.3.2. It turns out that I was wrong. I just tried to deploy my shiny new 2.3.2 update to the staging environment and lo and behold, `rake gem:build` is broken, which in turn means deployment is broken for me. I haven't yet delved into the code to find out what was broken, but it looks like [this massive refactoring](http://github.com/rails/rails/commit/99d75a7b02bf430a124b9c3e2515850959d78acf), wedged into the codebase on the eve of the final release, or perhaps [this load path tinkering](http://github.com/rails/rails/commit/9d906707bea997016fd370e33e12dbc21cfcc531), is likely to be the culprit.

# Update (45 minutes later)

[Here is the ticket](http://rails.lighthouseapp.com/projects/8994/tickets/2266) I've filed against Rails for the bug. I've wasted over an hour on this issue already, so I hope it doesn't sap too much more time. All up the 2.3 release cycle has probably cost me about a dozen hours dealing with upstream bugs. Not very fun at all.
