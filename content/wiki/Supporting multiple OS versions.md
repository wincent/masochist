---
tags: wiki
---

# Drop support for older OS versions

In this strategy you just drop support for older versions and start building for the newer version(s) only. To date I've never done this with any of my products but I have allowed new products to have higher version requirements than earlier products; for example: the first and second apps to be released, [Synergy](/wiki/Synergy) and [Install](/wiki/Install), run on Mac OS X 10.2.8; later apps, such as [Synergy Advance](/wiki/Synergy_Advance), [WinSwitch](/wiki/WinSwitch) and [WinHex](/wiki/WinHex), run on Mac OS X 10.3.9; at least one app that I currently have in development (as of 10 August 2006) is for Mac OS X 10.4 only.

## Pros

-   Easiest of the migration strategies
-   A single version works for all users

## Cons

-   Effectively abandons users running older OS versions
-   Reduces the market segment of potential buyers

# Lowest common denominator approach

In this approach you build for all versions of the OS but limit yourself to features available on all versions. This means that you must avoid new features introduced on later versions, and also old features deprecated in later versions. This is the approach that I have used pretty much exclusively up until now; as a consequence it means that older apps like [Synergy](/wiki/Synergy) cannot make use of [Cocoa Bindings](/wiki/Cocoa_Bindings), and my [Panther](/wiki/Panther)-and-up apps don't get to use [Core Data](/wiki/Core_Data), for example.

## Pros

-   Relatively easy from a technical standpoint
-   A single version works for all users

## Cons

-   Limits what you software can do

# Weak-linking

In this approach your app will build and run on multiple OS versions, but before using a feature specific to a newer version you check for its availability. I've never actually used this approach.

## Pros

-   Flexible
-   A single version works for all users

## Cons

-   Requires extra work checking for symbol availability
-   Your nibs still have to operate in "lowest common denominator" mode, because weak-linking only applies to symbols
-   If used to provide a different feature set depending on the OS, may cause user confusion and additional support queries; at the very least requires you to maintain documentation about the differences when running on different versions

# Bundle-loading tricks

In this technique you restrict version-specific functionality to separate bundles. For example, if you want to make use of a special new feature in a nibs, you do so in a separate nib and only load it after a runtime check. With this approach you have the option of either making special bundles for each version, or of creating bundles only for newer versions. I've used this approach in [Synergy Advance](/wiki/Synergy_Advance) to enable me to use some [Tiger](/wiki/Tiger)-only features in my nibs.

## Pros

-   Gets around the symbol-only limitations of weak-linking
-   A single version shipped to all users

## Cons

-   Increases the complexity of your project
-   As per weak-linking, if you feature set varies according to OS, may cause user confusion and additional support queries; at the very least requires you to maintain documentation about the differences when running on different versions

# Run-time checks

Really just a more general statement of the "Bundle-loading tricks" and "Weak-linking" already mentioned above. Basically, you perform a check at run-time to find out what version of the OS you're running on and you modify your behviour accordingly. "Bundle-loading tricks" are a specific example of this general class of check. "Weak-linking" is a complimentary strategy that will often go hand in hand with other "run-time checks" (the reason for this is that without weak linking your app might not even launch on older versions of the system, thus rendering all your elaborate checks useless).

## Pros

-   A single version shipped to all users

## Cons

-   Same as for weak-linking and bundle-loading tricks

# Multiple targets

In this approach you define multiple targets in your project, one for each OS version you wish to support. You then use preprocessor `#ifdef` statements to conditionally compile code depending on which target (which OS version) is current.

## Pros

-   Almost like having multiple branches (see below) without the overhead of actually having them

## Cons

-   Can make source files longer and harder to read because of more alternative code paths
-   Some administrative overhead in setting up the targets
-   No longer shipping a single version to all users, so must maintain separate download links as well as information about the different versions

# Multiple branches

In this technique you maintain two (or more) separate codebases for each version of the OS that you want to target. Although you may spend the most time working in the "trunk" (the latest version) you can port bugfixes and feature additions (where appropriate) to the other branches using [Subversion](/wiki/Subversion)'s merge facilities. Again, I've never used this approach but am thinking of doing it soon.

## Pros

-   Precisely matches your code against the operating system it runs on
-   Trades complexity outside your project (managing multiple branches in your repository and multiple working copies on your hard drive) for simplicity within the project (each branch can have simpler code in it because most if not all runtime checks can be eliminated)

## Cons

-   Extra work required to maintain older branches; in the real-world older branches usually just get put in maintenance mode (bug fixes only) and all real feature work goes on in the main trunk.
-   As with the "multiple targets" method, you are no longer shipping a single version to all users so must maintain separate download links as well as information about the different versions

# Concluding comments

Each approach has its pros and cons, and the importance of each will vary according to whether the piece of code in question is a framework, or an application or another type of bundle. For example, weak-linking may be more advantageous for frameworks because they are usually just code and seldom require special nib features. Likewise, if you decide to use different development branches for frameworks then all the applications which use those frameworks might have to be modified to ensure they track the appropriate branch.

# See also

-   [Frameworks: pros and cons](/wiki/Frameworks%3a_pros_and_cons)
