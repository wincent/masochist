---
tags: tiger ruby.prof updates
cache_breaker: 1
---

These notes were made while upgrading to [ruby-prof 0.5.0](/wiki/ruby-prof_0.5.0) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger).

# Upgrading

    sudo gem install ruby-prof

## Output

    Bulk updating Gem source index for: http://gems.rubyforge.org
    Select which gem to install for your platform (i686-darwin8.8.1)
     1. ruby-prof 0.5.0 (ruby)
     2. ruby-prof 0.5.0 (mswin32)
     3. ruby-prof 0.4.1 (ruby)
     4. ruby-prof 0.4.1 (mswin32)
     5. Skip this gem
     6. Cancel installation
    > 1
    Building native extensions.  This could take a while...
    Successfully installed ruby-prof-0.5.0
    Installing ri documentation for ruby-prof-0.5.0...

    No definition for prof_get_cpu_frequency

    No definition for prof_set_cpu_frequency
    Installing RDoc documentation for ruby-prof-0.5.0...

    No definition for prof_get_cpu_frequency

    No definition for prof_set_cpu_frequency

# Updating the [FastRI](/wiki/FastRI) index

    fastri-server -b

## Output

    Indexing RI docs for ParseTree version 1.7.1.
    Indexing RI docs for RubyInline version 3.6.3.
    Indexing RI docs for ZenTest version 3.6.0.
    Indexing RI docs for actionmailer version 1.3.3.
    Indexing RI docs for actionpack version 1.13.3.
    Indexing RI docs for actionwebservice version 1.2.3.
    Indexing RI docs for activerecord version 1.15.3.
    Indexing RI docs for activesupport version 1.4.2.
    Indexing RI docs for cmdparse version 2.0.2.
    Indexing RI docs for dhaka version 2.2.1.
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
    Indexing RI docs for ruby-prof version 0.5.0.
    Indexing RI docs for ruby2ruby version 1.1.6.
    Indexing RI docs for rubyforge version 0.4.2.
    Indexing RI docs for rubygems version 0.9.2.
    Indexing RI docs for spec_ui version 0.2.3.
    Indexing RI docs for sqlite3-ruby version 1.2.1.
    Indexing RI docs for syntax version 1.0.0.
    Indexing RI docs for walrus version 0.1.
    Indexing RI docs for webgen version 0.4.4.
    Building index.
    Indexed:
    * 13204 methods
    * 2706 classes/modules
    Needed 3.856442 seconds
