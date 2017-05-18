---
title: Updated packrat performance numbers
tags: blog
---

The packrat performance numbers I [published yesterday](http://www.wincent.com/a/about/wincent/weblog/archives/2007/02/putting_the_pac.php) were deficient in a couple of ways. Firstly, performance was a little slow; I've been able to improve this somewhat with some minor changes. Secondly, the "parse event" numbers with memoizing turned off were inaccurate (too low), leading to an understatement of the number of events "saved" due to memoization; I've now corrected this as well.





In a stunning display of lack of attention to detail (and to my "to do" list), ~~almost~~ all of my `Parslet`, `ParsletCombination` and `Predicate` classes were lacking the `hash` and `eql?` methods needed to make them suitable for use as keys in a hash. This meant that in many cases previously captured intermediate results were being overlooked and parsing operations were being redone.

In addition to correcting this oversight I also took the time to tighten up the code in a number of places, storing the hashes in instance variables rather than re-calculating them on demand.

The base figures we started with yesterday:

-   **Total number of parse events (without memoization):** 15,585 (understated; the real number is slightly higher)
-   **Total number of parse events (with memoization):** 12,183
-   **Cache hits:** 556
-   **Cache misses:** 11,627
-   **Execution time (without memoization)**: 2.0 seconds
-   **Execution time (without memoization)**: 2.5 seconds

After adding `hash` and `eql?` methods to my parslet classes the number of cache hits doubled and cache misses fell by nearly 1,000. After these changes processing was slightly faster (2.4 seconds). Continuing to add methods to my parslet combination classes I was able to shave off another 100 misses and get the execution time down to just over 2.3 seconds. The final results were as follows; I expect the improvements to be more notable on larger data sets (and I haven't even started profiling yet):

-   **Total number of parse events (without memoization):** 15,834
-   **Total number of parse events (with memoization):** 11,701 (4% improvement)
-   **Cache hits:** 1,084 (95% improvement)
-   **Cache misses:** 10,566 (9% improvement)
-   **Execution time (without memoization)**: 2.018 seconds
-   **Execution time (without memoization)**: 2.368 seconds (5% improvement)
