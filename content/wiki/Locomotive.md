---
tags: ruby rails wiki
---

As an alternative to manually [installing Ruby on Rail on Mac OS X Tiger](/wiki/installing_Ruby_on_Rail_on_Mac_OS_X_Tiger) pre-package drag-and-drop installs of everything required are available in the form of [Locomotive](/wiki/Locomotive). See the [Locomotive](/wiki/Locomotive) website:

<http://locomotive.raaum.org/>

# Command line operation

To operate on a [Locomotive](/wiki/Locomotive) bundle from the command line you need to set the appropriate environment variables (`RUBYLIB`, `DYLD_FALLBACK_LIBRARY_PATH` and `HOME`). First of all, choose "Command Line Tool…" from the [Locomotive](/wiki/Locomotive) "Help" menu and install a symbolic link to the [Locomotive](/wiki/Locomotive) command line tool.

You can then type the following command from inside a [Rails](/wiki/Rails) application root to see the necessary environment variables:

    locomotive bash-environment

You can set these environment variables, once again from inside a [Rails](/wiki/Rails) application root, using:

    command `locomotive bash-environment`
