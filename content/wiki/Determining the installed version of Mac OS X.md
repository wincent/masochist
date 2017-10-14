---
tags: macos wiki
---

# Using `sw_vers`

    $ sw_vers
    ProductName:    Mac OS X
    ProductVersion: 10.4.9
    BuildVersion:   8P135

# Using `uname`

    $ uname -a
    Darwin example.local 8.9.0 Darwin Kernel Version 8.9.0: Thu Feb 22 20:54:07 PST 2007; root:xnu-792.17.14~1/RELEASE_PPC Power Macintosh powerpc

# Looking on the filesystem

    cat /System/Library/CoreServices/SystemVersion.plist

Or if the above file is in binary format and you have the [Xcode tools](/wiki/Xcode_tools) installed you can open it in the [Property List Editor](/wiki/Property_List_Editor):

    open /System/Library/CoreServices/SystemVersion.plist
