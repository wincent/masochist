---
tags: heckle os.x wiki
---

Notes made installing [Heckle 1.3.0](/wiki/Heckle_1.3.0) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger).

# Installation

    $ sudo gem install heckle
    Bulk updating Gem source index for: http://gems.rubyforge.org
    Install required dependency ruby2ruby? [Yn]  Y
    Install required dependency ParseTree? [Yn]  Y
    Install required dependency RubyInline? [Yn]  Y
    Successfully installed heckle-1.3.0
    Successfully installed ruby2ruby-1.1.5
    Successfully installed ParseTree-1.7.0
    Successfully installed RubyInline-3.6.3
    Installing ri documentation for heckle-1.3.0...
    Installing ri documentation for ruby2ruby-1.1.5...
    Installing ri documentation for ParseTree-1.7.0...
    Installing ri documentation for RubyInline-3.6.3...
    Installing RDoc documentation for heckle-1.3.0...
    Installing RDoc documentation for ruby2ruby-1.1.5...
    Installing RDoc documentation for ParseTree-1.7.0...
    Installing RDoc documentation for RubyInline-3.6.3...

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
    Indexing RI docs for heckle version 1.3.0.
    Indexing RI docs for hoe version 1.2.0.
    Indexing RI docs for model_security_generator version 0.0.9.
    Indexing RI docs for rake version 0.7.3.
    Indexing RI docs for rcodetools version 0.5.0.0.
    Indexing RI docs for rcov version 0.8.0.2.
    Indexing RI docs for rspec version 0.9.4.
    Indexing RI docs for ruby-debug version 0.9.3.
    Indexing RI docs for ruby-debug-base version 0.9.3.
    Indexing RI docs for ruby-prof version 0.4.1.
    Indexing RI docs for ruby2ruby version 1.1.5.
    Indexing RI docs for rubyforge version 0.4.1.
    Indexing RI docs for rubygems version 0.9.2.
    Indexing RI docs for sqlite3-ruby version 1.2.1.
    Indexing RI docs for walrus version 0.1.
    Indexing RI docs for zentest version 3.5.0.
    Building index.
    Indexed:
    * 12423 methods
    * 2440 classes/modules
    Needed 2.870875 seconds

# Usage

For an example of [Heckle](/wiki/Heckle) in use, see "[Behaviour-Driven Development with Rails](/wiki/Behaviour-Driven_Development_with_Rails)".
