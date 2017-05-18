---
tags: rspec wiki
---

[RSpec 1.0.3](/wiki/RSpec_1.0.3) was released on 25 May 2007. It is a bugfix release.

# Changes

-   Fixed \#11104 Website uses old specify notation
-   Applied \#11101 StringHelpers.starts\_with?(prefix) assumes a string parameter for \_prefix\_
-   Removed 'rescue nil' which was hiding errors in controller examples.
-   Fixed \#11075 controller specs fail when using mocha without integrated\_views
-   Fixed problem with redirect\_to failing incorrectly against edge rails.
-   Fixed \#11082 RspecResourceGenerator should be RspecScaffoldGenerator
-   Fixed \#10959 Focused Examples do not work for Behaviour defined with constant with modules

# See also

-   Official release notes: <http://rubyforge.org/frs/shownotes.php?release_id=11957>
-   Mailing list announcement: <http://rubyforge.org/pipermail/rspec-users/2007-May/001742.html>
-   [Upgrading to RSpec 1.0.3 on Mac OS X Tiger](/wiki/Upgrading_to_RSpec_1.0.3_on_Mac_OS_X_Tiger)
