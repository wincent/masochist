---
title: Release note script (snippets, 6c0e4f7)
---

Add a simple script that uses git-tag to find out what release we are at and what release was immediately prior, and uses git-log/git-shortlog to emit code-level release notes. The intention is that this script be used as part of the build process.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
