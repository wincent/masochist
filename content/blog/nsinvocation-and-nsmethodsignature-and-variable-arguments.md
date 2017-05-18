---
title: NSInvocation and NSMethodSignature and variable arguments
tags: blog
---

So what happens when you try to use `NSInvocation` and `NSMethodSignature` with methods that accept a variable number of arguments? This is a question that I was asking myself earlier this evening.





### The results

Given a method:

    - (void)testMethod1:(NSString *)something, ...

The following statement:

    NSLog(@"%@", [TestClass instanceMethodSignatureForSelector:@selector(testMethod1:)]);

Prints (timestamp, process name and ID omitted for brevity):

    NSMethodSignature: types=v@:@ nargs=3 sizeOfParams=160 returnValueLength=0;

This method:
    - (void)testMethod2:(NSString *)something otherThing:(id)thing

Prints:

    NSMethodSignature: types=v@:@@ nargs=4 sizeOfParams=160 returnValueLength=0;

And this one:
    - (void)testMethod3:(NSString *)something

Prints:

    NSMethodSignature: types=v@:@ nargs=3 sizeOfParams=160 returnValueLength=0;

### Conclusions

Methods that take variable numbers of arguments appear no different to the runtime than methods which do not (note that `testMethod1` and `testMethod3` have the same signature). This means that you can't use `NSInvocation` to represent invocations of methods which take multiple arguments (if you try to call `setArgument:atIndex:` for the additional arguments an exception will be raised). It also means that my mock object implementation in the [WOTest framework](http://test.wincent.com/) won't work properly with such methods (it simply won't "see" the additional arguments). And finally, it means that I have to refactor some of my code (methods which take variable numbers of arguments) if I want to use it with `NSInvocation` ([and I do](http://www.wincent.com/a/about/wincent/weblog/archives/2006/03/threading_nicet.php)).

What kind of refactoring? Basically you have to do the same as Apple has done with functions like `NSLog` and `NSLogv`. One takes a variable number of arguments and the other takes a `va_list` as its last parameter. To avoid code duplication you can have the first form prepare the `va_list` and invoke the other.

And yes, the fact that `NSInvocation` does not support methods with a variable number of arguments *is* noted in the documentation:

> NSInvocation does not support invocations of methods with either variable numbers of arguments or union arguments.

But I didn't notice that until after I'd scaled the little learning curve described in this article.
