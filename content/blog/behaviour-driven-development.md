---
title: Behaviour-Driven Development
tags: blog
---

Today I felt like showing off my stunning ignorance of Ruby on Rails by doing a screencast on Behaviour-Driven Development.

[![](/system/images/legacy/bdd-screencast.png)](http://www.wincent.com/a/about/wincent/weblog/screencasts/BDD.mov)

Well, not really. Showing the world how slow and clumsy I am in Rails wasn't my prime objective (even though I did do a pretty good job of it!)

I'm parading my ignorance because I want to convey something about Behaviour-Driven Development: I am convinced that *it is the best approach a beginner can take to a new task*, especially if he or she already has programming experience from other fields. It helps you have excellent code coverage, have confidence that your code does what you think it does, and saves you from writing code that you won't ever need.

Of course, it's not only good for beginners, even if that's where it really shines. With the help of autotest, an experienced coder can blaze ahead writing specs and code in parallel and getting continuous feedback. Even a beginner can get into a very quick spec-code-confirm cycle and get real work done very quickly.

In fact, I wish that I could work this way in Objective-C too... I do try to use a continuous integration approach there, and I do run tests continuously in the background ([see this article for more details](http://www.wincent.com/a/about/wincent/weblog/archives/2007/04/test_process_im.php)), but Objective-C is a compiled language and that's always going to limit your turnaround time.

The screencast isn't perfect, but it's an accurate representation of the way you work in BDD. You think about the behaviour you want to implement, write specs to describe the behaviour, make assertions to confirm the behaviour is implemented, confirm that the specs fail (because you haven't written the code yet), *then* write the code, and finally confirm that the specs now pass.

There are plenty of errors in the screencast, and it's a one-take affair, but that accurately reflects the reality of the development process. You stop and think. You forget things. You make mistakes. You don't always do things the best possible way on your first attempt. But the key take-home lesson here is that BDD provides a great big safety net underneath you that allows you to blaze ahead with great confidence even when you don't really know what you're doing.

Before I sign off, there's only one thing I forgot to demonstrate which I wish I had; in the screencast I showed an unimplemented example which looked like this:

    it 'should...' do
    end

What I really should have done is omit the block:

    it 'should...'

Then RSpec would have issued a new status message showing that the example wasn't fleshed out yet:

    29 examples, 0 failures, 1 not implemented

#### Update

David Chelimsky [explains](http://rubyforge.org/pipermail/rspec-users/2007-May/001650.html) how to get failing examples to run only once (until a change is made).
