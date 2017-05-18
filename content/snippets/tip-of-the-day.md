---
title: Tip of the Day
tags: snippets
---

When possible, prefer using multiple dependent targets within the same project over multiple dependent projects. There's less overhead and builds should be faster. All the targets logically included in specific product should belong to that product's main project file; this makes things like project-wide searching more useful.
