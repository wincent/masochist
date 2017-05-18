---
title: Determine branch name in check-series script (snippets, adccbc7)
tags: snippets
---

Previously we just made comparisons against the "origin", and while this worked fine for topic branches forked off of the "master" branch, it fell down for those forked off something else (like the "next" branch, for example).

In order to get the list of commits that really belong to the topic branch and only the topic branch we would need to compare against "origin/next" in the case of the "next" example.

This commit adds code for automatically detecting what branch we are on (by reading and parsing GIT\_DIR/HEAD), finding out the "remote" and "merge" values for that branch, and then using them to get an accurate list of the commits unique to the topic branch.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
