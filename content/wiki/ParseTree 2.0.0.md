---
tags: parsetree wiki
---

The new version of [ParseTree](/wiki/ParseTree), [ParseTree 2.0.0](/wiki/ParseTree_2.0.0), was released on 1 August 2007.

# Changes

-   2 major enhancements:
    -   Rewrite methods completely rewritten. Rewriters:
        -   are no longer recursive.
        -   are no longer required to empty the sexp coming in.
        -   are depth first, so rewriter gets passed everything already normalized.
        -   keep rewriting until type doesn't change.
        -   are magical goodness.
    -   Added UnifiedRuby module to aid others in writing clean SexpProcessors:
        -   bmethod/dmethod/fbody unified with defn
            -   fcall/vcall unified with call
            -   resbody unified with itself (lots of different forms)
-   5 minor enhancements:
    -   Add [\#modules](/tags/modules) to Module.
    -   Add Sexp::for shortcut for Sexp.from\_array ParseTree.translate(...).
    -   Add parens for :block nodes as appropriate. May be overzealous.
    -   Made add\_to\_parse\_tree global for reuse by other C extensions.
    -   Made test\_ruby2ruby MUCH more rigorous with circular testing.
-   6 bug fixes:
    -   Added $TESTING = true to pt\_testcase.rb. OOPS!
    -   Fixed some circular bugs, mostly by hacking them out, wrt operator precidence.
    -   Fixed splat arg processing when arg has no name.
    -   Fixed trinary operator.
    -   Fixed BMETHOD with no arguments.
    -   Removed hacky "self." thing for defs at top level PT use.

# See also

-   Official [weblog](/wiki/weblog) announcement by the author ([Ryan Davis](/wiki/Ryan_Davis)): <http://blog.zenspider.com/archives/2007/08/parsetree_version_200_has_been_released.html>
-   [RubyForge](/wiki/RubyForge) release notes: <http://rubyforge.org/frs/shownotes.php?release_id=13381>
