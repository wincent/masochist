---
tags: leopard rcov updates wiki
cache_breaker: 1
---

These notes were made while upgrading from [rcov 0.8.1.0](/wiki/rcov_0.8.1.0) to [rcov 0.8.1.2.0](/wiki/rcov_0.8.1.2.0) on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.1 via [RubyGems](/wiki/RubyGems). This upgrade was necessary in order to get the `pre_commit` [Rake](/wiki/Rake) task working again in the current [RSpec](/wiki/RSpec) trunk (post-1.1.3 release).

# Installation

    $ sudo gem install rcov
    Password:
    Updating metadata for 48 gems from http://gems.rubyforge.org
    ................................................
    complete
    Building native extensions.  This could take a while...
    Successfully installed rcov-0.8.1.2.0
    1 gem installed
    Installing ri documentation for rcov-0.8.1.2.0...
    Installing RDoc documentation for rcov-0.8.1.2.0...

# Updating the [FastRI](/wiki/FastRI) index

    $ fastri-server -b
    Building index.
    Indexed:
    * 7733 methods
    * 1368 classes/modules
    Needed 1.880463 seconds
