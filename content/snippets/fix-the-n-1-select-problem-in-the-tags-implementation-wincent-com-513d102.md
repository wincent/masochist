---
title: Fix the n+1 select problem in the tags implementation (wincent.com, 513d102)
---

When showing all items marked with a single tag (ie. the "show" action of the tags controller) or all items matching multiple tags (ie. the "search" action) we unfortunately had an n+1 SELECT problem because we had to inspect each Taggable instance to see if the user had access permissions to it.

Now we reduce the number of queries by grabbing all Taggables for a given taggable type in one hit. In other words, given 3 matching Articles and 10 matching Posts, we now do 2 queries during access checking rather than 13; and when we display the Taggables in the view there are no additional queries because the Taggables have already been fetched.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
