---
tags: rspec wiki
---

From the official release notes posted to the [rspec-users](/wiki/rspec-users) mailing list:

    rspec version 1.3.0 has been released!

    * <http://rspec.info>
    * <http://rubyforge.org/projects/rspec>
    * <http://github.com/dchelimsky/rspec/wikis>
    * <rspec-users at rubyforge.org>
    * <rspec-devel at rubyforge.org>

    Behaviour Driven Development for Ruby.

    Changes:

    ### Version 1.3.0 / 2010-01-11

    * enhancements
      * capture ExpectationNotMet error by default in matcher DSL
        * supports wrapping other expectations
      * added match_unless_raises to matcher DSL
        * supports easy wrapping of t/u assertions in matchers
        * thanks to Chad Fowler and Glenn Vanderburg for the name
      * add chain to matcher DSL (Joe Ferris - #935)
        * see rdoc for Spec::Matchers
      * and_yield provides configurable eval_context
        * Eric Meyer & David Chelimsky
      * CTRL-C actually stops execution! (Bryan Helmkamp - #911)
      * make drb port configurable (Chris Flipse - #875)
      * changed raise_error to raise_exception (#933)
        * kept raise_error aliased, so this is completely
          backwards compatible

    * bug fixes
      * don't define top-level context() method when running in IRB (#899)
      * remove Ruby warning for uninitialized ivar (Bryan Helmkamp - #892)
      * fully qualify reference to Default (Alex Sharp - #895)
      * use runtime version of Test::Unit::VERSION in incompatibility message
        (Ryan Bigg - #916)
      * quote paths in RSpec's own specs so people running in paths with
        spaces in them can achieve green too (Ryan Bigg - #917)
      * ensure drb specs run when EADDRNOTAVAIL (Michael Klett - #881)
      * throw_symbol matcher correctly bubbles errors up (#918)
      * make Rakefile work without Cucumber installed (#919 - devrandom)
      * escape . in regexp (#925)
      * align be_true and be_false with Ruby's conditional semantics (#931)
      * print duplicate nested descriptions (when appropriate) (#936)

# See also

-   Release notes: <http://rubyforge.org/pipermail/rspec-users/2010-January/016219.html>
