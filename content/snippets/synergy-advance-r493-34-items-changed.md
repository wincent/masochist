---
title: Synergy Advance r493, 34 items changed
tags: snippets
---

Refactoring: rating-to-string and player-state-to-string conversions now handled in NSValueTransformer subclasses for better modularity, plan is to later replace some related old-fashioned code with Cocoa bindings; Additional Dock preferences: basic working prototype of user-customizable Dock menu; Additional hot-keys for setting half-star ratings; Code improvements: many integer literals replaced with new macros for better robustness and readability (was able to delete many comments as a result); Renamed many methods in iTunes controller class (some actions were labelled using nouns instead of verbs); Update copyright dates; Source code formatting improvements
