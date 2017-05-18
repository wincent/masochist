---
tags: rubygems wiki
---

# All installed [gems](/wiki/gems)

    sudo gem cleanup

## Sample output

    Cleaning up installed gems...
    Attempting uninstall on rspec-0.8.1
    Successfully uninstalled rspec version 0.8.1
    Attempting uninstall on rubygems-update-0.9.1
    Successfully uninstalled rubygems-update version 0.9.1
    Attempting uninstall on rcov-0.7.0.1
    Successfully uninstalled rcov version 0.7.0.1
    Attempting uninstall on rspec-0.7.5.1
    Successfully uninstalled rspec version 0.7.5.1
    Removing spec
    Removing drbspec
    Attempting uninstall on rails-1.2.1
    Successfully uninstalled rails version 1.2.1
    Attempting uninstall on actionwebservice-1.2.1
    Successfully uninstalled actionwebservice version 1.2.1
    Attempting uninstall on ruby-debug-0.8
    Successfully uninstalled ruby-debug version 0.8
    Attempting uninstall on ruby-debug-base-0.8
    Successfully uninstalled ruby-debug-base version 0.8
    Attempting uninstall on rails-1.2.2
    Successfully uninstalled rails version 1.2.2
    Attempting uninstall on actionmailer-1.3.2
    Successfully uninstalled actionmailer version 1.3.2
    Attempting uninstall on actionwebservice-1.2.2
    Successfully uninstalled actionwebservice version 1.2.2
    Attempting uninstall on actionpack-1.13.2
    Successfully uninstalled actionpack version 1.13.2
    Attempting uninstall on rails-1.1.4
    Successfully uninstalled rails version 1.1.4
    Attempting uninstall on actionmailer-1.2.3
    Successfully uninstalled actionmailer version 1.2.3
    Attempting uninstall on actionwebservice-1.1.4
    Successfully uninstalled actionwebservice version 1.1.4
    Attempting uninstall on actionpack-1.12.3
    Successfully uninstalled actionpack version 1.12.3
    Attempting uninstall on rake-0.7.1
    Successfully uninstalled rake version 0.7.1
    Attempting uninstall on dhaka-2.0.1
    Successfully uninstalled dhaka version 2.0.1
    Attempting uninstall on ruby-debug-0.7.5
    Successfully uninstalled ruby-debug version 0.7.5
    Attempting uninstall on activerecord-1.15.1
    Successfully uninstalled activerecord version 1.15.1
    Attempting uninstall on sqlite3-ruby-1.1.0
    Successfully uninstalled sqlite3-ruby version 1.1.0
    Attempting uninstall on activerecord-1.15.2
    Successfully uninstalled activerecord version 1.15.2
    Attempting uninstall on activesupport-1.4.1
    Successfully uninstalled activesupport version 1.4.1
    Attempting uninstall on activerecord-1.14.3
    Successfully uninstalled activerecord version 1.14.3
    Attempting uninstall on activesupport-1.3.1
    Successfully uninstalled activesupport version 1.3.1
    Attempting uninstall on sqlite3-ruby-1.2.0
    Successfully uninstalled sqlite3-ruby version 1.2.0
    Attempting uninstall on actionmailer-1.3.1
    Successfully uninstalled actionmailer version 1.3.1
    Attempting uninstall on actionpack-1.13.1
    Successfully uninstalled actionpack version 1.13.1
    Attempting uninstall on activesupport-1.4.0
    Successfully uninstalled activesupport version 1.4.0
    Clean Up Complete

For another example of using this technique, see "[Upgrading to RSpec 1.0.4 on Mac OS X Tiger](/wiki/Upgrading_to_RSpec_1.0.4_on_Mac_OS_X_Tiger)".

# A specific [gem](/wiki/gem)

For example, to cleanup only [Dhaka](/wiki/Dhaka) [gems](/wiki/gems):

    sudo gem cleanup dhaka

## Sample output

    Cleaning up installed gems...
    Attempting uninstall on dhaka-2.1.0
    Successfully uninstalled dhaka version 2.1.0
    Clean Up Complete
