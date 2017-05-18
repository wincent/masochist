---
title: Thinking about switching to RR
tags: rspec rr blog
cache_breaker: 1
---

The use of mocks and stubs continues to be one of the areas which causes me most pain in my [Ruby](/wiki/Ruby) testing using [RSpec](/wiki/RSpec). All too often I find myself having to go through hoops to do stuff which I feel should be simple.

Let me illustrate with an example.

Here's some code from a comments controller, abbreviated for clarity:

```ruby
class CommentsController < ApplicationController
  before_filter :get_comment

  def get_comment
    @comment = Comment.find params[:id]
  end
end
```

And here is the original version of the related spec:

```ruby
it 'should find the comment' do
  Comment.should_receive(:find).with(@comment.to_param).and_return(@comment)
end
```

Upon making a change to the model, the controller spec broke. The new behaviour was the result of calling `save` on the model during the `comments#update` action, which in turn caused a complex callback to be fired which did a number of updates on cached fields, and necessarily called `Comment.find` in order to do so.

All of this was desired behaviour, but it broke my controller spec because the mock expectation is too rigid. It basically says, "`Comment` should receive `find` with exactly these parameters and return this object, *and it should not receive anything else*".

None of my options for solving the problem are particularly attractive.

# Solution 1: mock more

In this solution we add additional `Comment.should_receive` specifications catering for the other calls. This seems perverse and brittle, tying the *controller* specs to the internal implementation details of the *model*.

# Solution 2: mock something else

In this solution we dump out `Comment.should_receive` and replace it with this:

```ruby
controller.should_receive(:get_comment)
```

This works fine in part, but we've now lost some behaviour which almost certainly will break other specs. The `get_comment` method finds a comment and assigns it to the `@comment` instance variable, and in specifying our mock we've effectively extirpated that unit of behaviour from the controller. In order to preserve the behaviour we could specify a block:

```ruby
controller.should_receive(:get_comment) { @comment = Comment.find params[:id] }
```

This too seems utterly perverse, literally replicating via copy-and-paste the code from the controller in order to keep the specs passing. I confess that I didn't even try this method so can't even affirm that it would work. *Even if* you argue that the copied-and-pasted code is "acceptably trivial" to justify itself, it breaks down as soon as you start writing specs for methods which are even a little more complicated (and in fact, in reality the `get_comment` method used in this example is more complex in practice in the real version because it modifies its behaviour depending on which kind of user is connected).

In any case note how the level of specificity of our expectation has changed. In our original implementation we specified an interaction that we expected to see with the `Comment` model. In the new version we're just checking to see that a method internal to the controller class has been called. When we add the block syntax we not only perform that check, but we actually replicate internal implementation details to greater or lesser degree. This doesn't seem like a good thing.

# Solution 3: use a proxy

Proxies don't exist in the [RSpec](/wiki/RSpec) mocking framework but they do exist in [RR](/wiki/RR) which is one of the reasons I am thinking of switching.

The idea of the proxy as a test double is that it allows you to specify expectations as you would with a mock, but the underlying implementation is called by the proxy. So this means that would could indeed set up a proxy which expects the `get_comment` method and the underlying behaviour would be preserved.

I haven't actually used RR yet, but I understand that the syntax for this would look something like:

```ruby
mock.proxy(controller).get_comment
```

If we wanted to insert the proxy at a lower level (on the `Comment.find` call) then we could also do something like this instead:

```ruby
mock.proxy(Comment).find(@comment.to_param)
```

Until I actually try this I am not sure whether these proxies suffer from the same usability drawbacks as RSpec's own mocks (that is, whether these expectations are interpreted to mean "should receive exactly this and nothing else").

# Solution 4: use a spy

Another nifty option provided by [RR](/wiki/RR), a spy is a test double that allows you to record messages sent to a target object and then retrospectively check them. As the docs say:

> Adding a DoubleInjection to an Object + Method (done by `stub`, `mock`, or `dont_allow`) causes RR to record any method invocations to the Object + method. Assertions can then be made on the recorded method calls.

These almost certainly won't be subject to the restrictive "expectations mean that a receiver should receive exactly this thing and nothing else" viewpoint.

Once again, I haven't actually used these yet, but according to the [RR](/wiki/RR) docs they look something like this:

```ruby
subject = Object.new
stub(subject).foo
subject.foo(1)
subject.should have_received.foo(1)
subject.should have_received.bar # this fails
```

Unfortunately it looks like these can't be combined with proxies (as it only mentions `stub`, `mock` and `dont_allow`) I am not really sure whether these could be abused to stand in in the example spec that is the subject of this article, but if they can it will most likely look something like this:

```ruby
stub(controller).get_comment
do_put
controller.should have_received.get_comment
```

Or:

```ruby
stub(Comment).find(@comment.to_param)
do_put
Comment.should have_received.find(@comment.to_param)
```

# Solution 5: don't use real ActiveRecord objects

I don't actually know if this one is a solution at all. You could avoid the use of real ActiveRecord objects and thus the callbacks which produce the extra `find` calls, but it is most likely more trouble than it is worth.

# Solution 6: forget mocking and test a side-effect instead

Why were we mocking the `find` call anyway? Because we wanted to confirm that the right comment was being found. But note that we can do this indirectly by testing a side-effect instead: the assignment of the expected comment record to the `@comment` instance variable:

```ruby
do_put
assigns[:comment].should == @comment
```

# Conclusion

Ultimately, almost all of my gripes boil down to me not being able to assert precisely what I want to assert; that is, "that this message with these parameters should be received, *but I literally don't care about what other messages are sent, nor whether the same message is sent multiple times, nor the order of the messages, nor anything else, and I certainly don't care about substituting a fake return value or preventing the real behaviour of the involved classes from being exercised*". In short, I just want to set a message expectation with no strings attached. Is it really so hard?

I guess in my dream world I'm really wishing that I could write something like this, to test for interaction with ActiveRecord:

```ruby
Comment.record
do_put
Comment.should have_received.find(@comment.to_param)
```

Or, to test at the level of controller methods:

```ruby
controller.record
do_put
controller.should have_received.get_comment
```

Actually implementing this magical `record` method might not be so straight-forward, to say the least. It would require intercepting *all* method calls to the observed object, passing them on to the real method, recording the message-parameters-result tuple, and tight integration with RSpec so that it would know that it should stop "recording" when the current example (`it` block) or perhaps `describe` block goes out of scope. Not sure if this is entirely feasible or even technically possible.

In any case, while I am not sure whether [RR](/wiki/RR) will ease all the pain of this kind of testing, I think it might be worth giving it a try. The one thing I am not sure about is whether I can gradually migrate over to it, or whether I'll run into troubles with [RR](/wiki/RR) and the existing [RSpec](/wiki/RSpec) mocking framework treading on one another's toes.

# Update (7 November 2009)

There is currently [talk](https://rspec.lighthouseapp.com/projects/5645/tickets/906) of adding test spies to RSpec's including mocking framework.
