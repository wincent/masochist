---
tags: rspec tiger updates
cache_breaker: 1
---

These notes were made while upgrading from [RSpec 1.0.2](/wiki/RSpec_1.0.2) to [RSpec 1.0.3](/wiki/RSpec_1.0.3) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger).

Unlike the last upgrade (see "[Upgrading to RSpec 1.0.2 on Mac OS X Tiger](/wiki/Upgrading_to_RSpec_1.0.2_on_Mac_OS_X_Tiger)"), there was no corresponding [Spec::UI](/wiki/Spec%3a%3aUI) upgrade although I did simultaneously upgrade to [ZenTest 3.6.0](/wiki/ZenTest_3.6.0) (see "[Upgrading to ZenTest 3.6.0 using RubyGems](/wiki/Upgrading_to_ZenTest_3.6.0_using_RubyGems)").

# Pre-testing

First double check that all [specs](/wiki/specs) are passing for [Walrus](/wiki/Walrus). This is a good check because there are a *lot* of specifications, many of them containing numerous assertions:

    # from the top-level directory of the Walrus source tree:
    rake spec

# Download and install

    sudo gem install rspec

I had exactly the same problems that I did trying to install [ZenTest 3.6.0](/wiki/ZenTest_3.6.0); namely:

    ERROR:  While executing gem ... (OpenURI::HTTPError)
        404 Not Found

So either [RubyForge](/wiki/RubyForge) is having technical difficulties or there is some other problem between my local computer and the remote host (not impossible given that I believe that my [ISP](/wiki/ISP) interposes a transparent proxy between me and the outside world). So I decided to download and install manually just as I did with [ZenTest](/wiki/ZenTest):

    # downloading
    wget "http://rubyforge.iasi.roedu.net/files/rspec/rspec-1.0.3.gem"

    # installing
    sudo gem install rspec-1.0.3.gem

## Output

    Successfully installed rspec, version 1.0.3
    Installing ri documentation for rspec-1.0.3...
    Installing RDoc documentation for rspec-1.0.3...

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
    Indexing RI docs for rspec version 1.0.3.
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
    * 12488 methods
    * 2454 classes/modules
    Needed 1.264486 seconds

# Post-testing

    # run the specs again
    rake spec

# [TextMate](/wiki/TextMate)

    cd ~/Library/Application\ Support/TextMate/Bundles/RSpec.tmbundle
    svn up

## Output

There were no changes since the last [RSpec](/wiki/RSpec) release:

    At revision 2040.

## After updating

Normally, if [TextMate](/wiki/TextMate) is running, from the [TextMate](/wiki/TextMate) "Bundles" menu, open the "Bundle Editor" submenu and select "Reload Bundles". But in this case as there were no changes this should not be necessary.

# [Rails](/wiki/Rails)

I have a [Rails](/wiki/Rails) project where [rspec](/wiki/rspec) is installed as a plug-in. The `--force` switch is necessary in order to install over the previously installed copy:

    # from inside the Rails application top-level directory
    script/plugin install --force svn://rubyforge.org/var/svn/rspec/tags/REL_1_0_3/rspec
    script/plugin install --force svn://rubyforge.org/var/svn/rspec/tags/REL_1_0_3/rspec_on_rails

See if any other changes are necessary:

    script/generate rspec --pretend

## Output

There were no significant changes:

          exists  spec
    overwrite spec/spec_helper.rb? [Ynaqd] d
    --- script/../config/../spec/spec_helper.rb     2007-05-26 02:10:08.000000000 +0200
    +++ script/../config/../spec/spec_helper.rb.3495.0      2007-05-26 02:11:43.000000000 +0200
    @@ -20,5 +20,4 @@
       #
       # If you declare global fixtures, be aware that they will be declared
       # for all of your examples, even those that don't use them.
    -end
    -
    +end
    \ No newline at end of file
    retrying
    overwrite spec/spec_helper.rb? [Ynaqd] Y
           force  spec/spec_helper.rb
       identical  spec/spec.opts
       identical  previous_failures.txt
       identical  script/spec_server
       identical  script/spec

# [Autotest](/wiki/Autotest) notes

[RSpec 1.0.3](/wiki/RSpec_1.0.3) is listed as a bugfix release and so at first I thought it doesn't bring any new features. But [ZenTest 3.6.0](/wiki/ZenTest_3.6.0) is out and it incorporates a new mechanism that offers better integration with [RSpec](/wiki/RSpec). [David Chelimsky](/wiki/David_Chelimsky) had [previously said](http://rubyforge.org/pipermail/rspec-users/2007-May/001700.html) on the [rspec-users](/wiki/rspec-users) mailing list that the next release after this new [ZenTest](/wiki/ZenTest) version will include changes to work with thew new mechanism. This will involve undoing some of the set-up work previously undertaken and described in "[Setting up autotest](/wiki/Setting_up_autotest)" and "[Using autotest with Rails](/wiki/Using_autotest_with_Rails)".

To my surprise, I found out from the [mailing list post](http://rubyforge.org/pipermail/rspec-users/2007-May/001742.html) that [RSpec 1.0.3](/wiki/RSpec_1.0.3) *is* the release that brings better [autotest](/wiki/autotest) integration.

> ZenTest-3.6.0 boasts a new autodiscovery and plugin model that other frameworks can register with and plug into. RSpec-1.0.3 ships with the necessary plugin code, so all you need to do is download and go.

This is really fantastic news. I was pleasantly surprised to see that [Autotest](/wiki/Autotest) worked anyway without any changes, but I went ahead and removed the now unnecessary customization that I had previously done.

In the case of non-[Rails](/wiki/Rails) apps, this amounted to removing the `rspec_autotest.rb` file that I had installed in the project root. As long as your application is structured parallel `lib` and `spec` folders then it all should work automatically. In the case of [Rails](/wiki/Rails) apps no changes were necessary at all.
