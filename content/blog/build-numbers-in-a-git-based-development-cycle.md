---
title: Build numbers in a Git-based development cycle
tags: blog
---

Back when I exclusively used [Subversion](http://www.wincent.com/knowledge-base/Subversion) as my [version control system](http://www.wincent.com/knowledge-base/version%20control%20system) of choice I used the Subversion "revision number" as a basis for my build number. This was possible and desirable because Subversion revision numbers have a number of useful properties: they are uniformly increasing integers, they only increment when there are actual changes to the code base (in other words, merely rebuilding is not enough to increment the numbers), and the centralized client/server model used by Subversion guarantees that those build numbers are guaranteed unique and a definitive indication of the *exact* version of the source code used to construct a given build.

Prior to that I'd used some script-based automation to provide a more literal notion of "what is a build". My build numbers had the format `x.y` where `x` and `y` were integers. Debug builds would cause `y` to increment by 1 and Release builds would bump `x` up by 1 and reset `y` to 0. This adequately complied with the notion that build numbers should irreversibly increase with time, but it failed to give any definitive indication of the version of the source code used to construct a build. Also, in long running projects where I did lots of rebuilds the build numbers soon got very high; [Synergy Advance](http://advance.wincent.com/), for example, had a build number of over 1500 by the time I switched the the Subversion-based numbering system.

So what to do now that I've moved to [Git](http://www.wincent.com/knowledge-base/Git)? Git is a distributed version control system and so there is no such thing as a "revision number". Commits are uniquely identified by their [SHA-1](http://www.wincent.com/knowledge-base/SHA-1) hash (or a subset of it), but these aren't very human-friendly (for example, `7eac8946559b6e5db05084f1dfb8d8aca11d9e98` or, in abbreviated form, `7eac894`). Note also how they don't visibly encode any notion of forward progress because rather than increasing uniformly they "jump around" with apparent randomness, nor do they visibly encode the date.





One thing they *do* do is uniquely identify the exact version of the code used to produce a build, just like Subversion revision numbers do.

So what should the "build number" be in a Git-based development cycle? At the moment I see three possible options:

-   Use the abbreviated SHA-1 identifier for the commit
-   Use a concise representation of the build date (for example, the output from `date "+%y-%j"`, which would yield build numbers like `07-211`)
-   Use a combination of the two

I'm still not decided on the best way to proceed. Using a SHA-1 identifier gives us an explicit handle on the exact revision used to make a build but it is meaningless to the human eye; it only makes sense with access to the Git repository (not possible for closed-source projects) and the help of `git show` or `git log`.

Using the date gives us some degree of human readability but unless we go even further and add hours, minutes and even seconds we are limited to a one-public-build-per-day granularity (probably sufficient for most cases). But adding more digits to the date reduces readability and could make the build numbers too long (the great thing about the Subversion-based build numbers was that there were only 2, 3 or 4 digits long, depending on the project; I never had a project that got into the 5-digit revision range). Another shortcoming of the date is that it doesn't provide an unambiguous pointer to the exact version of the source code used to make the build; one has to resort to archaeology to extrapolate the actual revision from the date, which is both error prone and possibly inaccurate. For precision I guess I could use seconds since "the Epoch" (`date "+%s"`) but it would produce quite scary build numbers like `1185799138`. Perhaps a format like `"+%y-%j-%H"` (year, day number, hour) would be a workable compromise between precision and brevity.

Using a combination of the two suffers from length problems. For example, a combination of year/day (the human-readable bit) followed by an abbreviated SHA-1 hash (the computer-readable bit) might look like `07-211, c180b30`, and I think that's pushing the limits.

So I've yet to decide on this. Will have to think more on it.
