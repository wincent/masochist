---
tags: leopard rspec updates wiki
cache_breaker: 1
---

Notes made while upgrading from [RSpec 1.1.1](/wiki/RSpec_1.1.1) to [RSpec 1.1.2](/wiki/RSpec_1.1.2) on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.1.

# Installation

    $ sudo gem install rspec
    Successfully installed rspec-1.1.2
    1 gem installed
    Installing ri documentation for rspec-1.1.2...
    Installing RDoc documentation for rspec-1.1.2...

# Updating the [FastRI](/wiki/FastRI) index

    $ fastri-server -b
    Building index.
    Indexed:
    * 7710 methods
    * 1364 classes/modules
    Needed 0.979224 seconds

# Updating the [TextMate](/wiki/TextMate) bundle

    $ cd ~/Library/Application\ Support/TextMate/Bundles/RSpec.tmbundle
    $ svn up
    At revision 3229.

# Updating an existing [Rails](/wiki/Rails) application

Seeing as I am managing the application using [Git](/wiki/Git) I do the following:

    $ cd path_to_rails_application_root
    $ git rm -r vendor/plugins/rspec
    $ git rm -r vendor/plugins/rspec_on_rails
    $ script/plugin install svn://rubyforge.org/var/svn/rspec/tags/CURRENT/rspec
    $ script/plugin install --force svn://rubyforge.org/var/svn/rspec/tags/CURRENT/rspec_on_rails
    $ git add vendor/plugins/rspec
    $ git add vendor/plugins/rspec_on_rails
    $ script/generate rspec

Without [Git](/wiki/Git) I would do it as follows:

    $ cd path_to_rails_application_root
    $ rm -r vendor/plugins/rspec
    $ rm -r vendor/plugins/rspec_on_rails
    $ script/plugin install svn://rubyforge.org/var/svn/rspec/tags/CURRENT/rspec
    $ script/plugin install --force svn://rubyforge.org/var/svn/rspec/tags/CURRENT/rspec_on_rails
    $ script/generate rspec
