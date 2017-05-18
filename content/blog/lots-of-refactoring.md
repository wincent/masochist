---
title: Lots of refactoring
tags: blog
---

Sometimes you make bad decisions that later come back to bite you. About three years ago when I started work on [Synergy Advance](http://synergyadvance.com/) I was still relatively new to [Subversion](http://subversion.tigris.org/). So, rather than creating a new repository I decided to store the Synergy Advance code within a subdirectory of the [Synergy](http://synergy.wincent.com/) repository.

I've been living with the uncomfortable consequences of that decision ever since. The two codebases are completely separate but because they live in the same repository it means that the `tags` and `branches` subdirectories are cluttered with entries for two projects instead of one. Worse still, the `trunk` itself is shared by two separate projects and sometimes, through lack of discipline or by mistake, commits (changesets) that should really be split up into two separate actions (one for each project) end up getting shoved into the repository in one go.

It also means that the relative paths in the Synergy Advance project look different to the same paths in Synergy (and just about every other project I have). For example, the relative path to the build directory is `../../build` for Synergy but `../../../build` for Synergy Advance. That lack of consistency makes sharing components with other project difficult.





So finally, yesterday, after putting it off and simply "living with it" for years, I finally extracted Synergy Advance into a repository of its own and it now lives as a peer alongside Synergy, WOBase, WOBezel, WOCommon, WODebug, WOHotKey, WOTest and every other project in my portfolio, all with the same relative path to a shared built products folder.

I decided to finally bite the bullet because there's a lot of other breakage at the moment so I may as well deal with it in one fell swoop, seeing as the project is not in a buildable state right now anyway. The major change I'm dealing with is the result of another "correction" that I made recently; [the decision](http://www.wincent.com/knowledge-base/Frameworks:_pros_and_cons) to start putting share code in WOCommon where appropriate rather than in the existing shared frameworks. This means that code is getting migrated out of the frameworks with varying degrees of violence, sometimes merely forked and copied over, and other times ripped out directly. New code can start using WOCommon without any problems, but the frameworks themselves need modifications as do the applications that use them in order to build correctly.

So along with the extraction into a separate repository, last night I started modifying code in Synergy Advance to start making use of stuff in WOCommon. Nothing too aggressive just yet, but in general making use of superior functionality where it is available. In the long run WOBase will all but disappear (in fact, I think it's almost certain that it will disappear) and the result will be a better codebase, more compact, more efficient, faster to load, and less memory-hungry.

The short-term task, however, is to fix all the relative links in the relocated project file (given that it's moved up one level in the file system hierarchy), double check the build settings for all targets in the Synergy Advance project (at the time of writing, 23 of them!) to make sure that they'll still all correct, and revise all the shell scripts to make sure they'll continue to work as intended. Then I'll turn my attention to the frameworks, particularly WODebug and WOBase (the ones which have seen the most radical changes in the move to WOCommon) and get them back into a buildable, functional state again.

Of course it's easy to see in hindsight that I should have done things this way all along, but that's the nature of things. Even when you employ "best practice" (using a Subversion repository, putting reusable code in frameworks) you still sometimes learn that there are even better ways of doing things (using Subversion externals and so forth). And looking at my development files over the last few years there's no doubt that they've gotten better; a shared build location, centralized configuration via Xcode configuration files (`xcconfig`), the development of general-purpose, "write once, use everywhere" tools for the build chain ([buildtools](http://www.wincent.com/a/products/buildtools/)), [better localization practices](http://strings.wincent.com/), [unit testing](http://test.wincent.com/), and better use of Subversion (using externals, for example, and making better use of branches and tags).

I'm optimistic that things really are coming close to their final shape — well, as final as these things can ever get — and that my work practices five years from now won't look all that much different from what they look like today; not because I'm lazy or fear change (I don't) but because I'm getting close to knocking my development practices into the best shape that they can be.
