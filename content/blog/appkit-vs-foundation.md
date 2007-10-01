---
title: AppKit vs Foundation
---

Without a doubt I have a love-hate relationship with AppKit and Foundation. Basically it boils down to loving working with Foundation and hating working with AppKit. They're both amazing frameworks, but it's almost always AppKit that has me pulling my hair out in frustration.

Example. Trying to rapidly prototype a new view hierarchy you programmatically set up a grid of nested NSView subclasses and in their `drawRect:` methods you just use `NSRectFill()` to draw blocks of color so that you can see that they are correctly laid out.

You override `resizeSubviewsWithOldSize:` because you have some complex autoresizing behaviour that you need to implement and the built-in Cocoa stuff doesn't give you the results you want.

Up to this point working with AppKit has been a relatively pleasant experience. But that's about to change. 2 AM in the morning and you change one of your classes to be an NSTextView subclass rather than an NSView subclasses; that is you change *only*:

    @interface MyView : NSView

To:

    @interface MyView : NSTextView

This is supposed to be rapid prototyping and that means making a succession of minimal, incremental changes: modify, test, repeat. At this point AppKit derails your efforts by exhibiting bizarre redrawing behaviour. Given that NSTextView is itself a subclass of NSView you would not expect that changing the superclass of a basically empty custom view implementation would have such a radical effect on its behaviour. But it does.

The view's frame and bounds look to be the right size, but the frame is inexplicably creeping upwards whenever you resize the window vertically. It doesn't happen horizontally, however, so your first suspicion is that it might have something to do with the `isHorizontallyResizable` and `isVerticallyResizable` properties; according to the docs, NSText (NSTextView's immediate superclass) is vertically resizable by default but not horizontally. Playing with these values has no effect, however, and to make things more complicated the frame isn't really *creeping* upwards at all: it's jumping upwards in variably-sized leaps.

AppKit is closed source and that makes it a gigantic, complicated, black box that you can't look inside to figure out what the heck is going on. I've been in this situation many times before with AppKit and I know better than to stay up all night inserting `NSLog` statements and what not trying to work out what's happening. Today is a new day. Will see if I can figure this out. Hopefully by the time I get to the bottom of it my code won't resemble a filthy rat's nest of hard-to-understand workarounds and re-implementations of stuff I should have been able to inherit without modification. If I can't get this working within the next hour or two I'll just jettison NSTextView entirely and do everything with my own custom NSView class. What fun.
