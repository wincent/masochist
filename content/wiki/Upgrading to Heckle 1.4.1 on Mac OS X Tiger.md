---
tags: tiger heckle updates
cache_breaker: 1
---

Notes made while upgrading from my previous install of [Heckle](/wiki/Heckle), [Heckle 1.4.0](/wiki/Heckle_1.4.0), to the new version, [Heckle 1.4.1](/wiki/Heckle_1.4.1), on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger).

# Installation

    sudo gem install heckle

## Output

    Successfully installed heckle-1.4.1
    Installing ri documentation for heckle-1.4.1...
    Installing RDoc documentation for heckle-1.4.1...

# Updating the [FastRI](/wiki/FastRI) index

    fastri-server -b

## Output

    Indexing RI docs for ParseTree version 1.7.0.
    Indexing RI docs for RubyInline version 3.6.3.
    Indexing RI docs for ZenTest version 3.6.0.
    Indexing RI docs for actionmailer version 1.3.3.
    Indexing RI docs for actionpack version 1.13.3.
    Indexing RI docs for actionwebservice version 1.2.3.
    Indexing RI docs for activerecord version 1.15.3.
    Indexing RI docs for activesupport version 1.4.2.
    Indexing RI docs for cmdparse version 2.0.2.
    Indexing RI docs for dhaka version 2.2.0.
    Indexing RI docs for diff-lcs version 1.1.2.
    Indexing RI docs for fastri version 0.3.0.1.
    Indexing RI docs for heckle version 1.4.1.
    Indexing RI docs for hoe version 1.2.1.
    Indexing RI docs for hpricot version 0.5.
    Indexing RI docs for meta_project version 0.4.15.
    Indexing RI docs for model_security_generator version 0.0.9.
    Indexing RI docs for rake version 0.7.3.
    Indexing RI docs for rcodetools version 0.5.0.0.
    Indexing RI docs for rcov version 0.8.0.2.
    Indexing RI docs for rspec version 1.0.5.
    Indexing RI docs for ruby-debug version 0.9.3.
    Indexing RI docs for ruby-debug-base version 0.9.3.
    Indexing RI docs for ruby-prof version 0.4.1.
    Indexing RI docs for ruby2ruby version 1.1.5.
    Indexing RI docs for rubyforge version 0.4.2.
    Indexing RI docs for rubygems version 0.9.2.
    Indexing RI docs for spec_ui version 0.2.3.
    Indexing RI docs for sqlite3-ruby version 1.2.1.
    Indexing RI docs for syntax version 1.0.0.
    Indexing RI docs for walrus version 0.1.
    Indexing RI docs for webgen version 0.4.4.
    Building index.
    Indexed:
    * 13176 methods
    * 2703 classes/modules
    Needed 1.743067 seconds

# Other upgrades

At the same time I performed a couple of other upgrades for software by the same author ([Ryan Davis](/wiki/Ryan_Davis)) which [Heckle](/wiki/Heckle) depends on:

-   [Upgrading to ruby2ruby 1.1.6 on Mac OS X Tiger](/wiki/Upgrading_to_ruby2ruby_1.1.6_on_Mac_OS_X_Tiger)
-   [Upgrading to ParseTree 1.7.1 on Mac OS X Tiger](/wiki/Upgrading_to_ParseTree_1.7.1_on_Mac_OS_X_Tiger)

