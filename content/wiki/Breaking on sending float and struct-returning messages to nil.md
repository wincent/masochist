---
tags: objective.c wiki
---

[This is handy tip](http://blog.omnigroup.com/2007/03/11/catching-float-and-struct-returning-messages-to-nil/) that is worth repeating here.

# The disassembled source of the `objc_msgSend_fpret` function

`objc_msgSend_fpret` is the message dispatch function used for methods that return floats. This is an example disassembly when run on an Intel-based Mac:

    (gdb) x/50i objc_msgSend_fpret
    0x90a573c0 :        mov    4(%esp),%eax
    0x90a573c4 :      test   %eax,%eax
    0x90a573c6 :      je     0x90a57420
    0x90a573c8 :      mov    0(%eax),%eax
    ...

# The disassembled source of the `objc_msgSend_stret` function

`objc_msgSend_stret` is the message dispatch function used for methods that return structs. This is an example disassembly when run on an Intel-based Mac:

    (gdb) x/50i objc_msgSend_stret
    0x90a57340 :        mov    8(%esp),%eax
    0x90a57344 :      test   %eax,%eax
    0x90a57346 :      je     0x90a573a0
    0x90a57348 :      mov    0(%eax),%eax
    ...

# Setting breakpoints on sending to `nil`

The following can be added to `~/.gdbinit`:

    #
    # Nil-handling path for objc_msgSend_fpret.
    #
    b *0x90a57420
    comm
      p (char *)$ecx
    end
    #
    # Nil-handling path for objc_msgSend_stret.
    #
    b *0x90a573a0
    comm
      p (char *)$ecx
    end

In other words, whenever the target of the message is zero (nil) in either of those message dispatch functions the breakpoints will fire and the name of the selector will be printed to the console, alerting you to a bug in your code (you should never send a float or struct-returning message to nil because the results may be undefined on certain architectures).

This kind of bug may or may not be harmless, but it's a good idea to fix it anyway just in case. That is, whenever `target` may be nil you should be writing something like this:

    f = target ? [target floatValue] : 0.0f;

instead of:

    f = [target floatValue];
