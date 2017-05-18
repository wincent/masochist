---
tags: rspec rails wiki
cache_breaker: 1
---

## Background

There are already quite a few articles on this wiki where I've made notes on testing [Rails](/wiki/Rails) applications using [RSpec](/wiki/RSpec). Some of them are quite old and much has moved on since they were originally written; things which have changed include:

-   my thinking
-   Rails itself
-   RSpec
-   the [SCM](/wiki/SCM) I'm using and which I sometimes refer to in the examples

In light of this I'm starting a new article (mid-April 2008) to document my current thoughts on what constitutes "best practice" for testing Rails applications. Once I've fleshed things out a bit I'll go back and update the older articles; for reference, these are some of the articles I'm talking about:

-   [Behaviour-Driven Development with Rails](/wiki/Behaviour-Driven_Development_with_Rails) (June 2007)
-   [Mocking in Rails](/wiki/Mocking_in_Rails) (June 2007)
-   [Independently testing models, views and controllers](/wiki/Independently_testing_models%2c_views_and_controllers) (May 2007)
-   [Behaviour-Driven Development of Rails models](/wiki/Behaviour-Driven_Development_of_Rails_models) (May 2007)
-   [Behaviour-Driven Development of Rails views](/wiki/Behaviour-Driven_Development_of_Rails_views) (May 2007)
-   [Behaviour-Driven Development of Rails controllers](/wiki/Behaviour-Driven_Development_of_Rails_controllers) (May 2007)

