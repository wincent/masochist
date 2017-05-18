---
tags: vim recipe wiki
---

Find and replace across all open buffers:

    :bufdo %s/pattern/substituion/gce | update

The same, but across all `*.rb` files in the current directory hierarchy:

    :args **/*.rb
    :argdo %s/pattern/substitution/gce | update

Alternatively, use a plug-in like [Ferret](/wiki/Ferret).

# See also

-   "Search and replace in all buffers": <http://vim.wikia.com/wiki/VimTip1512>
-   [Search and replace in multiple files with a Perl one-liner](/wiki/Search_and_replace_in_multiple_files_with_a_Perl_one-liner)
