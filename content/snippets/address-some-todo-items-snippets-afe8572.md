---
title: Address some TODO items (snippets, afe8572)
---

This commit address a couple of TODO items:

- If only one of "message" or "title" is supplied, use the supplied string for the missing value as well.

- Prepare the way for displaying usage information if neither "message" nor "title" is provided; for the time being we just exit with a non-zero status.

At the same time, this commit also provides some whitespace fixes, updates the copyright year, and removes some Subversion-related crud. All of this is bundled together in a single commit because the file is so small and all the edits apply to the same range of lines.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
