---
tags: leopard haml updates
cache_breaker: 1
---

These notes were made while upgrading to [Haml 1.8.1](/wiki/Haml_1.8.1) on [Mac OS X](/wiki/Mac_OS_X) 10.5.1

# Installation

    $ sudo gem install haml --no-ri
    Password:
    Updating metadata for 106 gems from http://gems.rubyforge.org
    ..........................................................................................................
    complete
    Successfully installed haml-1.8.1
    1 gem installed
    Installing RDoc documentation for haml-1.8.1...

# Updating existing [Rails](/wiki/Rails) applications

I prefer to tie my application to a known working version of [Haml](/wiki/Haml) rather than depending on a [gem](/wiki/gem) installed somewhere on the system (whose version you may not control). Seeing as I use [Git](/wiki/Git) I do this:

    cd path_to_rails_application_root
    git rm -r vendor/plugins/haml
    svn export svn://hamptoncatlin.com/haml/tags/rel_1-8-1 vendor/plugins/haml
    git add vendor/plugins/haml

# Updating the [Haml](/wiki/Haml) [TextMate](/wiki/TextMate) bundle

Apparently there have been no changes to the bundle recently:

    $ cd ~/Library/Application\ Support/TextMate/Bundles/Ruby Haml.tmbundle
    $ svn up
    At revision 8813.
