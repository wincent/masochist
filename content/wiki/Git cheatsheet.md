---
tags: git wiki
cache_breaker: 1
---

# Pushing matching refs

    git push origin :

# Retrieving a file from a specific revision

    git show <treeish>:filename

For example, if you delete a file in a particular revision, say 3ad8389, and only later discover that you should have kept it, you can get it back with:

    git show 3ad8389~1:filename > filename

(ie. show the file as it was in the revision before 3ad8389, where it got deleted.)

Equivalent in this case is:

    git checkout 3ad8389~1 -- filename

This just writes the file back out to the working tree without touching the HEAD.

# See also

-   <http://jonas.nitro.dk/git/quick-reference.html>
