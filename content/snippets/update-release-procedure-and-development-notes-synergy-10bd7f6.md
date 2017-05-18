---
title: Update release procedure and development notes (Synergy, 10bd7f6)
tags: snippets
---

Lots has changed since these notes were originally written; there are still references to CVS in there, for example, and that was phased out a long time ago in favor of Subversion, then SVK and finally Git.

So prune the irrelevant bits.

This commit also includes a simple shell script for tagging releases in Git; seeing as each release should really be tagged in at least three repositories (Synergy itself, WOCommon and WOPublic), it's easier to do this with a single script.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
