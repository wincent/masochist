---
title: Proxies with RR
tags: rspec rr blog
cache_breaker: 1
---

Back in November I wrote about how I was [thinking of switching to RR](/blog/thinking-about-switching-to-rr) because it has both proxies and test spies.

In addition, one could argue that the concise syntax is nicer too, and that setting up test doubles is more elegant because it looks more like the method invocations that are being specified.

Well, I'm pleased to report that having dabbled with RR in the last week, it has addressed one of my key frustrations with other mocking solutions: namely, the difficulty of specifying *one* piece of pertinent behavior while ignoring the rest.

# [RR](/wiki/RR) proxies in action

Here's an example from a view spec that I just wrote.

This is the assertion that I *wanted* to write:

```ruby
it 'renders the tags partial' do
  mock(view).render('shared/tags')
  render
end
```

The problem here is that in order to test that the view makes the desired `render` call, I have to render the view, and guess what: I do that by calling `render` and *that* initial call gets intercepted by the mock and is considered an unexpected message.

With RR, we can use a proxy to let that call through to the original object without raising an exception. Unfortunately, when we do this we get *another* exception, because under the hood RSpec's `render` call is just handing off to another `render` method inside Rails. This inner `render` call includes an empty hash parameter, which I don't really care about but will have to include in my mock set-up anyway.

```ruby
stub.proxy(view).render(anything, anything)
mock(view).render('shared/tags', anything)
```

Note that here RR has already come to the rescue by providing us with a proxy rather than just a stub. If we used a normal stub it would just intercept the message send and nothing would be rendered at all. Here, it intercepts the call, considers it to be ok, and passes it on to the real object.

But then there's another problem: the view actually has *another* call to a partial (an errors partial), which we have to stub out too.

```ruby
stub.proxy(view).render(anything, anything)
stub(view).render('shared/error_messages', anything)
mock(view).render('shared/tags', anything)
```

If we have another partial, say for a live preview, you can see how this starts to grow out of control:

```ruby
stub.proxy(view).render(anything, anything)
stub(view).render('shared/error_messages', anything)
stub(view).render('shared/preview', anything)
mock(view).render('shared/tags', anything)
```

Considering that we only wanted to make an assertion about *one* particular message send, that is an *awful* lot of extraneous rubbish we've had to specify just to get things working. It's the kind of thing that makes you feel unhappy, like you'd given birth to a hideously deformed baby or something.

This is where RR really shines though, because by combining the proxy with lax argument expectations we can actually reduce all that down to this:

```ruby
stub.proxy(view).render.with_any_args
mock(view).render('shared/tags', anything)
```

That basically means, "let any message through to the original object, but confirm for me that this one message that I care about got sent". This is great and is pretty much exactly what I was asking for when I wrote [that post](/blog/thinking-about-switching-to-rr).

# Taking a step back

We can do even better. We arrived at the above solution by looking at the exceptions that were raised when we tried to run the specs and setting up stubs to eliminate them.

If we take a step back and think about the best level at which to apply these stubs and proxies, we can actually drop the `with_any_args` call to make things even shorter:

```ruby
stub.proxy(view).render
mock(view).render('shared/tags', anything)
```

This is possible because in reality the only call that we need to "let through" is the call to `render` with no arguments at all which appears in every `it` block.

# Complete example

The situation here is a view spec which contains a partial, so:

-   We want to stub out the partial call to keep its effects out of the parent template's spec (the partial is itself tested in a different spec so there is no sense in testing it here, rather, it is better to keep the two templates isolated from each other, so that errors in the partial don't "bubble up" into the spec for the parent template)
-   Even though we don't want the contents of the partial to influence the parent template's specs, we do want to include one spec that mocks the partial call to confirm that the partial is actually called
-   We want all other `render` calls to be let through automatically

So this is what that looks like with RR:

```ruby
describe 'things/index.html.haml' do
  before do
    # intercept all calls to render the partial
    stub(view).render('things.html.haml')

    # let all other "render" calls through, including
    # the "render" calls in each example block below
    stub.proxy(view).render
  end

  it 'renders the "things" partial' do
    mock(view).render('things.html.haml')
    render
  end

  it 'does whatever' do
    render
    # ...
  end

  # etc
end
```
