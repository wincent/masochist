---
title: Perform prescan to identify special links (wikitext, e298dd6)
tags: snippets
---

When encoding a link target perform a quick prescan to see if this is a "special" link or not. At this stage, "special" links are those which contain only letters, numbers and slashes. The idea is that whereas a link like "\[\[foo bar\]\]" is interpreted as a wiki article link, one like "\[\[bug/12\]\]" is interpreted as a link still internal to the site but external to the wiki, specifically to the bug-tracking part of the site which would be accessed with a path like "/bug/12" (as opposed to the wiki article which would have a path like "/wiki/foo%20bar").

Seeing as the prescan does constitute extra work, only perform it if the treat\_slash\_as\_special instance variable is set to true. On the other hand, when the prescan does identify a special link it aborts the encoding right there and less work is done in that case.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
