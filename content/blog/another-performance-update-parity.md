---
title: Another performance update: parity
tags: blog
---

Following on from [yesterday's post](http://www.wincent.com/a/about/wincent/weblog/archives/2007/02/parser_generato.php), I've now achieved performance parity (within about 3 percent) for the memoizing (5.674 seconds) and non-memoizing (5.484) parser modes.

Given that this is for pretty much worst-case scenario input, and I haven't done any profiling or optimization yet, I've decided to make [memoization the default](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/2007/02/walrus_r47_2_items_changed.php).
