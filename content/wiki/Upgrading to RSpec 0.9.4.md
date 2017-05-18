---
tags: rspec wiki
---

# Pre-testing

First double check that all [specs](/wiki/specs) are passing for [Walrus](/wiki/Walrus). This is a good check because there are a *lot* of specifications, many of them containing numerous assertions:

    # from the top-level directory of the Walrus source tree:
    rake spec

# Download and install

    sudo gem install rspec

## Output

    Bulk updating Gem source index for: http://gems.rubyforge.org
    Successfully installed rspec-0.9.4
    Installing ri documentation for rspec-0.9.4...
    Installing RDoc documentation for rspec-0.9.4...

# Update [FastRI](/wiki/FastRI) index

    fastri-server -b

## Output

    Indexing RI docs for ZenTest version 3.5.2.
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
    Indexing RI docs for rspec version 0.9.4.
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
    * 12066 methods
    * 2405 classes/modules
    Needed 2.788788 seconds

# Post-testing

    # run the specs again
    rake spec

# [TextMate](/wiki/TextMate)

    cd ~/Library/Application\ Support/TextMate/Bundles/RSpec.tmbundle
    svn up

## Output

No changes:

    At revision 1925.

# [Rails](/wiki/Rails)

I have a [Rails](/wiki/Rails) project where [rspec](/wiki/rspec) is installed as a plug-in. The `--force` switch is necessary in order to install over the previously installed copy:

    # from inside the Rails application top-level directory
    script/plugin install --force svn://rubyforge.org/var/svn/rspec/tags/REL_0_9_4/rspec
    script/plugin install --force svn://rubyforge.org/var/svn/rspec/tags/REL_0_9_4/rspec_on_rails

# Notes for 0.9.4

> This release introduces massive improvements to Spec::Ui - the user interface functional testing extension to RSpec. There are also some minor bug fixes to the RSpec core.

# Changelog for 0.9.4

-   Massive improvements to Spec::Ui. Complete support for all Watir's ie.xxx(how, what) methods. Inline screenshots and HTML.
-   Reactivated --timeout, which had mysteriously been deactivated in a recent release.
-   Fixed \#10669 Kernel\#describe override does not cover Kernel\#context
-   Applied \#10636 Added spec for OptionParser in Runner (Patch from Scott Taylor)
-   Added \#10516 should\_include should be able to accept multiple items
-   Applied \#10631 redirect\_to matcher doesn't respect request.host (Patch from Tim Lucas)
-   Each formatter now flushes their own IO. This is to avoid buffering of output.
-   Fixed \#10670 IVarProxy\#delete raises exception when instance variable does not exist

# See also

-   Release notes: <http://rubyforge.org/frs/shownotes.php?release_id=11611>
