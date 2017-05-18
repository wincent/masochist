---
tags: cocoa wiki
---

# `bind:toObject:withKeyPath:options:`

## Use as a basic shortcut (outside the MVC paradigm)

> "So, if what you were going to do was call setValue:forKey: on your own ivar, you could skip the whole addObserver: thing and just use bind:, because that's exactly what then \*will\* happen; setValue:forKey: will be called on your ivar."

Matt Neuburg, <http://www.cocoabuilder.com/archive/message/cocoa/2006/7/19/167864>

But note:

> "The recommendation is that bindings should not be used between two model objects. Binding views directly to model objects should only be done (and even then it isn't something that is currently suggested) when there is no updating of the values due to changes in the UI (essentially read-only).&lt;br /&gt; &lt;br /&gt; bindings are intended to eliminate glue code between views and model objects&lt;br /&gt; &lt;br /&gt; KVO is the better solution. if the observeValeForKeyPath: method is a bottleneck or results in ugly code it is quite possible to encapsulate that observing code into an object..."

Scott Anguish (Apple): <http://www.cocoabuilder.com/archive/message/cocoa/2006/7/21/168062>

## On the "one-way" nature of Bindings

> "The issue here is that binding is "one-way" if you only use the behaviour you get for free. You can bind a KVC-compliant attribute of any object ("object A") to the property of another object ("object B"), and object A will register as an observer of the property of object B and update its (object A's) attribute in response to changes in the observed property value. What it won't do, however, is to push changes the other way -- that is, by default you have in effect a "read-only" binding. If object A's attribute value is changed, object B is not updated. To get this behaviour, you must write custom code"

Mmalcolm Crawford (Apple): <http://www.cocoabuilder.com/archive/message/cocoa/2005/5/27/137132>

> "You typically should not bind one model object to another. The primary goal of bindings is to keep user views synchronised with models. You bind an attribute of a UI widget to the property of a model object..."

Mmalcolm Crawford (Apple): <http://www.cocoabuilder.com/archive/message/cocoa/2005/5/27/137149>

> "Always, always use a controller."

Scott Anguish (Apple): <http://www.cocoabuilder.com/archive/message/cocoa/2005/5/27/137150>

> "Controllers implement the NSEditor/NSEditorRegistration protocols. That means that they correctly handle the cases when documents revert, or save, and forward the correct notifications to the model/view items when that happens. This way models get any uncommitted edits, and can handle them appropriately.&lt;br /&gt; &lt;br /&gt; "Apple doesn't endorse or recommend connecting UI to model directly, nor model&lt;-&gt;model bindings"

Scott Anguish (Apple): <http://www.cocoabuilder.com/archive/message/cocoa/2005/5/27/137152>

# `observeValueForKeyPath:ofObject:change:context:`

## Calling super

Apple documentation, "[Receiving Notification of a Change](http://developer.apple.com/documentation/Cocoa/Conceptual/KeyValueObserving/Concepts/KVOBasics.html#//apple_ref/doc/uid/20002252-179866)".

> "be sure to call the super implementation if the superclass implements it"

<http://developer.apple.com/documentation/Cocoa/Conceptual/KeyValueObserving/Concepts/KVOBasics.html>

> "Simply calling super would be problematic, because NSObject doesn't implement it (well, it throws)."

Chris Kane, (Cocoa Frameworks, Apple): <http://www.cocoabuilder.com/archive/message/cocoa/2006/7/17/167765>

## Take care with subclassing

> "If you are subclassing a foreign class without documented behavior, the context pointer is useless. Basically you don't know if the superclass is already observing an object, so the context pointer could be mine or the superclass', who knows?"

<http://www.cocoabuilder.com/archive/message/cocoa/2006/7/17/167781>

> "When you and a superclass both register for KVO notifications, the registrations are necessarily distinct, and you will potentially receive multiple calls to observeValueForKeyPath:... for the same changes, some due to your superclass, some due to your registrations. The ones for you you need to process and not pass up to super. The ones not for you you need to pass up to super and not process (that is, not use or expect anything about the context). You cannot look at the keypath, recognize it, and say "this is for me" and consume it, because the keypath may be interesting to the superclass too, but you can't pass all of those along either, because the superclass may not be interested (and is certainly not interested in your context if this invocation happens to contain your context). Similarly keypath+object is not reliable to distinguish "mine" from "somebody else's".&lt;br /&gt; &lt;br /&gt; "The solution is that the context pointer must be used to provide a globally unique value that you can recognize in your class. If you recognize the value, this notification is for you, otherwise you pass the method call up to super and return. You have to use a value that the other classes in the hierarchy won't (or can't) use.&lt;br /&gt; &lt;br /&gt; "You cannot use NULL as the context pointer, because the superclass (or a subclass) might also use NULL. NULL is a shared value. You can't use selectors, either, because their values are global to the process, and a sub or superclass could potentially use the same one. Plus, recognizing many possible selector values would be a pain and time consuming. It's better to pick one context value."

Chris Kane, (Cocoa Frameworks, Apple): <http://www.cocoabuilder.com/archive/message/cocoa/2006/7/18/167800>

Chris goes on to suggest this technique for generating a globally unique pointer:

    static char __MyContext = 0;
    static char *ThisClassUniqueObservationContext = &__MyContext;

Alternative solution from Jim Correia:

> "So one potential solution here is to allocate a dictionary, use that as the context for your class, and also use it as a dispatch table.&lt;br /&gt; &lt;br /&gt; Since the dictionary is dynamically allocated using it as the void \* context will guarantee uniqueness in the same way as Chris' "ugly" solution in so far as all addresses within the address space are unique."

<http://www.cocoabuilder.com/archive/message/cocoa/2006/7/18/167808>
