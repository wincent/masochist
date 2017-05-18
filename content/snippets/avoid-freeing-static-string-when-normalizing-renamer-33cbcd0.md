---
title: Avoid freeing static string when normalizing (REnamer, 33cbcd0)
tags: snippets
---

When normalizing patterns we return a static string "" for the empty string. Given that the caller is expected to free normalized strings it will eventually try freeing the static string which will result in an warning being printed to the console.

We could dynamically allocate an empty string and return that instead (which the caller could then safely free), but this is in a performance-critical section of the code so we instead avoid the allocation and return a global static string.

As this is an internal-only API with just two call sites, we have those sites explicitly check for that global before invoking free.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
