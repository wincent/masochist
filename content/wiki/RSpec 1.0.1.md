---
tags: rspec wiki
---

[RSpec 1.0.1](/wiki/RSpec_1.0.1) was released on 24 May 2007. It was immediately followed up (the same day) by [RSpec 1.0.2](/wiki/RSpec_1.0.2).

# Release notes

> This is a maintenance release with mostly cleaning up, and one minor enhancement - Modules are automatically included when described directly.

# Changelog

-   Renamed Spec::Rails' rspec\_resource generator to rspec\_scaffold.
-   Removed Spec::Rails' be\_feed matcher since it's based on assert\_select\_feed which is not part of Rails (despite that docs for assert\_select\_encoded says it is).
-   describe(SomeModule) will include that module in the examples. Like for Spec::Rails helpers, but now also in core.
-   Header in HTML report will be yellow instead of red if there is one failed example
-   Applied \#10951 Odd instance variable name in rspec\_model template (patch from Kyle Hargraves)
-   Improved integration with autotest (Patches from Ryan Davis and David Goodland)
-   Some small fixes to make all specs run on JRuby.

# See also

-   Official release notes and changelog: <http://rubyforge.org/frs/shownotes.php?release_id=11892>
-   [Upgrading to RSpec 1.0.1 on Mac OS X Tiger](/wiki/Upgrading_to_RSpec_1.0.1_on_Mac_OS_X_Tiger)
-   [Upgrading to RSpec 1.0.2 on Mac OS X Tiger](/wiki/Upgrading_to_RSpec_1.0.2_on_Mac_OS_X_Tiger)
