---
tags: rails updates
---

## Installing the [Rails](/wiki/Rails) [gem](/wiki/gem)

    $ sudo gem install rails
    Password:
    Bulk updating Gem source index for: http://gems.rubyforge.org/
    Bulk updating Gem source index for: http://gems.rubyforge.org/
    Successfully installed activesupport-2.1.1
    Successfully installed activerecord-2.1.1
    Successfully installed actionpack-2.1.1
    Successfully installed actionmailer-2.1.1
    Successfully installed activeresource-2.1.1
    Successfully installed rails-2.1.1
    6 gems installed
    Installing ri documentation for activesupport-2.1.1...
    Installing ri documentation for activerecord-2.1.1...
    Installing ri documentation for actionpack-2.1.1...
    Installing ri documentation for actionmailer-2.1.1...
    Installing ri documentation for activeresource-2.1.1...
    Installing RDoc documentation for activesupport-2.1.1...
    Installing RDoc documentation for activerecord-2.1.1...
    Installing RDoc documentation for actionpack-2.1.1...
    Installing RDoc documentation for actionmailer-2.1.1...
    Installing RDoc documentation for activeresource-2.1.1...

## Updating the [FastRI](/wiki/FastRI) index

    $ fastri-server -b
    Building index.
    Indexed:
    * 7735 methods
    * 1369 classes/modules
    Needed 1.299982 seconds

## Updating existing apps

    cd app_folder
    rake rails:freeze:gems
    (cd .. && rails app_folder)
    rake spec

## See also

-   [Rails 2.1.1](/wiki/Rails_2.1.1)

