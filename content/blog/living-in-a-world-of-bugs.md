---
title: Living in a world of bugs
tags: rant blog
---

What a bug-plagued existence we lead. Let's take a look back over my last hour.

The first one isn't really a bug but instead an obnoxious behaviour that the author has implemented with good intentions, but which is nevertheless extremely annoying.

The short version: I just tried out the very impressive [GitX](/wiki/GitX) out of mere curiosity (I've always preferred the [command line](/wiki/command_line) for most [SCM](/wiki/SCM) interaction, but I had heard great things about GitX and I was curious to see if it lived up to the praise). I was indeed impressed, but after this brief trial the app went straight in the trash. (No fault of the app; it's just that the command line already presents me with the most efficient, robust interface for almost everything I need to do with an SCM, and `gitk` comfortably handles the rest.)

I was more than a little surprised and exasperated to see that it had taken ownership of all of my repositories which had a `.git` extension (in my case, by convention I name all my clones of upstream projects with a `.git` extension so that I can see at a glance that they're repos and not just unpacked tarballs). These repositories are first and foremost *directories*, but GitX had turned them all into opaque, unnavigable, double-clickable "documents".

As I explain in [the ticket](http://gitx.lighthouseapp.com/projects/17830/tickets/110), this is unexpected, all too easily provoked without meaning to, and relatively hard to reverse.

On filing this ticket I notice that I am *still* not being added as a "watcher" on any ticket that I file on Lighthouse. I filed a [ticket](http://help.lighthouseapp.com/discussions/suggestions/356) about that issue on 20 February, but there was still no satisfactory resolution a week after they'd said they'd "have a developer dig in first thing Monday morning".

And in the background this whole time I had a `git bisect` session running trying to figure out which commit [broke](http://rails.lighthouseapp.com/projects/8994/tickets/2039) many [URLs](/wiki/URLs) with trailing slashes on them between [Rails](/wiki/Rails) 2.2.2 and 2.3.0 RC1.

Poor old Joshua Peek was my number one suspect, seeing as his name is almost invariably the one signing off on sweeping changes to the core functionality of the codebase (very keen, the boy, but I fear a little too enthusiastic). Looks like my suspicions where unjustified. The guilty [commit](http://github.com/rails/rails/commit/fef6c32afe2276dffa0347e25808a86e7a101af1) was in fact authored by a guy named Aaron Batalion, and committed by DHH. Plenty of tests included in the patch, but evidently not enough...

All the while I did this I was getting periodic errors from Lighthouse:

![you-stumbled-bro.png](/system/images/you-stumbled-bro.png)

I can't say I particularly like this error message. Apparently, in my infinite clumsiness, *I* "stumbled" on an error. I think if anything or anyone stumbled, it was evidently Lighthouse itself. I was only clicking on ticket and attachment links.

So, one last bug and I'll wrap up this post.

On posting the results of my `git bisect` findings onto Lighthouse, it "helpfully" decided to change the state of my ticket from "new" to "committed". Evidently, this was triggered by something in the text from the output of `git bisect`. Is this a baked-in Lighthouse bug? Or an overzealous misconfiguration unique to the Rails project? Either way it's annoying because I don't have the privileges to undo the incorrect automated state change.

Just one of those days, I guess. Bugs, bugs, bugs.
