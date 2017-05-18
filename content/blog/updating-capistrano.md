---
title: Updating Capistrano
tags: rails capistrano blog
cache_breaker: 1
---

[Capistrano](/wiki/Capistrano) is a very, very important piece of software to those who use it. If Capistrano breaks, then you can't deploy your [Rails](/wiki/Rails) application. And it is a very [complicated, delicate](http://rubyhitsquad.com/Ruby_Hit_Squad.html) piece of software, so updates which break your recipes are a definite possibility.

So when I first learnt how to use Capistrano and got a working recipe to deploy this website, back in the Capistrano 2.2.0 days, I made a conscious decision to *not* update Capistrano unless there was some compelling reason to do so. And it's hard to imagine any such compelling reason.

Features? Why would I need features when it already does *exactly* what I need it to? (ie. it deploys my app).

Security fixes? Capistrano runs on my local desktop machine behind a NAT gateway and firewall, not on the publicly-visible server, so there literally aren't any security concerns. (If someone breaks into my Mac the last thing I'll be worried about is them playing with Capistrano.)

There are some "nice frills" that have been added to Capistrano since 2.2.0, but nothing in itself enough to warrant a change. Although [2.3.0](http://weblog.jamisbuck.org/2008/5/2/capistrano-2-3-0) didn't add much that personally interests me, [2.4.0](http://weblog.jamisbuck.org/2008/6/13/capistrano-2-4-0), for example, brings:

-   a `-d` switch for single-stepping through your tasks and approving or denying each remote command
-   `deploy:upload` allows you to upload multiple files specified using "glob" patterns

[2.5.0](http://capify.org/2008/8/29/capistrano-2-5-0) adds:

-   a `-n` "dry-run" mode which goes through running local tasks, but remote commands are only shown, not executed

Neither [2.5.1](http://capify.org/2008/11/7/capistrano-2-5-1), [2.5.2](http://capify.org/2008/11/13/capistrano-2-5-2) nor [2.5.3](http://capify.org/2008/12/7/capistrano-2-5-3) add anything of much interest to me.

None of these changes are enough to motivate me to risk breaking my deployment solution. (And sure enough, there *are* breaking changes post-2.2.0 which would stop my existing recipes from working.)

Turns out that I eventually found a reason to update. I wanted to add some tasks under the `deploy:migrate` namespace and turns out you can't do that in 2.2.0, or any other version of Capistrano, because it's not actually a namespace.

Evidently there's no point in submitting a patch against 2.2.0 for this problem, so if I want [my fix](http://capistrano.lighthouseapp.com/projects/8716/tickets/61) to be included I have no choice but to update. And that in turn requires [another fix](http://capistrano.lighthouseapp.com/projects/8716/tickets/64) to address the breakage in my recipes.

I don't *really* care if these patches make it in or not; as the most important thing for me is to just have a working deployment solution and I already do have that. The price I have to pay in the meantime is that my migration-related tasks have names like `deploy:migrate_test` instead of the `deploy:migrate:test` that I was hoping for. Not really too much of a big deal.
