---
title: Fuzzyfinder
tags: vim
---

Frustrated with the flakiness of Jamis Buck's [FuzzyFinder: TextMate](http://github.com/jamis/fuzzyfinder_textmate/tree/master) plugin for [Vim](/wiki/Vim), and his accompanying [FuzzyFileFinder](http://github.com/jamis/fuzzy_file_finder/tree/master) I've found myself simply not using them at all over the last few weeks. One can get around fairly quickly using NERDTree, and `:e` with tab-completion.

# The problems

## General flakiness and unpredictability

The plugin would sporadically not appear when summoned by its key binding.

## Frustrating prioritization of matches based on their length

Given input "z", and two possible matches `az` and `zzzzzzzzzzzzzzzzzzzzzzzzz`, FuzzyFileFinder (henceforth "FFF") will always prioritize the shorter match. I would rather see it give higher weight to matching text near the front of path components. For example, given a zillion files called `show.html.haml` at various points in the work tree it would be nice to be able to search for "avps" to find a file like `app/views/post/show.html.haml`.

I often found, however, that FFF would routinely give me files which I simply wasn't interested in seeing just because their name was shorter.

## Slow

Probably due to the implementation of FuzzyFileFinder in [Ruby](/wiki/Ruby).

## Dead

Jamis [got tired](http://weblog.jamisbuck.org/2009/1/28/the-future-of-fuzzyfinder-textmate) of keeping FFTM (FuzzyFinder: TextMate) in sync with the upstream Fuzzyfinder plugin, seeing as he had implemented it by hooking into the plugin internals and the upstream author had a penchant for refactoring those internals every couple of weeks.

This in turn meant that FFTM was a dead project, unless you wanted to pick one of the [forks](http://github.com/jamis/fuzzyfinder_textmate/network) on GitHub and see if it evolved in the right direction.

I personally think that this "hook in" approach was never the right one to take; he would have been better off forking the plugin and building off that as a stable starting point. Ideally, his changes would have been submitted back upstream and eventually incorporated into the plugin. But it's all moot now anyway because FFTM is dead.

# The alternative

So I decided to bin FFF and FFTM and just try out [the original Fuzzyfinder plugin](http://www.vim.org/scripts/script.php?script_id=1984) on its own.

My initial impressions:

## The good

Much, much faster and feels more solid: it actually comes up when you issue the key combination!

## The bad

One gets the sense that this is "so close yet so far". When you start typing a path component, for example, it would be convenient to be able to hit the tab key to autocomplete up to the next path component, accepting the topmost match in the list. But what actually happens when you hit tab is that a space is inserted into your search string.

You can approximate this "autocomplete" behaviour by using the cursor keys to move between options and hitting return to accept them and move to the next level, but the tab-to-accept-first-match behaviour would have been a nice shortcut.

The obvious missing feature here is the ability to match against path components implicitly (ie. "avpi" to match `app/views/posts/index`) and explicity (ie. "a/v/p/i" to match the same). As it is, the only way to approximate this with Fuzzyfinder is with explicit wildcards (ie. "a\*/v\*/p\*/i"), and that is not very convenient.

You can almost get the standard [TextMate](/wiki/TextMate) behaviour by using the "\*\*" wildcard (ie. "\*\*/index" would show all `index` files in the tree), but it's still not as convenient as just typing the filename fragment ("index").

Not really sure we're I'll go from here. Will possibly look at modifying Fuzzyfinder to get at least some of the behaviour I want.
