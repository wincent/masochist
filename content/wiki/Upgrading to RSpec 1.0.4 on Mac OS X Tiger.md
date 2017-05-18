---
tags: rspec tiger updates wiki
cache_breaker: 1
---

These notes were made while upgrading from [RSpec 1.0.3](/wiki/RSpec_1.0.3) to [RSpec 1.0.4](/wiki/RSpec_1.0.4) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger).

Like the last upgrade (see "[Upgrading to RSpec 1.0.3 on Mac OS X Tiger](/wiki/Upgrading_to_RSpec_1.0.3_on_Mac_OS_X_Tiger)"), there was no corresponding [Spec::UI](/wiki/Spec%3a%3aUI) upgrade.

# Pre-testing

First double check that all [specs](/wiki/specs) are passing for [Walrus](/wiki/Walrus). This is a good check because there are a *lot* of specifications, many of them containing numerous assertions:

    # from the top-level directory of the Walrus source tree:
    rake spec

# Download and install

    sudo gem install rspec

## Output

    Bulk updating Gem source index for: http://gems.rubyforge.org
    Successfully installed rspec-1.0.4
    Installing ri documentation for rspec-1.0.4...
    Installing RDoc documentation for rspec-1.0.4...

# Update [FastRI](/wiki/FastRI) index

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
    Indexing RI docs for dhaka version 2.1.0.
    Indexing RI docs for diff-lcs version 1.1.2.
    Indexing RI docs for fastri version 0.3.0.1.
    Indexing RI docs for heckle version 1.4.0.
    Indexing RI docs for hoe version 1.2.1.
    Indexing RI docs for model_security_generator version 0.0.9.
    Indexing RI docs for rake version 0.7.3.
    Indexing RI docs for rcodetools version 0.5.0.0.
    Indexing RI docs for rcov version 0.8.0.2.
    Indexing RI docs for rspec version 1.0.4.
    Indexing RI docs for ruby-debug version 0.9.3.
    Indexing RI docs for ruby-debug-base version 0.9.3.
    Indexing RI docs for ruby-prof version 0.4.1.
    Indexing RI docs for ruby2ruby version 1.1.5.
    Indexing RI docs for rubyforge version 0.4.2.
    Indexing RI docs for rubygems version 0.9.2.
    Indexing RI docs for spec_ui version 0.2.3.
    Indexing RI docs for sqlite3-ruby version 1.2.1.
    Indexing RI docs for walrus version 0.1.
    Indexing RI docs for zentest version 3.5.0.
    Building index.
    Indexed:
    * 12498 methods
    * 2456 classes/modules
    Needed 2.74803 seconds

# Post-testing

    # run the specs again
    rake spec

# [TextMate](/wiki/TextMate)

    cd ~/Library/Application\ Support/TextMate/Bundles/RSpec.tmbundle
    svn up

## Output

There were no changes since the last [RSpec](/wiki/RSpec) release:

    At revision 2060.

## After updating

Normally, if [TextMate](/wiki/TextMate) is running, from the [TextMate](/wiki/TextMate) "Bundles" menu, open the "Bundle Editor" submenu and select "Reload Bundles". But in this case as there were no changes this should not be necessary.

# [Rails](/wiki/Rails)

I have a [Rails](/wiki/Rails) project where [rspec](/wiki/rspec) is installed as a plug-in. The `--force` switch is necessary in order to install over the previously installed copy:

    # from inside the Rails application top-level directory
    script/plugin install --force svn://rubyforge.org/var/svn/rspec/tags/REL_1_0_4/rspec
    script/plugin install --force svn://rubyforge.org/var/svn/rspec/tags/REL_1_0_4/rspec_on_rails

See if any other changes are necessary:

    script/generate rspec --pretend

## Output

          exists  spec
    overwrite spec/spec_helper.rb? [Ynaqd] d
    --- script/../config/../spec/spec_helper.rb     2007-05-29 16:25:38.000000000 +0200
    +++ script/../config/../spec/spec_helper.rb.22958.0     2007-05-30 11:59:44.000000000 +0200
    @@ -8,6 +8,9 @@
       config.use_transactional_fixtures = true
       config.use_instantiated_fixtures  = false
       config.fixture_path = RAILS_ROOT + '/spec/fixtures'
    +  config.before(:each, :behaviour_type => :controller) do
    +    raise_controller_errors
    +  end
     
       # You can declare fixtures for each behaviour like this:
       #   describe "...." do
    \ No newline at end of file
    retrying
    overwrite spec/spec_helper.rb? [Ynaqd] n
           force  spec/spec_helper.rb
       identical  spec/spec.opts
       identical  previous_failures.txt
       identical  script/spec_server
       identical  script/spec

So I decided to proceed with the change:

    script/generate rspec

# Cleaning up old versions of installed [gems](/wiki/gems)

I also took the opportunity to clean up some older versions of the installed [gems](/wiki/gems).

    sudo gem cleanup

## Output

    Cleaning up installed gems...
    Attempting uninstall on rspec-0.9.0
    Successfully uninstalled rspec version 0.9.0
    Attempting uninstall on spec_ui-0.2.0
    Successfully uninstalled spec_ui version 0.2.0
    Attempting uninstall on rspec-1.0.2
    Successfully uninstalled rspec version 1.0.2
    Attempting uninstall on rspec-0.8.2
    Successfully uninstalled rspec version 0.8.2
    Attempting uninstall on rspec-1.0.3
    Successfully uninstalled rspec version 1.0.3
    Attempting uninstall on rspec-0.9.2
    Successfully uninstalled rspec version 0.9.2
    Attempting uninstall on spec_ui-0.2.2
    Successfully uninstalled spec_ui version 0.2.2
    Attempting uninstall on rspec-0.9.3
    Successfully uninstalled rspec version 0.9.3
    Attempting uninstall on rspec-0.9.4
    Successfully uninstalled rspec version 0.9.4
    Attempting uninstall on ruby-debug-0.9.1
    Successfully uninstalled ruby-debug version 0.9.1
    Attempting uninstall on ruby-debug-0.9.2
    Successfully uninstalled ruby-debug version 0.9.2
    Attempting uninstall on ruby-debug-base-0.9.1
    Successfully uninstalled ruby-debug-base version 0.9.1
    Attempting uninstall on ruby-debug-base-0.9.2
    Successfully uninstalled ruby-debug-base version 0.9.2
    Attempting uninstall on heckle-1.3.0
    Successfully uninstalled heckle version 1.3.0
    Attempting uninstall on ZenTest-3.5.2
    Successfully uninstalled ZenTest version 3.5.2
    Attempting uninstall on ZenTest-3.4.3
    Successfully uninstalled ZenTest version 3.4.3
    Attempting uninstall on hoe-1.2.0
    Successfully uninstalled hoe version 1.2.0
    Attempting uninstall on rubyforge-0.4.1
    Successfully uninstalled rubyforge version 0.4.1
    Attempting uninstall on rake-0.7.2
    Successfully uninstalled rake version 0.7.2
    Attempting uninstall on rspec-1.0.0
    Successfully uninstalled rspec version 1.0.0
    Clean Up Complete

For more information on removing old [gems](/wiki/gems), see "[Removing older versions of installed gems](/wiki/Removing_older_versions_of_installed_gems)".
