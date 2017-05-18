---
title: Minor site update
tags: site blog
---

Not too many user visible changes, but this update includes a database migration and I like to push out such updates fairly quickly, before too many other changes accumulate on top of them.

# Changelog

Here's the full list of changes, in reverse-chronological order:

    0ef7f8b Update tweet preview field every 5 seconds
    bb14daa Avoid explict array sorting in specs (using =~)
    10d18df Remove "spam" attribute from all models which have it
    f1e8649 Cucumber: get "issue" features working again
    27638e0 Cucumber: tweak "wiki" feature
    69bba98 Update notes on (not) vendoring Cucumber
    26db772 Use "label" tags in issues/_form
    d24e4e0 Remove "warning" flash style
    fff9288 Tweak flash CSS (rounded corners etc)
    fb52a72 Remove "update_attribute!" method
    3a4f572 Update to wikitext 1.5.2
    ed84482 Revert "Fix Rails bug #2266"
    90e4543 Require wikitext > 1.5.1
    2ddfa62 Update wikitext cheatsheet with relative link syntax

Only a couple of tiny user-visible changes: tweaks to the [wikitext cheatsheet](/misc/wikitext_cheatsheet) and some [CSS](/wiki/CSS) changes. Several of the changes involve the testing infrastructure and don't directly affect runtime behaviour at all. Some minor clean-up. And the migration I mentioned before, 'Remove "spam" attribute from all models which have it', which is discussed in [ticket \#1264](/issues/1264).
