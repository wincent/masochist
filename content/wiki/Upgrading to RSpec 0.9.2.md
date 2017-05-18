---
tags: rspec wiki
---

Notes made while upgrading from the [rspec](/wiki/rspec) 0.9 beta preview [gem](/wiki/gem). (Note that there was [never any final release of 0.9](http://blog.davidchelimsky.net/articles/2007/05/01/rspec-0-9-is-finally-released), the team skipped straight ahead to 0.9.1; they then released 0.9.2 before I even had a chance to install 0.9.1.)

# Pre-testing

First double check that all [specs](/wiki/specs) are passing for [Walrus](/wiki/Walrus). This is a good check because there are a *lot* of specifications, many of them containing numerous assertions:

    # from the top-level directory of the Walrus source tree:
    rake spec

## Output

    1)
    'calling source_text on a message expression inside an echo directive should return the text of the expression only' FAILED
    expected 5, got 0 (using ==)
    ./spec/walrus_grammar/message_expression_spec.rb:29:

    Finished in 40.270591 seconds

    303 examples, 1 failure
    rake aborted!

Whoops! So there are some changes that have been made that cause one of the examples to fail.

# Download and install

    sudo gem install rspec

## Output

    Need to update 14 gems from http://gems.rubyforge.org
    ..............
    complete
    Successfully installed rspec-0.9.2
    Installing ri documentation for rspec-0.9.2...
    Installing RDoc documentation for rspec-0.9.2...

# Update [FastRI](/wiki/FastRI) index

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
    Indexing RI docs for rspec version 0.9.2.
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
    * 12068 methods
    * 2404 classes/modules
    Needed 3.210657 seconds

# Post-testing

    # run the specs again
    rake spec

## Output

    /usr/local/lib/ruby/gems/1.8/gems/rspec-0.9.2/lib/spec/dsl/behaviour_eval.rb:95:in `method_missing': undefined method `context_setup' for #<Spec::DSL::EvalModule:0x14872a8> (NoMethodError)

Evidently all calls to `context_setup` need to be changed to `before(:all)`. First try using the translator (see <http://rspec.rubyforge.org/upgrade.html> for more information):

    spec_translator spec spec

This produces a bunch of changes like these (excerpt only):

    === spec/compiler_spec.rb
    ==================================================================
    --- spec/compiler_spec.rb       (revision 6831)
    +++ spec/compiler_spec.rb       (local)
    @@ -15,7 +15,7 @@
         
         describe 'using the Compiler class' do
           
    -      context_setup do
    +      before(:all) do
             @parser = Parser.new
           end
           
    === spec/grammar/additions/string_spec.rb
    ==================================================================
    --- spec/grammar/additions/string_spec.rb       (revision 6831)
    +++ spec/grammar/additions/string_spec.rb       (local)
    @@ -35,7 +35,7 @@
         
         describe 'working with Unicode strings' do
           
    -      setup do
    +      before(:each) do
             @string = 'Unicode €!' # € (Euro) is a three-byte UTF-8 glyph: "\342\202\254"
           end

Now on running the specs again (`rake spec`):

    1)
    'calling source_text on a message expression inside an echo directive should return the text of the expression only' FAILED
    expected 5, got 0 (using ==)
    ./spec/walrus_grammar/message_expression_spec.rb:29:

    Finished in 39.999762 seconds

    303 examples, 1 failure
    rake aborted!

So, no regressions at least!

# [Autotest](/wiki/Autotest)

[Apparently](http://blog.davidchelimsky.net/articles/2007/05/01/rspec-0-9-1-and-autotest-zentest-3-5-2) [Autotest](/wiki/Autotest)/[RSpec](/wiki/RSpec) integration continues to improve. It is no longer necessary to customize your `~/.autotest` file in order to get things working properly. I therefore removed this chunk from the file:

    require 'rspec_rails_autotest'

    Autotest.add_hook :initialize do |autotest|
      if autotest.is_a? RspecRailsAutotest
        autotest.spec_command = 'script/spec --options spec/spec.opts' if File.exist? 'script/spec'
      end  
    end

Leaving only this (see "[Setting up autotest to use Growl](/wiki/Setting_up_autotest_to_use_Growl)" for more information):

    module Autotest::Growl
      
      def self.growl title, msg, img, pri=0, sticky=""
        system "growlnotify -n autotest --image #{img} -p #{pri} -m #{msg.inspect} #{title} #{sticky}"
      end

      Autotest.add_hook :ran_command do |at|
        results = [at.results].flatten.join("\n")
        output = results.slice(/(\d+)\s+examples?,\s*(\d+)\s+failures?/)
        if output
          if $~[2].to_i > 0
            growl "Test Results", "#{output}", "~/.rails_fail.png", 2
          else
            growl "Test Results", "#{output}", "~/.rails_ok.png"
          end
        end
      end
        
    end

Before proceeding I also upgraded to the latest version of [ZenTest](/wiki/ZenTest); see "[Upgrading to ZenTest 3.5.2 using RubyGems](/wiki/Upgrading_to_ZenTest_3.5.2_using_RubyGems)". To confirm that [Autotest](/wiki/Autotest) is still working:

    # from the top-level Walrus source directory
    autotest

David Chelimsky [here describes](http://blog.davidchelimsky.net/articles/2007/05/01/rspec-0-9-1-and-autotest-zentest-3-5-2) a patch that you can apply to get [ZenTest 3.5.2](/wiki/ZenTest_3.5.2) working without any further modifications. I'm hoping that 3.5.3 will incorporate the patch.

# [TextMate](/wiki/TextMate)

I had an older copy of the [RSpec](/wiki/RSpec) [TextMate](/wiki/TextMate) bundle installed under `~/Library/Application Support/TextMate/Bundles/` (see "[Trying out the rspec version 0.9 preview](/wiki/Trying_out_the_rspec_version_0.9_preview)"). This was not a [Subversion](/wiki/Subversion) checkout so I deleted it and performed a new checkout:

    cd ~/Library/Application\ Support/TextMate/Bundles
    rm -r RSpec.tmbundle
    svn co svn://rubyforge.org/var/svn/rspec/trunk/RSpec.tmbundle

# [Rails](/wiki/Rails)

I have a [Rails](/wiki/Rails) project where [rspec](/wiki/rspec) is installed as a plug-in. The `--force` switch is necessary in order to install over the previously installed copy:

    # from inside the Rails application top-level directory
    script/plugin install --force svn://rubyforge.org/var/svn/rspec/tags/REL_0_9_2/rspec
    script/plugin install --force svn://rubyforge.org/var/svn/rspec/tags/REL_0_9_2/rspec_on_rails

# Changelog for 0.9.2

-   Added some website love
-   Fixed \#10542 reverse predicate matcher syntax
-   Added a spec:translate Rake task to make 0.9 translation easier with Spec:Rails
-   Better translation of should\_redirect\_to
-   Fixed --colour support for Windows. This is a regression that was introduced in 0.9.1

# See also

-   Release notes for 0.9.2: <http://rubyforge.org/frs/shownotes.php?release_id=11471>
-   Release notes for 0.9.1 (skipped): <http://rubyforge.org/frs/shownotes.php?release_id=11423>
