---
title: Version numbers
tags: blog
---

I've always been a little confused by [Apple](http://www.wincent.com/knowledge-base/Apple)'s "[Property List Key Reference](http://developer.apple.com/documentation/MacOSX/Conceptual/BPRuntimeConfig/Articles/PListKeys.html)". It seemed that the documented purpose of some of the property list keys deviated from the actual behaviour of the OS, especial in relation with the display of version numbers in the Finder.

The documentation seems to have undergone a number of [revisions](http://developer.apple.com/documentation/MacOSX/Conceptual/BPRuntimeConfig/RevisionHistory.html) lately ("Undocumented the CFBundleGetInfoString key", "Added details on the new purpose of the CFBundleGetInfoString key", "Reintroduced the CFBundleGetInfoString key") and this is the current state of affairs under [Leopard](http://www.wincent.com/knowledge-base/Leopard):


## Behaviour

This is really the only thing you need to care about.

The value of `CFBundleGetInfoString` is shown in Finder "Get Info" window. An appropriate value for this key might be something like "MyApplication 1.2 (332), Copyright 2007 Me"; in other words, the application name, the release version, the build number, and the copyright info. This key can be localized.

A string consisting of "`CFBundleShortVersionString (CFBundleVersion)`" is shown in your application "About" box. A typical value for `CFBundleShortVersionString` would be something like "Version 1.2". This key can and often is localized, principally because of the presence of the word "Version". The `CFBundleVersion` is usually a build number, like "332" in the example above. There's no reason to localize this and in fact Apple's docs say that the key isn't localizable.

The `NSHumanReadableCopyright` key is used to provide a localized copyright notice which appears under the version number in the standard Cocoa About box (thanks to Jean-Daniel Dupas for pointing this out to me).





## The docs

So what do the docs say? It seems that of late the behaviour, at least in Leopard, and the documentation match up a lot better than they used to.

### `CFBundleGetInfoString`: a "Brief description of the bundle"

> This key identifies a brief description of the bundle. For an application bundle, this key provides a short description of the application or the current release that the build or release version number cannot convey; for example, the date of the release. This key can be localized.

### `CFBundleVersion`: "The build-version-number string for the bundle"

> This key specifies the build version number of the bundle, which identifies an iteration (released or unreleased) of the bundle. This is a monotonically increased string, comprised of one or more period-separated integers. This key is not localizable.

### `CFBundleShortVersionString`: "The release-version-number string for the bundle"

> This key specifies the release version number of the bundle, which identifies a released iteration of the application. The release version number is a string comprised of three period-separated integers. The first integer represents major revisions to the application, such as revisions that implement new features or major changes. The second integer denotes revisions that implement less prominent features. The third integer represents maintenance releases. The value for this key differs from the value for "CFBundleVersion", which identifies an iteration (released or unreleased) of the application.

### `NSHumanReadableCopyright`: "Specifies the copyright notice for the bundle"

Finally it's worth mentioning this one:

> This key contains a string with the copyright notice for the bundle; for example, "� 2006, My Company". You can load this string and display it in an About dialog box. This key can be localized by including it in your InfoPlist.strings files. This key replaces the obsolete CFBundleGetInfoString key.

More information can be found in the documentation for the ` orderFrontStandardAboutPanelWithOptions:` method in `NSApplication`:

> ...this method then looks for the value of NSHumanReadableCopyright in the localized version infoDictionary.

## Conclusion

So there you have it. The docs make it very clear that your build numbers should be "monotonically increasing strings" comprising "one or more period-separated integers". Great if you use [Subversion](http://www.wincent.com/knowledge-base/Subversion)-based build numbers; you'll need to ignore those rules if your build numbers are actually SHA-1 hashes (based on [Git](http://www.wincent.com/knowledge-base/Git) commits, for example). Likewise your release versions are supposed to be of the form "x.y.z"; bad luck if you want to do "1.0-rc1" or "2.1b3" and the like, but it seems unlikely that any harm will come from not following these rules (or are they guidelines?) to their fullest.
