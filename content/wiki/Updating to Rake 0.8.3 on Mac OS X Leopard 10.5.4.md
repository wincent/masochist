---
tags: rake updates
cache_breaker: 1
---

Decided to perform this upgrade when running `rake` started complaining like this whenever run:

    /Library/Ruby/Gems/1.8/gems/rake-0.8.2/lib/rake/gempackagetask.rb:13:Warning: Gem::manage_gems is deprecated and will be removed on or after March 2009.

This was a side-effect of updating to [RubyGems 1.3.0](/wiki/RubyGems_1.3.0) (see "[Updating to RubyGems 1.3.0 on Mac OS X Leopard 10.5.4](/wiki/Updating_to_RubyGems_1.3.0_on_Mac_OS_X_Leopard_10.5.4)").

Turns out that updating Rake didn't actually fix the warnings, so looks like we'll have to wait for a post-0.8.3 update.

    /Library/Ruby/Gems/1.8/gems/rake-0.8.3/lib/rake/gempackagetask.rb:13:Warning: Gem::manage_gems is deprecated and will be removed on or after March 2009.

## Installation

    $ sudo gem install rake
    Password:
    Successfully installed rake-0.8.3
    1 gem installed
    Installing ri documentation for rake-0.8.3...
    Installing RDoc documentation for rake-0.8.3...

## Updating the [FastRI](/wiki/FastRI) index

    $ fastri-server -b
    Building index.
    Indexed:
    * 7735 methods
    * 1369 classes/modules
    Needed 6.650519 seconds
