---
tags: dynamic.linker macos wiki
cache_breaker: 1
---

**Note:** *this article is actually about the `@executable_path`, `@load_path` and `@rpath` install paths used by the linker on [Mac OS X](/wiki/Mac_OS_X); wiki titles can't include underscores, however, because they are ambiguous with spaces.*

# Absolute paths

Useful for frameworks installed in shared locations. Example:

-   Install path: `/Library/Frameworks/Foo.framework/Versions/A/Foo`

# `@executable_path`

Useful for frameworks embedded inside applications, because it allows you to specify the location of the framework relative to the application's executable:

-   Install path: `@executable_path/../Frameworks/Foo.framework/Versions/A/Foo`
-   Application location: `/Applications/Foo.app`
-   Executable path: `/Applications/Foo.app/Contents/MacOS`
-   Framework location: `/Applications/Foo.app/Contents/Frameworks/Foo.framework`
-   Linker puts all this together to figure out that the framework binary can be found at: `/Applications/Foo.app/Contents/MacOS/../Frameworks/Foo.framework/Versions/A/Foo`

# @loader\_path

Available from [Mac OS X](/wiki/Mac_OS_X) 10.4 [Tiger](/wiki/Tiger) onwards; useful for frameworks embedded inside plug-ins, because it allows you to specify the location of the framework relative to the plug-in's code (remember, plug-ins may not actually know where they are going to be installed, relative to the application, so knowing `@executable_path` doesn't help us in this case):

-   Install path: `@loader_path/../Frameworks/Foo.framework/Versions/A/Foo`
-   Application location: `/Applications/Foo.app`
-   Plug-in location: `/Library/Application Support/Foo/Plug-Ins/Bar.bundle`
-   Executable path: `/Applications/Foo.app/Contents/MacOS`
-   Loader path: `/Library/Application Support/Foo/Plug-Ins/Bar.bundle/Contents/MacOS`
-   Framework location: `/Library/Application Support/Foo/Plug-Ins/Bar.bundle/Contents/Frameworks/Foo.framework`
-   Linker puts all this together to figure out that the framework binary can be found at: `/Library/Application Support/Foo/Plug-Ins/Bar.bundle/Contents/MacOS/../Frameworks/Foo.framework/Versions/A/Foo`

Note that if the "loader" is an application rather than a plug-in, the `@loader_path` ends up being equivalent to `@executable_path`.

# `@rpath`

New in [Mac OS X](/wiki/Mac_OS_X) 10.5 [Leopard](/wiki/Leopard) is `@rpath`. Key points:

-   `@rpath` instructs the dynamic linker to search a list of paths in order to locate the framework
-   critically, this list is embedded in the loading application
-   this means that a single framework with `@rpath/Foo.framework/Versions/A/Foo` can be made to work in a number of different ways; that is, you are effectively no longer limited by the choice of specifying your "install path" using *either* `@executable_path` *or* `@loader_path`
-   the down side: you now have to pass additional linker flags when building the host application (eg. `-rpath @executable_path/../Frameworks` or `/Library/Frameworks`; note that specifying *both* will cause the dynamic linker to try looking in both locations)

# Sources

-   Nice overview: <http://www.mikeash.com/pyblog/friday-qa-2009-11-06-linking-and-install-names.html>
-   Docs for using PFiddlesoft Frameworks (I've never used these, but the manual itself makes some nice general points about using frameworks): <http://pfiddlesoft.com/frameworks/downloads/Assistive_Application_Programming_Guide.pdf>
