---
title: Objective-C licensing engine for sale
tags: blog
cache_breaker: 1
---

Back in late 2007 I was approached to create a licensing engine (serial number scheme) for a Mac software bundle. In the end the bundle was never launched and the person who commissioned the work has disappeared off the map. I've been sitting on the source code since then.

I'm a big fan of [open source](/wiki/open_source) but licensing systems are one area where I think a small degree of [security through obscurity](/wiki/security_through_obscurity) is actually helpful. To release it as open source would reduce its effectiveness, but I don't want to dig a hole in the backyard and bury the code forever either.

I've decided to offer it for sale. The interested party would buy all rights to the codebase, not merely license it, and would be free to do with it as they pleased.

# Characteristics of the system

The system was designed according to the specifications originally provided to me, for use in the never-released Mac software bundle.

This is a low-level system which provides facilities for generating and verifying license codes. It also handles details such as reading and writing license codes to disk. For the sake of simplicity and flexibility it does not include a user-interface component.

-   Implemented in [Objective-C](/wiki/Objective-C)
-   Can be used with or without Garbage Collection
-   Targets Mac OS X 10.4 and 10.5; not yet tested on 10.6 but expected to work as it uses conservative coding techniques and sticks to well-documented, "modern" [APIs](/wiki/APIs)
-   Secure license keys generated using public key cryptography
-   Short license keys (39 characters long) thanks to use of Elliptic Key cryptography
-   Ambiguous characters (like 0 and O) never appear in license codes, reducing support queries
-   License codes are *not* tied to user email addresses, again to reduce support queries and streamline the purchasing process
-   Extensive inlining and basic symbol obfuscation are used to make cracking more difficult
-   Includes extensive test suite
-   Includes [command line](/wiki/command_line) tool for generating keys and license codes
-   Very easy to incorporate in existing projects (just include 2 headers and 1 implementation file)
-   Engine can be used with up to 256 different applications
-   Over 4 billion unique codes per application
-   Optional expiring licenses (trial licenses)
-   Optional version-limited licenses (valid only for certain versions)
-   Optional "bundle" licenses (use of a single license code to unlock a bundle containing multiple software products)

As I've written [elsewhere](/blog/on-piracy), I think developers often spend too much time worrying about piracy. The goal of this system is to make a *reasonable* effort to deter software piracy, but not to go crazy trying to be "uncrackable" or win what is essentially an unwinnable war.

The person who commissioned this work was of the same opinion, which is why the system does *not* include features that are sometimes found in other systems, like tying license codes to user identities. In fact, it does not even include a blacklisting facility, although one could be added easily enough.

# How much for all this?

For me this project represents several weeks of intensive work, and builds on my foundation as an experienced [Mac OS X](/wiki/Mac_OS_X)/[Objective-C](/wiki/Objective-C) developer with expert knowledge of cryptography and licensing systems. The asking price is 1,000€; converted to an hourly rate this really is a steal.

# What you will receive for your money

The system as it stands is a way for a developer to buy an "off-the-shelf" licensing scheme, forget about the details, be free to roll it into as many products as they like, and get on with improving the features of their products.

You will receive:

-   a copy of the code base (Xcode project, source files, test suite)
-   extensive documentation (18 page PDF guide in addition to the code-level [Doxygen](/wiki/Doxygen) documentation)
-   demo screencast showing the key and code generation process
-   installer package
-   buildable demo executable (including source code) showing how to use the system
-   full [Git](/wiki/Git) repository containing entire project history (currently 107 commits)
-   full rights to the code base; that is, rather than merely licensing the code base you will be acquiring it along with all rights to it, to do with as you please

If you're interested and have any questions, please feel free to get in touch with me via email (<win@wincent.com>) or by posting a comment here. In the case of official enquiries from known software companies (ie. received from an official, public email address associated with the company) I'm prepared to discuss technical details or provide sample code as appropriate.
