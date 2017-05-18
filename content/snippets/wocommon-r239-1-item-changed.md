---
title: WOCommon r239, 1 item changed
tags: snippets
---

WOSingleton class now uses NSMapTable instead of an NSMutableDictionary because it can be configured to not copy the keys (seeing as the keys were class objects this was not really correct or a very elegant thing to do). In making this change discovered and fixed a subtle race condition in certain circumstances: the order in which constructors are called is not determinate (or at least it is not publicly documented) so it was possible for another singleton class such as WOLogManager to call the WOSingleton class's sharedInstance method from it's constructor function before WOSingleton's constructor function had been called and before the singleton registry had been set up. Also, the switch to map tables permitted the use of NSMapInsertKnownAbsent which in turn revealed that the sharedInstance and allocWithZone methods were both trying to add the same entry to the singleton registry; this was harmless but redundant so one of the redundant calls has been removed.
