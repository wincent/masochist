---
title: Test-Driven Development
tags: blog
---

I've previously written about [my love affair with Object-Oriented Templating](http://www.wincent.com/a/about/wincent/weblog/archives/2006/10/objectoriented.php) in general terms and as manifested in the beautiful [Cheetah](http://cheetahtemplate.org/) templating system.

But there are a few minor problems with Cheetah:

-   It doesn't have a `#super` directive.
-   It doesn't look in a template's directory to find parents in the inheritance chain, requiring environment variables to be set and ruling out the placement of templates in subdirectories.
-   And finally, it's written in Python; that's a problem for me because I only know enough Python to read and make basic sense of it but not enough to actually write any meaningful Python or tackle the task of working on Cheetah's largish code-base to address these concerns.

If only Cheetah were written in Ruby... I've dabbled in Ruby enough to at least be able to try *modifying* Ruby code even though I am pretty slow at bashing out clean-room code myself (requiring constant consultation of the documentation).

Doing a ground-up rewrite of Cheetah in Ruby would be a daunting task and far beyond me. But writing something which does only the basic operations I want, nothing more, and addresses the problems I have with Cheetah, could probably be done in a few days. This has a much narrower scope than Cheetah, it is only really intended for compiling and filing static templates (to produce help documentation).

So I started work on this yesterday. I am close to a new release of [Synergy Advance](http://synergyadvance.com/) and I want to get at least some documentation out with it; so it makes sense to invest a few days on this template stuff right now. I'll be much happier adding custom functionality to my templates in Ruby than I was trying to do it in Python.

I'm using a totally Test-Driven Development (or Behaviour-Driven Development if you prefer) paradigm, perfect for someone who's not really an expert in the language. I find that in my Cocoa development my unit tests are typically written during and after the code-writing; the tests serve to *confirm* that my code does what I think it does. But in the case of Ruby, where I have much less experience, I am finding that writing the tests *before* I write the code is very, very helpful. Now they don't just *confirm* that things work, they actual *drive* and *guide* me along the way in incremental steps. They also provide me with a degree of confidence in the code that I'm writing which I couldn't possibly have without them, given my level of experience with Ruby.

This is just another step in a long journey for me when it comes to writing documentation. I've moved from raw HTML through to PHP (basically using it as a *procedural* template system), on to Object-Oriented templating (with Cheetah) and finally now trying to switch to a totally custom Ruby subset. This doesn't even count the side trips into the land of DocBook.

Despite my lack of expertise, Ruby is fairly quick and easy to work with. I am hoping that by the end of today I'll have the basic parser/compiler up and running, along with the first few directives that I want to support. Driven by irony, I've decided to call my Cheetah subset/clone "Walrus".
