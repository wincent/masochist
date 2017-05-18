---
tags: rspec wiki
---

[RSpec 1.0.0](/wiki/RSpec_1.0.0) is a milestone new release of [RSpec](/wiki/RSpec). It was released on 18 May 2007. This is a very important release; as noted in [the official release notes](http://rubyforge.org/frs/shownotes.php?release_id=11800):

> The stake in the ground release. This represents a commitment to the API as it is. No significant backwards compatibility changes in the API are expected after this release.

# Changes in version 1.0.0

-   Fixed \#10923 have\_text matcher does not support should\_not
-   Fixed \#10673 should &gt; and should &gt;= broken
-   Applied \#10921 Allow verify\_rcov to accept greater than threshold coverage %'s via configuration
-   Applied \#10920 Added support for not implemented examples (Patch from Chad Humphries)
-   Patch to allow not implemented examples. This works by not providing a block to the example. (Patch from Chad Humphries, Ken Barker)
-   Yanked support for Rails 1.1.6 in Spec::Rails
-   RSpec.tmbundle uses CMD-SHIFT-R to run focused examples now.
-   Spec::Rails now bundles a spec:rcov task by default (suggestion from Kurt Schrader)
-   Fixed \#10814 Runner loads shared code, test cases require them again
-   Fixed \#10753 Global before and after
-   Fixed \#10774 Allow before and after to be specified in config II
-   Refactored Spec::Ui examples to use new global before and after blocks.
-   Added instructions about how to get Selenium working with Spec::Ui (spec\_ui/examples/selenium/README.txt)
-   Fixed \#10805 selenium.rb missing from gem?
-   Added rdocs explaining how to deal with errors in Rails' controller actions
-   Applied \#10770 Finer grained includes.
-   Fixed \#10747 Helper methods defined in shared specs are not visible when shared spec is used
-   Fixed \#10748 Shared descriptions in separate files causes 'already exists' error
-   Applied \#10698 Running with --drb executes specs twice (patch from Ruy Asan)

# See also

-   [Upgrading to RSpec 1.0.0 on Mac OS X Tiger](/wiki/Upgrading_to_RSpec_1.0.0_on_Mac_OS_X_Tiger)
-   [Upgrading to Spec::UI 0.2.2 on Mac OS X Tiger](/wiki/Upgrading_to_Spec%3a%3aUI_0.2.2_on_Mac_OS_X_Tiger)
