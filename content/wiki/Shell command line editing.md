---
tags: bash wiki
cache_breaker: 1
---

This is a list of useful editing commands available in the [Bash](/wiki/Bash) shell on [Mac OS X](/wiki/Mac_OS_X). Unfortunately many other editing commands are omitted because they use the "meta" key (Command on the Mac), which is intercepted by the [Terminal](/wiki/Terminal) application and never actually sent to the underlying shell. Unfortuantely the Opt key can't be used as a substitute, because it is already used to assist typing non-ASCII characters.

# Movement

-   `<C-a>`: move to start of line
-   `<C-e>`: move to end of line

# Cutting and pasting

-   `<C-k>`: kill (cut) from cursor to end of line
-   `<C-w>`: kill (cut) from cursor to previous whitespace
-   `<C-y>`: yank (paste) previously killed text at cursor

# Other

-   `<C-l>`: clear screen, reprinting current line at top
-   `<C-u>`: undo last edit

# Redundant commands

-   `<C-b>`: move back one character (equivalent to left cursor)
-   `<C-f>`: move forward one character (equivalent to right cursor)
-   `<C-d>`: delete character under cursor (equivalent to delete)
