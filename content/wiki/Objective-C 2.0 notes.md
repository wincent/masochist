---
tags: wiki
---

These notes are made on the basis of publicly available information:

-    <http://www.apple.com/macosx/leopard/xcode.html>
-    <http://developer.apple.com/leopard/overview/>
-    <http://lists.apple.com/archives/objc-language/2006/Aug/msg00039.html>
-    <http://lists.apple.com/archives/objc-language/2006/Aug/msg00003.html>

Points for converting code to Objective-C 2.0 (with Garbage Collection):

-   `self.var` translates to `[self var]`
-   the synthezied instance variable generated based on the `var` property will be `_var`
-   if you want to access the instance variable directly you must therefore use `self->_var` or `_var`
-   `var` on its own will be a undeclared symbol error
-   you should avoid using accessors before an object is fully initialized (ie. in an `init` or `copyWithZone:` method)
-   in such cases use direct access (eg. `self->_var`)
-   with [GC](/wiki/GC), `retain`/`release` *et al* are ignored
-   so your `init` methods should look like this:

<!-- -->

    - (id)init
    {
        if ((self = [super init]))
            self->_var = [NSColor textColor];
        return self;
    }

-   Note that there is no need to send a `retain` to the returned color
-   Also note that when properties are used there is no need to declare instance variables, accessor methods, or write accessor methods
-   A suitable property declaration in the header would be:

<!-- -->

    @property (ivar) NSColor *fooColor;

-   The `ivar` attribute tells the compiler to add an instance variable (in this case, `_fooColor`) and accessor methods (`fooColor` and `setFooColor:`)
-   There is no need for a dealloc method; the color will be deallocated when all references to the object go away
-   Implicit accessor methods are presumably sensitive to whether they are used as a left-hand or a right-hand value in an assignment:

<!-- -->

    // presumably equivalent to: [object setName:@"foo"]
    object.name = @"foo";

    // presumably equivalent to: var = [object name]
    var = object.name;

# Is Objective-C 2.0 available?

Check for built-in macro, `__OBJC2__`?
