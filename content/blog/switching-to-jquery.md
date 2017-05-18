---
title: Switching to JQuery
tags: rails javascript jquery prototype blog
cache_breaker: 1
---

For some time now I've wanted to switch to [JQuery](/wiki/JQuery) from [Prototype](/wiki/Prototype) for writing [JavaScript](/wiki/JavaScript). My initial desire to do so was the result of a purely aesthetic evaluation: in short, I just liked the look of the JQuery syntax better. I could actually feel good about writing a function using JQuery; but whenever I had to do the same with Prototype I ended up feeling somehow "icky". Things just didn't feel right.

The more I learned about JQuery, my admiration started to extend beyond a mere aesthetic appraisal and into the code quality itself. The design, the implementation, the rigorous testing, the obvious expertise of the JQuery creator (John Resig; I recommend you dig up a video or two of his presentations -- you'll be impressed), the compatibility with the [Ruby](/wiki/Ruby) style/ethos/philosophy. All of these things started to become important considerations.

The trouble is, JQuery and Prototype aren't entirely compatible. And given that it's inevitable that there will be a transition period in which both have to coexist in the application, you have to deal with that incompatibility.

There are two ways in which you'll feel this as a [Rails](/wiki/Rails) developer. For one, both Prototype and JQuery compete to define the `$()` function in the global namespace. It seems that the simplest workaround here is just to let Prototype win and keep `$()` for itself, and use JQuery's `jQuery()` function in the meantime until you can finally jettison Prototype from your application.

The other issue you'll have to deal with is that fact that all Rails helpers and many plug-ins assume the presence of Prototype in the application and do their stuff using it. One of your options here is using [jRails](/wiki/jRails), which provides compatibility overrides of pretty much all (or even all?) of the Rails helper methods which use Prototype.

The other option, and I think the better one, is to eschew those Rails helpers entirely and just do everything in JQuery. Basically, you can make the transition from "obtrusive" to [Unobtrusive JavaScript](/wiki/Unobtrusive_JavaScript) at the same time as you move from Prototype to JQuery.

This option is a fair bit more appealing than another which I haven't mentioned yet: waiting until Rails 3 comes out, and *apparently* makes it much easier to swap things like ORMs and JavaScript libraries in and out. We'll see just how far they take this modularization, and whether the built-in helpers will work seamlessly with any of the major libraries.

The problem with this option is that if you continue to use helpers like that you're missing the opportunity to move to Unobtrusive JavaScript and clean up your markup. Your pages will continue to be an ugly, tangled knot of HTML/JavaScript spaghetti.

So in any case, I've started making the move from Prototype to JQuery.

First step. Start including JQuery on all pages. We're talking about a lot of JavaScript code here (not only JQuery, but Prototype and Scriptaculous as well), so I'm thinking of pulling it down from ajax.googleapis.com to make the initial pageload faster for visitors (seeing as it is likely to already be in your browser cache). Done.

Second step. Port my hand-written JavaScript from Prototype to JQuery. Done.

Third step. Audit the application code for all usage of JavaScript and [AJAX](/wiki/AJAX) helpers, and replace them with Unobtrusive JavaScript alternatives written using JQuery. This also means getting rid of any Scriptaculous calls, seeing as Scriptaculous is built on top of Prototype. In progress.

Fourth step. Dump Prototype (and Scriptaculous).

Luckily, I hadn't gone crazy with the AJAX stuff yet so there isn't too much that'll need to be changed. Pretty much nothing public-facing, all just back-end admin stuff.
