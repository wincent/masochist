---
tags: subversion version.control svk wiki
---

"[Cherry picking](/wiki/Cherry_picking)" is the practice of taking a specific change from one [branch](/wiki/branch) of development and [merging](/wiki/merging) it into another. It is different from a wholesale merge of one branch into another (where *all* changes are merged). [Cherry picking](/wiki/Cherry_picking) is easier with a [version control system](/wiki/version_control_system) like [SVK](/wiki/SVK) that supports automatic [merge tracking](/wiki/merge_tracking) than with a system that doesn't, like [Subversion](/wiki/Subversion).

For [cherry picking](/wiki/cherry_picking) to be effective you need to make sure that there are actually "cherries" to be picked; that is, you need to have one changeset per meaningful change: if you have more than one meaningful change in a single changeset then you are no longer free to [cherry pick](/wiki/cherry_pick) only one of those changes.

In practice, this means that you should be disciplined about your commits: one commit per meaningful change.

-   Prior to committing always revise your working copy using `svk status` and `svk diff` (if you are using [SVK](/wiki/SVK)) or `svn status`/`svn diff` (if using [Subversion](/wiki/Subversion)).
-   If multiple files have changes, commit them in two or more separate commits if necessary to keep meaningful changes appropriately grouped.
-   Use [microbranches](/wiki/microbranches) and [branches](/wiki/branches) to keep tasks and streams of development separate; this will make your changes naturally lean towards being meaningfully grouped.
-   In cases where multiple, unrelated changes have been made to a file, if you are using [SVK](/wiki/SVK) you can use the `--interactive` switch to selectively commit chunks of a given file.

# See also

-   [Branching](/wiki/Branching)
-   [Microbranching](/wiki/Microbranching)
-   [Merging](/wiki/Merging)
