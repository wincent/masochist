---
title: Use color when logging admin password (wincent.com, 75355bc)
tags: snippets
---

When the application is first boot strapped we create an initial user account with admin privileges and log the result to the console and to the log.

This is more secure than providing an account with a default password, although the log file should be cleaned up if there is any chance of a third-party viewing it. In a future commit I'll remove the logging and merely emit the password to standard error (this is more secure still, unless someone happens to be looking over your shoulder during the migration).

In this commit we add colorization (bold green) and some surrounding asterisks to make sure that the password is not drowned out amid all the other output.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
