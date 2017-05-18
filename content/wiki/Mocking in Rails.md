---
tags: rspec rails wiki
cache_breaker: 1
---

[An interesting thread](http://rubyforge.org/pipermail/rspec-users/2007-May/001728.html) came up in the [rspec-users](/wiki/rspec-users) mailing list about the costs and overheads of using [mocks](/wiki/mocks) compared with the benefits (as discussed in "[Independently testing models, views and controllers](/wiki/Independently_testing_models%2c_views_and_controllers)").

## The premise

The basic arguments of the initial poster can be paraphrased as:

-   If the [API](/wiki/API) of a class being mocked changes, then [specs](/wiki/specs) which mock the class must be updated as well:
    -   This is duplicative because parallel changes have to be made in multiple sites.
    -   Because the mock's behaviour is constant, the underlying [API](/wiki/API) can change and [specs](/wiki/specs) which depend on the [API](/wiki/API) won't fail because the mock will continue to deliver the old behaviour.
    -   This latter problem is exacerbated when working in teams, where a person changing an [API](/wiki/API) might not know about all the places where it is being mocked.

The counter-solutions offered were:

-   Don't use mocks (or use them less).
-   Don't change [APIs](/wiki/APIs) (or change them less).
-   Rely on [integration testing](/wiki/integration_testing) to catch bugs caused by changing [APIs](/wiki/APIs) when [specs](/wiki/specs) that use mocks fail to catch them.

Another, hypothetical solution was:

-   Baked in support in [RSpec](/wiki/RSpec) to use [mocks](/wiki/mocks) by default, but have the runner optionally use the real objects instead when a particular command line switch is passed in.

## My assessment

I had to agree that the original poster's complaints are all valid to some extent (yes, [mocking](/wiki/mocking) can involve some overhead) and that his solutions are common sense to a degree (especially the one about keeping your [APIs](/wiki/APIs) stable; it's not so much about eschewing change as about using processes which help you design good [APIs](/wiki/APIs) which won't need to be changed too often).

The idea of being able to swap real objects back in in place of the mocks is an exciting one.

But for me the real scene-stealer, and the reason why [mocks](/wiki/mocks) are just too good to pass up despite their costs, is that they enable you to start developing your [views](/wiki/views) before you've written your [controllers](/wiki/controllers), your [controllers](/wiki/controllers) before you've finished your [models](/wiki/models) and so on. Decoupling is a nice bonus, but the real deal is the way you can use mocks to do incremental [Behaviour-Driven Development](/wiki/Behaviour-Driven_Development) before the rest of the pieces of the puzzle are in place.

## Follow-ups

[David Chelimsky](/wiki/David_Chelimsky) [pointed out](http://rubyforge.org/pipermail/rspec-users/2007-May/001734.html) that the idea of swapping back in real objects in one form or another is being tracked here:

<http://rubyforge.org/tracker/?func=detail&group_id=797&aid=5064&atid=3152>

Pat Maddox [wrote](http://rubyforge.org/pipermail/rspec-users/2007-May/001743.html) that he often uses the real objects in [controller](/wiki/controller) [specs](/wiki/specs) and really only uses [mocks](/wiki/mocks) for cases where he can't verify state (such as when he expects a call to be made to some remote system).

> One of the points Dave Astels always hammers on about BDD and interaction-based testing is that it's not testing, it's a design tool. I've found that with mocks I tend to arrive at a better design earlier on than I do without mocks.

[David Chelimsky](/wiki/David_Chelimsky) then [followed up](http://rubyforge.org/pipermail/rspec-users/2007-May/001744.html) with this:

> One thing about TDD and the notion of a "design tool" - it's an ongoing process. If you want to end up w/ real models in your specs, you can still use mocks to figure out what they should do, then replace them w/ the real deal later. This is not nearly as expensive as it sounds, and lets you focus on one thing at a time.

I think this latter point is absolutely key; mocks can be tremendously powerful during the early stages of development (during the initial *design* phase), but there is no reason why you should feel compelled to keep using them latter on the process when they start to feel like too much of a maintenance burden and an impediment to change.

## Analysis

Although there is supposed to be a clean separation between [model](/wiki/model), [view](/wiki/view) and [controller](/wiki/controller) in [MVC](/wiki/MVC), in reality the [Rails](/wiki/Rails) designers grant [views](/wiki/views) and [controllers](/wiki/controllers) a special relationship status by putting them both together in a [gem](/wiki/gem) called `ActionPack`. The framework also weakens the separation by making it easy to share methods between controller and helper, and in fact even arranges for controller instance variables to be available in views and helpers as instance variables to those classes as well.

Ironically, despite the tight binding between [view](/wiki/view) and [controller](/wiki/controller), it is precisely at this level that I find it easiest to use [mocks](/wiki/mocks). It is very clean and easy to write a [view](/wiki/view) and [specs](/wiki/specs) for it before you've even started the [controller](/wiki/controller), or even the [model](/wiki/model).

In the case of `ActiveRecord` we have another tight binding: the [Ruby](/wiki/Ruby) abstraction and the database underneath it. I don't think it's a bad thing for your [model](/wiki/model) [specs](/wiki/specs) to hit the database; that's what `ActiveRecord` is built to do.

The trickiest case for me is the relationship between [controllers](/wiki/controllers) and [models](/wiki/models). Keep your controllers simple, they say. Keep your [SQL](/wiki/SQL) down in the [model](/wiki/model). [Skinny controller, fat model](http://weblog.jamisbuck.org/2006/10/18/skinny-controller-fat-model), they say. All of this leads [controllers](/wiki/controllers) to depend intimately on their [models](/wiki/models). It's easy to write [models](/wiki/models) without knowledge of the [controller](/wiki/controller); in this case [mocks](/wiki/mocks) will be easy. But it's hard to write [controllers](/wiki/controllers) without touching the [models](/wiki/models); you can use [mocks](/wiki/mocks) to avoid touching them, but there *will* be cases in which the complexity of setting up the [mock](/wiki/mock) is too much to make it justifiable. In those cases it is better to forgo the decoupling benefit and just settle for the ease of using the real [model](/wiki/model); as a bonus you're getting some additional impromptu [integration testing](/wiki/integration_testing) that you didn't ask for.

Using [mocks](/wiki/mocks) in [controller](/wiki/controller) [specs](/wiki/specs) is still a good idea for the simple cases where things don't get too impractical, and of course they're absolutely essential in those cases where you want to start working on your [controller](/wiki/controller) before you've even written your [model](/wiki/model) code.

## See also

-   "Testing: Replace Mock with Stub": <http://blog.jayfields.com/2007/05/testing-replace-mock-with-stub.html>
-   [David Chelimsky](/wiki/David_Chelimsky) on when to [mock](/wiki/mock) and when to [stub](/wiki/stub): <http://blog.davidchelimsky.net/articles/2006/11/09/tutorial-rspec-stubs-and-mocks>
