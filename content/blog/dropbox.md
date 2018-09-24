---
tags: blog dropbox
title: File system organization guidelines
twitter: https://twitter.com/wincent/status/1044167354295480320
---

The other day I was [lamenting on Twitter](https://twitter.com/wincent/status/1039961366600314880) how tricky it can be to do something as simple as organize your Dropbox folder:

> So speaking of organizing my Dropbox folder... I'm facing again the whole taxonomy vs folksonomy thing. Taxonomies are seductive hierarchical classification systems that lure you with their siren song of logic, order, and sense-making.
>
> The Yahoo! directory (composed of hierarchical categories) was an early famous example of an attempt at ordering the world's knowledge (well, really just the world's Internet at that time) in a taxonomy that provided intuitive navigability, discoverability, rapid look-up.
>
> Trouble was, it wasn't super scalable, and lots of things refused to be neatly pigeon-holed in a single place with[in] the hierarchy. (Right now I can't remember if the same content could appear in multiple places). File-systems (generally hierarchical) face the same problem.
>
> This has been the case ever since you could put a folder or directory inside another, and it exists today in the age of Dropbox. You can, of course, have something "live" in more than one place at a time if you create a symbolic link (or a hard link, or an alias, or a shortcut).
>
> I found that when I used to do that on HFS filesystems, the aliases weren't super reliable and could easily rot over time [I expect APFS is no different]. Layer a cloud-based synchronizing abstraction like Dropbox and the probability of breakage gets much worse.
>
> There have been lots of attempts at overcoming the pain points of working with large taxonomies by approaching the problems from a different angle. Google aims not to make the world's knowledge conform to a hierarchy, but rather to make it searchable.
>
> Microsoft made a "database" filesystem. BeOS kind of did too, with its rich metadata. Apple did as well with Spotlight (long before APFS). All of these attempt to present you with an abstract view of the volume that elides the structural location [of things] on disk.
>
> Gmail is another great example. You can make "folders" and even nest them inside each other, but they are called labels, and you can apply multiple labels to a single message, causing it to show up in multiple places.
>
> The idea is that the search should be so good — and it generally is — that you can find what you are looking for based on what it is and not where it is. This idea of tagging first came up on sites like Digg (I think?), AFAIK one of the early great examples of a "folksonomy".
>
> These tag-based classification systems work great IMO. Unlike hierarchies, which you have to pretty much get right from the get-go (because they are hard to change, because major conceptual flaws are difficult to correct, because some stuff *is* intrinsically ambiguous) ...
>
> ...tag-based schemes are easily modified and lend themselves well to incremental improvement. Major conceptual deadlocks are rare. You can *invest* in a tag-based system and it will become more valuable over time. The investment still makes sense even if the search technology...
>
> ...is weak, because the latent value of the tagging can be capitalized upon "for free" whenever the technology improves. They're great. Alas, none of this helps much with the question of how to organize your Dropbox, because you still have to decide *where* to put your stuff.
>
> Some illustrative examples: should I create folders for my kids and nest their stuff inside it? (eg. a folder for health insurance, a folder for doctor visits) or should I create top level folders for insurance and per-person folders within those?
>
> What if I have a major medical episode? Does that warrant its own top-level folder, and what should go inside it?
>
> How much of this should I redundantly encode in the name (eg. "John annual medical checkup 2018-09-10.pdf") and how much in the path (eg. "Medical/John/Annual checkup 2018-09-10.pdf")? Which is going to be more searchable?
>
> Also, do you notice how I don't really trust the OS filesystem to preserve the dates or make them usefully exposed when searching or browsing? When should the date go in the file name (if ever), and when should you encode it in folder structure (eg. "2018/10/...")?
>
> Unlike many other areas in my life where I have relentlessly optimized and refined my practices and processes to a point where I am relatively happy with them (no in the sense that they are perfect, but in the sense that they have solid rationales and are reasonably effective)...
>
> ...when it comes to file organization, all I have is a massive corpus of artifacts manifesting a many-year style drift where you can see how my patterns and practices mutated over time, never really settling. At this point, the only thing I haven't fully tried is throwing it...
>
> ...all in one massive directory and periodically trashing or archiving the oldest files into subdirectories, relying on search and times winged chariot to sort out all the rest. I was kind of hoping that I'd have an epiphany while writing this thread, but sadly I did not.

