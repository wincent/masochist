---
title: Add Rails template handler (wikitext, cc6949b)
tags: snippets
---

This allows you to create Rails view templates written in pure wikitext. It's intended for purely static content seeing as wikitext, by definition, can't have interpolated Ruby in it.

For example, given a controller "ThingsController" and an action "show\_stuff", a template named "show\_stuff.html.wikitext in the "app/views/things/" folder would be rendered using the wikitext parser.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
