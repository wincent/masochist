---
tags: rspec tiger updates
cache_breaker: 1
---

These notes were made while upgrading from [RSpec 1.0.4](/wiki/RSpec_1.0.4) to [RSpec 1.0.5](/wiki/RSpec_1.0.5) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger).

Once gain, like the last upgrade (see "[Upgrading to RSpec 1.0.4 on Mac OS X Tiger](/wiki/Upgrading_to_RSpec_1.0.4_on_Mac_OS_X_Tiger)"), there was no corresponding [Spec::UI](/wiki/Spec%3a%3aUI) upgrade.

# Pre-testing

First double check that all [specs](/wiki/specs) are passing for [Walrus](/wiki/Walrus). This is a good check because there are a *lot* of specifications, many of them containing numerous assertions:

    # from the top-level directory of the Walrus source tree:
    rake spec

# Download and install

    sudo gem install rspec

## Output

    Bulk updating Gem source index for: http://gems.rubyforge.org
    Successfully installed rspec-1.0.5
    Installing ri documentation for rspec-1.0.5...
    Installing RDoc documentation for rspec-1.0.5...

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
    Indexing RI docs for cmdparse version 2.0.2.
    Indexing RI docs for dhaka version 2.2.0.
    Indexing RI docs for diff-lcs version 1.1.2.
    Indexing RI docs for fastri version 0.3.0.1.
    Indexing RI docs for heckle version 1.4.0.
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
    * 13175 methods
    * 2703 classes/modules
    Needed 3.455168 seconds

# Post-testing

    # run the specs again
    rake spec

# [TextMate](/wiki/TextMate)

This time seeing as I had [some local changes](http://wincent.com/a/about/wincent/weblog/archives/2007/05/rspec_changes.php) to my [TextMate](/wiki/TextMate) bundle I didn't want to perform the normal upgrade procedure:

    cd ~/Library/Application\ Support/TextMate/Bundles/RSpec.tmbundle
    svn up

Instead, I wanted to preview what the `svn up` would do before actually trying it (see '[Previewing an "svn up" without actually doing it](/wiki/Previewing_an_%22svn_up%22_without_actually_doing_it)' for more info):

    # see uncommitted differences in my working copy
    svn st

    # see differences between my working copy and the current head
    svn diff -r HEAD

    # proceed with the update
    svn up

## Output

    U    Support/lib/spec_mate.rb
    U    Support/spec/fixtures/example_failing_spec.rb
    U    Support/spec/fixtures/example_passing_spec.rb
    U    Support/spec/spec_mate_spec.rb
    Updated to revision 2085.

## After updating

Normally, if [TextMate](/wiki/TextMate) is running, from the [TextMate](/wiki/TextMate) "Bundles" menu, open the "Bundle Editor" submenu and select "Reload Bundles".

# [Rails](/wiki/Rails)

I have a [Rails](/wiki/Rails) project where [rspec](/wiki/rspec) is installed as a plug-in. The `--force` switch is necessary in order to install over the previously installed copy. I decided to change from using specific tags this time, so instead of:

    # from inside the Rails application top-level directory
    script/plugin install --force svn://rubyforge.org/var/svn/rspec/tags/REL_1_0_5/rspec
    script/plugin install --force svn://rubyforge.org/var/svn/rspec/tags/REL_1_0_5/rspec_on_rails

I did:

    script/plugin install --force svn://rubyforge.org/var/svn/rspec/tags/CURRENT/rspec
    script/plugin install --force svn://rubyforge.org/var/svn/rspec/tags/CURRENT/rspec_on_rails

See if any other changes are necessary:

    script/generate rspec --pretend

There were no substantive changes (previewable by hitting `d`) so I opted not to replace any files (by hitting `n`).

# Cleaning up old versions of installed [gems](/wiki/gems)

I also took the opportunity to clean up some older versions of the installed [gems](/wiki/gems).

    sudo gem cleanup

## Output

    Cleaning up installed gems...
    Attempting uninstall on rspec-1.0.4
    Successfully uninstalled rspec version 1.0.4
    Clean Up Complete

For more information on removing old [gems](/wiki/gems), see "[Removing older versions of installed gems](/wiki/Removing_older_versions_of_installed_gems)".
