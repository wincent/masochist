---
title: Add "needles" model (wincent.com, 99bb491)
---

This is the model that provides site-wide search. "acts as ferret" gets good press but it is an external dependency; MySQL's own full-text search has a reputation for not scaling well.

So we roll our own model to give us what we want using a normal MySQL table of "needles" to be found in the "haystack", and it is a standard Active Record model class.

At this stage we provide simple AND searches (all the words in the query string must be present), OR searches (any of the words is enough to match), attribute searches (for example, "title:hello" finds models with the word "hello" in the "title" attribute), and user-scoped searches (admin users can find all results, anonymous users can find only public results, and other users can find only results which should be visible to them: their own records and any public records).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
