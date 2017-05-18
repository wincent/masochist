---
tags: testing wiki
cache_breaker: 1
---

A [test double](/wiki/test_double) is an object which stands in for a real object during automated testing.

Types of test doubles include:

-   **mocks**: for verifying expectations about messages sent (or not sent) to an object; they do this by intercepting messages, checking parameters, and optionally returning specified values or otherwise inserting behavior (such as raising exceptions)
-   **stubs**: for intercepting messages, checking parameters and optionally returning specified values or otherwise inserting behavior; in other words, these are just like mocks but without the verification component
-   **proxies**: special variants of either mocks or stubs, they can be used to verify, intercept or insert, but also invoke the corresponding method on the real object
-   **spies**: another special variant, again like a mock or a stub, but offering the possibility of retrospectively asking the double if it received a specified message or not

# [Ruby](/wiki/Ruby) test doubles

My favorite test double library right now is [RR](/wiki/RR), due to its compact, elegant syntax and wide range of doubles, including proxies and spies. [RSpec](/wiki/RSpec) also comes with a solid mocking framework.
