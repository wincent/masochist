---
title: Special case record_not_found (wincent.com, d35ee64)
tags: snippets
---

In the default case (when there is no override) the uri parameter will actually be an instance of ActiveRecord::RecordNotFound, so watch out for that and intercept it; letting it through causes an exception to be raised.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
