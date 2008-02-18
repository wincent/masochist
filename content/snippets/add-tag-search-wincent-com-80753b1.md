---
title: Add tag search (wincent.com, 80753b1)
---

We offer two kinds of search. The first one isn't really "search" at all; basically, if the user navigates to "/tags/foo" then we show a list of everything (if anything) that's been tagged with "foo".

In the second mode we do a real search using a query string. For example, "/tags/search?q=foo" will display all items tagged with "foo"; "/tags/search?q=foo+bar" will display all items tagged with "foo" and with "bar" (merely being tagged with one of them is not enough). If the user searches for three tags, "foo bar baz", and there "baz" is not a known tag name then we show the results for "foo" and "bar", and display a flash advising that "baz" doesn't exist and was excluded from the results.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
