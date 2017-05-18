---
title: Be assertive
tags: blog
---

Most imperative programming consists of lists of instructions, where subsequent instructions tend to depend on the results of previous instructions:

    01 get A
    02 pass A to B, producing C
    03 get D
    04 add C and D to get E
    05 ask E for F
    06 ask F for G
    07 print G

What do you do if you run the pseudo-code above but it doesn't print `G` like you expected?

The obvious answer is that you back-track: you find out why `F` didn't return `G`. Part of that will involve confirming that you actually did get `F` from `E` like you asked. If you're unlucky, your troubleshooting process may require several iterations and you'll end up going all the way back to the first line and discover that the problem is occurring when you try to get `A`.

### Fail early

Instead of working backwards a much better approach is to start at the beginning. You want to fail early; or to put it another way, in the event of a failure you want to find out about it as early as possible. You want failure notifications to be produced as close to the site of the actual failure as possible, so that you can find the causes more quickly.

The way you do this is with assertions.





### Assertions

    01 get A
    02 assert: should have A
    03 pass A to B, producing C
    04 assert: B should have returned C
    05 get D
    06 assert: should have D
    07 add C and D to get E
    08 assert: adding C to D should have yielded E
    09 ask E for F
    10 assert: E should have returned F
    11 ask F for G
    12 assert: F should have returned G
    13 print G

Now our code is a little bit longer (bad) but if there is a failure at any point we'll instantly know exactly which line failed (good). In reality you probably don't need to declare assertions after every single operation so the minor penalty (the added length) is generally far outweighed by the benefit (development and debugging speed). In actual practice you would tend to add assertions only at key points where you are aware that something might fail or you are making an assumption about the state of the program at that point in time:

> Don't make assumptions. Make assertions.

There are many times were your assumptions will prove to be wrong. Any time you find yourself thinking, "Ok, this should be like this at this point, so I can now go ahead and...", that should be a flag to you that you should be inserting an assertion into your code.

Liberal use of assertions is like unit testing. To the beginner it may seem like extra work, but to the programmer who has tried coding without assertions and then tries coding with them discovers that they help you to produce better, more robust code, discover and fix bugs more quickly, and they give you a confidence that frees you to write code much faster. Don't waste brain cycles wondering about all the possible ways in which code might fail: just identify what conditions you expect to be true and write assertions accordingly.

In Objective-C the tools you use for assertions are `NSAssert`, `NSCAssert` and `NSParameterAssert`, or you can roll you own.

If you are worried about all those assertions slowing down your code you can use them in debug builds and beta releases only and turn them off for official releases by defining the `NS_BLOCK_ASSERTIONS` macro. When that macro is defined the assertion macros compile down to nothing at all. Obviously, when you do this you lose the protection and early warnings afforded by assertions, so this is yet another reason to be very thorough in your testing and beta testing.

With time you'll get a feel for whether constructions like:

    result = [[[object message1] message2] messge3];
    NSAssert(result != nil, @"result must not be nil");

Or like:

    first = [object message1];
    NSAssert(first != nil, @"first must not be nil");
    second = [first message2];
    NSAssert(second != nil, @"second must not be nil");
    result = [second messge3];
    NSAssert(result != nil, @"result must not be nil");

Are best for a given circumstance. You might also want to write assertion macros of your own so that you can use a more compact syntax; for example, I've never liked having to provide description strings so I've got macros which don't require them:

    result = [[[object message1] message2] messge3];
    WOAssert(result != nil);

The assertion machinery printed enough information (source code file name and line number) for me to know where the failure occurred so writing that description string is unnecessary overhead.

Before closing there are a couple of nuances that should be mentioned:

-   Assertions are not a replacement for exception handling, normal error-code handling, or unit testing; they are an additional tool that complements the other methods.
-   If a method or function is documented to have different possible return values you should be prepared to handle them; that is, if an error can occur somewhere outside of your control (in a system API, for example) then you should write code to handle that eventuality. This is because you don't want your program to crash because of something that happened outside of your domain of control. Handle errors gracefully.
-   Likewise if a method or function outside of your control (again, a system API) might throw an exception, you should be prepared to catch it and respond accordingly. This is again because you don't want your program crashing in response to an error that occurred outside your circle of influence.
-   As such, assertions are best used for confirming the validity of assumptions about your own code. A failed assertion is caused by something that you wrote not behaving like you require; in other words, a bug. You should be adding assertions to places where failed expectations mean that your code is incorrect and you need to fix it.
-   An assertion is a catastrophic failure. It leads to an `NSInternalInconsistencyException` being thrown. If this isn't handled at a higher level it can cause your program to fail. As such, the other acceptable use of assertions is in cases where you ''want'' things to fail catastrophically in the event of a failed assumption; that is, in cases where a failure means you literally can't proceed and you want to give up. When you see this kind of assertion failing you have two choices: write additional code so that the catastrophic failure becomes a gracefully-handled error; or leave it the way it is as a catastrophic, irrecoverable error.
