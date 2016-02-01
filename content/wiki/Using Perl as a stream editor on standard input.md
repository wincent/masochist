---
tags: perl.one.liners
---

# Removing spaces from the standard input, echoing to standard output

    echo -n "foo bar baz bing bong boom" | perl -pe "s/ //g"

## Output

    foobarbazbingbongboom

## Related

-   [Using Perl to filter standard input](/wiki/Using_Perl_to_filter_standard_input)

