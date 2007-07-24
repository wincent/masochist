---
tags: ruby.prof
---

[ruby-prof 0.5.2](/wiki/ruby-prof_0.5.2) was released on 19 July 2007.

# Changes in 0.5.2

-   This release includes a rails\_plugin that makes it easier to profile Rails applications. The plugin was mistakenly left out of the 0.5.1 release.
-   Add rails\_plugin into release.

# Changes in 0.5.1

I include the 0.5.1 change list here as well because 0.5.2 came hot on the heels of 0.5.1, and I didn't get a chance to install 0.5.1 beforehand:

-   Performance
    -   Significantly reduced the number of thread lookups by caching the last executed thread.
-   Fixes
    -   Properly escape method names in HTML reports
    -   Fix use of -m and --min-percent command line switches
    -   Default source file information to ruby\_runtime\#0 for c calls
    -   Moved rails\_plugin to top level so it is more obvious
    -   Updated rails\_plugin to write reports to the current Rails log directory
    -   Added additional tests

Source: <http://rubyforge.org/frs/shownotes.php?release_id=13053>

# See also

-   [Upgrading to ruby-prof 0.5.2 using RubyGems on Mac OS X Tiger](/wiki/Upgrading_to_ruby-prof_0.5.2_using_RubyGems_on_Mac_OS_X_Tiger)
-   Official release notes: <http://rubyforge.org/frs/shownotes.php?group_id=1814&release_id=13096>

