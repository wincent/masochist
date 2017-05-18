---
tags: zentest leopard updates wiki
cache_breaker: 1
---

Notes made while upgrading to [ZenTest 3.9.0](/wiki/ZenTest_3.9.0) on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.1.

# Installation

    $ sudo gem install ZenTest
    Password:
    Updating metadata for 76 gems from http://gems.rubyforge.org
    ............................................................................
    complete
    Successfully installed hoe-1.5.0
    Successfully installed ZenTest-3.9.0
    2 gems installed
    Installing ri documentation for hoe-1.5.0...
    Installing ri documentation for ZenTest-3.9.0...
    Installing RDoc documentation for hoe-1.5.0...
    Installing RDoc documentation for ZenTest-3.9.0...

# Updating the [FastRI](/wiki/FastRI) index

    $ fastri-server -b
    Building index.
    Indexed:
    * 7733 methods
    * 1368 classes/modules
    Needed 1.033866 seconds

# [RSpec](/wiki/RSpec)

This release of [ZenTest](/wiki/ZenTest) breaks compatibility with [RSpec](/wiki/RSpec), so you should upgrade to the new release of the latter at the same time:

-   [Upgrading to RSpec 1.1.3 on Mac OS X Leopard](/wiki/Upgrading_to_RSpec_1.1.3_on_Mac_OS_X_Leopard)
