---
tags: perl.one.liners ag ack
---

# Example: showing lines matching a regular expression

For those times when you want a full [PCRE](/wiki/PCRE) rather than just `grep`:

    some_command|perl -ne 'print if /\bword\b/'

Note that you can also do this with [`ack`](/wiki/ack) or `ag`:

    $ some_command|ack '\bword\b'
    $ some_command|ag '\bword\b'

# Related

* [Using Perl to filter standard input](/wiki/Using_Perl_to_filter_standard_input)
