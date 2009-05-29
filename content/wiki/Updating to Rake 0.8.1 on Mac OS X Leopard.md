---
tags: leopard rake updates
cache_breaker: 1
---

Notes made while upgrading to [Rake 0.8.1](/wiki/Rake_0.8.1) on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) (10.5.1).

# Installation

    $ sudo gem install rake
    Password:
    Bulk updating Gem source index for: http://gems.rubyforge.org
    Successfully installed rake-0.8.1
    1 gem installed
    Installing ri documentation for rake-0.8.1...
    Installing RDoc documentation for rake-0.8.1...

# Updating the [FastRI](/wiki/FastRI) index

    $ fastri-server -b
    Building index.
    Indexed:
    * 7710 methods
    * 1364 classes/modules
    Needed 1.20278 seconds
