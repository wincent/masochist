---
title: Rails 3 upgrade progress
tags: rails blog
cache_breaker: 1
---

In my post from a few weeks back, "[Rails 3: worth the upgrade?](/blog/rails-3-worth-the-upgrade)", I basically argued that you don't really have a choice but to upgrade, because [Rails](/wiki/Rails) development culture is such that all eyes are on the master branch and "legacy" releases aren't really maintained in any serious way. I noted, however, that on the bright side there are *a lot* of significant improvements that will positively impact your development. You should upgrade.

The cost, however, is high.

# What you're in for

If you have anything beyond a trivial toy app, you'll find that the upgrade will impinge on pretty much every nook and cranny of your application. You'll end up fixing an enormous amount of breakage, and many of the defects you discover will prompt you to perform an application-wide audit looking for similar cases elsewhere in the code base.

In my case after the update the application wouldn't even run, nor could I even start the spec suite or load the console. I gradually triaged the breakage, and got it to the point where the application would at least boot and (some) requests would succeed, but it soon because evident that nothing short of a careful review of the entire code base and spec suite would be sufficient to get things back to how they were before.

This is partly because so much has changed in Rails itself. It is also because [RSpec 2](/wiki/RSpec_2), the new version under development to coincide with the release of Rails 3, is itself a complete rewrite of the original [RSpec](/wiki/RSpec), based on [Micronaut](/wiki/Micronaut). We are talking enormous changes here to not only the framework under test, but also the test framework itself. My app had a spec suite of close to 3,000 examples, so there was *plenty* of room for breakage to manifest itself.

# Time to knock down some walls

I am an "If it ain't broke don't fix it" kind of guy. I tend not to be seduced by the latest and shiniest baubles. Raving blog posts about the wonderfulness of NoSQL databases — with huge grassroots marketing forces and scary version numbers in the neighborhood of 0.1.10.1 — bounce off me like foam balls. Pretty much every exciting new Gem release that I am supposed to be thrilled about seems like nothing more than a re-invented wheel.

I tend not to incorporate any of these "re-invented wheels" into my set-up until they've got a solid track record under their belt, and have shown that they not only have something worthwhile to add, but are here to stay too. [RSpec](/wiki/RSpec) and [Haml](/wiki/Haml) are examples of innovative projects which I adopted early on (ie. from 2007). [jQuery](/wiki/jQuery) followed later. For deployment [nginx](/wiki/nginx) was king and has been stubbornly immune to the effects of Passenger marketing. Sometimes, a gut feeling about the quality of a project will lead me to evaluate it and incorporate it sooner than I usually word; this is what happened with [Unicorn](/wiki/Unicorn).

So, I'm a conservative person with respect to the software that I use in the server environment, and here I was with a thoroughly broken application built on a web application framework and testing library that had both been effectively rewritten from the ground up.

I decided that if *everything* was broken anyway, I may as well take the time to make a few changes.

Time to give [RR](/wiki/RR) a try as an alternative mocking framework. Its concise, elegant syntax had caught my attention a while back, but it was still very new. As I went through my specs, fixing breakage, I tried out RR to see if it was really as expressive and powerful as I hoped it would be. After passing some tricky edge case tests, I decided to continue with it.

[FxitureReplacement](/wiki/FxitureReplacement) was also broken under Rails 3, so I figured I'd give [Factory Girl](/wiki/Factory_Girl) a shot. I was sold on it when I saw how elegantly it handled edge cases that FixtureReplacement had struggled with.

The chewy wad that is [Cucumber](/wiki/Cucumber), my oldest enemy (kind of like Darth Vader and Obi-Wan Kenobi, except the difference is that Cucumber and I were never friends in the distant past), got ripped out and replaced with the lean, succulent juiciness of [Steak](/wiki/Steak).

All of these changes were made tentatively at first, but as each piece passed its entrance exam I decided to stick with it until I got the entire spec suite passing again. If I could get the whole thing working without any kludges this would become the new line-up.

# The end result... or is it?

Finally, after weeks of knocking down walls and rebuilding them, the spec suite is roughly back where it was:

    Finished in 340.3 seconds
    2935 examples, 0 failures, 45 pending

There are plenty of holes that still need to be filled in (but there were under the old suite too), and there are known issues in my issue tracker which I have to address, but my confidence in the application is now close to where it was for the old Rails 2.3.5 version.

It's been an ordeal — 724 commits and counting since the upgrade started — but I think it's been worth it. The spec suite is cleaner, and already more comprehensive, than it was before, and in dedicating so much attention to the code base over these weeks I have found and fixed real, hidden bugs, and identified and made some real improvements too.

Nevertheless, I'm glad that this kind of major release only comes rarely. With a bit of luck the Rails team will make incremental improvements and do evolutionary rather than revolutionary 3.1, 3.2, 3.3 releases, and won't even start thinking about the big v4.0 until 2 or 3 years have passed. Wishful thinking? I hope not...
