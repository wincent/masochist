---
tags: zentest rubygems tiger updates
cache_breaker: 1
---

These notes were made while performing the upgrade to [ZenTest 3.6.0](/wiki/ZenTest_3.6.0) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger) via [RubyGems](/wiki/RubyGems).

# Upgrading

The normal upgrade technique:

    sudo gem install ZenTest

Didn't work:

    Need to update 32 gems from http://gems.rubyforge.org
    ................................
    complete
    Install required dependency hoe? [Yn]  Y
    ERROR:  While executing gem ... (OpenURI::HTTPError)
        404 Not Found

Explicitly doing a `sudo gem install hoe` yielded the same error. I checked and the latest released version of [hoe](/wiki/hoe) appears to be [hoe 1.2.1](/wiki/hoe_1.2.1), which I already have installed. So I decided to procede anyway without installing the dependency; to my surprise it failed before even asking me about the dependency:

    ERROR:  While executing gem ... (OpenURI::HTTPError)
        404 Not Found

So I decided to download the [gem](/wiki/gem) from [RubyForge](/wiki/RubyForge):

    wget "http://files.rubyforge.mmmultiworks.com/zentest/ZenTest-3.6.0.gem"

Output:

    --01:56:02--  http://files.rubyforge.mmmultiworks.com/zentest/ZenTest-3.6.0.gem
               => `ZenTest-3.6.0.gem'
    Resolving files.rubyforge.mmmultiworks.com... 216.243.185.119
    Connecting to files.rubyforge.mmmultiworks.com|216.243.185.119|:80... connected.
    HTTP request sent, awaiting response... 200 OK
    Length: 60,416 (59K) [text/plain]

    100%[========================================================================================>] 60,416        64.24K/s             

    01:56:03 (64.17 KB/s) - `ZenTest-3.6.0.gem' saved [60416/60416]

And install it manually:

    sudo gem install ZenTest-3.6.0.gem

Output:

    Successfully installed ZenTest, version 3.6.0
    Installing ri documentation for ZenTest-3.6.0...
    Installing RDoc documentation for ZenTest-3.6.0...

# Updating the [FastRI](/wiki/FastRI) index

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
    Indexing RI docs for rspec version 1.0.2.
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
    * 12490 methods
    * 2454 classes/modules
    Needed 1.229811 seconds

# [RSpec](/wiki/RSpec) update

At the same time I upgraded to the latest release of [RSpec](/wiki/RSpec), [RSpec 1.0.3](/wiki/RSpec_1.0.3). See "[Upgrading to RSpec 1.0.3 on Mac OS X Tiger](/wiki/Upgrading_to_RSpec_1.0.3_on_Mac_OS_X_Tiger)".

# Cleaning up older versions

Normally older versions could be cleaned up using `sudo gem cleanup` as described in "[Removing older versions of installed gems](/wiki/Removing_older_versions_of_installed_gems)". This won't work for [ZenTest](/wiki/ZenTest) because up until [ZenTest 3.5.0](/wiki/ZenTest_3.5.0) the [gem](/wiki/gem) was named `zentest-3.5.0` (all lowercase) whereas subsequent versions where named in [CamelCase](/wiki/CamelCase) (`ZenTest-3.6.0`). As such, doing a `sudo gem cleanup` will leave both [ZenTest 3.6.0](/wiki/ZenTest_3.6.0) *and* [ZenTest 3.5.0](/wiki/ZenTest_3.5.0) on your system; it is necessary to manually uninstall [ZenTest 3.5.0](/wiki/ZenTest_3.5.0) in this case:

    # explicitly specify version, just in case
    sudo gem uninstall zentest --version '3.5.0'

## Output

    Successfully uninstalled zentest version 3.5.0
