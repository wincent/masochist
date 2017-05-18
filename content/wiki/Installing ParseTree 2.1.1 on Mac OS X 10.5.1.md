---
tags: parsetree wiki
---

Notes on installing the [ParseTree 2.1.1](/wiki/ParseTree_2.1.1) release.

# Installation

    $ sudo gem install ParseTree
    Password:
    Updating metadata for 43 gems from http://gems.rubyforge.org
    ...........................................
    complete
    Successfully installed hoe-1.4.0
    Successfully installed RubyInline-3.6.5
    Successfully installed ParseTree-2.1.1
    3 gems installed
    Installing ri documentation for hoe-1.4.0...
    Installing ri documentation for RubyInline-3.6.5...
    Installing ri documentation for ParseTree-2.1.1...
    Installing RDoc documentation for hoe-1.4.0...
    Installing RDoc documentation for RubyInline-3.6.5...
    Installing RDoc documentation for ParseTree-2.1.1...

# Updating the [FastRI](/wiki/FastRI) index

    $ fastri-server -b
    Building index.
    Indexed:
    * 7710 methods
    * 1364 classes/modules
    Needed 1.318283 seconds