Bear in mind that all those were written by a [Rails](/wiki/Rails) "dabbler" who was mucking around with the framework as a likely candidate for the eventual site revamp, but who had never actually deployed a real Rails application. My oldest wiki article on Rails looks to date back to July 2006 ("[Installing Ruby on Rails on Mac OS X Tiger](/wiki/Installing_Ruby_on_Rails_on_Mac_OS_X_Tiger)", if you're curious), and the new version of this site (the wiki you're reading right now was started (or really, re-re-re-re-re-started from scratch) in October 2007. I was able to work on it for isolated days here and there, often with weeks in between them, up until about mid-to-late January when the pressure of my impending server migration compelled me to start spending more time getting the app ready. (In the end I didn't complete anywhere near as much as I would have liked to in the first revisions; I'll therefore be delivering a lot of features and refinements as time goes on.)

So my aim here is to update my documentation on Rails testing in the light of some, at last, real experience in bringing an actual application up to the point of deployment. My assumption is that you are already fairly familiar with [Rails](/wiki/Rails), [RSpec](/wiki/RSpec) and the major ideas in [BDD](/wiki/BDD).

## Behaviour-Driven Development

For me there are two fundamental characteristics of [BDD](/wiki/BDD).

The first is that development consists of a (possibly endless and at the very least indeterminate) cycle which consists of four steps:

1.  Write a failing spec that describes the behaviour you're about to implement
2.  Confirm that it really does fail like you think it should
3.  Write code to make the spec pass
4.  Confirm that the spec really does pass

In reality the existence of great tools like [autotest](/wiki/autotest) reduces this to a two-step cycle because steps 2 and 4 are automatic and fusioned with steps 1 and 3 which precede them.

The key element here is the need to write the failing spec first; that's where the "Driven" comes from in [Behaviour-Driven Development](/wiki/Behaviour-Driven_Development): the mechanism which "drives" the production of code is the alternation between failing and succeeding states.

The second fundamental characteristic of BDD is the emphasis on *behaviour*, hence the name. It's basically the use of particular language to encourage you to focus on the right thing (the behaviour of your application rather than the internal implementation details). As such, it's really just encouraging common sense: you focus on the behaviour because that's the whole reason you're writing the app in the first place; in writing tests you obviously end up exercising the internal implementation details, but the details in themselves are of no intrinsic interest to you. The only thing that matters is behaviour.

So those are the two pillars of BDD, at least in theory. The benefit of focussing on behaviour rather than implementation details is self-evident. If you're not convinced about the benefit of writing failing specs first, just indulge me and try it for a few days. Most likely, you'll see that on many occasions you write a spec that you thought should fail but didn't: this means that either your spec isn't testing what you think it does *or* your application isn't behaving the way you think it does.

> After that's happened to you a few times you'll start to get a more realistic picture of your own fallibility. You'll realize that it's easy to write bad specs, even specs which look superficially simple and obviously correct at first glance. This is a very valuable lesson, and equally valuable is the discovery that engaging in the fail-first-then-fix cycle is a fantastic way of compensating for your fallibility because it immediately helps you discover bad specs.

(I'm employing the blockquote above because I think this is a key point and I want to draw your attention to it.)

That's the ideal, but in practice you can't always do "test first" development. Maybe you don't know *how* to write the spec due to lack of experience with [RSpec](/wiki/RSpec) but you have a perfectly clear idea of how to implement the feature in code, so you're keen to proceed with the implementation rather than getting stalled on a frustrating side trip. Maybe you're in a hurry and lack discipline. Maybe you value short-term savings over long-term guarantees.

Whatever the reason, you need mechanisms to compensate for those moments when you drop out of "test first" mode. For example, if I find myself writing specs *after* writing the code that they test, I'll often purposely insert an error into the code to make sure that the spec fails and then "unbreak" it to make sure that works. It's kind of like "retrospectively testing first".

## Mocks

I see mocks as being useful in three ways.

Firstly, mocks allow you to isolate your [Model](/wiki/Model), [View](/wiki/View) and [Controller](/wiki/Controller) specs in such a way as to minimize interdependency between them. In this way a failure in one domain won't cause a "cascade" of failures into others. The benefit is that flaws are quicker to fix because the failures generally occur close to the source.

Now, I'm sure this is an incredibly important benefit to some people but to me it's just not a compelling one. My code bases are not so large that a "cascading" failure is actually a very big problem; it is generally very easy to spot the real source of a failure. Likewise, the code base is small enough that I don't need to resort to mocks to make my long-running test suite go faster by avoiding the involvement of other layers in the application. So for me, by not really caring about interdependency minimization I end up saving myself a lot of work because maintaining mocks *is* a time burden.

It's also an important source of errors. If you pursue this decoupling strategy to its fullest then you can easily wind up in a situation where you change a model API, for instance, but your controller specs continue to pass because they used mock objects so extensively that they were shielded from any real contact with the API.

This brings me to the second use of mocks: doing out-of-order development. This is one situation where the decoupling aspect of mocks enables a new way of working that wouldn't otherwise be possible. You can, for example, write view specs and views before even starting on the corresponding controllers and models.

When I first saw this potential I was very excited as it allowed me to start my application design with my views (and the view is a great place to start because before I even begin an application I generally have a mental image of what the thing is going to look like).

And there is no law which says if you bootstrap your specs this way that you are stuck maintaining mock-heavy specs for the lifetime of your application. You can look on mocks as a transitory design tool and gradually swap in real objects as your application fills out.

But once again, the overhead of doing all this has led me to a position in which I really don't see the benefits as outweighing the costs.

> I find that instead of starting with the views and working down, I actually now start with the models because these are by far the easiest to test independently. By the time I get around to writing view specs the other pieces of the application are already in place so there is no need to spend time fooling around with mocks.

If, like me, you're not seduced by the promise of decoupling, you can save yourself a lot of stress and effort by using [FixtureReplacement](/wiki/FixtureReplacement) to use real model instances throughout your specs instead of resorting to mocks or custom factory methods or fixtures, all of which are somewhat painful to maintain.

[FixtureReplacement](/wiki/FixtureReplacement) gives you a quick and easy way to set up valid objects (and even complex object graphs, nested resources and the like) on the fly. The definition of "what is a valid object" is handily centralized in a single file for all models (`db/example_data.rb`), and the ability to provide overrides with minimal syntax is a boon: it makes your specs much more readable and intention revealing because you now need only specify the attributes relevant to the specific example at hand.

I began by using FixtureReplacement in my model specs, and as a time saver in my `script/console` sessions. But as time has gone on and I've become more and more sick of mocks, and less and less convinced of the virtues of decoupling, I find myself using FixtureReplacement all over the place: view specs, controller specs, you name it.

So what's the third use of mocks? It's in the domain of interaction-based testing. A view is essentially a state based thing: assign something to an instance variable, and then check that it appears in the rendered output. A controller, on the other hand, is all about mediating interactions between models and views, and so it is the perfect site for making use of mocks.

If you follow the "skinny controller, fat model" advice, you push as much code down into the model as possible where it is much more easily tested, and you're left with simple controller actions which have extremely simple interactions that you can test using mocks; things like "should do a `find` and then `render` this template" and the like.

Don't get me wrong: sometimes you need to use mocks in model specs, view specs, helper specs, and lib specs, but my thinking now is that such occasions should always be limited to interaction-based testing. In other words, mocks should be used where the interaction *is* the interesting thing about the behaviour.

> Always, always, always, bear in mind that we're testing *behaviour* and interested in behaviour. When you use mocks to test interactions you must constantly make an effort to *not* end up testing internal implementation details which really shouldn't matter, and instead test the thing which really matters: the behaviour of the object. This is a delicate balancing act at times, but for me there is never any doubt about which way you should be trying to go: the wind may be blowing you towards testing the implementation details but you've got to keep your eyes on the goal and that almost always means steering as far away from the details as you can.

## [DRY](/wiki/DRY)

[DRY](/wiki/DRY) is somewhat of a mantra that I think has been blown all out of proportion. It shouldn't be a psuedo-religious mantra, it should be so darn obvious that one need not even mention it. There is an obvious benefit to taking identical code from three different places and replacing it with code in a single site; easier to maintain, easier to test, fewer things to think about when it comes time to refactor.

Keeping DRY is always about compromise, but once again I think it's common sense: you try to eliminate repetition without going so far as to actually obfuscate the flow of execution and make your code harder to follow and understand. There is a sensible "sweet spot" which you should obviously be aiming for.

In the case of specs I think that the location of that "sweet spot" is a little further towards the "repetitious" end of the spectrum than is the case with normal code. That is, there is a value in making each spec self-contained so that it can be read and understood without having to refer to lots of secondary and tertiary method calls. In an nutshell, the ideal spec is both short and self-contained so that when a failure occurs you can diagnose the nature of it quickly just by glancing at the spec.
