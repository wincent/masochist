---
tags: rubygems ruby.debug wiki
---

Updating is easy:

    sudo gem install ruby-debug

Output should resemble:

    Need to update 14 gems from http://gems.rubyforge.org
    ..............
    complete
    Select which gem to install for your platform (i686-darwin8.8.1)
     1. ruby-debug 0.8 (ruby)
     2. ruby-debug 0.7.5 (mswin32)
     3. ruby-debug 0.7.5 (ruby)
     4. ruby-debug 0.7.4 (mswin32)
     5. ruby-debug 0.7.4 (ruby)
     6. Skip this gem
     7. Cancel installation
    > 1
    Install required dependency ruby-debug-base? [Yn]  Y
    Select which gem to install for your platform (i686-darwin8.8.1)
     1. ruby-debug-base 0.8 (ruby)
     2. ruby-debug-base 0.8 (mswin32)
     3. Skip this gem
     4. Cancel installation
    > 1
    Building native extensions.  This could take a while...
    Successfully installed ruby-debug-0.8
    Successfully installed ruby-debug-base-0.8
    Installing ri documentation for ruby-debug-0.8...
    Installing ri documentation for ruby-debug-base-0.8...
    Installing RDoc documentation for ruby-debug-0.8...
    Installing RDoc documentation for ruby-debug-base-0.8...

Or to update all installed [gems](/wiki/gems) at once:

    sudo gem update

Then updating the [FastRI](/wiki/FastRI) index (if you have it installed):

    fastri-server -b

Should produce output similar to:

    Indexing RI docs for actionmailer version 1.3.3.
    Indexing RI docs for actionpack version 1.13.3.
    Indexing RI docs for actionwebservice version 1.2.3.
    Indexing RI docs for activerecord version 1.15.3.
    Indexing RI docs for activesupport version 1.4.2.
    Indexing RI docs for dhaka version 2.1.0.
    Indexing RI docs for diff-lcs version 1.1.2.
    Indexing RI docs for fastri version 0.3.0.1.
    Indexing RI docs for rake version 0.7.2.
    Indexing RI docs for rcodetools version 0.5.0.0.
    Indexing RI docs for rcov version 0.8.0.2.
    Indexing RI docs for rspec version 0.8.2.
    Indexing RI docs for ruby-debug version 0.8.
    Indexing RI docs for ruby-debug-base version 0.8.
    Indexing RI docs for ruby-prof version 0.4.1.
    Indexing RI docs for rubygems version 0.9.2.
    Indexing RI docs for sqlite3-ruby version 1.2.1.
    Indexing RI docs for walrus version 0.1.
    Building index.
    Indexed:
    * 11670 methods
    * 2326 classes/modules
    Needed 2.259192 seconds

# See also

-   Release notes: <http://rubyforge.org/frs/shownotes.php?release_id=10392>
