---
tags: leopard haml updates
---

These notes were made while upgrading to [Haml 1.8.0](/wiki/Haml_1.8.0) via [RubyGems](/wiki/RubyGems) on [Mac OS X](/wiki/Mac_OS_X) 10.5.1

# Installation

As recommended in the [release notes](http://haml.hamptoncatlin.com/release-notes), I upgraded using the `--no-ri` switch. This suppresses the warning messages I saw last time I upgraded (see "[Upgrading to Haml 1.7 on Mac OS X Tiger](/wiki/Upgrading_to_Haml_1.7_on_Mac_OS_X_Tiger)").

    $ sudo gem install haml --no-ri
    Password:
    Successfully installed haml-1.8.0
    1 gem installed
    Installing RDoc documentation for haml-1.8.0...

# Updating existing [Rails](/wiki/Rails) applications

## Installing by referencing the [gem](/wiki/gem)

Seeing as the project in question is being managed by [Git](/wiki/Git) I did the following:

    cd path_to_rails_application_root
    git rm -r vendor/plugins/haml
    haml --rails .
    git add vendor/plugins/haml

But if I wanted to do the same without [Git](/wiki/Git) I just would have done:

    cd path_to_rails_application_root
    rm -r vendor/plugins/haml
    haml --rails .

## Installing without depending on the [gem](/wiki/gem)

If you prefer to tie your application to a known working version of [Haml](/wiki/Haml) rather than depending on a [gem](/wiki/gem) installed somewhere on the system (whose version you may not control), you would do something like this with [Git](/wiki/Git):

    cd path_to_rails_application_root
    git rm -r vendor/plugins/haml
    svn export svn://hamptoncatlin.com/haml/tags/rel_1-8-0 vendor/plugins/haml
    git add vendor/plugins/haml

And without [Git](/wiki/Git):

    cd path_to_rails_application_root
    rm -r vendor/plugins/haml
    svn export svn://hamptoncatlin.com/haml/tags/rel_1-8-0 vendor/plugins/haml

# Updating the [Haml](/wiki/Haml) [TextMate](/wiki/TextMate) bundle

Apparently there have been no changes to the bundle recently:

    $ cd ~/Library/Application\ Support/TextMate/Bundles/Ruby Haml.tmbundle
    $ svn up
    At revision 8772.
