---
tags: rspec wiki
---

These are notes I made while trying out the [rspec](/wiki/rspec) 0.9 beta 1 preview [gem](/wiki/gem). I later updated to 0.9.2, skipping over 0.9.1: see "[Upgrading to RSpec 0.9.2](/wiki/Upgrading_to_RSpec_0.9.2)".

# Steps

-   Pre-testing

I first double-checked that all [specs](/wiki/specs) were passing for [Walrus](/wiki/Walrus). This is a good test because there are a lot of specifications, many of them containing numerous assertions:

    # from the top level directory of the Walrus source tree
    rake spec

Output:

    Finished in 40.956492 seconds

    299 specifications, 0 failures

-   Download and installation

<!-- -->

    # download
    wget "http://rspec.rubyforge.org/rspec-0.9.0.gem"

    # install
    sudo gem install rspec-0.9.0.gem 

    # update fast doc index
    fastri-server -b

-   Run specs again.

<!-- -->

    rake spec

A huge number of errors were raised because deprecated methods like `should_raise` are no longer present.

    Finished in 11.389094 seconds

    299 examples, 157 failures
    rake aborted!

-   Run the translator \*

<!-- -->

    spec_translator spec spec

-   Visually inspect the changes \*

Using [SVK](/wiki/SVK):

    svk st

Output:

    M   spec/additions/module_spec.rb
    M   spec/grammar/additions/regexp_spec.rb
    M   spec/grammar/additions/string_spec.rb
    M   spec/grammar/and_predicate_spec.rb
    M   spec/grammar/continuation_wrapper_exception_spec.rb
    M   spec/grammar/match_data_wrapper_spec.rb
    M   spec/grammar/memoizing_cache_spec.rb
    M   spec/grammar/node_spec.rb
    M   spec/grammar/not_predicate_spec.rb
    M   spec/grammar/parser_state_spec.rb
    M   spec/grammar/parslet_choice_spec.rb
    M   spec/grammar/parslet_combining_spec.rb
    M   spec/grammar/parslet_merge_spec.rb
    M   spec/grammar/parslet_omission_spec.rb
    M   spec/grammar/parslet_repetition_spec.rb
    M   spec/grammar/parslet_sequence_spec.rb
    M   spec/grammar/parslet_spec.rb
    M   spec/grammar/predicate_spec.rb
    M   spec/grammar/proc_parslet_spec.rb
    M   spec/grammar/regexp_parslet_spec.rb
    M   spec/grammar/string_enumerator_spec.rb
    M   spec/grammar/string_parslet_spec.rb
    M   spec/grammar/symbol_parslet_spec.rb
    M   spec/grammar_spec.rb
    M   spec/parser_spec.rb

I tried rerunning the specs but this time the failure was instantaneous due to syntax errors introduced by the translator. These were fairly easy to fix: I checked out a clean copy of the source code and used [opendiff](/wiki/opendiff) to compare the old and new codebases, manually fixing the problems and using [BBEdit](/wiki/BBEdit) to semi-automate some of the more numerous, repetitive changes using a multi-file regular-expression-based find and replace.

See [this message](http://rubyforge.org/pipermail/rspec-users/2007-April/001120.html) posted to the [rspec-users](/wiki/rspec-users) mailing list for more details.

Now the specs were running again but I still had to eliminate some "warning: parenthesize argument(s) for future version" warnings produced because of lack of parentheses around some method parameters.

-   Update [TextMate](/wiki/TextMate) bundle

<!-- -->

    wget http://rspec.rubyforge.org/RSpec-0.9.0.tmbundle.tgz
    tar xzvf RSpec-0.9.0.tmbundle.tgz
    rm -rf "/Users/wincent/Library/Application Support/TextMate/Bundles/RSpec.tmbundle"
    mv RSpec.tmbundle /Users/wincent/Library/Application\ Support/TextMate/Bundles/

The bundle is really fantastic. It provides lots of shortcuts for writing specs which I confess I don't really use much; the outstanding feature is the ability to run specs from within [TextMate](/wiki/TextMate): hit Command-R and you can either run the current file as a [Ruby](/wiki/Ruby) file, run the focussed specification only (where the text insertion cursor is), run all specifications, or run the specs in the selected files/directories.

# See also

-   Announcement: <http://rubyforge.org/pipermail/rspec-users/2007-April/001108.html>
