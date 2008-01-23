---
title: Teach window controller to have cake and eat it too (REnamer, 457adee)
---

The docs suggest that the window controller should be the nib owner, but if you follow that recommendation it is very hard to set up bindings. You either have to pollute your window controller with model-like properties (it is supposed to be a view-controller, not a model-controller like NSDocument), or provide some kind of key path which allows you to get at your model properties from within the nib.

The docs do recognize that you might want to make something else your nib owner (your NSDocument model-controller, for example), but if you do that then your window controller won't have a reference to the window it is supposedly controlling (your "File's owner", the document class, is the one with the reference to the window).

The solution here is to do some special initialization in our NSWindowController subclass. We locate and instantiate the nib ourselves with the desired owner (the document subclass), find the "MainWindow" among the top-level objects, call super using initWithWindow: (so it gets a reference to the window). In this way we both get the owner that we want and the window controller properly gets a reference to the window it should control.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
