---
tags: wiki git
title: Git change IDs
---

Change IDs are used by numerous tools that implement a "stacking" workflow (eg. [Gerrit], [Phabricator], [GitButler](https://gitbutler.com/), [Jujutsu] etc) to identify how the relationship between different versions of a commit.

# Proposal to implement a standard "change ID" in Git

See this 2025-04 thread on Git mailing list: ["Gerrit, GitButler, and Jujutsu projects collaborating on change-id commit footer"](https://lore.kernel.org/git/CAESOdVAspxUJKGAA58i0tvks4ZOfoGf1Aa5gPr0FXzdcywqUUw@mail.gmail.com/T/).

FWIW, I doubt any major changes to Git will come from this, and Junio's (currently) last response on the thread likely foreshadows what the outcome will be:

> It sounds like the "change ID" being discussed is a simple and useful thing that can and should be a commit trailer that is carried forward automatically across "git commit --amend", "git rebase", and "git cherry-pick", i.e. those commands that duplicate a new copy, a refinement, of an existing commit object, without any additional support from Git proper.  More importantly, unlike the "predecessor" thing, which may be helped if Git knew that it can optionally affect reachability, it does not look like it needs any meaning that needs structural support from Git internals.
>
> So I do appreciate that the wider Git ecosystem like Gerrit and JJ are talking to adopt "Change ID" with the same syntax and semantics (if they all can agree, that is), but I do not think it needs to affect Git at the object level.  From what I have heard so far, it certainly does not fit in the commit and tag object headers, but more like the usual trailer thing.

<!-- References -->

[Gerrit]: /wiki/Gerrit
[Phabricator]: /wiki/Phabricator
[Jujutsu]: /wiki/Jujutsu
