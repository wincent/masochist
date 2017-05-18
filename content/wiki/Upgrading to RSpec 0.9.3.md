---
tags: rspec wiki
---

# Pre-testing

First double check that all [specs](/wiki/specs) are passing for [Walrus](/wiki/Walrus). This is a good check because there are a *lot* of specifications, many of them containing numerous assertions:

    # from the top-level directory of the Walrus source tree:
    rake spec

## Output

    .....................................................................................................................................................................................................................................................................................................F.........

    1)
    'calling source_text on a message expression inside an echo directive should return the text of the expression only' FAILED
    expected 5, got 0 (using ==)
    ./spec/walrus_grammar/message_expression_spec.rb:29:

    Finished in 41.898591 seconds

    303 examples, 1 failure
    rake aborted!

# Download and install

    sudo gem install rspec

## Output

    Need to update 36 gems from http://gems.rubyforge.org
    ....................................
    complete
    Successfully installed rspec-0.9.3
    Installing ri documentation for rspec-0.9.3...
    Installing RDoc documentation for rspec-0.9.3...

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
    Indexing RI docs for rspec version 0.9.3.
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
    * 12059 methods
    * 2404 classes/modules
    Needed 2.430271 seconds

# Post-testing

    # run the specs again
    rake spec

## Output

Should be (and is) identical to the pre-intallation output:

    .....................................................................................................................................................................................................................................................................................................F.........

    1)
    'calling source_text on a message expression inside an echo directive should return the text of the expression only' FAILED
    expected 5, got 0 (using ==)
    ./spec/walrus_grammar/message_expression_spec.rb:29:

    Finished in 36.943312 seconds

    303 examples, 1 failure
    rake aborted!

# [Autotest](/wiki/Autotest)

David Chelimsky [here describes](http://blog.davidchelimsky.net/articles/2007/05/01/rspec-0-9-1-and-autotest-zentest-3-5-2) a patch that you can apply to get [ZenTest 3.5.2](/wiki/ZenTest_3.5.2) working without any further modifications. I'm hoping that 3.5.3 will incorporate the patch. In the meantime I decided to reinstall a patched version of [ZenTest](/wiki/ZenTest) over my existing unpatched 3.5.2 installation.

    wget http://rubyforge.org/frs/download.php/20212/ZenTest-3.5.2.tgz
    tar xzvf ZenTest-3.5.2.tgz 
    cd ZenTest-3.5.2/
    wget http://blog.davidchelimsky.net/files/ZenTest-3.5.2-rspec.patch
    patch -p0 < ZenTest-3.5.2-rspec.patch

## [ZenTest](/wiki/ZenTest) build

    rake gem

### Output

      Successfully built RubyGem
      Name: ZenTest
      Version: 3.5.2
      File: ZenTest-3.5.2.gem

## [ZenTest](/wiki/ZenTest) install

    sudo gem install pkg/ZenTest-3.5.2.gem

### Output

    Successfully installed ZenTest, version 3.5.2
    Installing ri documentation for ZenTest-3.5.2...
    Installing RDoc documentation for ZenTest-3.5.2...

## Testing

    # from the top-level Walrus source directory
    autotest

# [TextMate](/wiki/TextMate)

    cd ~/Library/Application\ Support/TextMate/Bundles/RSpec.tmbundle
    svn up

## Output

No changes:

    At revision 1925.

# [Rails](/wiki/Rails)

I have a [Rails](/wiki/Rails) project where [rspec](/wiki/rspec) is installed as a plug-in. The `--force` switch is necessary in order to install over the previously installed copy:

    # from inside the Rails application top-level directory
    script/plugin install --force svn://rubyforge.org/var/svn/rspec/tags/REL_0_9_3/rspec
    script/plugin install --force svn://rubyforge.org/var/svn/rspec/tags/REL_0_9_3/rspec_on_rails

# Changelog for 0.9.3

-   Fixed \#10594 Failing Custom Matcher show NAME NOT GENERATED description
-   describe(SomeType, "\#message") will not add a space: "SomeType\#message" (likewise for '.')
-   describe(SomeType, "message") will have a decription with a space: "SomeType message"
-   Applied \#10566 prepend\_before and prepend\_after callbacks
-   Applied \#10567 Call setup and teardown using before and after callbacks

# See also

-   Release notes: <http://rubyforge.org/frs/shownotes.php?release_id=11541>
