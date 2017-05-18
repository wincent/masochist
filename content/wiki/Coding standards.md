---
tags: development wiki
cache_breaker: 1
---

Most communities — both "language communities" like "the [Ruby](/wiki/Ruby) community", "the [Objective-C](/wiki/Objective-C) community", and to a lesser-extent "the [C](/wiki/C) community"; and "project-based communities" like "the [Git](/wiki/Git) community" and "the [Rails](/wiki/Rails) community" and so on — have a set of relatively stable conventions and notions about coding standards.

It's obviously advisable to be flexible and adapt to the coding standards of the community in which you're working at any given time. Not only will you feel less "friction" when you have to work with code written by others, but your own code will produce less friction for *them*, which in turn will make it more likely that it be used by others, or accepted for inclusion in upstream projects.

So this means things like learning how to configure your editor to use tabs or spaces in the right places, and learning the brace and indent styles, comment conventions and what not for the community in question.

The guidelines expressed in this article aren't about any particular community; rather, they're the guidelines I try to follow in my own code when I'm working independently.

You could never argue that these, or any other, guidelines were *the* right way to write code, but I do think they represent a fairly sensible, commonsense set of conventions based on valuing readability, maintainability, efficiency, robustness and correctness.

# Line lengths

**Readability is king**, so there are no line length limits, only guidelines.

Shorter lines (less than 80 columns) are *generally* easier to read, so keeping things short is a good goal, *but* there are many cases where keeping under 80 columns — and even a more liberal 132-column limit — can actually make code *less* readable because of the required contortions and gymnastics. I blogged about this in my post, "[On the 80-column limit](/blog/on-the-80-column-limit)".

## [Doxygen](/wiki/Doxygen) code comments

[Doxygen](/wiki/Doxygen) code comments, however, should pretty much always be kept under 80 columns. (They're code documentation, not code, so the things like nesting and indentation and the other usual excuses for making longer lines don't apply.)

## Other comments

Non-doxygen comments should also be kept nice and short, preferably under 80 columns. The exception: when you have a one-line comment immediately above a long line of code; in this case there is no harm in making the comment line as long as the line of code that follows.

## Commit messages

Commit messages should generally be kept under 80 columns. Like [Doxygen](/wiki/Doxygen) comments, they are not code and hence the usual excuses don't apply. Keeping them narrow, like newspaper columns, makes them easier to read.

In fact, it is desirable to keep them to somewhat less than 80 columns (72 columns is an oft-suggested number) so that if you have to exchange patches by email they should display well on all email clients, even with a couple of levels of quoting.

## Language differences

In general, languages like [C](/wiki/C) and [Ruby](/wiki/Ruby) are easier to keep under 80 columns. [Objective-C](/wiki/Objective-C) code tends to break the limit much more often and start approaching he 132-column mark. It is highly undesirable to exceed 132 columns in any language.

# See also

The guidelines in this article are general principles which should apply to all programming languages. For language-specific standards, please see one of the following:

-   [C coding standards](/wiki/C_coding_standards)
-   [Objective-C coding standards](/wiki/Objective-C_coding_standards)
-   [Ruby coding standards](/wiki/Ruby_coding_standards)
