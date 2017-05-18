---
title: Managing Side-effects With the Pub-Sub Model
tags: ruby causes blog
cache_breaker: 1
---

\[Where I used to work\] at [Causes](/wiki/Causes) we just shipped a small Ruby library for applying the Publish-Subscribe pattern to any [Ruby](/wiki/Ruby) codebase, and I just wrote a quick blog post on the subject.

Here's an excerpt:

> Over time, large-scale object-oriented systems tend to produce [God Objects](http://en.wikipedia.org/wiki/God_object). These are classes which know too much or do too much. They have connections to disparate and varied parts of the system. They depend on everything, and everything depends on them. They make systems slow to work with, intractable and hard to modify. They insidiously undermine and resist our efforts to carry out our core task as engineers: decomposing complex problems into smaller subproblems that are more easily solved.
>
> At [Causes](http://www.causes.com/) there are some concepts that are front-and-center in our product: users, their campaigns and the actions they create to make an impact (things like petitions, fundraisers and pledges). The concepts are so core that they have a tendency to become God Objects unless we diligently work to prevent them accruing more and more functionality.
>
> We’ve lately applied the [Pub-Sub](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) (Publish-Subscribe) model to our Ruby code, applying the familiar event-based patterns that we know from JavaScript to the server side, in an effort to reduce the tight coupling that some of these God Objects have to other parts of the system. With a simple, framework-agnostic Ruby library, we’ve been able to significantly tame some of the complexity around these classes, and we’ve released it as a Ruby gem, [PubSubHub](https://github.com/causes/pubsubhub).

You can install the gem with `gem install pubsubhub`, check out [the source](https://github.com/causes/pubsubhub), or head over to [the Causes Engineering blog](http://causes.github.io/blog) to read [the full story](http://causes.github.io/blog/2013/08/08/managing-side-effects-with-the-publish-subscribe-model/).
