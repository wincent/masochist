---
title: Inline moderation of post comments (wincent.com, ec346e2)
tags: snippets
---

Add two buttons underneath each comment, but only when logged in as an admin user. The "spam" button marks a message as spam and then fades out the offending comment; the "ham" button clears the "awaiting moderation" attribute of the comment and fades out the "spam"/"ham" buttons.

At the top of the listing we show three comment counts: published comments, comments awaiting moderation, and spam comments. On the main listing page the comment count that we show is actually the sum of published comments and comments awaiting moderation.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
