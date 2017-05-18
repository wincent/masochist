---
title: Git traction
tags: blog
---

The barometer is on the move and it indicates a groundswell of interest in [Git](http://www.wincent.com/knowledge-base/Git). At first I wondered if this was just because *I* have become interested in Git lately (here's my [most recent post](http://www.wincent.com/a/about/wincent/weblog/archives/2007/07/git_hooks.php)) and so have been on the lookout for more Git-related content. Then I realized that this isn't just me looking for confirmation; the confirmation is actually coming knocking on my door with various people who are in my feeds list writing about Git.

These aren't "version control people", they're Mac programmers just like me. A few days ago there was [Michael Tsai](http://mjtsai.com/blog/2007/07/15/subversion-to-git/), then today I noticed these posts from [Fraser Speirs](http://speirs.org/2007/07/19/a-subversion-user-looks-at-git/) and [Bill Bumgarner](http://www.friday.com/bbum/2007/07/19/git-will-eat-subversions-lunch/).

My gut feeling is that [Linus Torvalds' git talk](http://www.youtube.com/watch?v=4XpnKHJAok8) showing up on YouTube has been a large factor in the recent build-up (currently shows about 87,000 views). (Ugh, the thought that YouTube could change *anybody's* life makes me feel distinctly uncomfortable...)

But whatever the reason, it's good to see it.


## Fraser's take

Fraser seems to have spent the time digging into [Git](http://www.wincent.com/knowledge-base/Git) so as to gain an appreciation for its architecture.

-   The index: Fraser seems to "get" the index but I would add that I think the key concept here is that the index is not a cache, it's a *staging area*. When you start thinking about it in those terms you start to see its possibilities rather than worrying about the inconvenience of the "additional step".
-   Merging nibs: Good points on that; I haven't done a merge involving nibs yet, so I'll have to reserve judgement on that.
-   Externals: I've come to realize that this is a non-problem thanks to the fact that I had to face this issue and workaround it with [SVK](http://www.wincent.com/knowledge-base/SVK); and in doing so I realized that a combination of separate checkouts and symbolic links is conceptually and architecturally much cleaner than Subversion externals anyway: the only downside is that your "externals" don't hitch along for the ride automatically, you have to remember to update/commit them. Fraser's hypothesized solution is an interesting one.
-   Repository layout: spot on, the `.svn` directories littered throughout a Subversion checkout are a hideous mess; "litter" is the operative word.


## Bill's take

Bill's take is much simpler and focusses on one issue: Git is easy to use because it doesn't make simple things hard in the way that Subversion does; he specifically focusses on Subversion's long standing problems with opaque collections.

> Subversion needs to focus on the user experience and not just on being a better CVS. There be innovation goin' on and hiding behind "a better CVS" will only work for not terribly much longer.

Fitz, one of the key Subversion developers, doesn't seem to get it:

> Feh. Git has perhaps the worst interface ever for a version control system. If you'd said Mercurial, I'd believe you, but since you said Git, I'm going to assume you're just trolling.

Sure, Git has a bewildering array of commands and options, but you only have to learn them once. The basic workflow is dead simple. If I had to sum up this in a single sentence it would be:

> Git is hard to learn but easy to use.

On the other hand:

> Subversion is easy to learn, but makes easy things difficult.

And when we throw the myriad other benefits that Git has over Subversion, Git becomes pretty darn compelling:

-   An extremely active, competent developer community engaged in real innovation
-   A distributed model which can still do the client-server style if that's what you need; by reference incorporate all the benefits the distributed model brings (redundancy, offline commits, speed of operation, amendable commits etc)
-   Amazing branching and merging support; and branches, like tags are not tacked on as an afterthought like they are in Subversion
-   An incredibly simple, elegant architecutre
-   Working copy (repository) format that is often more compact and always richer than the Subversion equivalent
-   A powerful, flexible [command line](http://www.wincent.com/knowledge-base/command%20line) interface which is pleasant to use and blows the doors off Subversion once you've taken the trouble to learn it

Bill finishes with:

> Personally, I desperately hope Subversion fixes this particular problem. Subversion is really and truly awesome in so many ways and I do not want to have to migrate repository software for at least another decade.

I agree: Subversion is awesome, in its own way, but it ain't going anywhere. Git, on the other hand, definitely *is* going somewhere, and in fact has already gotten so far ahead of Subversion that I can't imagine Subversion ever catching up. If you doubt this then just look at the treacle-like process they're making towards merge tracking (and note, at this stage we're still only talking about *tracking* merges, not actually doing anything interesting with them). I honestly think that if you jump ship now you won't regret it.


### Parting words

Once comment that made me laugh:

> Several years I've been perched on a wobbly stick that is SVK...
