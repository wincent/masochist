---
tags: rspec
cache_breaker: 1
---

I first heard the word [proxy](/wiki/proxy) in the context of [test doubles](/wiki/test_doubles) in [this weblog post](http://pivotallabs.com/users/brian/blog/articles/352-introducing-rr). In it, Brian Takita describes a "proxy" as a test double which does two things:

1.  Like a mock, it verifies that an expected message was received
2.  It then passes the message through to the real object

The first part of the behaviour is the "interesting" bit (because it's what allows us to actually verify that things are working), and the second part is the "convenient" bit (because it frees us from having to worry about what the mock should return).

There are obviously cases where a proxy wouldn't be appropriate because you actually do want to keep the real object isolated and decoupled, and not involve it at all in the test.

But there are also obviously cases where worrying about the object to be returned by the mock is a pain in the backside, and involving a real object in the test is an acceptable trade-off. Ironically, involving the real object (instead of insisting on a total decoupling) might actually lead to less brittle tests.

# What it looks like

In [RR](/wiki/RR), Brian's framework, it looks like this:

    mock.proxy(User).find('99')

According to Brian, you can achieve the "proxy pattern" in [RSpec](/wiki/RSpec) as follows:

    find_method = User.method(:find)
    User.should_receive(:find).with('99').and_return(&find_method)

I personally haven't been able to get this to work.

# Stub proxies

The examples above are "mock proxies". Brian also demos how to do "stub proxies". The immediate usefulness of the latter is not entirely evident to me. By using a mock instead of a stub we are skipping over the verification part of the behaviour, which was the part which I labelled as "interesting" in my initial description.
