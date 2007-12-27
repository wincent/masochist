---
title: Produce longer release notes if --long switch passed (buildtools, 6d4875b)
---

Note also that we just use "git log --pretty=format" rather than piping through "git shortlog".

There is a strange behavioural discrepancy here with newlines depending on whether the script is run interactively or via Xcode; work around it by just echo a blank line rather than trying to pass "\\n".

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
