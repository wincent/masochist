---
title: Clearing up confusion about Synergy version numbers
tags: synergy blog
cache_breaker: 1
---

I occasionally get questions on the [forums](/forums) and in emails asking me about the different versions of [Synergy](/wiki/Synergy). Here's an example:

> Synergy notified me today that there was a new version available (apparently I've missed many versions between 3.2.1b and 3.4). I was looking at the version history page, and I'm kinda confused. It appears the version number went from 3.2 up to 3.5x for awhile, then it went back down to 3.2.x, and now it jumped to 3.4. Is 3.4 really the latest release? What was the 3.5 series?

To clear things up a little bit I'm publishing my reply here for everybody.

# Why do the version numbers go up and down?

Development occurs in parallel branches. The word "branches" is used because of the analogy with tree branches spreading out from a common starting point (the tree trunk); it describes how different lines of development can originate from the same code base but evolve in different directions and at different rates.

                          * (development starts)
                          |
                         0.1                                     | (2002)
                          |                                      |
                         0.2                                   time
                          |                                   extends
                     (intermediate                           downwards
                       versions)                                 |
                          |                                      |
                         1.0                                     v (present)
                          |
                     (intermediate
                       versions)
                          |
                         2.0
                          |
                     (intermediate
                       versions)
                          |
                         3.0
                          |
                     (intermediate
                       versions)
                          |
                        3.1.5
                          |\
                        3.2 \
                        / |  \
                       /  |   \
                      /   |    \
                     /    |     \
                    /     |      \ <-- Leopard Garbage Collection
                   /      |       \            rewrite
                  /       |        \
                 /        |         \
                /         |          \
               /          |         3.5a
              /           |           |
             /            |         3.5a2
          3.3             |           |
    (MacHeist promo)      |         3.5a3
                          |           |
                          |         3.5a4
                          |           |
                          |         3.5a5
                          |           |
                          |         3.5a6
                        3.2.1b        |
                          |         3.5a7
                        3.2.1         |
                          |           |
                        3.2.2         |
                          |           |
                         3.4          |
                          |         3.5a9
                          |           |
                          |         3.5.1a
                          |           |
                          |         3.5.2a
                          |           |
                          |         3.5.4a
                          |           |
                          |         3.5.5a
                          |           | \
                          |           |  \
                          |           |   \
                          |           |    \ <-- Snow Leopard branch starts
                          |           |     \
                          |           |      \
                          |           |       \
                          |           |        \
                          |           |         \
                          |           |        4.0.1a
                          |           |          |
                          |           |        4.0.1b
                        3.4.1         |          |
                          |           |          |
                          v           v          v

Releases such as 3.2, 3.3 and 3.4 all belong to the "[Jaguar](/wiki/Jaguar)" branch. The branch is named like that because all the releases on that branch are designed to run on any version of [Mac OS X](/wiki/Mac_OS_X) from 10.2.8 [Jaguar](/wiki/Jaguar) onwards. At the time of writing that means that they'll even work as far up as [Snow Leopard](/wiki/Snow_Leopard). It is unlikely that any further development will occur on this branch.

Releases in 3.5 series belong to the "[Leopard](/wiki/Leopard)" branch. This was the experimental, cutting-edge of development during the [Leopard](/wiki/Leopard) product cycle. It was a complete rewrite which used new technologies and *only* ran on [Mac OS X](/wiki/Mac_OS_X) 10.5 [Leopard](/wiki/Leopard) and up. Due to an [Apple](/wiki/Apple) bug in Leopard (see [bug \#640](/issues/640)), this series could occasionally suffer from crashes, so all releases in the series were labelled as "alpha" status. No further development work will occur on this branch.

Releases in the 4.0 series belong to the "[Snow Leopard](/wiki/Snow_Leopard)" branch. This is where current development efforts are targeted. Releases from this series will only run on Snow Leopard and up.

Note that strictly speaking version 3.3 isn't part of the linear development of the "[Jaguar](/wiki/Jaguar)" branch; rather it's off on a side branch. This was a special version made especially for the MacHeist "Giving Tree" promotion. It required special changes to be made to the code, so development work was done on its own branch. See the [MacHeist FAQ](/blog/frequently-asked-questions-about-synergy-and-macheist) for more information.

You'll notice in the above diagram that within each branch the version numbers do always increment and they never "go backwards", *but* that if you look at things in a strictly date-based chronological order then sometimes the version numbers may seem to be going up and down.

# What does all this mean for me?

If you want the latest, stable releases and are running [Snow Leopard](/wiki/Snow_Leopard) then go for version 4.0 or above. For many users the 4.0 series is a free upgrade (see [this FAQ](/blog/synergy-4.0-upgrades) to find out whether you qualify for a free upgrade). If you are not yet ready to upgrade the 3.5 series will still work for you, but further updates to that series are not anticipated.

If you are running and older version of [Mac OS X](/wiki/Mac_OS_X), or can't or don't wish to upgrade to 4.0 yet, pick a release from the 3.4 series.

The latest release from each branch is always available from the [download page](/products/synergy/download).
