---
tags: vim recipe wiki
cache_breaker: 1
---

# Deleting matching lines

For example, to delete all lines starting with a `#` (ie. [Ruby](/wiki/Ruby) comments starting in column 0):

    :g/^#/d

# Deleting non-matching lines

To delete non-matching lines we substitute `g!` or `v` for `g`:

    :g!/^#/d

Or:

    :v/^#/d

# See also

-   <http://vim.wikia.com/wiki/Delete_all_lines_containing_a_pattern>
