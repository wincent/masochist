---
tags: ruby wiki
---

[FastRI](/wiki/FastRI) is a faster replacement for [ri](/wiki/ri) which produces colorized output. It can be installed as follows:

    sudo gem install fastri

The index can then be generated (or updated) using:

    fastri-server -b

Local queries can then be run using commands like this:

    qri String#chomp!

Instead of the standard:

    ri String#chomp!

Note that in order to search the built-in classes you must explicitly install the documentation for them as described in "[Getting ri working for built-in classes](/wiki/Getting_ri_working_for_built-in_classes)".

# See also

-   Official [FastRI](/wiki/FastRI) page: <http://eigenclass.org/hiki.rb?fastri>
