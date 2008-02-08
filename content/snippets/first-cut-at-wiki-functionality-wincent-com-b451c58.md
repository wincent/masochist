---
title: First cut at wiki functionality (wincent.com, b451c58)
---

This is a basic first cut at wiki functionality. At the moment we have a form for creating new articles; on submitting the form we create the article model and attach a first revision model as well with the initial content of the body.

Articles are located by their titles, and our routes map to the "wiki" namespace rather than the "article" one. This means that our paths are like "/wiki/foo" rather than "/article/1" or even "/article/foo".

If you try to access an article which doesn't exist and you're logged in as an admin user then you are taken directly to the "new" form with the title pre-populated so you can create the missing article if you wish.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
