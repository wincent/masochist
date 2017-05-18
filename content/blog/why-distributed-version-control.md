---
title: Why distributed version control
---

I just got an email from [Uli Kusterer](http://www.zathras.de/angelweb/home.htm) asking me to expand on my [comments the other day](http://www.wincent.com/a/about/wincent/weblog/archives/2007/10/ben_collinssuss.php) that Ben Collins-Sussman doesn't "get" distributed version control:

> Could you maybe elaborate on your reasons as to why distributed version control is great? You said it'd take pages, but even just a short rundown would be interesting.\
> Does it make feature branches easier? Does it encourage people to do more refactoring? Just curious to hear someone's opinion on this.

I'll answer this with specific reference to [Git](http://www.wincent.com/knowledge-base/Git) seeing that's the [distributed version control](http://www.wincent.com/knowledge-base/distributed%20version%20control) system with which I have the most experience. Although I could rave on about how Git is the best thing since sliced bread for so many reasons, I'll try to limit myself specifically to its distributed nature.





### History

Every "checkout" is actually a full copy of the entire remote repository (all its branches, all its history). After a while you just get used to the idea that you can rapidly look back at any previous tag (previous releases for example) and look at any of the branches that are currently under development (unlike Subversion where the typical workflow is to check out only the tip of the "trunk"). This also means that every checkout is a full backup of *everything* in the history of a project. And once you've done this initial "checkout" (called a "clone" in Git terminology for obvious reasons) you can do all this stuff (look at previous releases, switch branches, explore the history) without any network access.

Worried about size and speed? Don't. Git has an extremely efficient network transfer protocol and repository format which makes checkouts comparable in terms of time and space to their Subversion counterparts; you'll often be surprised to see that an entire Git repository with *all* the history is as small or smaller than the equivalent Subversion checkout (which is just the tip of the development history).

### Offline operations

I already touched on this above, but the fact that your local "checkout" is a full-fledged repository means that you can do basically everything without a network connection: commit changes, create branches, perform diffs against any other point in the project history, merge, and so forth. You later make your changes available to the outside world when you are ready.

The oft-cited example is that you can take your work with you on the road (in a plane with no network connectivity, for example), but you'll enjoy an enormous benefit in working offline even when you're in your office with your always-on net connection: the reasons are simple:

-   Working offline is *fast*.
-   Working offline provides you with an additional "staging area" (your local, private repository): if you commit something by mistake you can fix it up before anyone else sees it; this in turn means that you can make your history cleaner, keep the "noise" down, and can make your development easier to understand for others (and for yourself when you come back to look at it six months down the track). I use this functionality many times a day; you can fix a spelling error or add a file that you forget about and update the previous commit with `git commit --amend` (the commit message editor is conveniently populated with the original commit message so if you want you can just accept that and exit the editor).

### Simplicity

Setting up a Git repository is orders of magnitude simpler than setting up a Subversion one. It has to be that way, otherwise all this cloning would be tiresome.

    cd project
    git init

That's all you need to set up a repository in the `project` directory. Point your webserver at that directory and you've just made a publicly-accessible Git repository that people can reach via HTTP. Copy the repository onto a USB stick and you can take it with you wherever you go. And remember: the thing you're carrying around on the USB stick isn't just a working copy, it's the entire repository with all of its branches and all history.

You can also publish repositories over the native Git protocol using the `git-daemon` that comes with Git; setting it up is dead simple. This is a very efficient access method if you want to make your repository available to the public. For private repositories SSH access is again dead simple to set up.

Finally, you need not "publish" your local repository at all if you don't want. Git provides a `git push` command that you can use to transmit your changes to remote repositories.

### Collaboration

This is the point I took special exception with with Collins-Sussman the other day.

> DVCS ... encourages anti-social behavior ... In a nutshell: with a centralized system, people are forced to collaborate and review each other's work; in a decentralized system, the default behavior is for each developer to privately fork the project. They have to put in some extra effort to share code and organize themselves into some sort of collaborative structure. Yes, I'm aware that a DVCS is able to emulate a centralized system; but defaults matter. The default action is to fork, not to collaborate! This encourages people to crawl into caves and write huge new features, then "dump" these code-bombs on their peers, at which point the code is unreviewable.

His point is totally bogus. Centralized systems don't force people to collaborate and review; good policies do. You can work well with others with a centralized *or* distributed system, just like you can have a terrible community process with a centralized or distributed system.

The default isn't to "privately fork" at all. That's nonsense. The default is to *clone*, and all that means is that you get a free copy of all the history and branches. At the end of the day the way you interact with "upstream" is still most likely to be `git diff` and sending a patch to the maintainer (although Git actually makes it easier than that by providing you with the `git format-patch` and `git send-email` tools; you can set-up custom per-user or per-repository aliases that make it totally easy to send patches to different projects without having to think about who should be in the "To:" field and who in the "CC:").

Putting in extra effort to share code? Collins-Sussman has evidently never seriously tried out a DVCS. Git in particular provides a host of mechanisms that actually make it easier to share code "upstream".

-   Unlike Subversion, Git allows all contributors to be first class citizens. With Subversion you can only commit if you have commit privileges. With Git you can do anything "the maintainer" can do. You can develop your code in small steps, committing along the way, reverting changes if necessary, ensure its correctness, and then when it's ready for publication prepare a patch series that shows the logical steps you took; this will be much easier to understand than the monolithic "all-at-once" patch that you'd have to send if you were working with Subversion. The people upstream are more likely to accept your change simply because it will be in a more reviewable form, and your code will be of higher quality because your source control system enabled you to work in incremental steps; in fact, you'll code with more confidence because you know that you make commits along the way which serve as "snapshots" that you can revert to if the ideas that you try out don't work.
-   What do you do if you're working on a feature in Subversion and by the time you've finished it and are ready to submit the tip of the trunk has already moved along? "Your patch doesn't apply cleanly", say the maintainers, "Please resubmit." Git, on the other hand, was designed with collaboration in mind from the outset; it provides the `git rebase` command for precisely this purpose. With Git you can spend a week working on a change, and prior to submitting just do a `git rebase`; Git unwinds your changes, pulls down the changes from upstream, then reapplies your changes on top of the new "tip of trunk". Once again, your changes are more likely to be accepted because the reviewers don't have to look at code which was designed to be applied only on last week's trunk.
-   That's really just scratching the surface: `git rebase` also allows you to re-order your commits before publishing if you want; `git add --interactive` allows you to commit hunks of file instead of the whole thing, thus allowing you to split up unrelated changes into different commits, again facilitating review and increasing the likelihood of acceptance.

Finally, if you want to use Git as though it were centralized it's perfectly easy and natural to do so. Can Collins-Sussman actually cite any projects that are using Git without a central "authoritative" repository that all other developers use as a reference point?

### Flexibility

You're not limited to just cloning "the upstream" repository. Just say you start working on a feature and later learn that someone else is doing related work. You can `git fetch` from that person's repository into your own (that is, you can pull from multiple different repositories into a single local one) and merge in his or her changes. This is great on large projects where someone works as an integrator or filterer before sending changes upstream.

Or take what's happening in the Git community right now: the maintainer, Junio Humano, is away due to unexpected personal circumstances, and so the intermin maintainer, Shawn Pearce, is taking over seamlessly using his own clone of the central repository which Junio controls. When Junio gets back he can simply merge in the patches which Shawn has been collecting, filtering, and ordering. This kind of smooth hand-over of control is much more difficult with a centralized model. If you're curious, you can see how all of this is happening, because it's happening out in the open on the Git mailing list.

### Feature branches

As you alluded to, branching is a big feature of Git, and more importantly, merging (without proper merging the ability to branch is next to useless; even Subversion can branch like a champ, it's just its merging which sucks).

Because Git is so good at branching and merging, it's dead easy to maintain separate "experimental" and "maintenance" branches. But even more so, branching and merging is so easy that you find yourself making feature branches ("topic branches" seems to be the dominant term in the Git community) where you work on a single feature in isolation.

This keeps your development efforts organized, makes it easier for you to group related changes together for submission upstream, and once again makes it more likely that your patches will be accepted. For the upstream maintainers too, having great branching and merging makes integrating your patches much easier: the maintainer can easily have a bunch of topic branches in his or her repository, one for each topic submitted by a community member. Based on feedback he/she can ask for changes and additional patches from the submitter, add them to that topic branch, and then merge the topic branch in to the main master branch when its ready.

Branching and merging in Git is about as easy as copying a file.

### Refactoring

You asked about refactoring, but I'm not sure that there's anything specific to the distributed nature of systems like Git that makes a difference here. All you can really say is that the ease with which you can set up topic branches encourages you to engage in experimental refactoring (of the "let's just try this and see if it looks better" variety).

### Sliced bread

I've tried to restrict my points above to the aspects in which distributed version control can be superior to centralized systems.

To finish up I'll just briefly mention some points about Git that don't really have anything to do with its distributed nature but which make it a great version control system.

-   Speed: *apart* from the fast offline access already mentioned, Git itself is a speed-demon. Most of it is written in lean-and-mean [C](http://www.wincent.com/knowledge-base/C) code, with some high-level user-interface stuff written using scripting languages. This isn't just a coincidence; from the very beginning it was designed to be quick and it's one of the things that will most impact you when you try it out.
-   Simplicity: repositories use a simple data model (four object types, history represented as a directed acyclic graph) that you can grok with a few minutes of study; this means that you can actually understand how Git works under the covers.
-   Robustness: The simplicity makes for fewer bugs and a codebase that you can really trust.
-   Maturity: Git's already at 1.5+ and it shows...
-   Innovation: ...but not ready to sit back and rest on its laurels the Git community is blazing ahead with constant innovations (the recently added `git stash`, [for example](http://www.wincent.com/a/about/wincent/weblog/archives/2007/09/stash.php)).
-   Community: The Git community is highly active and has some impressively competent programmers in it. Subscribe to the mailing list and look at what must be one of the most impressive development processes in the open source world. I have learnt a lot from this inspiring community in the last few months and have changed a lot of my own practices for the better.
-   Interface: Git is a pleasure to use from the command line (automatic paging, colorized output) but also comes with some excellent cross-platform GUI tools for visualizing history (gitk), preparing commits (git-gui), and web-based repository browsing (gitweb).
-   Documentation: There is a wealth of high-quality documentation. Basic use can be learnt in only a few minutes, but if you want to delve deeper there is as much material as you could possibly want. Even if you don't want to become a Git expert the man pages are a great reference to consult whenever you want to do something out of the ordinary.
-   Clean working copies: When you clone a repository everything goes into a single `.git` subdirectory; no more `.svn` metadata littering the entire repository hierarchy and causing problems inside Mac OS X bundles.
-   Philosophy: Git avoids the entire metadata arms race entirely by tracking content and nothing more. In other words, it doesn't bother trying to remember things like when you renamed one file to another, it merely remembers what the tree looked like before and after. It can look at the tree whenever necessary to infer whether or not a rename occurred. I [previously tried to explain](http://www.wincent.com/a/about/wincent/weblog/archives/2007/07/a_look_back_bra.php) why this particular design decision was a flash of genius.
