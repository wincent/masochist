---
tags: leopard rubyinline updates
---

Notes made while upgrading to [RubyInline 3.6.6](/wiki/RubyInline_3.6.6) on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.1.

# Installation

    $ sudo gem install RubyInline
    Password:
    Updating metadata for 20 gems from http://gems.rubyforge.org
    ....................
    complete
    Successfully installed RubyInline-3.6.6
    1 gem installed
    Installing ri documentation for RubyInline-3.6.6...
    Installing RDoc documentation for RubyInline-3.6.6...

# Updating the [FastRI](/wiki/FastRI) index

    $ fastri-server -b
    Building index.
    Indexed:
    * 7710 methods
    * 1364 classes/modules
    Needed 1.532019 seconds
