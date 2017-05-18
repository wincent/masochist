---
title: Planned changes to development model
---

I've [commented elsewhere](http://www.wincent.com/a/support/forums/ubbthreads.php?ubb=showflatΝmber=1008&page=1) that I plan on approximating a [continuous integration](http://www.wincent.com/knowledge-base/continuous%20integration) model of development in future releases of [Synergy Advance](http://advance.wincent.com/) (and all my products in fact).

In my comment I wrote:

> After several months of positively "seismic" changes to the codebase (massive upheaval) the code is finally back in a buildable state... Almost every file has been touched, every project, every target... thousands of lines of changes and major structural reorganization. A lot of this has been mind-numbing work, a necessary evil to enable future growth, but with no short-term reward (no build-and-run gratification). But it finally runs again after hundreds of hours of the most boring type of development work there is. Still some issues to iron out, but my plan now is to keep it in a very-near-to-release state from here on; that is, I will be approximating the "continuous integration" model of development, where the software will always be in a releasable or almost-releasable state. At any point in time I should be able to decide, ok, I want to package up a release for tomorrow, and be able to do it.





This makes sense for business reasons (customers get their hands on releases more often) but it also makes sense for philosophical *and* technical reasons. Philosophical because openness is the right thing to do (by letting your customers see what you're doing you're treating them as you yourself would like to be treated). Technical because an open process produces better software (code is tested sooner, bugs reported more quickly, and having to produce builds which must always be acceptable for public viewing imposes a discipline on your coding).

I've been taking small steps towards a more open development model for many months now:

-   Making more of my projects open source: [WOTest](http://test.wincent.com), [Bansshee](http://bansshee.wincent.com/), [WinSwitch](http://winswitch.wincent.com), [atosym](http://www.wincent.com/a/products/atosym/), [Wincent Build Tools](http://www.wincent.com/a/products/buildtools/), and [Wincent Strings Utility](http://strings.wincent.com/).
-   Moving the code for these open source projects into a publicly accessible [Subversion](http://www.wincent.com/knowledge-base/Subversion) repository.
-   Publishing an [RSS feed](http://www.wincent.com/a/about/wincent/weblog/svn-log/atom.xml) of *all* commits so that customers can see source code changes even in closed-source products.
-   Putting bug reports and feature requests out in the open in a [publicly accessible database](http://bugs.wincent.com/).
-   Having open-to-all [beta-testing mailing lists](http://lists.wincent.com).

But I can and want to go further. Why only approximate a continuous integration model when you could actually go the whole distance?

After reading Joel Spolsky's article, "[Daily Builds Are Your Friend](http://www.joelonsoftware.com/articles/fog0000000023.html)", I've identified the missing link that up until now has prevented me from contemplating "nightlies" like those made available by many open source projects:

> Here's how to do them. You need a daily build server, which will probably be the fastest computer you can get your hands on. Write a script which checks out a complete copy of the current source code from the repository (you are using source control, aren't you?) and then builds, from scratch, every version of the code that you ship. If you have an installer or setup program, build that too. Everything you ship to customers should be produced by the daily build process. Put each build in its own directory, coded by date. Run your script at a fixed time every day.

I already have a highly automated build process where I can build Synergy Advance by clicking the "Build" button in Xcode. It builds all the dependencies, assembles them together and even makes the disk image for distribution to users.

But we can go further.

If we can do a one-step build, why not extend things and automate that build so it runs at the same time every day *and* uploads the built product to the server? So I was partly inspired by Joel's article and partly by the Ruby gems I've been looking at lately and whose Rakefiles (think Makefiles) include tasks to upload new releases.

So that's my intention. I'm going to extend my build process and automate it so that it checks out a clean copy of the latest version of the source code for each product, builds and uploads to the server.

There are no guarantees that these cutting edge releases will even work, but I'll certainly make my best effort to ensure that they do as often as possible. I won't be promoting these nightlies for widespread use. But they'll be linked to from the downloads page and they'll be there for the curious.

This will require some tweaks and special logic in the build process: I'll need to make my version numbers include the Subversion revision number to prevent consecutive nightly builds from looking alike; I'll need to handle the case where no changes have taken place in a particular product in the last 24 hours; I'll need to set up an RSS feed where people can see when new nightlies are pushed out...

So my plan is to get this up and running as soon as possible. Watch this space for more info.

### Update: 15 March 2007

The initial version of the system is now deployed and the first nightlies are available. See [this article for more information](http://www.wincent.com/s/nightlies/).
