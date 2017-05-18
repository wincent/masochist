---
tags: ruby wiki
---

[ri](/wiki/ri) is a documentation viewer for [Ruby](/wiki/Ruby).

# [Command line](/wiki/Command_line) interface to [ri](/wiki/ri)

Output of `ri --help`:

    ri v1.0.1 - 20041108

    Usage:

      ri [options]  [names...]

    Display information on Ruby classes, modules, and methods.
    Give the names of classes or methods to see their documentation.
    Partial names may be given: if the names match more than
    one entity, a list will be shown, otherwise details on
    that entity will be displayed.

    Nested classes and modules can be specified using the normal
    Name::Name notation, and instance methods can be distinguished
    from class methods using "." (or "#") instead of "::".

    For example:

        ri  File
        ri  File.new
        ri  F.n
        ri  zip

    Note that shell quoting may be required for method names
    containing punctuation:

        ri 'Array.[]'
        ri compact\!

    By default ri searches for documentation in the following
    directories:

        /usr/local/share/ri/1.8/system
        /usr/local/share/ri/1.8/site
        /Users/wincent/.rdoc
        /usr/local/lib/ruby/gems/1.8/doc/*/ri

    Specifying the --system, --site, --home, --gems or --doc-dir
    options will limit ri to searching only the specified
    directories.

    Options:

         --help, -h   you're looking at it

      --classes, -c   Display the names of classes and modules we
                      know about

      --doc-dir, -d <dirname>
                      A directory to search for documentation. If not
                      specified, we search the standard rdoc/ri directories.
                      May be repeated.

           --system   Include documentation from Ruby's standard library:
                        /usr/local/share/ri/1.8/system

             --site   Include documentation from libraries installed in site_lib:
                        /usr/local/share/ri/1.8/site

             --home   Include documentation stored in ~/.rdoc:
                        /Users/wincent/.rdoc

             --gems   Include documentation from Rubygems:
                        /usr/local/lib/ruby/gems/1.8/doc/*/ri

       --format, -f <name>
                      Format to use when displaying output:
                         ansi, bs, html, plain, simple
                      Use 'bs' (backspace) with most pager programs.
                      To use ANSI, either also use the -T option, or
                      tell your pager to allow control characters
                      (for example using the -R option to less)

    --list-names, -l  List all the names known to RDoc, one per line

     --no-pager, -T   Send output directly to stdout.

        --width, -w output width
                      Set the width of the output

      --version, -v   Display the version of ri

    Options may also be passed in the 'RI' environment variable

# See also

-   [FastRI](/wiki/FastRI)
