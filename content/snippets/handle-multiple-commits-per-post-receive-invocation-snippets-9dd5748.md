---
title: Handle multiple commits per post-receive invocation (snippets, 9dd5748)
tags: snippets
---

Handle a wider range of possible post-receive inputs:

Firstly, we now have different handling for creation and update events.

Secondly, both kinds of events may actually reflect multiple commits for a\
single push. So we try to get a revision list based on the "new" and the "old"\
revisions, taking into account that they may not actually be on the same\
branch (so we use "git merge-base" to determine a likely common ancestor) and\
trying to avoid generating posts for commits which have already generated\
posts in the past (we do this by excluding all refs apart from the current\
one; any commits reachable from those other refs have presumably been reported\
previously).

There is still a tiny possibly race window in which another user could update\
the list of refs after we get the refs list but before we use it to perform\
the exclusion, and this could cause reports for some commits to be incorrectly\
skipped. As noted in the notes of the post-receive-email sample script that\
comes with Git, this race would be quite difficult to avoid, but luckily it is\
not very likely (especially in my set-up where I am basically the only\
committer).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;\
