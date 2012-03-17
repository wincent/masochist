---
tags: rspec development
cache_breaker: 1
---

[Mock objects](/wiki/Mock_objects) or simply [mocks](/wiki/mocks) are [test doubles](/wiki/test_doubles) used in [Behaviour-Driven Development](/wiki/Behaviour-Driven_Development) to stand in for other objects during [testing](/wiki/testing). They serve two purposes:

1.  Standing in for other classes without actually requiring the involvement of those classes: this allows you to keep tests of a given class independent of other classes; rather than making calls to the other classes (and inadvertently testing them as well) the mock stands in for the other class. It goes without saying that while this isolation can be a good thing, it is most certainly detrimental if you don't complement it with some form of integration test which removes the artificial isolation and ensures that the various components of a system function correctly when used as a whole.
    -   A sub-purpose of this isolation here is that it can be used to prevent you from hitting a third-party or external API or service during your test suite run; in other words, you can not only prevent your code from hammering the service/API inappropriately, but you can also simulate failure modes and special conditions. Examples of "external" APIs and services might include things like Amazon's S3 service, or even your own database.
2.  Verifying that the code being tested makes the calls on other classes that it should be making: the mock is told to expect certain messages (and optionally return specific values) and can cause a test or [spec](/wiki/spec) to fail if those expected messages are not received. This wouldn't be possible without mocks because it would require other classes to be instrumented with additional code just for the purposes of testing and verification (which wouldn't be very clean).

[Stubs](/wiki/Stubs) are related to [mocks](/wiki/mocks): they can stand in for other classes, but they do not perform verification like [mocks](/wiki/mocks) do. Stubs allow you to modify or control the interaction among components in a system; mocks go one step further and additionally allow you to make assertions about those interactions. As such, both of these tools are critical to implementation of interaction-based testing, which is the counterpart to state-based testing.

There are other types of [test doubles](/wiki/test_doubles), include proxies and spies.

An example of a testing framework that provides a [mocking](/wiki/mocking) [API](/wiki/API) is [RSpec](/wiki/RSpec).

# See also

-   [Independently testing models, views and controllers](/wiki/Independently_testing_models%2c_views_and_controllers)
-   [Mocking in Rails](/wiki/Mocking_in_Rails)

