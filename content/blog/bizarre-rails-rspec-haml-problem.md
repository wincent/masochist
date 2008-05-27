---
title: Bizarre Rails/RSpec/Haml problem
tags: rspec rails git haml
cache_breaker: 1
---

Not really sure what's going on here but I've run into some really bizarre breakage in the development version of the [Rails](/wiki/Rails) app that powers this site; not on this server, but on my development machine running [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard).

Here's what my work over the last few hours has looked like:

1.  Confirm that all [specs](/wiki/specs) are passing
2.  Make a bugfix, including specs to catch any future regressions
3.  Confirm that all specs pass
4.  Commit changes
5.  Upgrade to [RSpec 1.1.4](/wiki/RSpec_1.1.4)
6.  Fix breakage to specs caused by changes in 1.1.4
7.  Confirm that all specs are passing again
8.  Commit changes
9.  Upgrade to [Haml 2.0](/wiki/Haml_2.0)
10. Confirm that all specs are still passing
11. Commit changes
12. Make use of Haml 2.0's "ugly" option
13. Confirm that all specs are still passing
14. Commit changes
15. Drop use of `preserve` helper made redundant by recent changes to Haml; really this part consisted of multiple steps:
    1.  Search for `preserve` in [TextMate](/wiki/TextMate)'s project-wide search
    2.  Get out-of-memory warning because it tried to search the log files which were far too big
    3.  Delete the log files
    4.  Perform the search again and make the substitutions
16. Run the specs and note that there are zillions of failures, all of them relating to [RSpec](/wiki/RSpec)'s mocks returning `nil` values rather than the requested return values
17. Drop back to previous commit and note that those specs fail as well (these were the same specs and the same code that previously worked)
18. Note that the specs *do* work when run from a single file within [TextMate](/wiki/TextMate); `ruby the_spec.rb` and `spec the_spec.rb` also work, although `spec the_spec_dir` doesn't
19. Note that hitting the app in the web browser shows that it works and isn't failing where the specs say there is a problem
20. Run `git bisect` and note that *all* commits are failing
21. Go back to a really old commit (one month old) and note that the specs are failing
22. Try a fresh clone of the remote repo, which has none of the new changes, and note that the specs are failing
23. Try cleaning out old [gem](/wiki/gem) versions; specs still failing
24. Try uninstalling [RSpec](/wiki/RSpec), forcing the app to run from the version "frozen" into `vendor/plugins`; specs still failing
25. Try rebooting
26. Completely obliterating all versions of [RSpec](/wiki/RSpec) on my system and going back to 1.1.3
27. Completely obliterating all versions of [Haml](/wiki/Haml) on my system and going back to 1.8.2
28. Log into remote deployment machine and check that the specs work on it — bafflingly they don't work there either, despite the fact that I run the specs with every `cap deploy` and have seen the "0 failures" green light on dozens upon dozens of occasions and have never seen a failure

So all very puzzling and with a couple of wild goose chases thrown in. It turns out that after much investigation the cause was an abuse of mocks in my partials templates specs. A painful lesson and many hours wasted; perhaps I should have known better. In the end, the resulting specs are slightly leaner, so it hasn't been a total waste and at least now I know what's "the" approved way to set up locals in specs for partials.
