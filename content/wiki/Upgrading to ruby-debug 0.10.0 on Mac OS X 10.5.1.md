---
tags: leopard ruby.debug updates wiki
cache_breaker: 1
---

Notes made while upgrading to [ruby-debug 0.10.0](/wiki/ruby-debug_0.10.0) on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.1.

# Installation

    $ sudo gem install ruby-debug
    Password:
    Updating metadata for 25 gems from http://gems.rubyforge.org
    .........................
    complete
    Building native extensions.  This could take a while...
    Successfully installed ruby-debug-base-0.10.0
    Successfully installed ruby-debug-0.10.0
    2 gems installed
    Installing ri documentation for ruby-debug-base-0.10.0...
    Installing ri documentation for ruby-debug-0.10.0...
    Installing RDoc documentation for ruby-debug-base-0.10.0...
    Installing RDoc documentation for ruby-debug-0.10.0...

# Updating the [FastRI](/wiki/FastRI) index

    $ fastri-server -b
    Building index.
    Indexed:
    * 7710 methods
    * 1364 classes/modules
    Needed 1.378294 seconds
