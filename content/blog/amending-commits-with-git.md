---
title: Amending commits with Git
---

One of the nice frills that comes with the [distributed version control](http://www.wincent.com/knowledge-base/distributed%20version%20control) model of [Git](http://www.wincent.com/knowledge-base/Git) is the ability to amend unpublished commits.

With a client-server model your commits are permanent and instantly visible, which means that if you make a mistake your only choice is to publish *another* commit correcting the mistake made in the first commit.

Normally this inability to rewrite history isn't such a bad thing as it is both a faithful record of the actual development process (warts and all) and also helps shield you from accidentally losing information.

But there is a common workflow that keeps cropping up and that is the need to make *minor* corrections to the last commit. Perhaps you see a spelling error in your commit message but by the time you catch it your finger is already falling down on the Enter key and your spelling mistake is immortalized for all time. Because Git uses a distributed model when you do a `git commit` you're not actually sending out any changes over the wire; you're just committing them to your local repository. It's not until you do a `git push` that your commits actually get pushed out across the net to an upstream, publicly-visible repository. This is in contrast to [SVK](http://www.wincent.com/knowledge-base/SVK), which always pushes changes back upstream as soon as you commit them.

This means that if your changes haven't been pushed out yet, nobody can have seen them and so there's no harm in amending that last commit. You do this by making any tweaks you want in the commit, adding them to the index with `git add` and finally using `git commit --amend` to finalize your amendment. Git conveniently populates the editor with your last commit message which you can modify (or not) at will. You can amend the same commit multiple times if need be.

More examples.

Perhaps the act of writing your commit messages causes you to reflect about the change and in doing so you realize that there's actually one more little thing that you'd like to be included in the commit. You can continue on, finish writing your commit message and exit the editor, then run `git commit --amend` afterwards to include your addition.

It's of course a good thing to check your proposed changes *before* you make a commit but I often like to review them *afterwards* as well (using `git log` and `git show`). Often in these reviews you'll see minor anomalies you'd like to fix like whitespace problems and the like. `git commit --amend` is your friend in this case too.

Along with `git stash` this is one of those workflow sweeteners that has me thankful and smiling and glad to be using Git every time I have need of them (which often turns out to be several times a day).
