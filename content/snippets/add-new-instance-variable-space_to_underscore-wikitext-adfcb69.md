---
title: Add new instance variable, space_to_underscore (wikitext, adfcb69)
tags: snippets
---

This instance variable will permit the creation of MediaWiki-style links, where \[\[foo bar\]\] is a like to "/wiki/foo_bar" rather than "/wiki/foo%20bar".

The benefit is prettier URLs; the downside is that \[\[foo bar\]\] and \[\[foo_bar\]\] now point to the same article. As this is a trade off it will default to off by default.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;
