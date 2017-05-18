---
tags: leopard rspec updates wiki
cache_breaker: 1
---

# Installation

    $ sudo gem install rspec
    Password:
    Bulk updating Gem source index for: http://gems.rubyforge.org
    Successfully installed rspec-1.1.1
    1 gem installed
    Installing ri documentation for rspec-1.1.1...
    Installing RDoc documentation for rspec-1.1.1...

# Updating the [FastRI](/wiki/FastRI) index

    $ fastri-server -b
    Building index.
    Indexed:
    * 7710 methods
    * 1364 classes/modules
    Needed 1.344825 seconds

# Updating the [TextMate](/wiki/TextMate) bundle

    $ svn up
    U    Commands/Run Focussed Specification.tmCommand
    U    Commands/Run Specifications in selected files or directories.tmCommand
    U    Commands/Run Specifications - Normal.tmCommand
    U    Snippets/Story.tmSnippet
    A    Snippets/Scenario.tmSnippet
    U    info.plist
    U    Support/lib/spec/mate/text_mate_formatter.rb
    U    Support/lib/spec/mate/switch_command.rb
    U    Support/lib/spec/mate/runner.rb
    U    Support/lib/spec/mate.rb
    U    Support/spec/spec/mate/switch_command_spec.rb
    U    Syntaxes/RSpec.tmLanguage
    Updated to revision 3195.
