---
tags: perl.one.liners wiki
---

"[Search and replace in multiple files with a Perl one-liner](/wiki/Search_and_replace_in_multiple_files_with_a_Perl_one-liner)" showed how to search multiple files and perform in-line replacements in them, but sometimes you just want to know if a particular file matches something.

    perl -ne "exit 1 if m/foobar/;"  file1

The `-n` switch causes [perl](/wiki/perl) to loop over the lines in the input file without printing them (use `-p` for that, as seen in "[Search and replace in multiple files with a Perl one-liner](/wiki/Search_and_replace_in_multiple_files_with_a_Perl_one-liner)"). The `-e` switch tells perl an expression to evaluate.

This one-liner will return an exit code of 1 if the file matches, or 0 if there is no match.

Alternatively, if you want to search for matches in multiple files at once you could do this:

    perl -ne 'print "match: $ARGV.\n" if m/foobar/;'  file1 file2 file3

This would print the name of each matching file (multiple times for multiple matches).
