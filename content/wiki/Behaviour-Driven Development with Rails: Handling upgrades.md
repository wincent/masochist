---
tags: rspec rails wiki
---

The general procedure for handling upgrades in the [Behaviour-Driven Development](/wiki/Behaviour-Driven_Development) cycle fits within the [continuous integration](/wiki/continuous_integration) style.

Prior to the upgrade, all [specs](/wiki/specs) should be passing (as verified by [Autotest](/wiki/Autotest)).

We stop [Autotest](/wiki/Autotest) and then perform the upgrade (or upgrades). For example, see:

-   [Upgrading to Heckle 1.4.0 on Mac OS X Tiger](/wiki/Upgrading_to_Heckle_1.4.0_on_Mac_OS_X_Tiger)
-   [Upgrading to RSpec 1.0.0 on Mac OS X Tiger](/wiki/Upgrading_to_RSpec_1.0.0_on_Mac_OS_X_Tiger)
-   [Upgrading to Spec::UI 0.2.2 on Mac OS X Tiger](/wiki/Upgrading_to_Spec%3a%3aUI_0.2.2_on_Mac_OS_X_Tiger)

Finally, we resume [Autotest](/wiki/Autotest) and everything should just keep working.

# See also

-   [Behaviour-Driven Development with Rails](/wiki/Behaviour-Driven_Development_with_Rails)
