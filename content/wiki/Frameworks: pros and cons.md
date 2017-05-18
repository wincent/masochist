---
tags: wiki
---

Frameworks allow you to package frequently-used functionality into an easily re-usable package.

# Pros

-   Write the code once, use it in multiple apps
    -   This not only enables you to work faster; but also:
    -   Means that bug fixes get made once and all apps immediately pick them up
-   Encourages the creation of modular, well-encapsulated code and designs
-   Loadable at runtime without linking, allowing all sorts of otherwise very difficult stuff (like unit testing)
-   If the framework is installed in a shared location then uses less disk space because the code is stored in a single location rather than in every app which uses it

# Cons

-   More complex and therefore slower build procedure
-   Not possible to pull out a single class at a time, must use whole frameworks at a time

# Alternatives

Will Shipley has been [rather outspoken](http://wilshipley.com/blog/2005/11/frameworks-are-teh-suck-err.html) against frameworks in the past:

> I discourage developers from creating frameworks as a method of sharing code, because they encourage code bloat, increase launch times, complicate the developer's fix/compile/link/debug cycle, and require extra effort in setting up correct and useful developer and deployment builds.

Up until recently I've respectfully had to disagree with Will on this point. For me the benefits far outweighed the costs. Over the last three years I have invested a huge amount of time developing a number of frameworks for shared use among my applications:

-   [WOTest](/wiki/WOTest): a unit testing framework
-   [WODebug](/wiki/WODebug): the lowest-level functionality, likely to be of interest to almost any app
-   [WOBase](/wiki/WOBase): the next level up, functionality of relatively common interest
-   [WOBezel](/wiki/WOBezel): bezel support and some custom window types for apps which want it
-   [WOHotKey](/wiki/WOHotKey): hot key support for apps which want it

As time has gone by I've been increasingly frustrated by the following issues:

-   Build times are much longer for apps which depend on multiple frameworks
-   [WOBase](/wiki/WOBase) in particular has grown very large but if I am working on a small project including WOBase will cause it to bloat considerably (not possible to pull out a single class and use it)
-   When writing a command line tool I generally can't link against any of these frameworks because I can't be sure that my users will have a copy of my framework installed on their machines (I've always just shipped my frameworks embedded in the applications that use them, for ease of installation)

There are some cases in which it is still entirely appropriate in my view to use frameworks. For example:

-   [WOTest](/wiki/WOTest) is for unit testing and it is necessary for it to be packaged up in a framework so that it can be injected at run time.
-   [WODebug](/wiki/WODebug) needs to be a loadable bundle because it contains resources (like a crash reporter application) and not just code
-   Likewise for [WOBezel](/wiki/WOBezel) because it contains resources: it is very convenient to link against the framework and have the framework transparently mediate access to, or make use of, those resources
-   [WOHotKey](/wiki/WOHotKey) has such a discrete area of functionality that it can be added to any product without having to worry about bloat or inefficiency

So the major problem area is [WOBase](/wiki/WOBase). Due to its size I've found myself avoiding linking against it in small projects, but that then means I have to re-write the code for the basic functionality that I want to use, and in doing so I've lost what for me was the number one advantage of using frameworks. So what are the alternatives?

## Copy and paste

I wouldn't recommend this technique to anyone: copying and pasting useful code between projects. If you fix bugs or make other improvements to the code later on you then have to remember all the places where it occurs and apply the fix multiple times.

## Drag and drop

Almost as bad as the "copy and paste" technique, in this version you drag and drop entire files between projects. The same problem applies, although on a lesser scale, because if you make a change to the file in one project them all the others will be out of sync.

## A common code folder

Store all your code in a shared folder and `#include` or `#import` the desired files in each project. You avoid synchronization problems with this method but you also introduce a element of fragility in your file system structure; basically all your projects need to be in the same location relative to the shared code folder, or you need to hard code the path to the shared code folder in the build settings for each project.

## [Subversion](/wiki/Subversion) externals

My recent [Rails](/wiki/Rails) experiments introduced me to a feature of [Subversion](/wiki/Subversion) that I'd never used before and which I believe is *the* answer. By using [Subversion](/wiki/Subversion) externals you can store your commonly used code in a central repository, and reference it from multiple projects without having to worry about drag-and-drop, copying-by-hand, or hard-coded or relative paths.

From the Subversion book:

> Sometimes it is useful to construct a working copy that is made out of a number of different checkouts. For example, you may want different subdirectories to come from different locations in a repository, or perhaps from different repositories altogether. You could certainly setup such a scenario by hand—using svn checkout to create the sort of nested working copy structure you are trying to achieve. But if this layout is important for everyone who uses your repository, every other user will need to perform the same checkout operations that you did. Fortunately, Subversion provides support for externals definitions. An externals definition is a mapping of a local directory to the URL—and possibly a particular revision—of a versioned resource.

I'm starting a new project to replace [WOBase](/wiki/WOBase). It's called [WOCommon](/wiki/WOCommon). [WOCommon](/wiki/WOCommon) contains very small, modular pieces of functionality encapsulated in classes or in task-specific categories:

-   common file 1
-   common file 2
-   common file 3 etc

A project which wishes to use a piece of functionality in [WOCommon](/wiki/WOCommon) will have the following structure:

-   project file 1
-   project file 2
-   project file 3
-   `WOCommon` subdirectory:
    -   common file 1
    -   common file 2
    -   common file 3 etc

The `WOCommon` subdirectory is automatically managed by [Subversion](/wiki/Subversion) because of a `svn:externals` property set on the parent folder:

    svn propset svn:externals "WOCommon URL_to_WOCommon_repository" path_to_project_working_copy

The project can then just `#include` or `#import` the desired piece of functionality, no more, no less. Build times are fast because only the required files are compiled and linked, but you can also easily search the entire code base because all of the files will be indexed by [Xcode](/wiki/Xcode).

Projects can pull in updates to [WOCommon](/wiki/WOCommon) by doing a simple `svn up`. If you make changes to the files in that directory and then do a `commit` they will be automatically ignored; but you can explicitly commit them if you wish. This is a a "best of both worlds" approach because it allows you to easily keep in sync, make local customizations if you want, and push them out globally if you want.

I'm planning to make multiple branches in the [WOCommon](/wiki/WOCommon) repository (see [Supporting multiple OS versions](/wiki/Supporting_multiple_OS_versions)), probably just labelled "jaguar", "panther", "tiger", and "leopard". At the time of writing, "tiger" and "trunk" will really just be the same. Unit tests will go in the `tests` subdirectory of [WOCommon](/wiki/WOCommon).

### Best practice with Subversion externals

I originally thought that thanks to [two-level namespaces](/wiki/two-level_namespaces) multiple frameworks would be able to use code from [WOCommon](/wiki/WOCommon) if necessary without causing link-time errors. Although this is true for some types of symbol there are still some run-time complications. Thanks to the way that classes and categories are in the global namespace in the Objective-C runtime you really can't load the same class or category into memory more than once.

Let's take an example such as a simple [NSString](/wiki/NSString) category. You can't include the category in both [WOCommon](/wiki/WOCommon) and [WOBase](/wiki/WOBase), although you might want to. If you get [WOBase](/wiki/WOBase) to pull the category in from [WOCommon](/wiki/WOCommon) then you can no longer use it from other code; that is, you'd have to put it in [WOBase](/wiki/WOBase) *instead of* in [WOCommon](/wiki/WOCommon) and that kind of defeats the purpose of [WOCommon](/wiki/WOCommon). You could also try to use the [BUNDLE\_LOADER](/wiki/BUNDLE_LOADER) build setting to allow you to use the code from [WOCommon](/wiki/WOCommon) within the framework without linking to it at build time, but that would require you to explicitly add the code to the bundle loader target (the host application) and would negatively impact the usability of the framework (the framework should be "just drop in and go" otherwise it is probably not worth packaging it up in that way).

This leads to best practice paradigm: that frameworks should be very small and very compact and do one thing and one thing only ([WOHotKey](/wiki/WOHotKey) and [WOBezel](/wiki/WOBezel) are good examples). Pretty much everything else belongs in [WOCommon](/wiki/WOCommon). This means that eventually [WOBase](/wiki/WOBase) will go away.

### Localization in WOCommon

A problem I've yet to overcome is the question of how to handle localization in [WOCommon](/wiki/WOCommon). Frameworks allow you to easily bundle `Localizable.strings` files inside the frameworks, but where would you store localizable strings in code that uses [WOCommon](/wiki/WOCommon)? To date only four alternatives come to mind and none of them are particularly attractive:

1.   Use [NSLocalizedString](/wiki/NSLocalizedString) in [WOCommon](/wiki/WOCommon) source files and expect each including project to maintain localizable strings files independently (downside: you lose the benefits of localizing once, centrally)
2.  Restrict [WOCommon](/wiki/WOCommon) code to a low level, below the user interface, such that it never needs to display any user-visible strings (downside: severely limits the scope of [WOCommon](/wiki/WOCommon))
3.  Include localizable strings files in [WOCommon](/wiki/WOCommon), which programmers would then need to remember to include in their projects (downside: centralized but untidy as it increases the number of files involved)
4.  Don't make any provisions for localization (not acceptable)

In the end, I think I am going to go with a variant of option 3 above, "Include localizable strings files in [WOCommon](/wiki/WOCommon)":

Will add a new shell script target to [WOCommon](/wiki/WOCommon), "WOCommon.strings"; the sole purpose of this target will be to scan all [WOCommon](/wiki/WOCommon) source files using [genstrings](/wiki/genstrings) and construct an appropriate localizable strings file called `WOCommon.strings`. Programmers need only remember to include a single strings file in other projects (and one for each other language variation as they become available), although it is possible that the number of localizable strings in the file(s) is significantly higher than actually needed for a given including project. Will need to use `NSLocalizedStringForTableInBundle` to ensure compatibility across a wide range of including projects; using an appropriate class (and `+[NSBundle bundleForClass:]`) to always locate the appropriate bundle. The problem of potential duplicate keys is easily avoided given that key names are largely arbitrary (ie. if two classes need the same string can use two different keys even though the translation is the same). Can store all localizations in a single header file so as to make it easier to avoid duplicate keys.
