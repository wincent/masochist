---
tags: rspec tiger updates wiki
cache_breaker: 1
---

These notes were made while upgrading from [Spec::UI 0.2.0](/wiki/Spec%3a%3aUI_0.2.0) to [Spec::UI 0.2.2](/wiki/Spec%3a%3aUI_0.2.2) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger).

# Upgrading

    sudo gem install spec_ui

## Output

    Successfully installed spec_ui-0.2.2
    Installing ri documentation for spec_ui-0.2.2...
    Installing RDoc documentation for spec_ui-0.2.2...

# Updating the [FastRI](/wiki/FastRI) index

    fastri-server -b

## Output

    Indexing RI docs for ParseTree version 1.7.0.
    Indexing RI docs for RubyInline version 3.6.3.
    Indexing RI docs for ZenTest version 3.5.2.
    Indexing RI docs for actionmailer version 1.3.3.
    Indexing RI docs for actionpack version 1.13.3.
    Indexing RI docs for actionwebservice version 1.2.3.
    Indexing RI docs for activerecord version 1.15.3.
    Indexing RI docs for activesupport version 1.4.2.
    Indexing RI docs for dhaka version 2.1.0.
    Indexing RI docs for diff-lcs version 1.1.2.
    Indexing RI docs for fastri version 0.3.0.1.
    Indexing RI docs for heckle version 1.4.0.
    Indexing RI docs for hoe version 1.2.0.
    Indexing RI docs for model_security_generator version 0.0.9.
    Indexing RI docs for rake version 0.7.3.
    Indexing RI docs for rcodetools version 0.5.0.0.
    Indexing RI docs for rcov version 0.8.0.2.
    Indexing RI docs for rspec version 1.0.0.
    Indexing RI docs for ruby-debug version 0.9.3.
    Indexing RI docs for ruby-debug-base version 0.9.3.
    Indexing RI docs for ruby-prof version 0.4.1.
    Indexing RI docs for ruby2ruby version 1.1.5.
    Indexing RI docs for rubyforge version 0.4.1.
    Indexing RI docs for rubygems version 0.9.2.
    Indexing RI docs for spec_ui version 0.2.2.
    Indexing RI docs for sqlite3-ruby version 1.2.1.
    Indexing RI docs for walrus version 0.1.
    Indexing RI docs for zentest version 3.5.0.
    Building index.
    Indexed:
    * 12483 methods
    * 2452 classes/modules
    Needed 1.284788 seconds

# Future upgrade notes

Note that with [Spec::UI 0.2.2](/wiki/Spec%3a%3aUI_0.2.2) I decided for the first time to try installing [Spec::UI](/wiki/Spec%3a%3aUI) as a [Rails](/wiki/Rails) plug-in (see "[Upgrading to RSpec 1.0.0 on Mac OS X Tiger](/wiki/Upgrading_to_RSpec_1.0.0_on_Mac_OS_X_Tiger)"). [Official word](http://rubyforge.org/pipermail/rspec-users/2007-May/001619.html) is that for this to actually work it "would need some minor changes in order to work smoothly". Eventually, this will mean that in addition to updating the [gem](/wiki/gem) for future releases, I will have to remember to upgrade copies of the plug-in installed inside [Rails](/wiki/Rails) applications.

# See also

-   [Upgrading to RSpec 1.0.0 on Mac OS X Tiger](/wiki/Upgrading_to_RSpec_1.0.0_on_Mac_OS_X_Tiger)
