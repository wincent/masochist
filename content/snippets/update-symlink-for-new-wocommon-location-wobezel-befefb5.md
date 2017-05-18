---
title: Update symlink for new WOCommon location (WOBezel, befefb5)
tags: snippets
---

Back in the days of Subversion externals each project that used code from WOCommon had a local copy of WOCommon incoporated by reference using the svn:externals mechanism.

When I moved to SVK (which doesn't support Subversion externals) I was forced to look for an alternative and opted to check out a copy of WOCommon adjacent to the incorporating project's checkout (SVK does not allow nested checkouts) and add a symbolic link inside the project tree so that relative imports and the like would continue to work seamlessly.

Upon switching to git these checkouts were no longer quite as "lightweight" as before because every single checkout is actually a clone of the entire repository and all its history. It would be possibly to do a "shallow" clone but that would introduce the possibility for inconsistency due to human error.

So I've decided to slightly modify the symlink structure so that all projects which use WOCommon will share the same checked out copy. We lose some redundancy but gain more robustness in the process (less scope for forgetting to pull updates, less chance of accidentally editing the wrong file if Xcode decides to open up the wrong copy of a common file etc).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
