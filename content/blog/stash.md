---
title: Stash
tags: blog
---

[Git 1.5.3](http://www.wincent.com/knowledge-base/Git%201.5.3) just came out a few days ago and one of the greatest things about it is the addition of the [git stash](http://www.kernel.org/pub/software/scm/git/docs/git-stash.html) command. This addresses one of the most annoying workflow obstacles that I run into many times each day: working on a particular task that may take minutes, hours or even days, and stumbling across something else that could be fixed along the way in a matter of minutes.

Faced with such a discovery there are four options:

-   Make a note reminding yourself about the change and come back to it later
-   Make the change anyway, and in your commit message cover both changes (ie. "Did this and also did this")
-   Make the change anyway, and use the `--interactive` switch to `git add` to separately commit hunks from the different changes
-   Put your "work in progress" onto a separate temporary branch, switch back to the branch before you started the work, make your change and commit it, then go back to your work in progress branch and continue

All of these work to some degree but have their drawbacks. You either wind up with a desk or notebook full of notes, create an unclean history that conflates separate changes and makes it harder to "[cherry pick](http://www.wincent.com/knowledge-base/cherry%20pick)", have to plod through the unwieldy-yet-powerful `git add --interactive` interface, or issue far too many commands for managing and merging branches when what you really want to do is much simpler.

All of this goes away with `git stash`. Now your workflow looks like this:

-   Start work-in-progress
-   Stash work-in-progress
-   Make unrelated change and commit
-   Retrieve stash and continue

And the commands to do so are simple and easy to remember (`git stash`, `git stash apply`, `git stash clear`). As with many other things in Git, it's quite sophisticated and powerful — it's actually a stack of stashes so you can have multiple things stashed away at once — but the basic use case is very straightforward.

I've been looking forward to 1.5.3 for some time now for exactly this reason.
