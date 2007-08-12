---
title: Set PAGER to cat when capturing git exit status (buildtools, fd2e869)
---

This script worked but really only out of luck because of the way the environment is set up for commands run in backticks in a Ruby script run from Xcode. In normal operation "git diff" actually pipes all output through a pager, so even when using --quiet you won't get the exit code of git, but of the pager itself! This makes the "--exit-code" option to "git diff" useless, and the same is true for "--quiet" because it implies "--exit-code".

Although the script worked, executing the same commands by hand in the shell failed whenever PAGER was set; to clarify, the "git diff" command did work, but it always returned an exit status of 0, thus preventing the "+" from ever being appended to unclean working copies.

So, to make things clearer and guard against possible future changes in Ruby or Xcode, this commit explicitly sets the PAGER to "cat" so as to deactivate all paging when running "git diff".

The unclean working copy detection method still needs work. "git diff HEAD" will still only pick up changes to content that git already knows about; ie. tracked content. It will not pick up things like the addition of new files. In order to detect this I can either just scan the output of "git status" (which I don't really like because it seems hacky) or somehow use lower-level commands like "git ls-files" to build up a list of modified, new or deleted content.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
