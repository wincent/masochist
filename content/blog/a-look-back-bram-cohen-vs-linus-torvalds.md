---
title: A look back: Bram Cohen vs Linus Torvalds
---

I just stumbled across a fascinating mailing list thread in which there's a fairly nasty exchange between two open source poster children, Bram Cohen (of BitTorrent fame, but in this case writing in his capacity as Codeville developer) and Linus Torvalds (of Linux fame, original author of [Git](http://www.wincent.com/knowledge-base/Git)).

Now, I've never had a particular liking for either of these personalities, although I've had to recognize that they're very clever individuals. Both of them have been known for occasional demonstrations of arrogance.

But the really interesting thing about [their interchange](http://www.gelato.unsw.edu.au/archives/git/0504/2153.html) is not the fireworks in the thread but the way things look like in hindsight. Having become familiar with Git over the last few days I have to say that Torvalds was right on just about every count. I knew Torvalds was smart, but seeing as I was never really more than an occasional Linux user I never realized just how smart; I'd thought he was just a good programmer who happened to be in the right place at the right time and had a few good ideas. But after closely studying Git I'm a little bit awestruck; Torvalds is a frickin' genius, a true visionary, and somehow managed to just "get it" and instantly, in a flash of insight, come up with "the solution" for version control. In the meantime, Codeville still languishes in pre-1.0 "alphaville" and Git has forged ahead to become (at version 1.5.2.4) the most powerful, high-performance, superbly documented version control system out there and with a stunningly active community.

> Git is a weekend hack which looks like a weekend hack.

Source: [Bram Cohen](http://bramcohen.livejournal.com/17319.html).





[]{#On%20merge%20algorithms}
### On merge algorithms

The [Codeville website](http://www.codeville.org/) has this to say:

> If you'd like to know why there is a need for new merge algorithms, consider what the lead monotone developer has to say.

And clicking through [the link](http://article.gmane.org/gmane.comp.version-control.monotone.devel/3264) reveals that this is what he has to say:

> 3-way merge is an inappropriate choice of merge algorithm for a modern VCS.

He describes a scenario in which the merge algorithm doesn't produce desirable results. Once you understand the scenario you can scan [the mailing list thread](http://www.gelato.unsw.edu.au/archives/git/0504/2153.html) where Bram and Linus duke it out; selected highlights:

> **Bram:** Honestly, that you would think of doing whole-tree three-way merges and even consider moving lines between files shows that you haven't explored the merge problem very deeply. This is a much harder problem than you think it is, and one which has already been solved by other systems.
>
> What I'd really like to hear is some explanation of why git is reimplementing all of this stuff from scratch. Your implicit claims that git will do more things than the other systems without having to reinvent all of their functionality first are, honestly, naive, ill-informed arrogance.
>
> I'd like to reiterate that \*nothing\* out there supports moving lines between files, and further predict, with total confidence, that if git tries to support such functionality it will simply fail, either by giving up or creating a system which can behave horribly. Before you get all dismissive about this claim, please remember that I've spent years thinking about merge algorithms, and have actually designed and implemented them, and have spoken at length with other people who have done the same, while you've merely thought about them for a few weeks.
>
> **Linus:** Me \_personally\_, I want to have something that is very repeatable and non-clever. Something I understand \_or\_ tells me that it can't do it. And quite frankly, merging single-file history \_without\_ taking all the other files' history into account makes me go "ugh".
>
> The important part of a merge is not how it handles conflicts (which need to be verified by a human anyway if they are at all interesting), but that it should meld the history together right so that you have a new solid base for future merges.
>
> In other words, the important part is the \_trivial\_ part: the naming of the parents, and keeping track of their relationship. Not the clashes.
>
> And it looks like 99% of SCM people seem to think that the solution to that is to be more clever about content merges. Which misses the point entirely.
>
> **Bram:** So you think that a system which supports snapshots and history but has no merging functionality whatsoever is the right thing? I'm asking this seriously.

I'm not sure how many merge algorithms [Git](http://www.wincent.com/knowledge-base/Git) has at the time that thread took place, but today it has four (see the `git-merge` man page for details). But clever or non-clever merge algorithms are besides the point: what were the real insights that Torvalds somehow grasped from the very beginning? What is it that made me describe him above as "a frickin' genius"?

[]{#What%20Git%20does%20right}
### What Git does right

There is no need for fancy metadata, rename tracking and so forth. The only thing you need to store is the state of the tree before and after each change. What files were renamed? Which ones were copied? Which ones were deleted? What lines were added? Which ones were removed? Which lines had changes made inside them? Which slabs of text were copied from one file to another? You shouldn't have to care about any of these questions and you certainly shouldn't have to keep special tracking data in order to help you answer them: all the changes to the tree (additions, deletes, renames, edits etc) are implicitly encoded in the delta between the two states of the tree; you just track what is the content.

Git is already very smart, and it can (and will) get smarter about figuring out what happened, and where a given line in a given revision came from, and it will do so without ever having to embed additional meta data in its repositories. Absolutely everything can (and should) be inferred.

Git breaks the mould because it thinks about content, not files. It doesn't track renames, it tracks content. And it does so at a whole-tree level. This is a radical departure from most version control systems. It doesn't bother trying to store per-file histories; it instead stores the history at the tree level. When you perform a diff you are comparing two trees, not two files.

As a result of this fundamental design decision, the structure of a Git repository is stunningly simple. It's so simple in fact, that you'll be surprised at the sophistication of the things you can do with it. But that's the way the best code will always be: simple, solid premises out of which complex applications arise.

The other fundamentally smart design decision is how Git does merges. The merging algorithms *are* smart but they don't try to be *too* smart. Unambiguous decisions are made automatically, but when there's doubt it's up to the user to decide. This is the way it should be. You don't want a machine making those decisions for you. You never will want it. That's the fundamental insight in the Git approach to merging: while every other version control system is trying to get smarter, Git is happily self-described as the "stupid content manager", and it's better for it.

[]{#Footnote}
### Footnote

If you try the tricky merge issue described by the Monotone dev [above](http://article.gmane.org/gmane.comp.version-control.monotone.devel/3264) you'll find that [Git](http://www.wincent.com/knowledge-base/Git) does exactly the right thing:

    mkdir playground
    cd playground
    git init
    echo "hello, world" > greeting
    git add greeting 
    git commit -m "Add greeting"
    git checkout -b left
    git mv greeting saludo
    git commit -a
    git checkout master
    git rm greeting
    git commit -a
    git merge left

Git responds with:

    CONFLICT (rename/delete): Renamed greeting->saludo in left and deleted in HEAD
    Automatic merge failed; fix conflicts and then commit the result.

In my opinion this is exactly the right behaviour. This is a clearly ambiguous merge and it simply wouldn't be right for your version control system to try "resolving" it for you. You actually want it to be a "dumb" content tracker and handle automatically only the simplest, non-ambiguous cases; in an instance like this one you *want* it to ask you what to do. And as you can see, Git does an excellent job of describing the nature of the conflict, which will make it easier for you to solve it.
