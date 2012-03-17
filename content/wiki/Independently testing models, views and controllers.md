---
tags: rspec rails development
cache_breaker: 1
---

It is often recommended that you use [mock objects](/wiki/mock_objects) and [stubs](/wiki/stubs) to independently test your [models](/wiki/models), [views](/wiki/views) and [controllers](/wiki/controllers) when doing not only [Behaviour-Driven Development](/wiki/Behaviour-Driven_Development) but any [testing](/wiki/testing) of code which follows the [MVC](/wiki/MVC) pattern. (The original version of this article penned in 2007 started with "*I highly recommend*"; since then I've realized that there are trade-offs involved and the right thing to do is seldom so clear-cut.)

By using [mocks](/wiki/mocks) and [stubs](/wiki/stubs) you can:

-   Reduce the interdependence of your [models](/wiki/models), [views](/wiki/views) and [controllers](/wiki/controllers) during testing.
-   Eliminate the impact of errors in your [models](/wiki/models) from affecting your [controllers](/wiki/controllers) and [views](/wiki/views); that is, failures will occur in one site (the [model](/wiki/model)) rather than in multiple sites, and so will be much easier to track down. The same is true in the other senses as well: errors in the [controller](/wiki/controller) will not affect the [view](/wiki/view) or [model](/wiki/model) [specs](/wiki/specs) and so on.
-   Start developing your [views](/wiki/views) before your [models](/wiki/models) or [controllers](/wiki/controllers) are even down (or vice versa; you can start with [controllers](/wiki/controllers) or [models](/wiki/models); there is no need to have a full stack in place in order to start testing).

I became convinced of the usefulness of doing this while doing [Behaviour-Driven Development with Rails](/wiki/Behaviour-Driven_Development_with_Rails). I was able to start by developing and testing isolated [models](/wiki/models), [views](/wiki/views) and [controllers](/wiki/controllers), starting wherever seemed most appropriate rather than having to get the entire [MVC](/wiki/MVC) graph in place before I could start testing.

Note that even though this kind of [testing](/wiki/testing) is highly desirable, it is not meant to *replace* higher-level testing (sometimes called [functional testing](/wiki/functional_testing) or [integration testing](/wiki/integration_testing); that is, tests which verify that all of the pieces in the [MVC](/wiki/MVC) design work together as expected) but to *complement* it.

But one further caveat: although [mocks](/wiki/mocks) *can* in theory deliver all of the benefits listed above, they can also bring with them considerable overhead and complexity; that is sometimes setting up the mocks requires so much knowledge about the internal implementation of the objects being mocked, and sometimes the set-up is so much more involved than just using the class directly, that it is better to forget about mocks in some cases. For more information about when and when not to mock, see [Mocking in Rails](/wiki/Mocking_in_Rails).

# See also

-   [Behaviour-Driven Development of Rails models](/wiki/Behaviour-Driven_Development_of_Rails_models)
-   [Behaviour-Driven Development of Rails views](/wiki/Behaviour-Driven_Development_of_Rails_views)
-   [Behaviour-Driven Development of Rails controllers](/wiki/Behaviour-Driven_Development_of_Rails_controllers)

