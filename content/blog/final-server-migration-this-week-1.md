---
title: Final server migration this week
---

I've been working on moving to the new server for [nearly a month now](http://www.wincent.com/a/about/wincent/weblog/archives/2008/02/server_migratio.php), a process which has been quite slow because all the data has to be exported from a number of "legacy" applications and imported into a brand new custom Rails application written especially for this site. It's slow going because it's the first time I've ever deployed a Rails application and I've had *a lot* to learn... but now I know a fair bit about nginx, capistrano, mongrel, monit, and of course Rails itself. The server too is totally different, with a different operating system, so it's all been quite time-consuming.

Well, the crunch time is now coming and the *real* server move is about to happen this week (at the end of the March the old server will go offline forever, so the move has to happen this week, ready or not). So this will most likely be my last post ever to this weblog.

The forums are already in read-only mode, and I'm about to shut down the bug tracker too shortly so that I can do the final export of all the records and move them into the database on the new server. If you had an account on the old server you'll automatically have one on the new server too, although you will need to reset your password (I couldn't transfer across any passwords because none of them were stored in plain text, and rightly so of course).

At some point during this week email might temporarily go down, hopefully only for about an hour (delivery failures should be temporary), and the wincent.com domain itself will go down at roughly the same time too. When it comes back up we'll be running on the new server. If you make a purchase during that time you might have to wait an hour or two for your license information, but we'll soon be back to immediate automated delivery.

Keep your eye on my Twitter account if you'd like to be kept posted with updates; it will be my only avenue of communication during my brief stint in limbo:

-   <http://twitter.com/wincent>
