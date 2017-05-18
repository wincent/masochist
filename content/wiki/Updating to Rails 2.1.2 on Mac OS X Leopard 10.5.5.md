---
tags: rails updates wiki
---

## Updating the [gem](/wiki/gem)

    $ sudo gem install rails
    Password:
    Successfully installed activesupport-2.1.2
    Successfully installed activerecord-2.1.2
    Successfully installed actionpack-2.1.2
    Successfully installed actionmailer-2.1.2
    Successfully installed activeresource-2.1.2
    Successfully installed rails-2.1.2
    6 gems installed
    Installing ri documentation for activesupport-2.1.2...
    Installing ri documentation for activerecord-2.1.2...
    Installing ri documentation for actionpack-2.1.2...
    Installing ri documentation for actionmailer-2.1.2...
    Installing ri documentation for activeresource-2.1.2...
    Installing RDoc documentation for activesupport-2.1.2...
    Installing RDoc documentation for activerecord-2.1.2...
    Installing RDoc documentation for actionpack-2.1.2...
    Installing RDoc documentation for actionmailer-2.1.2...
    Installing RDoc documentation for activeresource-2.1.2...

## Updating the [FastRI](/wiki/FastRI) index

    $ fastri-server -b
    Building index.
    Indexed:
    * 7735 methods
    * 1369 classes/modules
    Needed 0.700733 seconds

## Updating an existing application

    cd app_folder
    rake rails:freeze:gems
    (cd .. && rails app_folder)
    rake spec
