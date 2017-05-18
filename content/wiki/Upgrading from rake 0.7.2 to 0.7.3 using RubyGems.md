---
tags: rubygems rake wiki
---

# Upgrading

    sudo gem install rake

## Output

    Bulk updating Gem source index for: http://gems.rubyforge.org
    Successfully installed rake-0.7.3
    Installing ri documentation for rake-0.7.3...
    Installing RDoc documentation for rake-0.7.3...

# Updating the [FastRI](/wiki/FastRI) database

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
    Indexing RI docs for ruby-debug version 0.9.2.
    Indexing RI docs for ruby-debug-base version 0.9.2.
    Indexing RI docs for ruby-prof version 0.4.1.
    Indexing RI docs for rubyforge version 0.4.1.
    Indexing RI docs for rubygems version 0.9.2.
    Indexing RI docs for sqlite3-ruby version 1.2.1.
    Indexing RI docs for walrus version 0.1.
    Indexing RI docs for zentest version 3.5.0.
    Building index.
    Indexed:
    * 12016 methods
    * 2398 classes/modules
    Needed 2.985365 seconds

# Release notes

    = Rake 0.7.3 Released

    Rake version 0.7.3 is a minor release that includes some refactoring to better
    support custom Rake applications.

    == Changes

    === New Features in Version 0.7.3

    * Added the +init+ and +top_level+ methods to make the creation of custom Rake applications a bit easier.  E.g.

        gem 'rake', ">= 0.7.3"
        require 'rake'

        Rake.application.init('myrake')
       
        task :default do
          something_interesting
        end
        
        Rake.application.top_level

    == What is Rake

    Rake is a build tool similar to the make program in many ways. But instead of
    cryptic make recipes, Rake uses standard Ruby code to declare tasks and
    dependencies. You have the full power of a modern scripting language built
    right into your build tool.

    == Availability

    The easiest way to get and install rake is via RubyGems ...

      gem install rake    (you may need root/admin privileges)

    Otherwise, you can get it from the more traditional places:

    Home Page:: http://rake.rubyforge.org/
    Download::  http://rubyforge.org/project/showfiles.php?group_id=50

    == Thanks

    As usual, it was input from users that drove a alot of these changes. The
    following people either contributed patches, made suggestions or made
    otherwise helpful comments. Thanks to ...

    -- Jim Weirich

-   <http://rubyforge.org/frs/shownotes.php?release_id=11243>
