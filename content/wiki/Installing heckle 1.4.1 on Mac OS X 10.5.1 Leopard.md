---
tags: heckle wiki
---

These notes were made while installing [heckle 1.4.1](/wiki/heckle_1.4.1) on [Mac OS X](/wiki/Mac_OS_X) 10.5.1 [Leopard](/wiki/Leopard). [Heckle](/wiki/Heckle) is a prerequisite for running the [Rspec](/wiki/Rspec) `pre_commit` [Rake](/wiki/Rake) task (required in order to submit patches).

# Installation

    $ sudo gem install heckle
    Successfully installed heckle-1.4.1
    1 gem installed
    Installing ri documentation for heckle-1.4.1...
    Installing RDoc documentation for heckle-1.4.1...

# Updating the [FastRI](/wiki/FastRI) index

    $ fastri-server -b
    Building index.
    Indexed:
    * 7733 methods
    * 1368 classes/modules
    Needed 0.8065 seconds
