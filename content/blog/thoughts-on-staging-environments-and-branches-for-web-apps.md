---
title: Thoughts on "staging" environments and branches for web apps
tags: rails blog
cache_breaker: 1
---

Until I stepped into the world of [Ruby on Rails](/wiki/Ruby_on_Rails), none of my web development work had ever entertained the notion of having separate "staging" and "production" environments. You simply deployed and if things didn't work you fixed them.

But with Rails came an incredibly complex, fragile deployment environment, at least compared with the simplicity that was uploading a set of [PHP](/wiki/PHP) scripts. It really did behoove you to have a separate little sandbox in which you tried things out first before really committing to deploying them on your live production system.

My mistake in this first venture into the realm of staging and production environments was equating "staging" with testing/development (`master` branch stuff) and "production" with stable/maintenance (`maint` branch stuff). I misguidedly set up `master` and `maint` branches in my [Git](/wiki/Git) repo and in disciplined fashion ensured that I only *ever* pushed to the production machine from my `maint` branch. I then did all interesting development on the `master` branch, which was (also misguidedly) set up to be the source for deployments to the staging machine.

It's fairly easy now to see that this really wasn't the way to go. The `maint`/`master` distinction didn't really make the system any more robust and only created extra work for me.

The best fit for web app development is not just "continuous integration", but ["continuous deployment"](http://www.google.es/search?client=safari&rls=en&q=%22continuous+deployment%22): all deployments done from one branch, and thanks to the ease with which machines can be cloned in [the cloud](/wiki/the_cloud), your "staging" environment becomes the identical twin of your "production" one. Spin up staging instance, deploy, test, fix if necessary, and if all goes well, shutdown and deploy on your live system.

# Update: 1 February 2011

On [thinking about this more](/snippets/24), I've realized that the stance I originally took in this post goes a little too far.

It *is* a mistake to equate `maint` with "production" and `master` with "staging", but that doesn't mean that `maint` branches don't have their place.

While it *is* ok and even desirable to work directly on `master` at times — specifically here in this "continuous deployment" approach — you need to have a stable branching point available to you for those occasions when you need to quickly rush out a security fix or a "brown paper bag" bug fix.

In practice, this means that you should be trying to keep `master` as close as you can to being *immediately* deployable at all times. In other words, you should be using topic branches for anything that takes more than a couple commits. And even for those low-risk, really short one-or-two-commit things that you decide to do directly on `master`, you should have a stable `maint` branch lying around just in case you need to do a deployment *right now*.

Just say you deploy once a day or once a week, that stable point for `maint` will probably be the last commit that you actually deployed successfully without any regressions. 99% of your deploys will be the `master` branch, though, and you'll end up fast-forwarding `maint` soon after, perhaps even immediately after. The other 1% though, will be based on `maint`, and they'll be those things that are so urgent that they can't wait for you to finish whatever topic(s) you might be working on, or even the stuff you've been working on directly in `master`.

So in this line of thinking, `master` and `maint` are *almost* the same thing, just as "staging" and "production" are too. They're not even parallel tracks; they are the *same* track. At all times you're trying to keep both of these as solid and deployable as possible.
