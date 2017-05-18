---
tags: rspec tiger updates wiki
cache_breaker: 1
---

These notes were made while upgrading from [Spec::UI 0.2.2](/wiki/Spec%3a%3aUI_0.2.2) to [Spec::UI 0.2.3](/wiki/Spec%3a%3aUI_0.2.3) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger).

# Upgrading

    sudo gem install spec_ui

## Output

    Bulk updating Gem source index for: http://gems.rubyforge.org
    Successfully installed spec_ui-0.2.3
    Installing ri documentation for spec_ui-0.2.3...
    Installing RDoc documentation for spec_ui-0.2.3...

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
    Indexing RI docs for spec_ui version 0.2.3.
    Indexing RI docs for sqlite3-ruby version 1.2.1.
    Indexing RI docs for walrus version 0.1.
    Indexing RI docs for zentest version 3.5.0.
    Building index.
    Indexed:
    * 12483 methods
    * 2452 classes/modules
    Needed 3.137868 seconds

# Release notes

The official [RSpec 1.0.1](/wiki/RSpec_1.0.1) release notes don't make any specific mention of changes in [Spec::UI 0.2.3](/wiki/Spec%3a%3aUI_0.2.3).

# Future upgrade notes

I'd like to be able to install [Spec::UI](/wiki/Spec%3a%3aUI) as a [Rails](/wiki/Rails) plug-in but I haven't yet heard any update to the [official word](http://rubyforge.org/pipermail/rspec-users/2007-May/001619.html) that this "would need some minor changes in order to work smoothly".

# See also

-   [Upgrading to RSpec 1.0.1 on Mac OS X Tiger](/wiki/Upgrading_to_RSpec_1.0.1_on_Mac_OS_X_Tiger)
-   [Upgrading to RSpec 1.0.2 on Mac OS X Tiger](/wiki/Upgrading_to_RSpec_1.0.2_on_Mac_OS_X_Tiger)
