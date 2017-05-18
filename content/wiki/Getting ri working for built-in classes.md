---
tags: ruby wiki
---

Ever since installing [Ruby](/wiki/Ruby) I was puzzled as to why [ri](/wiki/ri) couldn't find the basic documentation for built-in classes like `String`. Typing `ri String` would give me documentation for third-party additions to the `String` class (for example, from [Rails](/wiki/Rails)) but would show nothing about the standard methods.

I finally discovered the cause when playing with the command-line switches for [ri](/wiki/ri) and trying:

    ri --site String

This yielded:

    No ri documentation found in:
         /usr/local/share/ri/1.8/site

    Was rdoc run to create documentation?


    Installing Documentation
    ------------------------
    'ri' uses a database of documentation built by the RDoc utility.

    So, how do you install this documentation on your system? It depends on
    how you installed Ruby.

    _If you installed Ruby from source files_ (that is, if it some point you
    typed 'make' during the process :), you can install the RDoc
    documentation yourself. Just go back to the place where you have your
    Ruby source and type

       make install-doc

    You'll probably need to do this as a superuser, as the documentation is
    installed in the Ruby target tree (normally somewhere under
    +/usr/local+.

So I went back and did this as described in "[Building and installing Ruby 1.8.5 on Mac OS X Tiger](/wiki/Building_and_installing_Ruby_1.8.5_on_Mac_OS_X_Tiger)". Now `ri String` works as expected.

# See also

-   [FastRI](/wiki/FastRI).
