---
tags: ruby.debug wiki
---

# Installing

    sudo gem install ruby-debug

Note that unlike [last time](/wiki/Upgrading_to_ruby-debug_0.9) it was not necessary to explicitly specify the desired version with the `-v` switch to [RubyGems](/wiki/RubyGems).

## Output

    Need to update 11 gems from http://gems.rubyforge.org
    ...........
    complete
    Install required dependency ruby-debug-base? [Yn]  Y
    Select which gem to install for your platform (i686-darwin8.8.1)
     1. ruby-debug-base 0.9.1 (mswin32)
     2. ruby-debug-base 0.9.1 (ruby)
     3. Skip this gem
     4. Cancel installation
    > 2
    Building native extensions.  This could take a while...
    Successfully installed ruby-debug-0.9.1
    Successfully installed ruby-debug-base-0.9.1
    Installing ri documentation for ruby-debug-0.9.1...
    Installing ri documentation for ruby-debug-base-0.9.1...
    Installing RDoc documentation for ruby-debug-0.9.1...
    Installing RDoc documentation for ruby-debug-base-0.9.1...

# Cleaning up stale [gems](/wiki/gems)

    sudo gem cleanup

## Output

    Cleaning up installed gems...
    Attempting uninstall on ruby-debug-0.8.1
    Successfully uninstalled ruby-debug version 0.8.1
    Attempting uninstall on ruby-debug-base-0.8.1
    Successfully uninstalled ruby-debug-base version 0.8.1
    Attempting uninstall on ruby-debug-0.9
    Successfully uninstalled ruby-debug version 0.9
    Attempting uninstall on ruby-debug-base-0.9
    Successfully uninstalled ruby-debug-base version 0.9
    Clean Up Complete

# Updating the [FastRI](/wiki/FastRI) index

    fastri-server -b

## Output

    Indexing RI docs for actionmailer version 1.3.3.
    Indexing RI docs for actionpack version 1.13.3.
    Indexing RI docs for actionwebservice version 1.2.3.
    Indexing RI docs for activerecord version 1.15.3.
    Indexing RI docs for activesupport version 1.4.2.
    Indexing RI docs for dhaka version 2.1.0.
    Indexing RI docs for diff-lcs version 1.1.2.
    Indexing RI docs for fastri version 0.3.0.1.
    Indexing RI docs for model_security_generator version 0.0.9.
    Indexing RI docs for rake version 0.7.2.
    Indexing RI docs for rcodetools version 0.5.0.0.
    Indexing RI docs for rcov version 0.8.0.2.
    Indexing RI docs for rspec version 0.8.2.
    Indexing RI docs for ruby-debug version 0.9.1.
    Indexing RI docs for ruby-debug-base version 0.9.1.
    Indexing RI docs for ruby-prof version 0.4.1.
    Indexing RI docs for rubygems version 0.9.2.
    Indexing RI docs for sqlite3-ruby version 1.2.1.
    Indexing RI docs for walrus version 0.1.
    Building index.
    Indexed:
    * 11793 methods
    * 2345 classes/modules
    Needed 2.3793 seconds

# Changes for [0.9.1](/wiki/ruby-debug_0.9.1)

-   Fixed incorrent stack calculation.
-   Context\#stop\_next= method aliased as Context\#step.
-   Added the 'force' parameter to Context\#step\_over.
-   Added the 'force' parameter to Context\#step.
-   'next+/step+' commands forces to move to another line
-   Added a new 'forcestep' setting.

# See also

-   Release notes: <http://rubyforge.org/frs/shownotes.php?release_id=10859>
