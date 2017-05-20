---
tags: relay blog
title: Building Relay Modern
description: The behind-the-scenes story of how we built Relay Modern.
fb: https://www.facebook.com/glh/posts/10154295300886307
twitter: https://twitter.com/wincent/status/865817774530088960
---

There's a long backstory about the development of [Relay Modern](http://facebook.github.io/relay/) that's been bubbling around in the back of my head for a while. As I write this, [version 1.0.0](https://github.com/facebook/relay/releases) is out, we've published [an official blog post](https://code.facebook.com/posts/1362748677097871/relay-modern-simpler-faster-more-extensible/) introducing the new version, and people out in the community have had time to write some [useful](https://www.graph.cool/docs/tutorials/migrating-to-relay-modern-eijooto4se/) [introductory](https://dev-blog.apollodata.com/exploring-relay-modern-276f5965f827) posts about it. There are already quadrillions of Facebook users getting their data delivered to them via Relay Modern, and even more importantly, I've ported my blog over to it. Seems like as good a time as any to tell this story, or at least part of it.

If you're a [GraphQL](http://graphql.org/) aficionado, recovering [JS](https://en.wikipedia.org/wiki/JavaScript) framework author (or user), or are simply interested in the question of how best to manage data flow in complex server/client applications, then I'm writing this for you.

# Hello, Relay

I started working on Relay back in early 2014 when it wasn't open source, wasn't called Relay, and had only recently decided to be in the business of bridging the gap between React and GraphQL (it originally started off as a new routing solution, or so the legend has it). GraphQL was still a pretty young technology at that point, but it had seen rapid uptake and was used extensively across our native apps.

Like any emergent technology, GraphQL had some growing pains. Because of this, Relay set out not just to bring GraphQL to JavaScript — and note that that meant not just the web but also mobile, via the still-secret React Native project — but to rethink some of the assumptions that had been made in the native apps up to that point.

- One of the big ideas was **query colocation** — the notion that you should be able to specify your data requirements for each view component inside the view itself and that the framework should transparently handle aggregation and efficient fetching.
- Another was that we could totally eliminate overfetching by **dynamically constructing queries** at runtime based on a comparison of what data the developer had asked for in their component and the data that the framework had already stashed away in the cache as the result of previous queries.
- Finally, we figured that GraphQL fragments — the basic unit of re-use that allows developers to assemble queries out of a bunch of otherwise redundant parts — should be parameterizable; that is, **fragments should be able to take arguments, just like functions do**, so that they could be used flexibly in multiple places without duplication.

This was a super exciting time to be at Facebook. React was taking off, and React Native, Relay, Flow and GraphQL were all angling towards open source release. There was a real sense that we had something awesome to share with the world.

# The (First) Great Rewrite

As we approached the open source release, we realized it was time to rewrite a substantial part of Relay. GraphQL was going to come out in open source with a minimal but pretty rigorous spec, a new syntax and some subtle corrections and improvements from the organically grown internal implementation. We had some long standing bugs that we wanted to fix, and a bunch of ideas on how to improve performance by making use of immutable data structures. Not truly immutable ones, mind you, as JavaScript doesn't have those: but ones that we'd build out of standard old mutable JS objects, and with which we'd carefully implement structural sharing and copy-on-write semantics, with Flow providing some assurances that we weren't mutating things we didn't own.

This is where I must introduce [Joe Savona](https://twitter.com/en_JS). Joe was pretty new at Facebook at the time, but he joined the Relay team and dived into tackling some of the hardest problems we had to solve in the rewrite. In fact, his continual production of new ideas was one of the things that fueled the desire to actually go aheard and do the rewrite, for real. We had always lived with a long backlog of stuff that we'd love to get to some day, some of it quite "moonshotty", but Joe had a talent for translating those ideas into a series of ordered, achievable steps. We came up with some pleasant APIs for traversing and transforming trees (query ASTs, data trees), and set about rewriting the guts, heart, brain, and peripheral appendages of Relay. I presented [a deep dive](https://www.youtube.com/watch?v=oPSuvaYmXBY) on some of this stuff back in 2015 that you can watch if you want to learn more.

This was some of the most intellectually interesting work I've done, working on hard problems among talented, inspiring, hard-working peers. My favorite part was adding support for nested "deferred" queries. For the first part of this, I adapted somebody else's very clever code for splitting apart a heterogenous tree into a version that could do so recursively. Tied my brain in knots doing it. I then got to rewrite it on top of our new APIs and the result was satisfyingly simple compared to the old version. The same was true for all the other traversals that we had to reimplement. We finished the rewrite, open sourced Relay, and rode off into the sunset.

# The (Second) Great Rewrite

Not quite. The sunset bit. Releasing the project was only the beginning. We had an ever-growing internal user-base at FB with increasingly demanding and diverse workloads to fulfill. We were faced with a critical problem: despite the fact that Relay was recently re-written and much better architected, it was crumpling under the weight of its own complexity. As we added features such as query persistence (the ability to reduce query upload sizes by saving the query on the server and sending up an identifier instead of the full query text), garbage collection, integration with offline disk caches on native platforms, and sophisticated new APIs for dealing with "connections" (paginated collections), we found ourselves frustrated with the speed at which we could make progress. This thing was intricate and complicated, hard to modify, stupefyingly magical and unpredictable.

We still had that long backlog of ideas, but we knew that we were adding to the tail of the queue faster than we were shifting from the head of it. It was a scary prospect, but we came to the conclusion that it was time to burn it all down and rewrite the thing from scratch. We knew we had to unlock performance wins that would require drastic changes, and rewriting was the only way we were going to be able to do it before old age, senility and burn-out took us out of the game. A risky move — big rewrites are often warned against for a reason — but we felt like we had to take the gamble. In doing the rewrite, we knew that the risk of failure (in typical "[Second System Syndrome](https://en.wikipedia.org/wiki/Second-system_effect)" fashion) was real, but inaction would have led to certain failure.

# Everything old is new again

I can still remember the day in early 2016 when Joe and I grabbed a room in MPK 20, that [fancy, Frank Gehry-designed thing with a park on the roof](https://www.level10gc.com/project/facebook-mpk-20/), and stood in front of a whiteboard wall to try and imagine what "Relay 2" would look like if we let go of all our previously held assumptions.

> What if *every* query in Relay were statically known?

Woah, that's crazy talk, Joe. What are you talking about? I'd been spending too long inside the bubble of the Relay philosophy — the one with the tenets about query colocation, dynamic query construction, and fragment parametrization — that I'd never really considered this. Those tenets were already in place before I joined the team, and I assumed — perhaps naively — that they must have been there for a good reason; people who'd been at Facebook much longer than I and had witnessed the birth and evolution of GraphQL had decided that there must be a better way, and something new should be tried. It never occurred to me that embracing the static, the rigid, the "inflexible" could be a step forward. Funny that I hadn't, seeing as I had just prior to this built a new static API for writing Relay mutations (data updates) that aimed to replace the magical dynamism of the existing Relay mutations with something more predictable, debuggable and teachable.

But Joe hadn't just considered it; he'd had the idea circling around in his concious and unconscious mind for possibly weeks or months. He'd given it deep, painstaking thought, and he was nearing the conclusion that it just might work. Fully static queries, known ahead of time, would unlock new kinds of performance optimization by allowing us to burn cycles at build time precomputing optimal structures that would allow us to go faster at run time. And with static queries, we'd get query persistence effectively "for free", just like the native apps.

So, back to that question.

> What if *every* query in Relay were statically known?

It was heresy, but we went through the exercise anyway, figuring out what each of the existing APIs would look like if we wiped the slate clean and started from scratch without dynamic, runtime query construction. It meant giving up some features, jettisoning some magic. In return, users would get predictability, performance, and an execution model that mere mortals could understand. There would be a cost though: instead of having Relay figure out a minimal set of data to refetch when parameters change, we'd require users to specify a static query ahead of time. And we'd have to rewrite everything, again, in order to implement this.

On the flip side, rewriting would mean the ability to scratch some long-felt itches, like:

- Switching to a purely POJO-based representation for cache data.
- Abstracting all low-level record access behind a thin facade API that would allow us to plug-in different kinds of underlying storage (including native data structures, mediated by a JavaScript-to-native bridge).
- Aligning our terminology, API shape, and data-flow with the latest thinking on the iOS and Android side (for better interoperability and communication).
- Dropping support for legacy GraphQL (pre-open source) syntax.
- Splitting the code up into separate "compiler", generic "core/runtime" and "React" packages.
- Implementing deterministic, performant garbage collection.
- And many others.

# Relay Modern

As a tiny hat-tip to risk management, we decided to build a toy prototype before fully committing to the rewrite. Joe spent about two weeks building a little React Native app that could render and paginate through a list of friends, and navigate to a simple "permalink" view using two or three static queries. "I think it's going to work", he said. So Joe and I started again, this time for real. It took us about 3 months to implement the new core, while in the meantime other Relay team members continued adding features to the existing codebase.

We knew perf was going to matter, so I built a microbenchmarking framework that uses the Wilcoxon Signed Rank test to give us an accurate picture of whether any given change made things better or worse. We maintained great test coverage and made sure everything was thoroughly Flow-typed. I built a "golden" test runner (this predated Jest's "snapshots" feature) to enable us to maintain a large body of tests easily even as we made frequent changes to our internal query representation. I made sample a React Native app so that we could run on-device benchmarks. Basically, I was scrambling as fast as I could to lay down most of the supporting work while Joe built core abstractions on top. It was amazing to work with such a motivated, talented collaborator. Striving to keep up, providing deep code review on his diffs (that he knocked out at an humbling clip and quality), and the countless stimulating discussions around whiteboards: I know that the experience made me a better developer. It was deeply rewarding.

The moment of truth came when we were finally able to run an on-device normalization benchmark — normalization is the term we use for processing a query response from the network, transforming it from a hierarchical form into a flattened, "normalized" representation for storage in the on-device cache. We knew Relay Modern should be faster because it was drastically simpler, we'd taken great care to avoid performance anti-patterns, and we were simply doing much less work at run-time. When the benchmarks came in we were a little stunned. We ran them again. We sanity-checked them on multiple devices. The results were consistent: normalization in Relay modern was about 10 times faster. It's true that normalization is just one of the things that Relay has to do, but it was clear that we were onto something. Relay Modern was going to be great for mobile devices and spotty networks. It would perform great on desktop environments too, but we'd aimed to solve a harder problem and it looked like that's exactly what we'd done. The bet had paid off.

# The happy ending

All this happened in the first half of 2016. We actually thought we were on the brink of shipping it. [I spoke about it publicly](https://www.youtube.com/watch?v=OEfUBN9dAI8) for the first time in August — ill-advisedly calling it "Relay 2" because we didn't have a better name for it yet — and [Joe followed soon after](https://www.youtube.com/watch?v=TcpS2nvt4-4). We had a few road bumps on the way which led us to delay shipping; I'm sorry that it took so long, but I'm really happy to say that the product is finally out the door.

Between finishing the new core and shipping 1.0.0 there has been a lot of thankless grunt work done by a bunch of people on the team. It was a group effort, but in particular:

- [Yuzhi](https://twitter.com/yuzhiz) lead an amazing effort to migrate thousands of Classic components and educate teams.
- [Jennifer](https://twitter.com/Jennifer_JYW) built out prefetching (the ability to have native code on a mobile start fetching a query for a React Native app before the JavaScript VM has even finished booting).
- [Jan](https://twitter.com/kassens) did a fantastic job of making sure we had a great migration strategy and compatibility API for moving existing apps over from Relay Classic to Relay Modern.
- [Lee](https://twitter.com/leeb) helped us prepare and package everything for an open source release.
- Our manager [Alex](https://twitter.com/alex_langenfeld) was a roving support agent who tirelessly helped out with anything and everything.

But this post is in large part a tribute to Joe Savona. Neither of us is working directly on Relay any more, but the experience will forever loom as an indelible and transformative part of my Facebook story. As a colleague, erstwhile neighbor, and friend, working on Relay with Joe was a once-in-a-lifetime experience. I'm sure that Relay will continue to be an important building block for teams at Facebook, and I hope that it's useful to teams in the external community as well, but no matter what direction the framework ends up evolving towards in the future, I know that the design and architecture will retain elements of Joe's brilliant touch for a long time to come. Thank you, Joe, and keep on hacking.

<small><em>Discuss: [Facebook](https://www.facebook.com/glh/posts/10154295300886307) — [Twitter](https://twitter.com/wincent/status/865817774530088960)</em></small>