I decided that I'm not going to let a lack of an epiphany stop me from trying to improve my situation in a definitive, lasting way (you see, when you're between jobs like I am you need to manufacture challenges to keep yourself engaged). Let me warn you though: if you are the sort of person who allows files to pile up on your desktop by the hundred until the icons resemble so many layers of carpet, then this post is probably not for you. On the other hand, if you're a geek who's deeply into structure and order then there might be something in here that you can relate to.

I did some searching for prior art on the subject and found a couple of articles ([here](http://www.paulingraham.com/dropbox-and-symlinks.html) and [here](http://aurelio.net/articles/dropbox-symlinks.html)) that confirmed my recollection that Dropbox didn't cope well with symbolic links or aliases. I went through my Dropbox folder to see if I had any symlinks (I didn't) or aliases (I did, and they were broken), confirming that this is still a problem in September 2018.

So this leads me to my first recommendation:

> **Recommendation:** Never use symlinks or aliases inside Dropbox folders.

You could make the argument for using symlinks from your Dropbox folder to items outside it, but I'd much rather just have a simple rule that is easily expressed and simple to follow.

If you've made the mistake of adding symlinks or aliases in the past, you can find them all with:

```shell
find ~/Dropbox -type l
```

and:

```shell
mdfind -onlyin ~/Dropbox kMDItemKind=Alias
```

respectively.

A corollary to this first recommendation is this:

> **Corollary:** Files and folders must exist in one place and one place only in your Dropbox folder.

As such, this means that your unavoidable choice in the whole taxonomy vs folksonomy question is taxonomy. Hierarchy. A place for every thing, and every thing in its place. A bunch of rules and guidelines for deciding *which* place applies will follow.

An exception to the "must exist in one place" rule is that you may wish to place a *copy* of something in another place. Clearly, doing this with anything that you might edit later is a recipe for madness due to divergence. This leads to a second recommendation:

> **Recommendation:** Only make duplicates of files that are immutable in nature, to avoid the headaches caused by divergence.

Examples of files that you could make redundant copies of without harm: long-lived documents like your birth certificate; documents which you will never edit (eg. scans of inbound email); and so on... Of course, the question remains, *why* would you want to make redundant copies of any of these things? After all, they'll eat into your quota, and if they proliferate, they may lead to a counterproductive sense of clutter and make things harder to find.

Nevertheless, I can see that you might want to create copies under some circumstances: for instance, you might want to have a folder (or a series of date-based folders) that constitute a kind of "append-only log" where you drag copies of all the things you've printed, or processed in a given period. Or maybe you have a document that you tend to need to use over and over in combination with other documents, so you allow multiple copies of it to exist where needed (a good example of this one for me would be the proof of my government-issued ID number which I end up needing to include in almost every official application or bureaucratic process that I go through).

# Antipatterns

Sadly, most of the top search results I landed on in my search for best practices contained some really terrible advice, including tips such as:

- *Put the last modified date in file name.*
- *Put the name of the last user to edit the file in file name.*
- *Number folders and files to enforce sort order.*

But perhaps there is some good that we can spin out from this web of bad advice. Let's talk about dates and sorting.

# Dates

We certainly don't want to put the last modified date in the file name. Fundamentally, we want to preserve the ability to sort the files within a folder by multiple criteria: for example, by the information that we encode in the name, by the modification date recorded on the filesystem, or by the creation date (again recorded by the filesystem).

## When should you use dates?

Sometimes the date is so fundamental to the identity and nature of the document that omitting it from the name itself wouldn't make any sense. For example, there is no way you'd save a document called "Tax return.pdf" and leave out the year to which it corresponds.

Likewise, you might have multiple documents that would all have the same name if it weren't for a distinguishing date. Examples include things like utility bills or other documents related to periodic or recurring events. If these ever live in the same folder, they are going to need dates.

> **Recommendation:** Use dates only when they are intrinsic to the nature of the document, or necessary to disambiguate multiple items which would otherwise have the same name.

## When should dates go in the folder name and when in the file name itself?

We want to keep noise and clutter out of our file names, so if we have a group of related documents which all share a common date, it is better to put them in a folder containing the date rather than put the date in the names of each of the individual files. To return to our taxation example again, it makes sense to have a top-level folder "Tax" containing folders for each year (eg. "2017", "2018" etc), and inside each folder we can put the documents for that year. It's a judgment call as to whether you encode the date redundantly in both the file name and the folder name in a situation like this; that is, you could either go with "Tax/2018/Tax return.pdf" or "Tax/2018/2018 Tax return.pdf". The benefit of the latter is that when you perform a search for "2018 tax", all the critical information can be seen in the file name alone; conversely, looking at a search result like "Tax return.pdf", you can only fully make sense of it if you can see the enclosing path. On the other hand, a more obscure document like some esoteric tax form (say, a 1099-G), probably isn't something you'll ever go looking for my name, so it would be fine for it to be called "Tax/2018/1099-G.pdf" instead of "Tax/2018/2018 1099-G.pdf". More on the subject of whether dates should be placed at the beginning or at the end below.

> **Recommendation:** When a date applies to a group of items, put the date in the containing folder name rather than on each individual item. Only encode the date redundantly in the file name if you expect to be searching for the document by date and by name.

## How should the date be formatted?

> **Recommendation:** Base all dates on the YYYY-MM-DD format.

This avoids ambiguity — eg. does "4/5" refer to April the 5th (US style) or the 4th of May (everywhere else) — and makes a lexicographical sort equivalent to a chronological sort.

> **Recommendation:** Use the briefest date format that provides sufficient specificity for a given need (eg. prefer YYYY over YYYY-MM, and YYYY-MM over YYYY-MM-DD).

Documents that turn up infrequently, like tax returns, can easily make do with YYYY date information. But if you scan all incoming post, you might want to batch it in folders for each month (eg. "YYYY-MM" or "YYYY/MM") or even each day (eg. "YYYY-MM-DD" or "YYYY/MM/DD") if the volume is large enough.

The decision on whether to embed the date in a single folder name with hyphens, or whether to build it up with nested folders, likely depends on the total number of documents. For example, if you have a lot of items concentrated into a small time interval, you can probably use hyphens without the total number of items in a single file becoming unmanageably large. On the other hand, if you have a sustained, high concentration of items spread over a long period of time, you're probably going to be forced to use nested folders.

> **Recommendation:** Break dates up into nested folders (eg. "YYYY/MM/DD") only when the total volume of contained items makes the alternative (eg. "YYYY-MM-DD") impractical.

## Where in the file name should the data appear?

The obvious options here are to put the date at the beginning or the end of the file name.

> **Recommendation:** If multiple items of the same type, differentiated only by their date, are grouped together in a folder, put the date at the beginning. Otherwise put the date at the end, to preserve sortability by name as well as by date.

One exception to this guideline would be items where the year is usually a prefix *as a matter of convention*; here again we recur to the example of the tax return, which we would unconditionally prefer to store as "2018 Tax return.pdf" rather than "Tax return 2018.pdf", because the former is how people would generally talk or write about the document.

# When to use capital letters

> **Recommendation:** File and folder names should start with capital letters, but subsequent words need not start with capital letters unless required by grammar or convention.

We employ the initial capital for consistency (the "Dropbox" folder itself starts with a capital, as do all the default folder names visible in the macOS Finder), but we don't go so far as demanding "title case" (capitalization of all words in the file or folder names) because it is more cumbersome to type and more visually heavy (for the same reason that writing in all-caps is considered tantamount to "shouting" on the internet).

This last guideline does put us into conflict with Apple's conventions (where folders may have names like "Application Support", for example), but as the Apple marketing stuff used to say, think different.

# When to use spaces

> **Recommendation:** Use spaces freely in file and folder names.

It is true that many scripts over the years have had bugs in them because they assumed that they would only ever run from paths without spaces, or operate on files without spaces in their paths, so for a long time I use to use hyphens instead of spaces in my names out of sheer paranoia; it was a way to ensure that buggy scripts would work, email attachments could be opened, autocompletion and command-line editing would work without any surprises in the terminal.

But the world has moved on, and both Dropbox and macOS handle spaces with aplomb. Autocompletion in the terminal works just fine with items with spaces in their names, and we are talking about organizing our Dropbox folder for goodness sake, not writing some secure build system for updating the nuclear launch codes.

# Is Unicode safe?

It seems that it is. In the past I have seen some weirdness with Dropbox mangling file names that had non-ASCII characters in their names, but [that was in another country, and besides, the wench is dead](https://en.wikiquote.org/wiki/Christopher_Marlowe), by which I mean, I haven't run into problems with Unicode for a long time now. Unicode displays fine in the Finder, works in the terminal via typed input or autocomplete, and doesn't see to cause any issues with Dropbox.

> **Recommendation:** Use Unicode in file names as required.

# What about language?

> **Recommendation:** Use whatever language you want, but be consistent.

For me, living in Spain, that means a lot of the subject matter of daily life is in Spanish, and that means my folders and file names are in Spanish. My "Tax" folder, for example, is actually "Impuestos", because that's what they're generally referred to around here.

# Separators

Once I overcame my fear of using Unicode in file names I began to use em dashes to separate the main components of file names (eg. "Company — Topic.pdf"). But since then I've seen the light:

> **Recommendation:** Use commas as separators within file names. They occupy less space than an em dash, and they require only a trailing space rather than a space before and after.

So, "Company — Topic.pdf" becomes "Company, topic.pdf". In fact in many cases, you might find that the file name reads just fine without the separator (eg. "Company topic.pdf"):

> **Recommendation:** If you can, drop the separator: it's cleaner, and you might not really need it after all.

# Subordination

Why did we talk about "Company, topic" above and not "Topic, company"? In what sense is the thing on the right subordinate to the thing on the left? The truth is, it could have been either way, depending on the context. In general, we want the thing that is *most discriminating* to go on the left, because that means we can leverage a lexicographical sort to most quickly find the item we're looking for.

> **Recommendation:** Place the information with the most discriminating power at the beginning. This applies to both files and paths.

Let's make this a bit more concrete with an example. Imagine we have items with color and size. There are 100 colors (red, blue, beige, salmon pink etc) but only 2 sizes (small, large). Assuming an even distribution of colors and sizes, if we have a thousand items, there will be about 10 of each color and 500 of each size. We put the color on the left and the size on the right (eg. "Red small buttons.jpg"). By putting the information that most decisively narrows the search space to the left, we can reduce our set of 1,000 possible items down to 10 candidates in a single step; if we'd put the least-discriminating datum on the left then we'd only have narrowed our search space down from 1,000 to 500.

Of course, even this is a guideline. You may have a frequent task that you have to do that requires you to group items by size and go from there. In that case, maybe grouping into subfolders named by size is the way to go, or maybe you can consider changing the order. This is just a guideline, so use your best judgment.

# People vs subjects

This is a specific case of subordination. Should people be subordinate to topics (ie. nested inside them) or the other way around? In other words, should I have a top-level folder for each family member and nest stuff inside that, or should I instead have top-level folders for "School", "Taxes", "Insurance", "Health" etc and nest inside those?

According to our discussion of discriminating power above, we should put people towards the right of our file names. If we have 4 people in our family, their names won't have a lot of discriminating power at all, compared to, say, the universe of appointment types, bureaucratic procedures, and other subject matters.

> **Recommendation:** Don't organize by people; organize by topic.

Note that this doesn't mean that we can't have top-level folders for people, just that those top-level folders shouldn't be the root of some large hierarchy. For example, we might have a top-level "School" folder with subfolders for each child (and top-level folders for other topics), but we can also have top-level folders for each child where we put things that are universal in nature and not topic-specific (things like birth certificates, for instance).

And while we're talking about top-level folders:

> **Recommendation:** Keep the top-level topic list short.

In general, we don't want to "fan out" too aggressively if we can help it. For mere mortals, about 20 separate topics is about as much as we would want to deal with at any given level.

# Preserving original file names

Often, you'll get a document from another source and it will, naturally, be named according to conventions of its own. You might get a bill titled "050800947920180823210421132394.pdf", or an informational leaflet titled "2018 OE Medical Plan Chart_FINAL1.pdf".

> **Recommendation:** Preserve original file names by placing documents from other sources inside a folder that you name according to your own conventions.

In this way, if you ever need to find a document by its original name — for example, because it is referenced by name in an email — you can still look it up, but you can *also* find it by using words of your own that describe it, or by looking for it in the location within the hierarchy that these conventions indicate it should occupy.

# Keep it simple

When I set out to put these guidelines in writing I wanted it to be simple. Alas, it turns out that there is a lot of nuance (bummer, that, huh). Nevertheless, as a general principle I'm going to echo my point above about keeping the number of top-level folders (and sub-folders within each other folder) manageably small and make the following recommendation:

> **Recommendation:** Keep things as simple as possible: don't go too far with structure.

We don't want too much nesting. It is probably better to have an "Invoices/2018" folder than a complex nested mess of folders organizing invoices by type, by provider, and so on. In general, don't be seduced by the desire to hierarchize everything: introduce structure only when and where it is required to make the quantity of information manageable.

# Be consistent

There are a lot of rules here and a lot of subtlety. It can be easy to forget what rules should apply in a given situation, and sometimes a judgment call may be required. The point is not to apply the guidelines with flawless perfection, but to make your best effort. *Try* to be consistent, and while it won't be perfect, it will be *good enough*.

> **Recommendation:** Be as consistent as possible.

# Summary

So, with all that out the way, here's what we have:

- Never use symlinks or aliases inside Dropbox folders.
- Items should exist in exactly one place.
- If you must duplicate a file redundantly, make sure it is an immutable one.
- Use dates only when they are intrinsic to the nature of the document, or necessary to disambiguate multiple items which would otherwise have the same name.
- When a date applies to a group of items, put the date in the containing folder.
- Only encode the date redundantly in the file name if you expect to be searching for the document by date and by name.
- Base all dates on the YYYY-MM-DD format.
- Use the briefest date format that provides sufficient specificity for a given need (eg. prefer YYYY over YYYY-MM, and YYYY-MM over YYYY-MM-DD).
- Break dates up into nested folders (eg. "YYYY/MM/DD") only when the total volume of contained items makes the alternative (eg. "YYYY-MM-DD") impractical.
- If multiple items of the same type, differentiated only by their date, are grouped together in a folder, put the date at the beginning. Otherwise put the date at the end, to preserve sortability by name as well as by date.
- File and folder names should start with capital letters, but subsequent words need not start with capital letters unless required by grammar or convention.
- Use spaces freely in file and folder names.
- Using Unicode in file names as required.
- Use whatever language you want, but be consistent.
- If you must use a separator, use a comma.
- Don't use a separator unless you must.
- Place the information with the most discriminating power at the beginning of files and paths.
- Don't organize by people; organize by topic.
- Keep the top-level topic list short.
- Preserve original file names by placing documents from other sources inside folders.
- Keep things as simple as possible: don't go too far with structure.
- Be as consistent as possible.

And this will be my last word on the subject. Until, that is, I change my mind or forget.

<small><em>Discuss: [Twitter](https://twitter.com/wincent/status/1044167354295480320)</em></small>
