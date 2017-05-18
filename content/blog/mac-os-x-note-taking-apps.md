---
title: Mac OS X note-taking apps
tags: notational.velocity blog
---

Having been burnt many times over the years by vendor lock-in, I've learnt to always prefer open formats. When it comes to note-taking, I've been using the most open format of them all — the plain text file — for years now. Stuff that may be of interest to others goes on the [wiki](/wiki/wiki), but there is a large class of jotted-down scribbles that ends up living in text files on my local filesystem only.

Nevertheless, since upgrading to [Lion](/wiki/Lion), I've found myself abusing the operating system's [pervasive auto-save feature](http://support.apple.com/kb/HT4753). This feature, manifested in most of [Apple's](/wiki/Apple%27s) own apps, means that *even your new, untitled documents* will be auto-saved in the background and persist across application launches and even reboots. The result of this for me has been a TextEdit instance with about 10 documents open at any time, all with titles like "Untitled 5"; these are snippets of text that relate to something I am working on at a given moment, not important or universal enough to warrant immortalization in the form of a [wiki](/wiki/wiki) article, and ephemeral enough that I don't want to take the time to give them a filename of their own and save them to disk.

This anti-pattern is clearly a bad habit that will at best erode the organizational hygiene of my machine (and potentially drive me crazy in the long run), and at worst bite me the day that Mac OS X or TextEdit crashes and those auto-saved files don't survive the incident, so I started looking around for an actual note-taking or organizer application.

# The search

My starting point was [this great list](http://mac.appstorm.net/roundups/office-roundups/15-notable-note-taking-apps-for-mac/). Many of the entries have to be ruled out due to their use of proprietary formats. Others look to be bloated beyond recognition with features and the consequent complexity and likely bugs. Others, still, exhibit a mindless plagiarism of rival apps in the category, brazenly "borrowing" features from one another (like the "Print PDF to \[application\]" print dialog integration, or the drag-and-drop side dock).

The sameness of a lot of these applications is really quite overwhelming. It's true that Apple has really set the tone with its own apps, so many of them exhibiting the now ubiquitous list/detail interface ([Mail.app](/wiki/Mail.app) being the example *par excellence*), and making it easy for external developers to mimic the style using Cocoa Bindings and Core Data. But even taking that into consideration, the level of band-waggon-jumping that's going on here is stupefying. I felt like I was in a twisty maze of note-taking applications, all alike.

# The winner

At the end, the clear winner — for my needs, at least — is the awkwardly titled [Notational Velocity](http://notational.net/). Its name, really, is the only drawback.

This is literally the realization of the vision for a useful note-taking/organizer application that I would sit down and try to build if such a thing didn't already exist. Even in this world of frenetic independent software development, it's not often that you have an experience quite like this, in which you imagine in great detail the app that you're looking for, and miraculously find it, with no less — and no more — features than you wanted.

Key characteristics that make Notional Velocity a winner:

-   [open source](/wiki/open_source) ([GitHub repo](https://github.com/scrod/nv))
-   can store snippets as plain text
-   can paste text in from other applications without worrying about it polluting the note database with unwanted formatting
-   as snippets are just plain text files on disk, so they are indexable by [Spotlight](/wiki/Spotlight) (just remember to [tell Notational Velocity to put those files somewhere that Spotlight can find them](http://charliepark.tumblr.com/post/321649657/ive-figured-out-a-way-to-get-notational-velocity))
-   pervasive use of auto-complete
-   tagging
-   simple "uni-modal" UI in which searching, opening, and creating are all part of the same workflow
-   unified search covers note titles, note content and tags
-   intuitive keyboard shortcuts for pretty much every conceivable action
-   configurable font, font size, and coloring
-   auto-linkification (ie. pasted URLs are clickable)
-   notes can be created via drag and drop (either whole files, or text selections)
-   configurable external editor ([MacVim](/wiki/MacVim), of course)
-   control over tab key behavior (ie. the ability to use it for indentation, not field selection, and to force it to use soft tabs)
-   ability to turn off the spell checker (useful particularly when working with code, which is what I mostly use notes for)
-   attractive [Mail.app](/wiki/Mail.app)-like [UI](/wiki/UI) with partial preview in the list view
-   lightweight, fast, free of feature-bloat

Among the things which I wouldn't have built, but which I can see myself potentially using, are:

-   built-in `[[wikilink]]` syntax

Stuff which I doubt I'll use, but which might end up emerging as something useful as time goes by:

-   bring-to-front hot key
-   bookmarks feature (the ability to assign a specific note that should open when you press a certain key combination)

Really the only fluff I'm not interested in using is:

-   encryption (I believe that's what the Keychain is for, and whole-disk encryption)

# Conclusion

It's been a while since I've been so surprised and delighted by a new application. Not even great apps like [Isolator](/wiki/Isolator), [Divvy](/wiki/Divvy) and [Stay](/wiki/Stay) resonated with me this strongly when I started using them. I think the reason is that Notational Velocity is pared down to be the absolute minimum required to perform its function optimally, and a simple function it is.
