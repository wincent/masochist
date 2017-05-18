---
tags: zentest wiki
---

[ZenTest 3.6.0](/wiki/ZenTest_3.6.0) is an important new release of the [ZenTest](/wiki/ZenTest) testing framework for [Ruby](/wiki/Ruby) that brings an improved auto-discovery mechanism for better integration with tools like [RSpec](/wiki/RSpec). It was released on 25 May 2007.

# Changes

-   4 major enhancements:
    -   New auto-discovery mechanism to make rspec and friends work independently!
    -   Moved and restructured camping and rails as plugins.
    -   Removed rspec - now packaged with rspec and/or as plugin.
    -   Changed the way FTM tests are named. Allows multiple matricies.
-   3 minor enhancements:
    -   Added :OK special result value to FTM.
    -   Hugh Sasse is awesome. Rdoc happiness.
    -   Parameterized emacs client command.
-   3 bug fixes:
    -   Dup load path because I'm dum.
    -   Fixed a lame syntax error in emacs.rb.
    -   autotest now builds command separator with '&' on windoze.

# See also

-   Official release notes: <http://rubyforge.org/frs/shownotes.php?release_id=11956>
-   Official weblog announcement: <http://blog.zenspider.com/archives/2007/05/zentest_version_360_has_been_released.html>
-   [Upgrading to ZenTest 3.6.0 using RubyGems](/wiki/Upgrading_to_ZenTest_3.6.0_using_RubyGems)
-   [Setting up autotest](/wiki/Setting_up_autotest)
-   [Using autotest with Rails](/wiki/Using_autotest_with_Rails)
-   [Setting up autotest to use Growl](/wiki/Setting_up_autotest_to_use_Growl)
-   [Behaviour-Driven Development with Rails](/wiki/Behaviour-Driven_Development_with_Rails)
