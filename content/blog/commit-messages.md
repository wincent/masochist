---
title: Commit messages
tags: subversion git blog
---

The other day there was a post on [writing good commit messages](http://lbrandy.com/blog/2009/03/writing-better-commit-messages/) on [Reddit](http://www.reddit.com/r/programming/), talking about the good, the bad and the ugly when it comes to commit messages.

I just had occasion to import the [WinSwitch](/wiki/WinSwitch) repository from [Subversion](/wiki/Subversion) over to [Git](/wiki/Git) ([notes here](/wiki/Migrating_the_WinSwitch_repository_from_Subversion_to_Git)), and there are certainly some doozies in there which I am not proud of.

# The good

"Good" is a relative term when it comes to [Subversion](/wiki/Subversion) commit messages. In all of *my* Subversion projects and basically all Subversion projects I've ever seen, the convention is to write short, one-line commit messages. Evidently this can't really compete with the "subject line + justification/explanation" pattern which is generally favoured in [Git](/wiki/Git).

So there are a bunch of descriptive but uninspiring commit messages of this sort:

-   Update copyright year
-   3.2.1 release
-   3.2 release
-   "Log out..." alternate menu item

# The bad

-   rewrapping to 132 columns, bumping version number, moving to xcconfig files from buildtools

Conflating multiple changes in a single commit; bad boy!

-   Cleanup

Er, *what* kind of cleanup?

# The ugly

-   Back in Madrid

That's nice to know. Glad you made it safely back.

-   Attempt at using Carbon menus (and WebKit) to achieve resizable menu images (failure).

Committing broken changes?

-   Christmas Day debug build

Merry Christmas!

-   Commit so that I can do some bughunting diffs

Committing more half-baked work-in-progress stuff. Lack of discipline, or simply the fact that Subversion fails to offer a rich set of tools for managing, viewing and manipulating in-progress material? How keenly one feels the absence of `git stash`, `git rebase` (and `git rebase --interactive`), `git commit --amend` (which I have aliased to just `git amend` because I find myself editing my last commit message fairly often), and the utility of the cheap and easy topic branches and merging, the index (the staging area) and colorized and paginated `diff` output etc...

-   More or less working code

Um, ok. So it works "more or less". Doesn't sound too comforting.

-   Freeze repository prior to move to other machine

This is what happens in a non-distributed version control system. The number of options you have for moving changes (and works in progress) between machines is truly limited. Basically commit to the central server and update from the other machine, or manually use `diff` and `patch` to shuffle and apply patch files back and forth between machines.

Finally, there a bunch of repeated log messages like this:

-   1.4.1 release
-   1.4.1 release
-   1.4.1 release
-   1.4.1 release
-   1.4.1 release
-   1.4.1 release
-   1.4.1 release
-   1.4.1 release
-   1.4.1 release
-   1.4.1 release

I have no idea why I made these commits, most of them involving repeated changes to multiple files. Why didn't I bundle them all into a single commit?

# Current habits

I'm better now, really I am. Ever since switching to [Git](/wiki/Git), where the tools provide some nice frills if you follow a couple of basic conventions for commit messages (use a subject line followed by clarification/explanation/justification, and keep your lines nice and short), I've found myself writing much better commit messages.

It's not just the tool; it's also the Git development community itself. I recommend subscribing to the Git mailing list even if only to learn about the development process. One of the things (among many) you'll pick up is how to write great commit messages, and the value of doing so.

You can browse some of my Git repos [here](http://git.wincent.com/) to see the kind of messages I write now ([example 1](http://git.wincent.com/wikitext.git?a=commitdiff;h=e7f856d82e7bfbfc616df73b00e857e8a5c0024e), [example 2](http://git.wincent.com/wikitext.git?a=commitdiff;h=8003f54c9481ed7f0717f4069fd042b217e80a88)). Nice, atomic changes, bundled with tests and with nice clear commit messages.

As another example, below is the last handful of commits on the [Rails](/wiki/Rails) app running behind this site. It might seem like a lot of writing -- there are 1,232 commits in the "master" branch, and the total line count for all the messages is currently 15,520 lines(!) -- but crafting messages like this makes it so much easier to go back over the history, find specific changes, and figure out what I was doing and why. It also encourages me to think clearly about the *why* of the changes I make, and adopt a more disciplined approach to coding in general, with a focus on robust testing, correctness, elegance, good design, and much more.

    commit 4def946cc0c18f842470753d997337e01596332e
    Author: Wincent Colaiuta <win@wincent.com>
    Date:   Wed Apr 1 23:04:24 2009 +0200

        Capistrano: change command order in help
        
        In general we will want to display the maintenance
        page _before_ running any database migrations on
        the remote server.
        
        Signed-off-by: Wincent Colaiuta <win@wincent.com>

    commit 0ef7f8b33b6de405b02b1c841b40e205b96d1dbc
    Author: Wincent Colaiuta <win@wincent.com>
    Date:   Tue Mar 31 19:24:44 2009 +0200

        Update tweet preview field every 5 seconds
        
        As these are such small snippets we can afford to
        provide very frequent updates without hurting the
        server.
        
        Signed-off-by: Wincent Colaiuta <win@wincent.com>

    commit bb14daa73d4ffc80c6652cd3c61bb183c601dc7e
    Author: Wincent Colaiuta <win@wincent.com>
    Date:   Tue Mar 31 18:34:32 2009 +0200

        Avoid explict array sorting in specs (using =~)
        
        A few releases ago, not sure exactly when, RSpec
        introduced a new array matcher that allows one to
        compare array contents disregarding order using
        the "=~" operator.
        
        Use this to clean up some explicit sorts in various
        specs that were previously needed to make the
        comparisons work (cases where we only cared about
        what the array contents were, not about the ordering
        within the arrays).
        
        Signed-off-by: Wincent Colaiuta <win@wincent.com>

    commit 10d18dfbbed4d2e0e287b4169964dff9223001da
    Author: Wincent Colaiuta <win@wincent.com>
    Date:   Tue Mar 31 18:12:55 2009 +0200

        Remove "spam" attribute from all models which have it
        
        The "spam" attribute has been in the codebase for a long
        time now, and it turns out to have been a misguided and
        unnecessary complication all this time.
        
        Originally, the idea was that by keeping spam messages
        around in the database it would be easier to do Bayesian
        training.
        
        In reality, Bayesian filtering has yet to be implemented,
        in practice I have always just used the "Destroy" rather
        than the "Spam" buttons, and models or their content for
        any future Bayesian training implementation can easily
        be kept in a separate database table.
        
        The cost of maintaining this "spam" attribute is that it
        has made many, many queries throughout the codebase more
        complicated (more likely to have bugs, harder to code,
        slower).
        
        So, out it comes.
        
        See:
          https://wincent.com/issues/1264
          https://wincent.com/issues/734
        
        Signed-off-by: Wincent Colaiuta <win@wincent.com>

So I confess. I used to write crappy commit messages. But I'm reformed now. Really, I am.
