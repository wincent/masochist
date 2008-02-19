---
title: Sanitize and limit tags in search to 10 (wincent.com, c90d6d5)
---

Remove duplicate tags in search query and limit the total number to 10 to guard against attacks on the database. It is highly unlikely that a search with more than 10 tags would return any results anyway, given that the average number of tags per item is probably well under five.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
