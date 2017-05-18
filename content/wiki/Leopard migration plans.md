---
tags: wiki
---

This page provides a broad overview of my product roadmaps and the development infrastructure that I plan to use in the move to Mac OS X [Leopard](/wiki/Leopard).

# Timeline

The [official Apple web page says](http://www.apple.com/macosx/leopard/) that [Leopard](/wiki/Leopard) is, "Coming spring 2007", which means at some point in March, April or May 2007. At the time of writing (late September 2006) that means I have a minimum of 5 months, and possibly as much as 7 months, in which to make my products [Leopard](/wiki/Leopard)-ready.

My plan in that timeframe is to continue releasing updates for my products without changing their minimum system requirements:

-   [Synergy](/wiki/Synergy) and [Install](/wiki/Install) will continue to run on [Jaguar](/wiki/Jaguar), [Panther](/wiki/Panther) and [Tiger](/wiki/Tiger)
-   A couple of unreleased products I have up my sleeve which require [Tiger](/wiki/Tiger) will maintain that requirement
-   All other products will continue to run on [Panther](/wiki/Panther) and [Tiger](/wiki/Tiger)

But once [Leopard](/wiki/Leopard) is out I plan to raise the minimum requirements to take advantage of the new features. Development will be split into two branches: new releases (the main branch) will require [Leopard](/wiki/Leopard); releases on the other branch (maintenance branch) will continue to support the older versions of [Mac OS X](/wiki/Mac_OS_X) but will be basic bug fix and maintenance releases only.

The only exception to this pattern will be [Install](/wiki/Install), which will continue to run on any version of [Mac OS X](/wiki/Mac_OS_X) from [Jaguar](/wiki/Jaguar) up; there will be no branching for [Install](/wiki/Install).

In previous [Mac OS X](/wiki/Mac_OS_X) updates I have held back from increasing the minimum system requirements and this has lead to some unfortunate limitations. It means that an application like [Synergy](/wiki/Synergy), which has always supported [Jaguar](/wiki/Jaguar) as a minimum, has been unable to take advantage of newer technologies introduced in [Panther](/wiki/Panther) like [Cocoa Bindings](/wiki/Cocoa_Bindings) and this has made development more difficult. Likewise, [Synergy Advance](/wiki/Synergy_Advance), which has always supported [Panther](/wiki/Panther) as a minimum, has been unable to take advantage of newer technologies introduced in [Tiger](/wiki/Tiger) like [Core Data](/wiki/Core_Data). (Note: this is somewhat of a simplification as it *is* possible to partially support newer-technologies by using tricks like selective bundle loading and weak linking, but these tricks tend to make things more complex and difficult to maintain.)

[Leopard](/wiki/Leopard) offers some fantastic new APIs and I changes to the [Objective-C](/wiki/Objective-C) language such as [garbage collection](/wiki/garbage_collection) so I'm going to use it as the point for the "big jump" in which I move all main development to the new platform. This will enable me to make some big changes, introduce more new features, and work better and faster. To support customers using older versions of the operating system I'll continue to release maintenance releases for those systems. Also, from a business perspective this makes sense; by offering products to a wider market segment I stand to sell more licenses.

To the customer the releases will look like this:

-   Consider a product with versions 1.0, 1.2, 1.3 that runs on [Panther](/wiki/Panther) and up.
-   Once [Leopard](/wiki/Leopard) is out, most development will occur on a new branch — the 2.0, 2.1, 2.2 (etc) releases — and these releases will only run on [Leopard](/wiki/Leopard).
-   I will continue to do maintenance releases on the old branch (1.3.1, 1.3.2, 1.4 etc) that support the old version of [Mac OS X](/wiki/Mac_OS_X).

# Phase 1: Jaguar/Panther compatible releases

In the 5 to 7 months that remain before [Leopard](/wiki/Leopard) comes out I will continue targeting the older versions of [Mac OS X](/wiki/Mac_OS_X) and performing public releases where appropriate.

# Phase 2: Branching for Leopard

When I am ready to start [Leopard](/wiki/Leopard)-specific development I will perform a branch. The page, [Creating branches with Subversion](/wiki/Creating_branches_with_Subversion), details how I did this for the [Synergy](/wiki/Synergy) code base. For the time being I am doing my work directly on the `panther` branch. Most likely after the next public release I will merge the changes from that branch onto the `trunk` and start doing most of the work on `trunk` instead.

During this transition period I will continue to use the [Panther](/wiki/Panther) version of [buildtools](/wiki/buildtools). When the focus shifts to [Leopard](/wiki/Leopard) I will branch [buildtools](/wiki/buildtools) and all of my frameworks at the same time. The [Leopard](/wiki/Leopard)-oriented development (occurring in the `trunk` of each product) will continue as normal, but the development for older versions will need to use the older versions of [buildtools](/wiki/buildtools). The easiest way to achieve this will be to have multiple, totally separate build hierarchies:

    # Leopard development (trunk)
    work/build
    work/build-intermediates
    work/buildtools
    work/project1
    work/project2
    work/framework1
    work/framework2

    # Tiger branch, likewise for Panther, Jaguar
    work-tiger/build
    work-tiger/build-intermediates
    work-tiger/buildtools
    work-tiger/project1
    work-tiger/project2
    work-tiger/framework1
    work-tiger/framework2

# Phase 3: Leopard releases

In general, all new features will go into the `trunk` branch (for [Leopard](/wiki/Leopard)) and only bug fixes and maintenance changes will go into the older branches.
