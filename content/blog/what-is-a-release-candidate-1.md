---
title: What is a "release candidate"?
---

A limited definition of "release candidate" is "these are the exact binary bits that we think we'll be shipping; and if no show-stopping bugs are reported we'll go ahead and ship these exact bits".

Personally, I like to nuance this in the wider context of the release cycle. You "feature freeze" and focus only on fixing bugs — in fact, making non-bugfix changes should be prohibited — and when you think they're all squashed you put out a release candidate.

Sometimes you need more than one candidate because bugs are discovered during this part of the cycle, but you're *still* effectively in "feature freeze" and that means no more features. Furthermore, the bug fixes you *do* check in should be minimal, safe, conservative, well-tested, non-invasive. Frivolous refactoring is a no-no at this point.

Well, with that concept in mind, take a look at [the repository activity](http://dev.rubyonrails.org/timeline?from=12%2F7%2F07&daysback=7&milestone=on&changeset=on&update=Update) for [Rails](http://www.wincent.com/knowledge-base/Rails) in the last 7 days leading up to the final 2.0 release (which was very quickly followed up with a 2.0.1 release). Maybe I am jumping the gun (I haven't looked over every changeset in between RC1, RC2 and the final release) but I get the impression that there is *way* to much going on here right before release.

All of this stuff is occurring right on the trunk during the "release candidate" phase immediately prior to the final release of a much-anticipated and widely-used web framework which markets itself as enterprise-ready. I know that the Rails folks, known as much for their marketing as for their technical nous, have made it "cool" to "live on the edge", but this really is ridiculous. I know [Subversion](http://www.wincent.com/knowledge-base/Subversion) sucks for branching and merging, but they need to get their code into a non-broken [SCM](http://www.wincent.com/knowledge-base/SCM) like [Git](http://www.wincent.com/knowledge-base/Git), start making use of at least two branches (one for mainline development and one for maintenance), start cooking invasive changes in topic branches, and adopt some discipline in their approach to releases, especially major ones.
