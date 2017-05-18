---
title: Mock objects revisited
tags: blog
---

This isn't the first time I've written about mock objects in WOTest.

I first added mocks back in [June 2005](http://www.wincent.com/a/about/wincent/weblog/archives/2005/06/mock_objects_in.php). I later wrote about efforts to improve the mock object implementation by making it able to record literally any message at runtime, even if the message wasn't known at compile time. I was never able to make it truly dynamic; or to put it another way, I was never able to create mocks at runtime that recorded and responded to non-existent selectors like, for example, an imaginary `extrapolateBinaryMultiplicator:` method in `NSString`.

That was in [February of this year](http://www.wincent.com/a/about/wincent/weblog/archives/2006/02/more_than_i_eve.php). Last night I started thinking about it yet again, still troubled by the fact that in a highly dynamic language like Objective-C I couldn't record messages at runtime without there being at least a skeletal implementation available.

I haven't yet reached my goal, but I did at least have an idea for how to get there, kind of. I made a couple of very simple test programs and looked at the generated assembly, confirming that for unknown selectors the compiler does not generate a type string that could be used to generate a method signature. Now that I was utterly convinced that this true and that I haven't overlooked anything I was free to consider alternative pathways... If there was no way of prying the method signature out of information in the runtime or compiled into the program (because the information just isn't there... period) then there might be a way of getting this information into the runtime by other means.





I realized that I could supply a type string to the mock in advance. So instead of having to write a skeletal method implementation if you want the mock to handle a not-yet-written method you can just tell the mock in advance to expect a particular selector. It looks something like this:

    [mock setObjCTypes:@"@@:@" forSelector:@selector(mysterySelector:)];

Needless to say, you need to know how to construct a type string but that's not too hard. The type string above indicates that the method returns an object (type `id`, indicated by the `@`), that it takes the two hidden arguments that are passed to all Objective-C methods, `self` (type `id`, again indicated by the `@`) and `_cmd` (type `SEL`, indicated by the `:`) and a third (non-hidden) argument of type `id` (again, `@`).

In order for this to work elegantly the stub needs to know something about the mock. This is because stubs have a limited, per-message context whereas mocks have a wider, per-class context, and we're talking about class-wide attributes here (method signatures) so it is appropriate to store that information in the mock.

It would be possible to store this state in the stub, but it would require some ugly searching on the part of the mock (searching all its stubs) to figure out if they know how to handle an unrecognized selector. Furthermore, if you store the state in the stub then you have to set it up for every single stub that you plan on using to send the unimplemented selector, and repetition is annoying.

So the stub needs to know something about the mock. The Cocoa-approved design pattern for doing this without breaking encapsulation (too much) is to employ a delegate. So I've made a change to the way mocks instantiated their stubs; all mocks now pass themselves to stubs as delegates. This means that the stubs can query the mocks easily and elegantly.

That's the real roadblock problem solved: I can know generate method signatures for totally unknown selectors. The hard part now is building an invocation based on that method signature in the `forward::` method. It's hard because it requires me to parse the architecture specific `margs_list` that gets passed to `forward::`. Fiddly stuff, especially on the PowerPC, because it prepends the contents of a bunch of floating point registers to the `margs_list`. On Intel, in comparison, it looks fairly straight forward. There is no documentation for any of this aside from the Darwin source code, and it's written in assembly language. Oh the joy of it. So the bad news is that it's not going to be easy; the good news is that it is almost certain to be possible.

So today I've made a swathe of changes in preparation for this long-longed-for optional unimplemented selector support. A lot of work for a little convenience. What's the use of it? I guess it's more of an intellectual exercise than anything and I enjoy a challenge.

I've done a bit of a namespace clean-up (reducing the number of methods in the mock classes so as to reduce the likelihood of clashes with mocked classes), plenty of reformatting to take advantage of the extra column width (132 columns up from 80), fixed a potential bug, and implemented all but the nastiest bits of the `margs_list` parsing. With all the changes all the unit tests (self-tests, really) still pass, with the exception of a single test which will start to pass as soon as I get the parsing code done.

#### Update 16:30

Ok, the i386 case is now implemented. Still have to make sure that it works with all the tricky edge cases, so I'll be throwing lots pointers and structs and floats and doubles and pointers to floats and unions at it and seeing what happens.

My main machine now is an Intel iMac (not a G5) in sight, so although I'll see what I can whip up for PowerPC I probably won't have much of an opportunity to test it extensively.
