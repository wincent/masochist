---
title: Update installation scripts (Synergy, 4cc7f58)
tags: snippets
---

This is a fairly thorough rewrite of the installation scripts for their new context (run within the Synergy build rather than as a build in a separate project).

To make things cleaner all of the staging and preparation now takes place in the derived files directory rather than in the common build folder.

Output is considerably less verbose, and the scripts now run with "-e" set so as to abort early in the event of an error.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
