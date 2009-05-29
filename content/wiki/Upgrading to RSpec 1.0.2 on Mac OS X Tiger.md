---
tags: rspec tiger updates
cache_breaker: 1
---

These notes were made while upgrading from [RSpec 1.0.0](/wiki/RSpec_1.0.0) to [RSpec 1.0.2](/wiki/RSpec_1.0.2) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger) (I skipped over [RSpec 1.0.1](/wiki/RSpec_1.0.1) because the 1.0.2 release came out before I had time to install it).

At the same time I upgraded to [Spec::UI 0.2.3](/wiki/Spec%3a%3aUI_0.2.3); see "[Upgrading to Spec::UI 0.2.3 on Mac OS X Tiger](/wiki/Upgrading_to_Spec%3a%3aUI_0.2.3_on_Mac_OS_X_Tiger)".

I used the same installation procedure that I employed when upgrading to [RSpec 1.0.0](/wiki/RSpec_1.0.0) (see "[Upgrading to RSpec 1.0.0 on Mac OS X Tiger](/wiki/Upgrading_to_RSpec_1.0.0_on_Mac_OS_X_Tiger)").

# Pre-testing

First double check that all [specs](/wiki/specs) are passing for [Walrus](/wiki/Walrus). This is a good check because there are a *lot* of specifications, many of them containing numerous assertions:

    # from the top-level directory of the Walrus source tree:
    rake spec

# Download and install

    sudo gem install rspec

## Output

    Successfully installed rspec-1.0.2
    Installing ri documentation for rspec-1.0.2...
    Installing RDoc documentation for rspec-1.0.2...

# Update [FastRI](/wiki/FastRI) index

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
    Indexing RI docs for rspec version 1.0.2.
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
    * 12489 methods
    * 2453 classes/modules
    Needed 1.237867 seconds

# Post-testing

    # run the specs again
    rake spec

# [TextMate](/wiki/TextMate)

    cd ~/Library/Application\ Support/TextMate/Bundles/RSpec.tmbundle
    svn up

## Output

There were no changes since the last [RSpec](/wiki/RSpec) release, so I wonder why they bother releasing a new version of the [TextMate](/wiki/TextMate) bundle (see <http://rubyforge.org/frs/?group_id=797>):

    At revision 2011.

## After updating

Normally, if [TextMate](/wiki/TextMate) is running, from the [TextMate](/wiki/TextMate) "Bundles" menu, open the "Bundle Editor" submenu and select "Reload Bundles". But in this case as there were no changes this should not be necessary.

# [Rails](/wiki/Rails)

I have a [Rails](/wiki/Rails) project where [rspec](/wiki/rspec) is installed as a plug-in. The `--force` switch is necessary in order to install over the previously installed copy:

    # from inside the Rails application top-level directory
    script/plugin install --force svn://rubyforge.org/var/svn/rspec/tags/REL_1_0_2/rspec
    script/plugin install --force svn://rubyforge.org/var/svn/rspec/tags/REL_1_0_2/rspec_on_rails

See if any other changes are necessary:

    script/generate rspec --pretend

## Output

          exists  spec
       identical  spec/spec_helper.rb
    overwrite spec/spec.opts? [Ynaqd] n
            skip  spec/spec.opts
       identical  previous_failures.txt
       identical  script/spec_server
       identical  script/spec

Seeing as I am using [version control](/wiki/version_control) and can revert painlessly, I decided to go ahead and see if there were any significant changes to the `spec.opts` file:

    $ script/generate rspec
          exists  spec
       identical  spec/spec_helper.rb
    overwrite spec/spec.opts? [Ynaqd] Y
           force  spec/spec.opts
       identical  previous_failures.txt
       identical  script/spec_server
       identical  script/spec
    $ svk diff spec
    === spec/spec.opts
    ==================================================================
    --- spec/spec.opts      (revision 7188)
    +++ spec/spec.opts      (local)
    @@ -1,6 +1,10 @@
     --colour
     --format
     progress
    +--format 
    +failing_examples:previous_failures.txt
    +--example
    +previous_failures.txt
     --loadby
     mtime
     --reverse
    $ svk revert spec/spec.opts
    Reverted spec/spec.opts

As you can see, there were no significant changes to the file, so I revert it to preserve the customizations that I had previously made (see "[Using autotest with Rails](/wiki/Using_autotest_with_Rails)").

# See also

-   [Upgrading to Spec::UI 0.2.3 on Mac OS X Tiger](/wiki/Upgrading_to_Spec%3a%3aUI_0.2.3_on_Mac_OS_X_Tiger)

