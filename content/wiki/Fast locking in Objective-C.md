---
tags: wiki
---

This article is a summary of information found here:

-   <http://googlemac.blogspot.com/2006/10/synchronized-swimming.html>

# The problem with `@synchronized`

At least in [Objective-C](/wiki/Objective-C) 1.0 and Mac OS X [Tiger](/wiki/Tiger) locking via the `@synchronized` directive is fairly costly.

# A workaround using `pthread` locks

Working directly with `pthread` mutex locks is a bit faster, but it's relatively verbose and ugly.

# Using Objective-C++

By simply compiling as [Objective-C++](/wiki/Objective-C%2b%2b) rather than Objective-C it is possible to achieve a considerable speed-up compared with `@synchronized`, while making the code much easier to read:

-   <http://googlemac.blogspot.com/2006/11/synchronized-swimming-part-2.html>

Example:

    + (id)fooFerBar:(id)bar
    {
       // compiler implicitly acquires a lock here, initialization takes place only once
       static NSDictionary *foo = [NSDictionary dictionaryWithObjects:...];
       // compiler releases the lock here

       return [foo objectWithKey:bar];
    }

> To maximize thread safety, GCC 4.0 automatically adds locks around any code that initializes local static variables in C++. If you do not need this protection and want to reduce your code size slightly, you can disable the locking behavior by passing the -fno-threadsafe-statics option to the compiler.

-   <http://developer.apple.com/releasenotes/DeveloperTools/GCC40PortingReleaseNotes/Articles/PortingToGCC.html>

> The compiler now uses the library interface specified by the C++ ABI for thread-safe initialization of function-scope static variables. Most users should leave this alone, but embedded programmers may want to disable this by specifying -fno-threadsafe-statics for a small savings in code size.

-   <http://gcc.gnu.org/gcc-4.0/changes.html>

> If a function-scope static variable or a static data member with vague linkage (i.e., a static data member of a class template) is dynamically initialized, then there is an associated guard variable which is used to guarantee that construction occurs only once.

-   <http://www.codesourcery.com/cxx-abi/abi.html>

The good thing about this approach is that it requires no special action on the part of the programmer (no additional compiler switches, for example). All you have to do is use Objective-C++.

Before switching to Objective-C++ see these articles:

-   <http://en.wikipedia.org/wiki/Compatibility_of_C_and_C%2B%2B>
-   <http://en.wikipedia.org/wiki/Objective_C#Objective-C.2B.2B>

# An alternative solution using swizzling

This is the fastest solution of all because it avoids the lock entirely on subsequent accesses, but it comes at the cost of requiring a separate method to be written, as well as using unsupported method swizzling:

    static NSDictionary *foo = nil;

    +(id)fooFerBar:(id)bar
    {
        @synchronized(self)
        {
            if (!foo) foo = [NSDictionary dictionaryWithObjects:...];
            ReplaceMethodImplementationWithSelector([self class], @selector(fooFerBar), @selector(fooFerBar2));
        }
        return [foo objectWithKey:bar];
    }

    +(id)fooFerBar2:(id)bar
    {
       return [foo objectWithKey:bar];
    }

The swizzling `ReplaceMethodImplementationWithSelector` function would need to be written based on information [available here](http://www.cocoadev.com/index.pl?MethodSwizzling). Note that there are some risks involved with method swizzling.
