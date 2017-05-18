---
title: Rails 3: worth the upgrade?
tags: rails blog
cache_breaker: 1
---

It's a trick question, really, as you don't actually have any choice.

The reality is that the [Rails](/wiki/Rails) team has neither the *resources* nor the *culture* to provide solid support for previous releases. Rails is not Apache, or MySQL. Those are projects where you can safely ignore the bleeding edge and confidently sit back using the "stable" release and receiving a reliable stream of security fixes, rigorously backported, for years.

I remember using Apache 1.3 for years after 2.0 was already out and labelled as "production-ready". By the time I finally switched, 2.0 had received years of testing in the field, and I had received years of immaculately-prepared security updates for the 1.3 series.

It's the kind of software built by basement-dwelling hackers that believe in free software. Sandal-wearing hackers with beards and oversized bellies, that learnt C from [the original book](http://en.wikipedia.org/wiki/The_C_Programming_Language_%28book%29) by Kernighan and Ritchie, practiced on UNIX mainframes when most of us were still typing in BASIC program listings from print magazines, and have squashed more buffer overflow vulnerabilities than you or I have written unit tests.

For the "enterprise", the solidity and robustness of the platform is absolutely wonderful. It is a true "platform", in the sense of "foundation"; something that you can build upon with confidence.

# Rails culture

Unlike "old school" projects like Apache and MySQL, Rails has a culture driven by fads and fashions. Rails is the world of "rockstar" programmers and rockstar wannabes. It's the world of conference circuits, microcelebrities, and almost obligatory use of Apple portables. It's a world where aesthetics are everything and "new", by definition, beats "old".

Sounds terribly superficial and shallow? Sure, but nobody actually cares because Rails culture is *fun*. Ask the people giving the presentations at the conferences, hacking on apps on their laptops while sipping coffee in Starbucks, and participating in the forking/merging/pushing/pulling frenzy at GitHub, and they'll tell you that they're having a hell of a lot of fun. People *like* working with Rails and they *like* talking about it in a way that far exceeds what you observe in other more "enterprise-y" communities.

And no matter how full of shit it may all seem at times, the truth is that among the crap *some* good code, maybe even a lot, is being written.

So, from a technical standpoint, the great upside of all this is that you get a fast-moving platform with constant innovation. Something good has to come out of that.

The downside is that things like "choosing" whether to upgrade to the next major version are an illusion. You have no choice. You must upgrade or you'll be left behind with aging software that doesn't receive adequate attention and doesn't get security fixes.

As I said above the problem is partly lack of resources (lack of manpower) and partly cultural (lack of interest). Either way, the eyeballs simply aren't there (on the old code); they're all on the "Edge".

A recent example of this was in the botched 2.3.6, 2.3.7, 2.3.8 releases. Some stuff was hastily backported, but adequate care was not taken and things broke. The "fix" that followed the next day was also too hasty, requiring a fix for the fix the following day. There simply wasn't enough attention or quality control applied to the "old" series (and given that the next major release isn't even out yet, the "old" series is actually still the current "production" release).

Like it or hate it, this is what it means to live in the world of Rails. If you choose to play the game, the rules say you have to be prepared, more or less, to stay right on the crest of the wave.

# The bad news

So we've established that you don't have a choice about upgrading. Now for the bad news...

If the app you're upgrading is anything more than an incredibly simplistic "micro-app", you are likely to have a *lot* of problems in moving to Rails 3. The scale of the changes is simply immense.

My own app is of moderate size. Definitely not massive, but neither is it a "toy" app. We're talking about 20 or so model classes, 7 mailers, 30 controllers, 22 helpers, and 113 view templates. The amount of work has been considerable, and the changes required completely non-trivial (while some of the changes fall into the mindless "find-and-replace" category, many others require concentrated debugging or contemplation of fundamental design issues).

# The good news

What's the good news, then? The hint lies in the fact that I've used the word "upgrade" several times in this post already.

Long-term readers of this blog will know that I assiduously eschew the word "upgrade", instead using "update" whenever I can, because I view the former as a marketing term which, sadly, is often far from an accurate description of a software release. Things marketed as "upgrades" often turn out to be poorly prepared cans of worms which bring a slew of headaches and incompatibilities.

For me, if I am going to label something as an "upgrade", it had better have damn well earned it.

Well, having fought with Rails 3 for over two months now (I knew it would be a long battle, so I started early), having worked through many frustrating problems, and with no doubt many many more days of work still to be done, I am decidedly describing Rails 3 as an "upgrade". That Rails 3 has inflicted so much pain and that I'm *still* prepared to heap praise on it rather than spitting on the ground each time I utter its name, is a testament to just how impressive a release it is.

I am not going to go into detail and rave about all the wonderful new stuff in Rails 3 — there are already a plethora of blog posts out there that do that — but I will briefly list some of the changes that I have most appreciated so far:

-   the new routing [DSL](/wiki/DSL) is a marvel: it transformed my hideously complex, kludge-pocked, spaghetti-like routes file into a clean, readable, easy-to-maintain blueprint
-   Bundler: at last, a robust replacement for the exploding vomit-bag that was the old Gem management and dependency "resolution" system
-   cleaner, safer views due to the new approach to HTML escaping
-   HTML5 by default: I couldn't care less about the "bells and whistles", but switching now to HTML5 enables the move to unobstrusive JavaScript at the framework level:
    -   Unobtrusive JavaScript: this is something that I've been using almost exclusively for a long time now, but now the framework adopts the same approach, I am no longer fighting against the framework
-   ActiveRelation: apart from producing nicer-looking code, this enables some much more elegant means of query composition (ie. rather than just stitching strings together)

There is a bunch of other stuff, but those are the things that have most captured my attention so far. As a bonus, underneath all this is a much more disciplined focus on modularity within the codebase, and in general a big cleanup. For one thing, this makes it easier for mere mortals to look into the framework and see what's happening inside it. For another, we also hope that it makes it easier for the principal contributors to keep the bug count down.
