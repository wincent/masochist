---
tags: development wiki
---

In November 2006 I wrote an article called "[Son, don't repeat the same mistakes I made](http://wincent.com/a/about/wincent/weblog/archives/2006/11/son_dont_repeat.php)" describing some of the little development "gotchas" that I wish I had found out about earlier on.

Given that these are the kinds of lessons that one keeps on learning I've decided to make a [wiki](/wiki/wiki) article on the subject which I will be able to add to over time.

# Use [version control](/wiki/version_control) from day 1

Use [Subversion](/wiki/Subversion) or some other good version control system from day one, even if you're working alone. [Version control](/wiki/Version_control) provides you with structure, is an additional form of backup, facilitates the production of changelogs and release notes, and encourages a disciplined approach to coding in which you tackle discrete problems or issues one at a time.

Good [version control](/wiki/version_control) software that supports [merge tracking](/wiki/merge_tracking) enables [branching](/wiki/branching) and [merging](/wiki/merging) practices that would otherwise be unthinkable. Proper, automatic [merge tracking](/wiki/merge_tracking) allows you to do things that make good business sense (you can maintain "stable" branches to keep feeding updates to customers even when working on more disruptive, radical changes elsewhere) *and* good technology sense (judicious use of "[microbranches](/wiki/microbranches)" can help you to develop more nimbly, quickly and cleanly).

[SVK](/wiki/SVK) is an example of a [version control](/wiki/version_control) system that can be layered over the top of an existing [Subversion](/wiki/Subversion)-based workflow without having to totally re-invent your build process. When I was unhappy with [Subversion](/wiki/Subversion)'s lack of [merge tracking](/wiki/merge_tracking) I seriously considered switching to [Perforce](/wiki/Perforce) but [SVK](/wiki/SVK)'s ability to work in conjunction with my existing [Subversion](/wiki/Subversion) workflow clinched the deal in a snap.

## Keep your [version control](/wiki/version_control) as generic as possible

When I first started using [version control](/wiki/version_control) I began with [CVS](/wiki/CVS) and used a directory structure like this:

    project/
    project/cvs-files/
    project/non-cvs-files/

Then when I migrated to [Subversion](/wiki/Subversion) some time after it hit 1.0 I had to change this structure to:

    project/
    project/svn-files/
    project/non-svn-files/

This was because I had two choices:

1.  Keep the old naming scheme but live with the inconsistency of path names that provided misleading information.
2.  Use a new scheme but have to update all the relative path references I had that depended on having `cvs` in the name.

By the time I switched to [SVK](/wiki/SVK) I had finally learned my lesson: I should have chosen generic names all along:

    project/
    project/src/
    project/extra/

# Think carefully before writing a framework

Don't bundle everything up in frameworks for re-use unless you're really sure it belongs in a framework. For a small independent software vendor, frameworks make sense only for discrete, self-contained pieces of functionality that require bundled resources along with them (nibs, graphics, localizations etc). Examples of good justifications for a framework are specific tasks like delivering application updates, embedding a crash-reporter/crash-catcher application, unit testing, or offering bezel or hot key services.

You guessed it, the example purposes I list above are all specific tasks that I've created frameworks for. But in the case of more general, non-specific code, the best thing you can do is stick it in a [Subversion](/wiki/Subversion) repository and share it across projects by using a [Subversion externals](/wiki/Subversion_externals) definition (but note that if you use [SVK](/wiki/SVK) as recommended above you will have to find an alternative because [SVK](/wiki/SVK) does not yet support [Subversion externals](/wiki/Subversion_externals); see "[Working around the lack of svn:externals support in SVK](/wiki/Working_around_the_lack_of_svn%3aexternals_support_in_SVK)"). You pull in only the specific classes, categories and files that you need. Your apps will build faster, have smaller memory footprints, and the build cycle will be less complicated

This was a painful lesson for me to learn. In 2003 I started sticking common code in a base framework called [WOBase](/wiki/WOBase). In August 2006 I realized that [WOBase](/wiki/WOBase) had become too big and sprawling to make its reuse reasonable in new, small projects. I then had to spend many months dismantling the monolith that was [WOBase](/wiki/WOBase) and sticking it in a [Subversion](/wiki/Subversion) repository as a collection of reusable atomic components. I use only the bits and pieces that are appropriate for each task. This migration has took me literally months, undoing and modifying nearly three years of construction.

