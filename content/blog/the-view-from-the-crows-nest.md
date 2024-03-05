---
title: The view from the crow's nest
tags: blog
---

Over the last year I've tried to make my development process more and more [transparent and open](http://typechecked.net/s/progress/), and I plan on continuing that trend.

But I think that sometimes the zoomed-in view on all the details -- the commit logs, the various feeds, the [Subversion](http://typechecked.net/wiki/Subversion) (and now [Git](http://typechecked.net/wiki/Git)) source code repositories, the bug reports, the mailing lists, the forums, the nightly builds -- can actually be quite confusing. In this post I hope to give a bird's eye view of what's been going on and where I'm headed.

### What I've been up to lately

#### This year

Since the start of the year there have been a number of maintenance releases of various products, containing bug fixes, optimizations, and minor feature enhancements. These include Synergy 3.1.1b, 3.1.1, 3.1.2b, 3.1.2, 3.1.3b, 3.1.3, 3.1.4b and 3.1.4; Synergy Advance 0.5b and 0.5.1b; Hextrapolate 2.0b and 2.0; and Install 1.3.1.

Apart from these visible releases there have been a few key areas of "behind the scenes" focus:

-   Learning [Ruby](http://typechecked.net/wiki/Ruby): I had dabbled with Ruby in the past but this was the first time I took on a real project and really got my teeth sunk into things. The benefits of this apprenticeship have been manifold: I feel like my experience with Ruby has made me a better [object-oriented](http://typechecked.net/wiki/object-oriented) programmer; I've developed tools written in Ruby which help me to work better and faster; the [RubyCocoa](http://typechecked.net/wiki/RubyCocoa) bridge that [Apple](http://typechecked.net/wiki/Apple) will be adding to [Leopard](http://typechecked.net/wiki/Leopard) will make [Ruby](http://typechecked.net/wiki/Ruby) much more important in the portfolio of tools available to the [Cocoa](http://typechecked.net/wiki/Cocoa) programmer.
-   Walrus: This is the big Ruby project that I just mentioned, an object-oriented templating system that itself incorporates a [packrat](http://typechecked.net/wiki/packrat) parser generator. In developing this system I gained not only a highly useful tool with which to improve the documentation for my products, I also learnt a lot about parsers, knowledge which I think has application in many, many aspects of programming.
-   Learning [RSpec](http://typechecked.net/wiki/RSpec): RSpec is an amazing [Behaviour-Driven Development](http://typechecked.net/wiki/Behaviour-Driven%20Development) framework that I used to guide me through my first baby-steps with Ruby, and it helped me to learn a lot about testing "best practices". I'd like to improve WOTest (the [Objective-C](http://typechecked.net/wiki/Objective-C) testing framework that I wrote) based on some of the excellent features of RSpec; although the truth is that perhaps the RubyCocoa bridge will allow me actually use RSpec directly in my Cocoa development.
-   A side project has been re-vamping this website; it's still in its early stages but the eventual goal is to replace the disparate parts of the site (forums, wiki, mailing lists, bug and feature requests database etc) with one single, simple, unified (and modernized) interface.
-   Learning [Rails](http://typechecked.net/wiki/Rails): Wanting to invest my time efficiently I wanted to leverage my growing Ruby knowledge by doing the new version of the website as a Rails application.
-   Learning [ANTLR](http://typechecked.net/wiki/ANTLR): ANTLR is a sophisticated recognizer generator (capable of generating lexers, parsers, tree parsers). My first completed ANTLR project is a [wikitext](http://typechecked.net/wiki/wikitext) parser in the form of a Ruby extension written in [C](http://typechecked.net/wiki/C). This will be used at the core of the new website so it has to be fast. My next project will be replacing the Walrus parser (written in Ruby) with an ultra-fast C version. ANTLR is a highly useful tool to master with myriad applications; Apple still uses it in [Mac OS X](http://typechecked.net/wiki/Mac%20OS%20X), or so I understand.

#### This month

The most significant project of interest this month has been learning about [Git](http://typechecked.net/wiki/Git) and starting my migration to it. I had previously started using [SVK](http://typechecked.net/wiki/SVK) in order to take advantage of its much superior [branching](http://typechecked.net/wiki/branching) and [merging](http://typechecked.net/wiki/merging) capabilities but the truth is that it is _slow_ despite the fact that its distributed nature gives it a head start on many operations.

So I started to explore [Git](http://typechecked.net/wiki/Git) and gradually built up the assessment that it was: (a) robust, (b) mature, (c) well-suited to my workflow, (d) well-documented, (e) dead fast, (f) backed by an innovative developer community with a promising future, (g) very easy to use once you've learnt the basic patterns.

Changing [version control systems](http://typechecked.net/wiki/version%20control%20systems) is a big move but it didn't take too many days of exploration and experimentation to see that moving to [Git](http://typechecked.net/wiki/Git) is the right thing and that there is no better moment than right now.

It _is_ a disruptive change but I _am_ at a natural juncture in my development: Apple is about to release Leopard, and with it comes a whole new language: Objective-C 2.0. My new (Objective-C 2.0) codebase is going to diverge farther and farther from the old code base, so this seems like the perfect moment to wipe the slate clean and make a fresh start.

### Where I'm headed

From what I've written it is already pretty clear where I'm headed: the most significant event on the developer calendar this year will be the release of Leopard in October. Between now and then I am going to be investing an increasingly large portion of my time in working on Leopard-only versions of my applications.

I plan to continue doing the maintenance releases which will run on [Tiger](http://typechecked.net/wiki/Tiger) (or older in some cases) as well as working on the website update and the new parser for Walrus in my spare time.

I'd like to get Synergy Advance to 1.0 by the time Leopard comes out, but there is a lot that can happen between now and then so it's impossible to predict whether that desire will be fulfilled. And after that I have two or three products that have been left on the backburner here for literally years and which I'd like to get out there once Leopard is on the shelves.

It would be nice to take the wraps off the new website before the end of the year, but before that there is still quite a bit of work to be done and I want to upgrade the server to the latest version of [Red Hat Enterprise Linux](http://typechecked.net/wiki/Red%20Hat%20Enterprise%20Linux) which require both time and money.

Finally, I'd like to release more of my code as [open source](http://typechecked.net/wiki/open%20source) but first need to find a viable business model for it. I don't know if there is one, but if there is I would love to find it. Why? I _like_ the ideas behind both open source and [free software](http://typechecked.net/wiki/free%20software), and I think they have the potential to produce superior, more secure code. The only missing piece is how to do this as a small vendor and still make a living.

As always, any relevant news will be posted here.
