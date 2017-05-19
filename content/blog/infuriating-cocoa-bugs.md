---
title: Infuriating Cocoa bugs
tags: blog
---

Every now and again I come up against an infuriating Cocoa bug. Today I've just spent a few hours struggling against one in particular. It could be that it's a bug or it could be "intended behaviour" (sigh). It's days like these that I don't like my job...





#### The problem

I've been working on Dock icon stuff for [Synergy Advance](http://www.wincent.com/a/products/synergy-advance/). You can do a number of things such as animate the Dock icon, show a progress indicator, show cover art, show the cover art as a badge, and so forth. Because the settings are independent of one another you can turn on none, one, or [more than one of them at a time](/system/images/legacy/dock-icon-preview3.png). This means that sometimes I have to composite more than one thing into an NSImage.

I was doing this using the `lockFocus` and `unlockFocus` methods of NSImage and drawing directly into the image. I have a number of utility methods that perform the compositing which have prototypes like this:

    + (NSImage *)imageWithIcon:(NSImage *)anIcon badge:(NSImage *)aBadge

The idea is that you pass in an icon, a badge, and get back a shiny new icon with a badge on it. Inside the method I make a `copy` of the icon and do my drawing into that, returning the copy; it would be bad manners, after all, to change the image that was passed as a parameter the method.

This all worked fine but I found that if I performed multiple composites in stages then only the final stage was working. The first thing I suspected was a bug in my own code. After a couple hours of very frustrating trouble shooting (head-scratching, log-statement-peppering, debugging, file-writing, file-reading, visually-inspecting) I was able to confirm that my own code was correct and that Cocoa was discarding the first composite operation and keeping only the second.

#### The question is, "Why?"

Why might Cocoa do this? I guess my understanding of Cocoa's NSImage system in general and the `lockFocus` call in particular is inadequate. Either that, or there's a bug in there.

The `lockFocus` documentation talks about "setting the offscreen window (where the receiver's representation is cached) as the current window". I took that to mean that you're drawing into a window somewhere but you're also permanently altering the "receiver's representation". If `lockFocus` isn't appropriate for permanently altering an NSImage then why is it used so frequently in the Apple sample code?

It would seem that I was interpreting the documentation too liberally; when it talks about the representation being "cached" I think it literally means that you're only altering the cached copy, not the actual receiver itself.

What this actually means is that when you do something like this to an icon which has already been the target of a compositing operation:

    NSImage *image = [[anIcon copy] autorelease];

You are not getting a copy of the composited icon, you're getting a copy of the icon before any compositing took place. This is definitely not what I expected. A quick experiment:

    NSImage *image = anIcon;

If you forget the copy then you can do as many compositing phases as you like and none of them will be mysteriously discarded. Of course, you can't work like this because you're changing the source image that was passed to you as a parameter and that's a bad thing. Another test:

    NSImage *image = [[[NSImage alloc] initWithData:
        [anIcon TIFFRepresentation]] autorelease];

Lo and behold: requesting a TIFF representation of the image preserves your previous compositing operations. So if `lockFocus` only operates on a cached representation of the receiver then `TIFFRepresentation` forces the receiver to promote whatever is in the cache to "permanent" status. This strikes me as a little inconsistent. I think that if `TIFFRepresentation` does it then `copy` should as well.

There's only one problem with the `TIFFRepresentation` approach: it is slow and CPU intensive. This is the solution I finally came up with and it is much quicker and CPU-friendly:

    NSImage *image = [[[NSImage alloc] initWithSize:iconSize] autorelease];
    NSImageRep *rep = [[anIcon bestRepresentationForDevice:nil] copy];
    [image addRepresentation:rep];
    [rep release];

NSImageReps cannot be shared between NSImages but they do conform to the `NSCopying` protocol so I create a new blank image and copy the NSImageRep. The copied NSImageRep does indeed preserve previous composite operations.

#### Conclusion

`lockFocus` is used in a lot of Apple sample code to demonstrate manipulation of NSImages. It's only now that I realise why the sample code tends not to `copy` the source image as a starting point. In the sample code Apple usually starts with a completely blank image, locks focus on it, and then composites the original image into the blank image as a starting point. To me it seems logical that if you want a copy of an image that you should send it a `copy` message; in the real world, however, if you want a copy of an image you need to composite it into a new image... Although it seems much less intuitive and somewhat more convoluted (as well as requiring more messages) this other alternative should work just as well as the NSImageRep `copy` that I employ above. I don't know how optimized the Apple `compositeToPoint:operation:` method is, but I would like to think that the difference in speed between it and a straight `copy` call shouldn't be too large.
