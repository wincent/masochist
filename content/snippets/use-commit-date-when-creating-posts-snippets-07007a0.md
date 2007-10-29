---
title: Use commit date when creating posts (snippets, 07007a0)
---

Previously the Git post-receive hook just created new posts as commits were received; now the hook extacts the author date (not the committer date) from each commit and uses that to set the creation date on the post.

This means that there will be a perceived delay between the commit date and the time it shows up on the activity log, but this accurately reflects the way in which commits are not actually published until somebody does a "git push". It also avoids the clumping together effect of the old system where a bunch of commits that took place over a period of time would appear to have happened all at once when pushed out.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
