---
title: Initial version of post-receive hook (snippets, 60d726a)
---

This is a Bash script modelled on the example post-receive-email hook script\
that comes with Git. This is a base version of the script that parses the\
standard input and mines git for information appropriate to include in the\
corresponding XML-RPC post to the weblog.

Rather than having two, scripts however, the plan is to roll the functionality\
of this script and that of the commit-feed.rb script into a single Ruby\
script which handles everything.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;\
