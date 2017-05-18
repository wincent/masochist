---
title: Remove WOSingleton class and all references to it (WOCommon, 839cadd)
tags: snippets
---

All singleton classes now use independent, non-abstracts implementations of the singleton pattern, so this commit removes the WOSingleton class itself, the accompanying unit tests, and updates the documentation to remove all references to WOSingleton as well explaining the rationale for its removal.

For several years I used a WOSingleton class as a means of encapsulating a rigorously enforced, fast, thread-safe, sub-classable singleton pattern. Thread-safety and speed were achieved by using a combination of synchronization, fast NSMapTable lookups, double-checked locking, and memory barriers.

With the advent of garbage collection I revisited my solution once again and decided to scrap it in favor of a simpler, non-abstract model wherein each singleton class implemented the minimal necessary code to provide an "advisory" singleton. That is, rather than trying to enforce the singleton pattern by overriding allocWithZone: and init, I instead provide a simple sharedInstance (or similar) method which is documented as the preferred means of creating and using an instance of the class. Callers are free to call alloc/init multiple times if they wish, thus creating multiple instances, but the consequences are undefined; this could potentially be useful for testing purposes. My only attempt at "enforcement" is to override copyWithZone:; this is done to prevent inadvertent creation of multiple instances. For speed the sharedInstance method employs a simple double-checked locking pattern with memory barriers (much simpler than the generalized solution that had to work with the not-thread-safe NSMapTable).

Although this approach requires a small amount of code per new singleton class, the result is faster, simpler and less likely to have unidentified bugs.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
