---
title: Make separate administrator namespace (wincent.com, 13a0aec)
tags: snippets
---

In general I prefer in-place editing where possible but there are some cases where it is useful to have an administrator-only view of a model. For example, consider the Tag model, where it is nice to have a read-only "cloud" view for normal users, while for admin users we can provide a straightforward table view with in-place editor fields and sortable table columns.

Not sure why, but at some point my "admin\_only" and "logged\_in\_only" helpers broke, so I've simplified them by removing the "simple\_concat" method and now they're working again.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
