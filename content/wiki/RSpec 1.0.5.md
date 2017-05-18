---
tags: rspec wiki
---

[RSpec 1.0.5](/wiki/RSpec_1.0.5) is the new version of [RSpec](/wiki/RSpec) released on 5 June 2007. It is principally a release that improves the integration with [autotest](/wiki/autotest), including a couple patches by me. I'm particularly happy about the fix for [issue \#11337](/issues/11337).

My installation notes can be found in "[Upgrading to RSpec 1.0.5 on Mac OS X Tiger](/wiki/Upgrading_to_RSpec_1.0.5_on_Mac_OS_X_Tiger)".

# Changes

-   Fixed \#11378 fix to 10814 broke drb
-   Fixed \#11223 Unable to access flash from rails helper specs
-   Fixed \#11337 autotest runs specs redundantly
-   Fixed \#11258 windows: autotest won't run
-   Applied \#11253 Tweaks to autotest file mappings (Patch from Wincent Colaiuta)
-   Applied \#11252 Should be able to re-load file containing shared behaviours without raising an exception (Patch from Wincent Colaiuta)
-   Fixed \#11247 standalone autotest doesn't work because of unneeded autotest.rb
-   Applied \#11221 Autotest support does not work w/o Rails Gem installed (Patch from Josh Knowles)

# See also

-   Official release notes: <http://rubyforge.org/frs/shownotes.php?release_id=12187>
