---
title: The best way to write accessors
tags: blog
---

As you learn Objective-C you'll come across lots of advice about *how*, *when* and *why* to write accessor methods and you'll see many, many different ways of writing them.

The answer to the "when" question is easy, especially now that we have [Accessorizer](http://www.kevincallahan.org/software/accessorizer.html): *Always*. Always write accessors. In the old days writing accessors was time consuming and even if you wanted to come up with a set of preprocessor macros to use as shortcuts it still made sense to be selective about when you wrote accessors. Now it's just too easy: select a slab of instance variables and let Accessorizer do the work.

The answer to the "why" question is simple: *Just trust me*. Seeing as writing accessors is easy, just take my word for it and go about your business; sooner or later you'll find yourself in a situation where you'll have a revelation. You'll say to yourself, "Wow, that refactoring I just did was so easy because I had those accessor methods; would've been hell without it", or, "Man, I'm glad I had those threadsafe accessor methods; it's made it so easy to start using these classes without having to think too much about threadsafety issues", or, "Gee, those accessor methods have sure made it easy to throw stuff around in my Model-View-Controller object diagram", and so forth. Once you've had a few of these experiences you'll never question the "why" of writing accessors again.

The "how" question is the most difficult. Once I'd learned the [Cocoa memory management](http://www.stepwise.com/Articles/Technical/2001-03-11.01.html) paradigm I still found myself asking, "So what's *the* best way to write an accessor?". I wanted to get past the 5, 10 or 15 different ways I'd seen of writing accessors to the one, *best* way of writing them.

There are lots of articles on how to write accessors and I won't rehash them here (examples: [here](http://www.stepwise.com/Articles/Technical/2002-06-11.01.html), [here](http://www.stepwise.com/Articles/Technical/MemoryManagement.html), [here](http://nslog.com/archives/2003/05/05/accessor_methods.php) and [here](http://nslog.com/archives/2003/05/17/accessor_methods_part_2.php)), but the key lesson is **there is no single *best* way to write accessors**. Hmmm. Perhaps I can phrase that more positively: instead of searching for the holy grail of accessors, always choose the right accessor for the job.

Things to bear in mind when choosing an accessor for "the job":

-   *How important is performance for this accessor (how often will it be called)?* An accessor that's called 200 times per second (or 2000) has different design requirements than one called once every five minutes.
-   *How important is thread safety for this accessor?* If it's important then you'll have to worry more about synchronization, locks and the persistence (or otherwise) of autoreleased objects.
-   *Will this be a long-lived instance variable or a short-lived one?* The kind of accessor you'll write for an instance variable that is set at program launch and exists for the lifetime of the program will be very different from the kind you'd write for an instance variable that changes more often or less predictably.
-   *Is this a collection or a non-collection instance variable?* And if it's a collection object, do you want a copy of the contents or will you mostly be focussed on adding/removing objects to/from it?
-   *Do I care more about the specific instance of this variable or its contents?* And relatedly, if you care about a specific instance of the variable, where else in the program is it likely to be used?
-   *How likely is it that this accessor will be used to re-set the same value?* Should you be testing for pointer equality before trying to re-set things?
-   *Will this class belong to a reusable, general framework?* If so, you should probably be more conservative in your design because you have no way of knowing in what kinds of situations your accessor will be called.
-   *Is this class highly customized, specific and unlikely to be reused?* In a controlled situation you don't have to worry so much about the general case and you therefore it's not so important to be conservative in your design; you can use exactly the right accessor for the job.
