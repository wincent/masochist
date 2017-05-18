---
tags: ruby.prof wiki
---

[ruby-prof 0.5.0](/wiki/ruby-prof_0.5.0) was released on 9 July 2007.

# Changes

## Enhancements

-   Added support for timing multi-threaded applications
-   Added support for 64 bit systems (patch from Diego 'Flameeyes' Petten)
-   Added suport for outputting data in the format used by KCacheGrind (patch from Carl Shimer)
-   Add filename and line numbers to call tree information (patch from Carl Shimer)
-   Added Visual Studio 2005 project file.
-   Added replace-progname switch, als rcov.
-   Added better support for recursive methods
-   Added better support for profiling Rails applications

## Bugfixes

-   Fixes bug when the type of an attached object (singleton) is inherited from T\_OBJECT as opposed to being a T\_OBJECT (identified by Francis Cianfrocca)
-   ruby-prof now works in IRB.
-   Fix sort order in reports.
-   Fixed rdoc compile error.
-   Fix tabs in erb template for graph html report on windows.

# See also

-   Official release notes: <http://rubyforge.org/frs/shownotes.php?release_id=12873>
-   Upgrade notes: [Upgrading to ruby-prof 0.5.0 using RubyGems on Mac OS X Tiger](/wiki/Upgrading_to_ruby-prof_0.5.0_using_RubyGems_on_Mac_OS_X_Tiger)
