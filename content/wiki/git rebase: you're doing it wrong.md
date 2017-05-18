---
tags: git rebase wiki
cache_breaker: 1
---

From:           Linus Torvalds <torvalds-AT-linux-foundation.org>
    To:             Dave Airlie <airlied-AT-linux.ie>
    Subject:        Re: [git pull] drm-next
    Date:           Sun, 29 Mar 2009 14:45:45 -0700 (PDT)
    Message-ID:     <alpine.LFD.2.00.0903291409030.3994@localhost.localdomain>
    Cc:             dri-devel-AT-lists.sf.net
    Archive-link:   Article, Thread


    On Sun, 29 Mar 2009, Dave Airlie wrote:
    >
    > My plans from now on are just to send you non-linear trees, whenever I 
    > merge a patch into my next tree thats when it stays in there, I'll pull 
    > Eric's tree directly into my tree and then I'll send the results, I 
    > thought we cared about a clean merge history but as I said without some 
    > document in the kernel tree I've up until now had no real idea what you 
    > wanted.

    I want clean history, but that really means (a) clean and (b) history.

    People can (and probably should) rebase their _private_ trees (their own 
    work). That's a _cleanup_. But never other peoples code. That's a "destroy 
    history"

    So the history part is fairly easy. There's only one major rule, and one 
    minor clarification:

     - You must never EVER destroy other peoples history. You must not rebase 
       commits other people did. Basically, if it doesn't have your sign-off 
       on it, it's off limits: you can't rebase it, because it's not yours.

       Notice that this really is about other peoples _history_, not about 
       other peoples _code_. If they sent stuff to you as an emailed patch, 
       and you applied it with "git am -s", then it's their code, but it's 
       _your_ history.

       So you can go wild on the "git rebase" thing on it, even though you 
       didn't write the code, as long as the commit itself is your private 
       one.

     - Minor clarification to the rule: once you've published your history in 
       some public site, other people may be using it, and so now it's clearly 
       not your _private_ history any more.

       So the minor clarification really is that it's not just about "your 
       commit", it's also about it being private to your tree, and you haven't 
       pushed it out and announced it yet.

    That's fairly straightforward, no?

    Now the "clean" part is a bit more subtle, although the first rules are 
    pretty obvious and easy:

     - Keep your own history readable

       Some people do this by just working things out in their head first, and 
       not making mistakes. but that's very rare, and for the rest of us, we 
       use "git rebase" etc while we work on our problems. 

       So "git rebase" is not wrong. But it's right only if it's YOUR VERY OWN 
       PRIVATE git tree.

     - Don't expose your crap.

       This means: if you're still in the "git rebase" phase, you don't push 
       it out. If it's not ready, you send patches around, or use private git 
       trees (just as a "patch series replacement") that you don't tell the 
       public at large about.

    It may also be worth noting that excessive "git rebase" will not make 
    things any cleaner: if you do too many rebases, it will just mean that all 
    your old pre-rebase testing is now of dubious value. So by all means 
    rebase your own work, but use _some_ judgement in it.

    NOTE! The combination of the above rules ("clean your own stuff" vs "don't 
    clean other peoples stuff") have a secondary indirect effect. And this is 
    where it starts getting subtle: since you most not rebase other peoples 
    work, that means that you must never pull into a branch that isn't already 
    in good shape. Because after you've done a merge, you can no longer rebase 
    you commits.

    Notice? Doing a "git pull" ends up being a synchronization point. But it's 
    all pretty easy, if you follow these two rules about pulling:

     - Don't merge upstream code at random points. 

       You should _never_ pull my tree at random points (this was my biggest 
       issue with early git users - many developers would just pull my current 
       random tree-of-the-day into their development trees). It makes your 
       tree just a random mess of random development. Don't do it!

       And, in fact, preferably you don't pull my tree at ALL, since nothing 
       in my tree should be relevant to the development work _you_ do. 
       Sometimes you have to (in order to solve some particularly nasty 
       dependency issue), but it should be a very rare and special thing, and 
       you should think very hard about it.

       But if you want to sync up with major releases, do a

    	git pull linus-repo v2.6.29

       or similar to synchronize with that kind of _non_random_ point. That 
       all makes sense. A "Merge v2.6.29 into devel branch" makes complete 
       sense as a merge message, no? That's not a problem.

       But if I see a lot of "Merge branch 'linus'" in your logs, I'm not 
       going to pull from you, because your tree has obviously had random crap 
       in it that shouldn't be there. You also lose a lot of testability, 
       since now all your tests are going to be about all my random code.

     - Don't merge _downstream_ code at random points either.

       Here the "random points" comment is a dual thing. You should not mege 
       random points as far as downstream is concerned (they should tell you 
       what to merge, and why), but also not random points as far as your tree 
       is concerned.

       Simple version: "Don't merge unrelated downstream stuff into your own 
       topic branches."

       Slightly more complex version: "Always have a _reason_ for merging 
       downstream stuff". That reason might be: "This branch is the release 
       branch, and is _not_ the 'random development' branch, and I want to 
       merge that ready feature into my release branch because it's going to 
       be part of my next release".

    See? All the rules really are pretty simple. There's that somewhat subtle 
    interaction between "keep your own history clean" and "never try to clean 
    up _other_ proples histories", but if you follow the rules for pulling, 
    you'll never have that problem.

    Of course, in order for all this to work, you also have to make sure that 
    the people you pull _from_ also have clean histories.

    And how do you make sure of that? Complain to them if they don't. Tell 
    them what they should do, and what they do wrong. Push my complaints down 
    to the people you pull from. You're very much allowed to quote me on this 
    and use it as an explanation of "do this, because that is what Linus 
    expects from the end result".

    			Linus

    ------------------------------------------------------------------------------

# Source

-   <http://lwn.net/Articles/328438/>
