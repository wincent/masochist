---
tags: c objective.c wiki
---

Often in C code your code will follow a pattern like this (or similar):

    result1 = function1(arguments1);
    if (!result1) goto Cleanup;
    result2 = function2(arguments2);
    if (!result2) goto Cleanup;
    result3 = function3(arguments3);
    if (!result3) goto Cleanup;

In the case of Objective-C you can often chain such sequences together into a single line like the following:

    result = [[[object message1] message2] message3];
    if (!result) goto Cleanup;

Basically you're taking advantage of the fact that many Objective-C methods (but not all, check the documentation) return `nil` to indicate failure, and sending a message to `nil` also returns `nil` (for methods with `id` return types). This is a general pattern in Cocoa but it is not always true; in the cases where it does apply however code tends to be shorter and much more readable.

I routinely find that I can write things in Cocoa in a fraction of the lines that it would take using Carbon, or CoreFoundation, or the POSIX layer. In fact, sometimes I kick myself because I'll write 20 lines of code to do something via POSIX (`fork`/`execv`/`wait`, for example) because I'm writing a command line tool and am in a "POSIX mindset", and then realize I could have written the same thing with a one-line `NSTask` invocation.