If I had known about [Subversion](/wiki/Subversion) externals sooner I might have taken this decision earlier and saved myself a lot of work.

Another thing I wished I had known about earlier is the [BUNDLE\_LOADER](/wiki/BUNDLE_LOADER) build setting. Prior to learning about that I stuck all my common code for Synergy Advance in a framework of its own. In this way preference panes, plug-in bundles, and the application itself could all benefit from the same code. But making a framework increased the complexity of my build chain, my dependency graph, and lengthened my build times.

[BUNDLE\_LOADER](/wiki/BUNDLE_LOADER) makes that all unnecessary. The common code now resides in the application, and when building plug-ins and other bundles which depend on that code you instruct the linker to look for any missing symbols in the application. No more framework. Not only are the builds faster but application load times are as well. If I had known about [BUNDLE\_LOADER](/wiki/BUNDLE_LOADER) I could have saved a considerable volume of work.

# Unit test from Day 1

Write concise unit tests from day one. I've been doing this for a while now, but I wish I'd been doing it for longer. Unit tests provide you with confidence that your code works as you think it does and give you the courage to make necessary changes fearlessly (without worrying about undetected breakage). The better your unit tests, the better your confidence can be. Measuring code coverage can also help increase your confidence.

And as you go you'll learn how to write better tests (or [behavioural specs](/wiki/behavioural_specs) if you prefer). Instead of testing internal state and implementation details your should only be testing the externally visible behaviour of the class. If you tie your tests to implementation details then they'll break whenever you change the implementation; this is counterproductive. But if you tie your tests to your expected behaviour then you'll find yourself thinking more about what that expected behaviour should be and producing better-thought-out code as a result.

# Use Doxygen

Use Doxgen to document your code, even if it is not for a public audience.

Writing a program is really a three-fold thing, comprising three interdependent activities:

-   The code itself: does what you think it should do
-   The unit tests or [behavioural specs](/wiki/behavioural_specs): confirm that the code does what you think it should do
-   The documentation: explicitly states what you think the code should do

In reality, the three are closely interwoven and you often go back and forth between writing each. For example, sometimes the things you've specified in the documentation provide you with a guide for what you should test in your unit tests; and in turn, your unit tests help you decide what to write (and when to stop writing) in the code.

Clearly, if you code is not for a public audience nor for use in a team your documentation need not be like Apple's, but it is probably a good idea to at a minimum provide a one-line description for each class and method; this will enforce a discipline, requiring you to think more about the design of your classes. Likewise, you should document, at a minimum, the expectations each method has with respect to input parameters, what gets returned from the method, and what kinds of exception might be thrown and when/why.

# Branching

When I wrote my original article I stated:

> Branching enables you to do stuff like release one version of your software for Tiger and another for Leopard. You can optionally merge changes *en masse* or selectively ("[cherry picking](/wiki/cherry_picking)") between branches.
>
> Branches are useful, but the key advice here is: branch late. Each branch means more work, so branch as late as possible and only when you're sure that it's the right moment to do so.

If you use a sophisticated [version control system](/wiki/version_control_system) like [SVK](/wiki/SVK) then you won't have to worry so much about the "branch late" rule above. You can easily maintain separate stable branches of development, use "[microbranches](/wiki/microbranches)" for short-term development tasks, and either keep two branches in sync or just do selective "[cherry picking](/wiki/cherry_picking)" at will with ease.

See "[Branching](/wiki/Branching)", "[Microbranching](/wiki/Microbranching)" and "[Merging](/wiki/Merging)" for more details.

# Xcode configuration files

Or [xcconfig files](/wiki/xcconfig_files). The advice here is short: use them. I wish I'd known about them sooner (or that they'd been introduced sooner, or both!).

# Keep assertions for programming errors only

Using `NSParameterAssert` is almost always a mistake. Assertions should be reserved for catching programming errors only and *not* for enforcing your public [API](/wiki/API) contract. See the article, "[Assertions](http://wincent.com/a/about/wincent/weblog/archives/2007/05/assertions.php)".
