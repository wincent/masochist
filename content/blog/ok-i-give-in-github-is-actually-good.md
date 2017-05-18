---
title: Ok, I give in, GitHub is actually good
tags: git blog
---

When [GitHub](/wiki/GitHub) first launched I was far from impressed with it. I had 3 main complaints about it:

1.  It was little more than a prettified [GitWeb](/wiki/GitWeb) replacement written in [Ruby on Rails](/wiki/Ruby_on_Rails) and with some attractive [CSS](/wiki/CSS).
2.  It seemed absurd to me that people would pay for the service when [Git](/wiki/Git) itself comes with everything you need to reliably, securely serve repositories. (And if you make a living off your development work, why would you entrust your most prized asset, your code, to an unknown third-party with a non-existent track record?)
3.  Its "fork-happy" design encouraged a veritable forking-frenzy that seemed to be an overexcited reaction to the "D" in [DVCS](/wiki/DVCS) (and just because you *can* splinter a project into a thousand public forks doesn't necessarily mean that you *should*).

Within the [Ruby](/wiki/Ruby) community, ever quick to embrace the latest and greatest, it took off absolutely explosively once Rails itself switched to Git and chose GitHub as its home. For many newcomers to Git, GitHub *was* Git.

I have to hand it to them, though. They haven't rested on their laurels. They've tirelessly added feature upon feature to the site, and while some of those features can be dismissed as irrelevant frills and crud, there *are* some absolutely core pieces of functionality that have brought the site to new levels as a collaboration tool.

# On forking

Ok, I'm still not happy about the forking.

One of my major complaints with GitHub was that it presented a very narrow collaboration model to Git newcomers, which glorified "forking" and was completely silent on the many other ways in which changes can be moved back and forth among Git repositories. These newcomers learnt that working on a project meant making a public fork of it on GitHub, and contributing back upstream meant making a pull request on the upstream project's GitHub page.

Many didn't know that you could use Git to work on a project, much less publish your changes, without having a GitHub account.

Things like mailing lists, `git format-patch`, and the myriad ways of pushing, pulling and fetching, are made completely invisible. In this universe with GitHub at the center, the fact that you can share your repository via SSH, HTTP, on a USB stick, in a bundle, across the local filesystem, is effectively elided.

In the old days we only had a centralized model. Then came the distributed systems and we enjoyed the ability to have our local clones containing the full history of upstream projects, and we published them when it made sense to do so.

Under GitHub, we have go far beyond this initial distributed model, to one in which a popular project has 1,000 *public* forks. Why on earth do all these forks need to be public? Why can't most of them just be local private clones?

There *is* a time and a place for public forks, but I don't think it need be the norm. There are many times when it is simpler to just:

1.  `git clone` the upstream project
2.  Prepare your patch, then run `git format-patch` to submit it (via email, or issue tracker ticket) upstream

Instead of:

1.  Fork the upstream project on GitHub
2.  `git clone` either the upstream project or your fork of it
3.  Prepare your changes, then push your changes to your fork
4.  Request that upstream look at your fork and pull it in

Public forks are great for long-running feature development, but in most cases when you just want to submit a spelling fix to a project's documentation, forking is just needless overhead that does nothing other than inflate the number of repos hosted by GitHub for its marketing statistics.

I am sure that, for many projects, the humble, old-fashioned mailing list would provide a higher-quality code review process for incoming submissions. Mailing lists provide a focal point which all members on a team can read and reply on proposed changes in an ordered, threaded fashion. Compare that to a diaspora of forks, which people in general will only go to look at it you explicitly ask them to, and in a way that makes them think it will be worth their time.

There *are* uses for public forking — like being able to get an overview of the "ecosystem" of a project — and as such I think it's great that GitHub makes it so easy to fork. The problem is that the emphasis on it is such that the alternatives just fade away into the background.

# Collaboration goodness

So, yeah, I don't like all the forking. Over the last few weeks I've been performing a massive upgrade to my Rails app, and part of that has meant finding dozens of bugs, quirks, limitations, incompatibilities and possible improvements that could be worked in to all the tools that I'm using (RSpec, Capybara, Steak, RR, Culerity, Celerity, HtmlUnit, DatabaseCleaner, Factory Girl, Bundler etc).

I've had to open a lot of tickets and submit a lot of patches on a lot of projects. I've spent countless hours on it. The forking culture of GitHub has made that a little more cumbersome than it needed to be. For this kind of occasional contribution to a project, there is no doubt that a simple `git format-patch` would be much easier.

It would also facilitate an improvement feedback loop which you don't get with public forks. With `format-patch`, the maintainer can say, "Looks good, but can you make it like this?" and the patch can be resubmitted. With public forks, on the other hand, you are pushing your work before it's had any proper feedback, and if you want to revise it in light of that feedback you either have to do a waste-of-space amendment commit on top of the first one and hope the upstream maintainer knows how to squash it, create yet another branch to live alongside the first one, or destructively rewrite your history (perennially discouraged in Git culture).

But despite my complaints about forking, like I said, the GitHub team has worked assiduously on adding new features, and some of them are awesomely good for this kind of collaboration:

-   commit comments
-   the ability to comment on specific lines of a commit, or the commit as a whole
-   the ability to reply to these in-line comments
-   annotation of commit logs showing which commits have comments on them
-   email notifications of anyone doing anything in your repos, any changes on your tickets, and any changes on anything you've commented on, anywhere (not just your own projects)
-   historical, hyperlinked record of all those notifications at GitHub
-   ubiquitous hyperlinking of commits, branches and other references
-   overviews and RSS feeds of all activity (commits, comments, issues) in the projects you're watching

I ended up spending a lot of time complaining in this post, and it took me less than a minute to write those bullet points where I describe the good stuff, but there really is no overstating the usefulness of those features.

If you're hosting an [open source](/wiki/open_source) project on a site that doesn't have at least half of those features, then it's not a serious collaboration tool. Yes, that means that my own site, with its lowly GitWeb installation at [git.wincent.com](http://git.wincent.com/), isn't "serious" and won't be until I add those features.

I'll put up with all of GitHub's fork-craziness, and promise never to rant on that particular topic again, in exchange for those core collaboration features that I've listed above. I really do take my hat off to the team. They've come a long, long way from their early "let's dress Git up in pretty CSS" days, and have delivered some real innovations in the collaboration space.
