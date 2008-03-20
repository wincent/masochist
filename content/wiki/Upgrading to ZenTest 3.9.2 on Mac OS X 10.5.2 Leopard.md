---
tags: zentest leopard gems updates os.x
---

These notes were made while upgrading to [ZenTest 3.9.2](/wiki/ZenTest_3.9.2) on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.2 via [RubyGems](/wiki/RubyGems).

# Installation

    sudo gem install ZenTest

## Output

    Updating metadata for 32 gems from http://gems.rubyforge.org
    ................................
    complete
    Successfully installed rubyforge-0.4.5
    Successfully installed hoe-1.5.1
    Successfully installed ZenTest-3.9.2
    3 gems installed
    Installing ri documentation for rubyforge-0.4.5...
    Installing ri documentation for hoe-1.5.1...
    Installing ri documentation for ZenTest-3.9.2...
    Installing RDoc documentation for rubyforge-0.4.5...
    Installing RDoc documentation for hoe-1.5.1...
    Installing RDoc documentation for ZenTest-3.9.2...

Note that [ZenTest](/wiki/ZenTest)'s dependencies were also updated to their latest versions automatically:

-   [rubyforge 0.4.5](/wiki/rubyforge_0.4.5)
-   [hoe 1.5.1](/wiki/hoe_1.5.1)

# Updating the [FastRI](/wiki/FastRI) index

    fastri-server -b

## Output

    Building index.
    Indexed:
    * 7733 methods
    * 1368 classes/modules
    Needed 1.090636 seconds
