---
title: Son, don't repeat the same mistakes I made
tags: blog
---

There are some things that I wish someone had told me when I got started programming Cocoa four years ago. There's a lot to learn, of course, so even if they *had* told me (and let's be honest, they probably *did* tell me) I may not have realized the importance of the advice.

So as you go you do your best to adhere to the "best practices". Sometimes you find out you made a mistake and have to go back. Other times you find out that the "best practice" wasn't really the best practice for a given situation. And as you look back over the years you see work that needs to be redone, and perhaps you wish you could have done it the "right way" the first time. Sometimes code that works isn't good enough; sometimes, even if you're not a perfectionist, you have to rewrite working code or restructure a working build process in order to enable or accommodate future growth. Sometimes, even if you think "if it ain't broke don't fix it", you still have to go back in and "fix" it.

So I'd like to offer some very brief advice in this post for Cocoa beginners which may or may not save some effort later on down the track.





#### Subversion from Day 1

Use Subversion or some other good version control system from day one, even if you're working alone. Version control provides you with structure, is an additional form of backup, facilitates the production of changelogs and release notes, encourages a disciplined approach to coding in which you tackle discrete problems or issues one at a time.

#### Write frameworks judiciously

Don't bundle everything up in frameworks for re-use unless you're really sure it belongs in a framework. For a small independent software vendor, frameworks make sense only for discrete, self-contained pieces of functionality that require bundled resources along with them (nibs, graphics, localizations etc). Examples of good justifications for a framework are specific tasks like delivering application updates, embedding a crash-reporter/crash-catcher application, unit testing, or offering bezel or hot key services.

You guessed it, the example purposes I list above are all specific tasks that I've created frameworks for. But in the case of more general, non-specific code, the best thing you can do is stick it in a Subversion repository and share it across projects by using a Subversion externals definition. You pull in only the specific classes, categories and files that you need. Your apps will build faster, have smaller memory footprints, and the build cycle will be less complicated

This was a painful lesson for me to learn. Three years ago I started sticking common code in a base framework called WOBase. In August this year I realized that WOBase had become too big and sprawling to make its reuse reasonable in new, small projects. Since then I've been dismantling the monolith that is WOBase and sticking it in a Subversion repository as a collection of reusable atomic components. I use only the bits and pieces that are appropriate for each task. This migration has taken me literally months, undoing and modifying nearly three years of construction.

If I had known about Subversion externals sooner I might have taken this decision earlier and saved myself a lot of work.

Another thing I wished I had known about earlier is the `BUNDLE_LOADER` build setting. Prior to learning about that I stuck all my common code for [Synergy Advance](http://synergyadvance.com/) in a framework of its own. In this way preference panes, plug-in bundles, and the application itself could all benefit from the same code. But making a framework increased the complexity of my build chain, my dependency graph, and lengthened my build times.

`BUNDLE_LOADER` makes that all unnecessary. The common code now resides in the application, and when building plug-ins and other bundles which depend on that code you instruct the linker to look for any missing symbols in the application. No more framework. Not only are the builds faster but application load times are as well. If I had known about `BUNDLE_LOADER` I could have saved a considerable volume of work.

#### Unit test from Day 1

Write concise unit tests from day one. I've been doing this for a while now, but I wish I'd been doing it for longer. Unit tests provide you with confidence that your code works as you think it does and give you the courage to make necessary changes fearlessly (without worrying about undetected breakage). The better your unit tests, the better your confidence can be. Measuring code coverage can also help increase your confidence.

#### Doxygen

Use [Doxgen](http://doxygen.org/) to document your code, even if it is not for a public audience.

Writing a program is really a three-fold thing, comprising three interdependent activities:

1.  The code itself: does what you think it should do
2.  The unit tests: confirm that the code does what you think it should do
3.  The documentation: explicitly states what you think the code should do

In reality, the three are closely interwoven and you often go back and forth between writing each. For example, sometimes the things you've specified in the documentation provide you with a guide for what you should test in your unit tests; and in turn, your unit tests help you decide what to write (and when to stop writing) in the code.

Clearly, if you code is not for a public audience nor for use in a team your documentation need not be like Apple's, but it is probably a good idea to at a minimum provide a one-line description for each class and method; this will enforce a discipline, requiring you to think more about the *design* of your classes. Likewise, you should document, at a minimum, the expectations each method has with respect to input parameters, what gets returned from the method, and what kinds of exception might be thrown and when/why.

#### Branching

Branching enables you to do stuff like release one version of your software for Tiger and another for Leopard. You can optionally merge changes *en masse* or selectively ("cherry picking") between branches.

Branches are useful, but the key advice here is: branch late. Each branch means more work, so branch as late as possible and only when you're sure that it's the right moment to do so.

#### Xcode configuration files

Or `xcconfig` files. The advice here is short: use them. I wish I'd known about them sooner (or that they'd been introduced sooner, or both!).

#### Practise

The last bit of advice is that you practise, practise, practise. There are a lot of patterns to learn in Cocoa, and learning these is more important than learning any specific API. There will always be new API to learn, but if you can master the basic Cocoa patterns then you'll be able to easily master and use new APIs as they emerge.

And when it comes to Cocoa patterns and ideas in computer science in general, the best way to learn them is simply to do. Model/View/Controller (MVC), Cocoa Bindings, Key-Value Coding (KVC), Key-Value Observering (KVO), action/target, delegates, datasources, Core Data, singleton patterns, locking patterns, accessor patterns, memory barriers etc.

You can try to learn about this stuff by reading, but in the end the only way to really master it is by doing. Write code, read the mailing lists, ask questions, answer them. Make mistakes, learn from them. After four years of working with Cocoa I look back and see that I have learned an incredible amount, but I also know that, as Yoda would say, much to learn, I still have. It's important encourage that learning process as much as possible and that means getting your hands on the code.
