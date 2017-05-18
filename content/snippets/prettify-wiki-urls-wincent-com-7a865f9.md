---
title: Prettify wiki URLs (wincent.com, 7a865f9)
tags: snippets
---

Adopt MediaWiki convention of converting spaces to underscores in article titles. This means that we get cleaner-looking URLs in the browser's address/location bar (eg "foo\_bar" instead of "foo%20bar") at the cost of having to disallow underscores in article titles.

I've added a corresponding validation. I prefer explicitly disallowing the underscore rather than accepting it and therefore permitting the ambiguity wherein you can create two articles, "foo bar" and "foo\_bar", and you can only conveniently link to one of them.

I think this is an acceptable tradeoff because attractive URLs are important and space is exceedingly common in article titles whereas underscore is not.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
