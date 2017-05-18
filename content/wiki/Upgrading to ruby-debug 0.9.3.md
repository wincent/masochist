---
tags: ruby.debug wiki
---

# Upgrading

    sudo gem install ruby-debug

## Output

    Bulk updating Gem source index for: http://gems.rubyforge.org
    Install required dependency ruby-debug-base? [Yn]  Y
    Building native extensions.  This could take a while...
    Successfully installed ruby-debug-0.9.3
    Successfully installed ruby-debug-base-0.9.3
    Installing ri documentation for ruby-debug-0.9.3...
    Installing ri documentation for ruby-debug-base-0.9.3...
    Installing RDoc documentation for ruby-debug-0.9.3...
    Installing RDoc documentation for ruby-debug-base-0.9.3...

# Updating the [FastRI](/wiki/FastRI) index

    fastri-server -b

## Output

    Indexing RI docs for ZenTest version 3.4.3.
    Indexing RI docs for actionmailer version 1.3.3.
    Indexing RI docs for actionpack version 1.13.3.
    Indexing RI docs for actionwebservice version 1.2.3.
    Indexing RI docs for activerecord version 1.15.3.
    Indexing RI docs for activesupport version 1.4.2.
    Indexing RI docs for dhaka version 2.1.0.
    Indexing RI docs for diff-lcs version 1.1.2.
    Indexing RI docs for fastri version 0.3.0.1.
    Indexing RI docs for hoe version 1.2.0.
    Indexing RI docs for model_security_generator version 0.0.9.
    Indexing RI docs for rake version 0.7.3.
    Indexing RI docs for rcodetools version 0.5.0.0.
    Indexing RI docs for rcov version 0.8.0.2.
    Indexing RI docs for rspec version 0.9.0.
    Indexing RI docs for ruby-debug version 0.9.3.
    Indexing RI docs for ruby-debug-base version 0.9.3.
    Indexing RI docs for ruby-prof version 0.4.1.
    Indexing RI docs for rubyforge version 0.4.1.
    Indexing RI docs for rubygems version 0.9.2.
    Indexing RI docs for sqlite3-ruby version 1.2.1.
    Indexing RI docs for walrus version 0.1.
    Indexing RI docs for zentest version 3.5.0.
    Building index.
    Indexed:
    * 12016 methods
    * 2399 classes/modules
    Needed 2.471534 seconds

# Changelog

-   From irb session Ctrl-C or 'cont' command continues execution without showing the debugger prompt.
-   Added Debugger.settings method to programatically modify command settings.
-   Bugfixes.

# See also

-   Release notes: <http://rubyforge.org/frs/shownotes.php?release_id=11354>
