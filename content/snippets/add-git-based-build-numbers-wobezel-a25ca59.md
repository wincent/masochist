---
title: Add Git-based build numbers (WOBezel, a25ca59)
tags: snippets
---

Use the new UpdateGitRevisionsNumbers.rb script in the Wincent Build Tools to automatically update the build number as part of each build when required.

This commit also modifies the .gitignore file so as to ignore the temporary file produced as part of the process.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
