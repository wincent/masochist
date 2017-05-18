---
title: One of the things Git gets right
tags: blog
---

There is an [interesting thread](http://marc.info/?l=git&m=119637184605851&w=2) on the [Git](http://www.wincent.com/knowledge-base/Git) mailing list going on right now which demonstrates exactly what it is that Git gets right about modelling history.

Basically, it doesn't worry about storing metadata about file renames, file moves, file copies and the like, which is a mistake which almost every other [SCM](http://www.wincent.com/knowledge-base/SCM) makes. Git only cares about whole trees, and which commits where parents of which commits; it's this chaining of commits from child to parent (to grandparent...) which allows Git to model the notion of "history" and things like [branching](http://www.wincent.com/knowledge-base/branching) and [merging](http://www.wincent.com/knowledge-base/merging) (two or more commits which have the same parent obviously indicate where a branch was forked, and a commit with two or more parents is where a merge took place).

The model is rock solid and infallible because it is simple.

Git *does* do fancy file rename and copy detection, but it deduces it merely by looking at the commit graph. It doesn't need any metadata to be stored. This is exactly the way it should be done. If you store metadata, you're locking yourself into the best algorithms you had at the time of storage; if you forget metadata and instead deduce you can always use the very best algorithms available at the time you examine the history.

This is not just a theoretical benefit. The [thread I'm linking to](http://marc.info/?l=git&m=119637184605851&w=2) is a great example of algorithmic improvements being made which increase Git's accuracy and sophistication without requiring repositories to be rebuilt and metadata to be re-calculated and re-stored.

As Torvalds sums up in [this post](http://marc.info/?l=git&m=119638337122721&w=2):

> The thing to take away from this is:
>
> -   git really doesn't even *care* about the whole "rename detection" internally, and any commits you have done with renames are totally independent of the heuristics we then use to *show* the renames.
> -   the rename detection really is for just two reasons:
>     -   keep humans happy, and keep the diffs small and
>     -   help automatic merging across renames. So getting renames right is certainly good, but it's more of a "politeness" issue than a "correctness" issue, although the merge portion of it does matter a lot sometimes.
> -   the important thing here is that you can commit your changes and not worry about them being somehow "corrupted" by lack of rename detection, even if you commit them with a version of git that doesn't do rename detection the way you expected it. The rename detection is an "after-the-fact" thing, not something that actually gets saved in the repository, which is why we can change the heuristics *after* seeing examples, and the examples magically correct themselves!
