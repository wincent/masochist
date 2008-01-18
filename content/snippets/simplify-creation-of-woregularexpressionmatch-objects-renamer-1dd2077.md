---
title: Simplify creation of WORegularExpressionMatch objects (REnamer, 1dd2077)
---

Rather than calling pcre\_get\_substring() just create the string directly ourselves; the total number of allocations is rougly the same but the code is simpler.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
