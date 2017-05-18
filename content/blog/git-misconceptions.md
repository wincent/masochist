---
title: Git misconceptions
tags: git blog
cache_breaker: 1
---

I just had the misfortune of being directed to read [this anti-Git rant](http://robey.lag.net/2008/07/13/git-for-the-real-world.html) by a guy named Robey Pointer, who apparently works for Twitter. It's about 7 months old now, but [apparently](http://gitlog.wordpress.com/2009/03/01/git-monthly-links-2009-02/) it's been getting linked to a little bit lately.

While he claims that he's "overcome several crippling problems and misunderstandings about how to use it properly", the vast bulk of his post shows that he really doesn't get it at all.

I don't want to spend too much time on this, so I'll limit myself to pointing out only the most egregious of his misconceptions. And yes, [this is important](http://xkcd.com/386/).

Robey advises you to avoid `git rebase` and `git reset` on the grounds that the former is just "to trick you into creating merge conflicts", and the latter "erases commits from your history".

Both of these statements are incorrect, although Robey is evidently not alone in thinking like that. Only a few days ago I read a post by another guy, Erik Sink, who doesn't "get it". [His post](http://www.ericsink.com/entries/git_immutability.html), provocatively titled "On Git's lack of respect for immutability and the Best Practices for a DVCS", share's a common misunderstanding with Robey's.

So let me try to briefly explain. `git rebase` is mostly intended for two very specific specific workflows:

-   Re-ordering or editing commits in your local repository prior to publishing them.
-   Making your commits apply cleanly on top of an upstream `HEAD`.

This first point is *not* about "rewriting history" (gasp!) but more about refining and perfecting an existing work in progress. Think of the way you edit text in your text editor. Do you start from beginning to end, character by character, and keep going until you've finished without making any mistakes?

No, I didn't think so. But you're perfectly comfortable with moving all over the file, deleting and entering text, moving things, seeing if stuff compiles, and eventually deciding that you are at a point where you need to commit something. The point is that producing code is an iterative process where your approximations edge increasingly closer to perfection.

Using `git rebase` to "clean up" your history is really not all that different to the kind of work you already do in your text editor, it's just carried out at a different conceptual level. The idea is that you're not only striving to produce the best possible final result; you're also trying to make the history of development as understandable as possible for others by organizing your commits into logical, easy-to-review steps.

This is what distributed SCMs are all about: they facilitate collaboration. And even if you're a lone hacker, it makes sense to have a readable history. After all, 12 months from now *you* might be the one looking back at your own code trying to figure out why the hell you did something the way you did.

The Git index, aka "staging area", is another example of a tool Git provides which helps you to break your changes up into readable, understandable modifications. Sure, you can abuse these tools to commit untested, uncompiled code, but any programmer worth his salt will compile-test every single commit before actually letting it loose on the outside world. It's easy: it can be done automatically with no programmer intervention. What's so difficult about it?

Both Robey and Eric seem to miss this point. `rebase` isn't "erasing" commits and nor is it failing to show "respect for immutability". (Behind the scenes, all of the original commits are still in the repo and you can access them with `git reflog` if you really want.)

If these authors *really* cared about erasure and immutability they would never delete any characters from their source files while editing them; instead they would create a commit before each key press so that every intermediate state of their source code would be immortalized forever in their source control system.

Naturally they don't do this; it would be utterly absurd. The failure here is seeing that using `git rebase` to massage history is philosophically just like using a text edit to make any change to one of their files; it's just that it plays out at a different level.

Needless to say, one needs to know *when* to use `rebase`. Evidently all of what I'm saying here applies to people working on "work in progress" branches in their *private* repos. It's all about getting your work ready for submission or publication to others. Rebasing published branches *does* amount to rewriting history and it *is* a pain in the ass for people who are trying to track what you're doing.

Now let's talk about the second common use of `git rebase`, making your commits apply cleanly on top of an upstream `HEAD`. When he says that `rebase` "is a way to trick you into creating merge conflicts" it makes me question whether he has actually used a distributed SCM to collaborate with others on any decent scale.

`rebase` is *all* about the exact *opposite* of that. `rebase` is about making your changes apply cleanly upstream. If you work on a project with any sizeable number of contributors then this is the only way to efficiently distribute the task of handling merge conflicts.

Let me illustrate with a scenario. Imagine a project has 200 contributors and 1 maintainer. Without `rebase`, and with so many contributors, you would expect a *lot* of merge conflicts, and it would be up to the poor maintainer to resolve them manually. The maintainer becomes the bottleneck.

With `rebase` the maintainer is free to actually do what's more important: review patches for quality rather than spend all day resolving merge conflicts. With `rebase` merge conflicts happen less frequently because everyone easily keeps "on top" of what's happening upstream. And when there are conflicts, the burden of resolving them is distributed out among the 200 contributors instead of landing on top of the poor maintainer and turning him/her into a bottleneck that actually slows down the advancement of the project.

So in short, `rebase` is great. Like any great tool, it can be misused and abused. But really, learning when and how to use it isn't *that* hard.

And `git reset`? It doesn't "erase" commits. Check out `git reflog`, all the commits are still there. It's a tool. Like a knife, you can cut your fingers off with it if you want. But unlike a knife, your fingers are safely stowed away and you can get them back if you want thanks to `reflog`. You *can* throw away *uncommitted* changes in your worktree with `reset` if you are dumb enough to supply the `--hard` switch without having read the man page and understood what it does (it is called `--hard` for a reason).

There are a few other points worth commenting on in Robey's post. At one point he says:

> Huh? What? Why are my local commits intermixed with my co-worker's commits? The merge must have messed up! Crap!

Here he's talking about two lines of development which diverge and then merge:

         C--D--G
        /       \
    A--B         I--J
        \       /
         E--F--H

So he's complaining about the order in which these commits get reported back to the user by `git log`.

Perhaps in Robey's mind the `C`, `D`, `G` series of commits is somehow "special" by virtue of its position in his personal visualization of what the history looks like, but I could just as validly have drawn the history like this:

         E--F--H
        /       \
    A--B         I--J
        \       /
         C--D--G

He later describes "fast-forward" merges in these terms:

> Basically, sometimes when you ask git to merge branch A into branch B, it will decide that it doesn't want to merge and it will instead turn A and B into clones of each other.

He goes on to say:

> So after the merge, you'll see every single commit you made, as if you had done them directly on the master branch. Git has cloned your feature branch into the new master branch.

And finally:

> Your branch has effectively vanished from history.

It is painfully evident that Robey has never taken the time to understand Git's extremely simple model of history. He doesn't even appear to know what a "branch" is.

A branch is nothing more than a `HEAD` commit with a name. Usually the main line of development is called "master", and the `HEAD` commit defines the current state of that branch. Another common branch name is "maint". But you can also have "kewl-feature", "bug-210-fix" and the like.

What *is* the "master" branch? Simply, the series of commits you get when you start at the `HEAD` and look at its parent, and the parent of its parent, and the parent of the parent... In the case of merge commits you'll have two parents, or even more: this was what we saw in the diagram above, where commit `I` had `G` and `H` as parents.

So let's look at our master branch:

    A--B--C--D

Robey forks off a "topic" branch to develop an experimental feature:

    A--B--C--D
              \
               E--F--G

What's in the "master" branch? We start at the `HEAD` (`D`) and look at the parents and get `D`, `C`, `B`, `A`.

What's on the topic branch? `G`, `F`, `E`, `D`, `C`, `B`, `A`. Notice how from `D` onwards it's actually just the same as the "master" branch?

Notice also how drawing the topic branch "off to the side" is really just a visualization thing, and that Git really has no concept of "left" and "right", "up" and "down"? Just parenthood. So this topic branch could really have been drawn as:

         C
        / \
    A--B   D
          /
         E
         |
      G--F

All of these things are just drawings to help human beings visualize what's in the repo, but the truth is what's in the repo doesn't have *any* of these spatial representations. It's all defined in terms of commits, and which commits are parents of which other commits. If Robey wants to learn about this he can look up Directed Acyclic Graph.

Of course, a more obvious way to draw this series is this one:

    A--B--C--D--E--F--G

Which is incidentally what you'll get when you "merge" it back into "master". Git says, well, there's nothing to actually "merge" here at all; we'll just update the `HEAD` of "master" to point to `G` and be done with it. That's what a "fast-forward" is. Nothing was "cloned", as Robey alleges. Nothing has "vanished".

If you *really* care about the fact that commits `E`, `F`, and `G` began life on another branch then you can see the evidence in the reflog (and of course, your "topic" branch is still there in the repo anyway, seeing as you'll still have a `HEAD` pointing to it until you explicitly decide to delete it). But at no point are any commits rewritten or thrown away. The history is only ever added to, never deleted or modified.
