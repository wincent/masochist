---
tags: ruby.debug wiki
---

Much like [last time](/wiki/Upgrading_to_ruby-debug_0.8.1) but with a twist:

    sudo gem install ruby-debug

Output:

    Bulk updating Gem source index for: http://gems.rubyforge.org
    Select which gem to install for your platform (i686-darwin8.8.1)
     1. ruby-debug 0.8.1 (ruby)
     2. ruby-debug 0.8 (ruby)
     3. ruby-debug 0.7.5 (mswin32)
     4. ruby-debug 0.7.5 (ruby)
     5. Skip this gem
     6. Cancel installation
    > 6
    ERROR:  While executing gem ... (Gem::RemoteInstallationCancelled)
        Installation of ruby-debug cancelled.

Note that it tried to install the old version again. So I explicitly specified the desired version:

    sudo gem install ruby-debug -v 0.9

Output:

    Need to update 3 gems from http://gems.rubyforge.org
    ...
    complete
    Install required dependency ruby-debug-base? [Yn]  Y
    Select which gem to install for your platform (i686-darwin8.8.1)
     1. ruby-debug-base 0.9 (ruby)
     2. ruby-debug-base 0.9 (mswin32)
     3. Skip this gem
     4. Cancel installation
    > 1
    Building native extensions.  This could take a while...
    Successfully installed ruby-debug-0.9
    Successfully installed ruby-debug-base-0.9
    Installing ri documentation for ruby-debug-0.9...
    Installing ri documentation for ruby-debug-base-0.9...
    Installing RDoc documentation for ruby-debug-0.9...
    Installing RDoc documentation for ruby-debug-base-0.9...

Then update the [FastRI](/wiki/FastRI) index:

    fastri-server -b

# Changelog for 0.9

-   Kernel\#debugger method will start the debugger if it's not running.
-   Added Context\#stop\_reason method.
-   Calling a method with a block will create a new frame. This changes the behavior of 'next' command. So in order to step into a block, 'step' command must be used. That fixes [bug \#9629](/issues/9629).
-   Added the possibility to add a temporary context-specific breakpoint. Context\#breakpoint and Context\#set\_breakpoint methods are added.
-   'cont' command now accepts a numerical parameter which implements 'Continue until line' behavior.
-   Added new Context.frame\_class method
-   Added new 'framefullpath' setting.
-   Added new 'frameclassname' setting.
-   All Ruby's 'eval' and require/load methods create a new frame. Fixes [bug \#9686](/issues/9686).

# See also

-   Release notes: <http://rubyforge.org/frs/shownotes.php?release_id=10832>
