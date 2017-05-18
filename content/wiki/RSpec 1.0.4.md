---
tags: rspec wiki
---

[RSpec 1.0.4](/wiki/RSpec_1.0.4) is the new version of [RSpec](/wiki/RSpec) released on 29 May 2007. My installation notes can be found in "[Upgrading to RSpec 1.0.4 on Mac OS X Tiger](/wiki/Upgrading_to_RSpec_1.0.4_on_Mac_OS_X_Tiger)".

# Changes

-   Fixed \#11181 behaviour\_type scoping of config.before(:each) is not working
-   added mock argument constraint matchers (anything(), boolean(), an\_instance\_of(Type)) which work with rspec or mocha
-   added mock argument constraint matchers (any\_args(), no\_args()) which only work with rspec
-   deprecated rspec's symbol mock argument constraint matchers (:any\_args, :no\_args, :anything, :boolean, :numeric, :string)
-   Added tarball of rspec\_on\_rails to the release build to support folks working behind a firewall that blocks svn access.
-   Fixed \#11137 rspec incorrectly handles flash after resetting the session
-   Fixed \#11143 Views code for ActionController::Base\#render broke between 1.0.0 and 1.0.3 on Rails Edge r6731
-   Added raise\_controller\_errors for controller examples in Spec::Rails

# See also

-   Official release notes: <http://rubyforge.org/frs/shownotes.php?release_id=12037>
