---
title: Minor tweaks to site
tags: site blog
cache_breaker: 1
---

Just deployed a few minor tweaks to the site:

    cde8d79 Use record_timestamps in moderate_as_ham! method
    f4557ff Update to rspec 1.2.7/rspec-rails 1.2.7.1
    6a48a1d No need to explicitly call update_needles from moderate_as_ham!
    b934f20 Drop "did_moderate" callback in favor of "after_update"
    5010dc6 Comment model: drop "update_caches_after_destroy" method
    aa435d3 Fix breakage in comments controller specs
    e201d29 Insert RR placeholders in spec/spec_helper.rb
    e613e9e Fix display of underscores in last line of "pre" blocks (CSS)
    e0e2b70 Show a flash on wiki articles that haven't been touched in a year
    67d55c3 Show multiple flash items as bullet points
    b9eff44 CSS: Make bullet points in flashes look nice
    e107048 Use emphasis in the stale article flash
    6be658f Show tweet number in tweets#show HTML template

Most of these are just back-end refactoring with no user-visible impact, but there is one thing which will be fairly noticeable to people reading the [wiki](/wiki): namely, if you look at an article that hasn't been updated in the last year you'll see a flash that reads:

> This article is over 1 year old (to check for a more recent resource see the [wiki](/wiki) index, the [tag cloud](/tags), the [tag search](/tags/search), or the [search](/search) page)

This change was prompted by my concern that people might be stumbling across really old, out-of-date stuff that I haven't touched in *ages*. I know there are some really old articles in there which don't represent my current thinking at all, or which apply to very old versions of software which nobody is using any more.

Hopefully this little change won't be too obtrusive and will make the wiki much more useful to visitors.
