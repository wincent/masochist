---
tags: vim wiki
cache_breaker: 1
---

This can be useful for working with command output that may be very verbose. For example, here we capture the output of the `:au` command to into the `@a` register:

    :redir @a
    :au
    :redir END

Then in normal mode, `"ap` will paste the contents of the register.

Note that in scripts, it's useful to redirect to a variable (eg. `=> foo` instead of `@a`).

# Source

-   <http://vim.wikia.com/wiki/Capture_ex_command_output>
