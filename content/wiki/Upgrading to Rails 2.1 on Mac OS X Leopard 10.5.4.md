---
tags: rails updates wiki
---

## Installing the [Rails](/wiki/Rails) [gem](/wiki/gem)

    $ sudo gem install rails
    Password:
    Updating metadata for 995 gems from http://gems.rubyforge.org/
    ...................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
    complete
    Bulk updating Gem source index for: http://gems.rubyforge.org/
    Successfully installed activesupport-2.1.0
    Successfully installed activerecord-2.1.0
    Successfully installed actionpack-2.1.0
    Successfully installed actionmailer-2.1.0
    Successfully installed activeresource-2.1.0
    Successfully installed rails-2.1.0
    6 gems installed
    Installing ri documentation for activesupport-2.1.0...
    Installing ri documentation for activerecord-2.1.0...
    Installing ri documentation for actionpack-2.1.0...
    Installing ri documentation for actionmailer-2.1.0...
    Installing ri documentation for activeresource-2.1.0...
    Installing RDoc documentation for activesupport-2.1.0...
    Installing RDoc documentation for activerecord-2.1.0...
    Installing RDoc documentation for actionpack-2.1.0...
    Installing RDoc documentation for actionmailer-2.1.0...
    Installing RDoc documentation for activeresource-2.1.0...

## Updating the [FastRI](/wiki/FastRI) index

    $ fastri-server -b
    Building index.
    Indexed:
    * 7735 methods
    * 1369 classes/modules
    Needed 1.734366 seconds

## Updating existing apps

    cd app_folder
    rake rails:freeze:gems
    (cd .. && rails app_folder)
    rake spec
