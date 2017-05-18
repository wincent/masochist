---
tags: rspec tiger updates wiki
cache_breaker: 1
---

These notes were made while upgrading from [RSpec 0.9.4](/wiki/RSpec_0.9.4) to [RSpec 1.0.0](/wiki/RSpec_1.0.0) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger).

This release was actually quite unexpected (I was under the impression that the [RSpec](/wiki/RSpec) team didn't plan on hitting 1.0 anytime soon) but it is an extremely important release because it marks a commitment to freezing the [API](/wiki/API) and not making any compatibility-breaking changes.

I will use the same installation procedure that I employed when [upgrading to RSpec 0.9.4](/wiki/upgrading_to_RSpec_0.9.4).

# Pre-testing

First double check that all [specs](/wiki/specs) are passing for [Walrus](/wiki/Walrus). This is a good check because there are a *lot* of specifications, many of them containing numerous assertions:

    # from the top-level directory of the Walrus source tree:
    rake spec

# Download and install

    sudo gem install rspec

## Output

    Successfully installed rspec-1.0.0
    Installing ri documentation for rspec-1.0.0...
    Installing RDoc documentation for rspec-1.0.0...

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
    Indexing RI docs for rspec version 1.0.0.
    Indexing RI docs for ruby-debug version 0.9.3.
    Indexing RI docs for ruby-debug-base version 0.9.3.
    Indexing RI docs for ruby-prof version 0.4.1.
    Indexing RI docs for ruby2ruby version 1.1.5.
    Indexing RI docs for rubyforge version 0.4.1.
    Indexing RI docs for rubygems version 0.9.2.
    Indexing RI docs for spec_ui version 0.2.0.
    Indexing RI docs for sqlite3-ruby version 1.2.1.
    Indexing RI docs for walrus version 0.1.
    Indexing RI docs for zentest version 3.5.0.
    Building index.
    Indexed:
    * 12483 methods
    * 2452 classes/modules
    Needed 2.650911 seconds

# Post-testing

    # run the specs again
    rake spec

# [TextMate](/wiki/TextMate)

    cd ~/Library/Application\ Support/TextMate/Bundles/RSpec.tmbundle
    svn up

## Output

    U    Commands/Run Focussed Specification.tmCommand
    U    Support/lib/spec_mate.rb
    A    Support/spec/spec_helper.rb
    U    Support/spec/spec_mate_spec.rb
    D    Support/spec/vendor
    A    Support/spec/vendor
    A    Support/spec/vendor/plugins
    A    Support/spec/vendor/plugins/rspec
    A    Support/spec/vendor/plugins/rspec/lib
    Updated to revision 1987.

## After updating

If [TextMate](/wiki/TextMate) is running, from the [TextMate](/wiki/TextMate) "Bundles" menu, open the "Bundle Editor" submenu and select "Reload Bundles".

# [Rails](/wiki/Rails)

I have a [Rails](/wiki/Rails) project where [rspec](/wiki/rspec) is installed as a plug-in. The `--force` switch is necessary in order to install over the previously installed copy:

    # from inside the Rails application top-level directory
    script/plugin install --force svn://rubyforge.org/var/svn/rspec/tags/REL_1_0_0/rspec
    script/plugin install --force svn://rubyforge.org/var/svn/rspec/tags/REL_1_0_0/rspec_on_rails

See if any other changes are necessary:

    script/generate rspec --pretend

## Output

          exists  spec
       identical  spec/spec_helper.rb
       identical  spec/spec.opts
       identical  previous_failures.txt
       identical  script/spec_server
       identical  script/spec

## [Spec::UI](/wiki/Spec%3a%3aUI)

At this point I decided to see if I could install [Spec::UI](/wiki/Spec%3a%3aUI) as a plug-in as well, so as to keep all the important dependencies bundled with the [Rails](/wiki/Rails) application itself.

    script/plugin install svn://rubyforge.org/var/svn/rspec/tags/REL_1_0_0/spec_ui

[Official word](http://rubyforge.org/pipermail/rspec-users/2007-May/001619.html) is that for this to actually work it "would need some minor changes in order to work smoothly". So I decided to remove it until those changes have been made:

    # direct filesystem manipulation
    rm -r vendor/plugins/spec_ui

    # or using SVK
    svk rm vendor/plugins/spec_ui

# See also

-   [Upgrading to Spec::UI 0.2.2 on Mac OS X Tiger](/wiki/Upgrading_to_Spec%3a%3aUI_0.2.2_on_Mac_OS_X_Tiger)
