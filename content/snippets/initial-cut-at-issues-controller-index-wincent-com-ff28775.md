---
title: Initial cut at "issues" controller index (wincent.com, ff28775)
tags: snippets
---

Simplify the model by removing the supporting "statuses" class. There is no need for this kind of dynamic complexity, and not only that, we can use the same three basic hard-coded statuses (new, in-progress and closed) for all issue types (bug reports, feature requests, support tickets, feedback etc); there is really no call for fine-grained statuses like "closed (duplicate)", "worksforme" and the like, as they serve only to confuse users.

In order to get pagination and sorting working I had to teach both the paginator and the sortable module to pass on the relevant query parameters when generating URLs.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
