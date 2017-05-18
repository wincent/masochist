---
title: Use "git status" to detect unclean working copies (buildtools, 06d81f7)
tags: snippets
---

Although parsing the textual output of "git status" in order to detect an unclean working copy doesn't strike me as the most elegant solution, it does seem to be about the only straightforward way to do so.

"env GIT\_PAGER=cat git diff --quiet HEAD" works very well for most cases but it ignores untracked content and my goal is not to detect changes to tracked content but to detect unclean working copies. "git ls-files" might be useful as an alternative but it seems that it work require multiple invocations and I would somehow need to manually filter ignored files.

So in the end parsing the "git status" seems like the best solution. In order to implement this I modified the "command" method to optionally allow non-zero exit status because it seems in local testing that "git status" often exits with a non-zero exit code. I may chose to simplify this later and just run the "git status" in backticks directly. At the same time I fixed a bug in the command method where my use of single quotes was preventing variable interpolation.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
