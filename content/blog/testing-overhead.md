---
title: Testing overhead
tags: rspec rails
---

I've just had a very frustrating experience while adding a new "twitter"-like functionality to a Rails application. The "Tweet" model itself is very simple, obviously, and the controller is basically your standard RESTful deal. The code was so basic that I sat down and bashed it out in a couple of hours; that includes writing the migration, the model, the controller (with page caching and appropriate access control for administrative actions), the helper, the views (HTML and Atom format), a cache sweeper... all of this along with accompanying CSS, AJAX-powered live previews while editing, and visual feedback if the entered text exceeds the 140 character recommended limit.

I didn't "[BDD](/wiki/BDD)" this as it was so simple; instead testing continuously in the browser to make sure each change I made had the desired effect. I make no apologies about not doing the BDD thing here. For really simple code — and not just simple but *conventional* (so you don't even have to think about *design* questions) — I often think it's best to just bash it out, performing manual checks as you go, and *then* come back and write the specs. So even though you don't write specs beforehand (where they can play a role informing the design), you still go back and write them for all the other reasons that we choose to write specs (things like guarding against regressions, testing edge cases, confirming that behaviour is deeply and not just superficially correct etc).

Working in this way allows me to implement things quickly without losing my "flow". And when I go back and write the specs I generally first manually "break" them (think of it as a "manual Heckle") to make sure that the spec fails if the code is wrong, and then correct them. In other words, rather than engaging in this cycle:

1.  Write failing spec
2.  Execute spec and confirm that it fails
3.  Write code to make spec pass
4.  Execute spec and confirm that it passes
5.  Go to 1

I'm actually doing:

1.  Write a bit of code
2.  Test in browser or `script/console` as appropriate to confirm that it works
3.  Go to 1 until finished feature
4.  Write spec
5.  Execute spec and confirm that it passes
6.  If spec is at all complex, purposely break it
    1.  Execute spec to confirm that it fails
    2.  Correct the spec
7.  Go to 4

It might look inefficient, but it's not really in practice. For simple features like the one described here I think it's a good way to go.

The problem is, since writing the new feature, I've spent literally *hours* (perhaps as many as 7 or even 8) spread over several days writing the accompanying specs. It's really made me feel like the development train was derailed. The disparity in time and effort between the code and specs has had me seriously questioning the wisdom of all this darn testing. And I wonder how the hour or two I spent writing that initial implementation would have felt if it had actually been 10 hours of mixed testing and implementation. Where would have been of the "flow" then?

Let's have a look at the output of `git diff --stat` for the commit containing the new feature and the accompanying specs:

     app/controllers/tweets_controller.rb         |   84 +++++
     app/helpers/tweets_helper.rb                 |   31 ++
     app/models/tweet.rb                          |   33 ++
     app/sweepers/tweet_sweeper.rb                |   49 +++
     app/views/tweets/_preview.html.haml          |    7 +
     app/views/tweets/edit.html.haml              |   23 ++
     app/views/tweets/index.atom.builder          |   14 +
     app/views/tweets/index.html.haml             |   12 +
     app/views/tweets/new.html.haml               |   21 +
     app/views/tweets/show.html.haml              |    7 +
     config/routes.rb                             |    3 +
     db/example_data.rb                           |    6 +
     db/migrate/20090222155021_create_tweets.rb   |   12 +
     spec/controllers/tweets_controller_spec.rb   |  505 ++++++++++++++++++++++++++
     spec/controllers/tweets_routing_spec.rb      |   71 ++++
     spec/helpers/tweets_helper_spec.rb           |   48 +++
     spec/models/tweet_spec.rb                    |  138 +++++++
     spec/views/tweets/_preview.html.haml_spec.rb |   60 +++
     spec/views/tweets/edit.html.haml_spec.rb     |   91 +++++
     spec/views/tweets/index.atom.builder_spec.rb |   74 ++++
     spec/views/tweets/index.html.haml_spec.rb    |   53 +++
     spec/views/tweets/new.html.haml_spec.rb      |   69 ++++
     spec/views/tweets/show.html.haml_spec.rb     |   31 ++
     23 files changed, 1442 insertions(+), 0 deletions(-)

To make things a little clearer, let me reformat the output thusly:

     app/controllers/tweets_controller.rb         |   84 +++++    spec/controllers/tweets_controller_spec.rb   |  505 ++++++++++++++++++++++++++
     app/helpers/tweets_helper.rb                 |   31 ++       spec/helpers/tweets_helper_spec.rb           |   48 +++
     app/models/tweet.rb                          |   33 ++       spec/models/tweet_spec.rb                    |  138 +++++++
     app/sweepers/tweet_sweeper.rb                |   49 +++
     app/views/tweets/_preview.html.haml          |    7 +        spec/views/tweets/_preview.html.haml_spec.rb |   60 +++
     app/views/tweets/edit.html.haml              |   23 ++       spec/views/tweets/edit.html.haml_spec.rb     |   91 +++++
     app/views/tweets/index.atom.builder          |   14 +        spec/views/tweets/index.atom.builder_spec.rb |   74 ++++
     app/views/tweets/index.html.haml             |   12 +        spec/views/tweets/index.html.haml_spec.rb    |   53 +++
     app/views/tweets/new.html.haml               |   21 +        spec/views/tweets/new.html.haml_spec.rb      |   69 ++++
     app/views/tweets/show.html.haml              |    7 +        spec/views/tweets/show.html.haml_spec.rb     |   31 ++
     config/routes.rb                             |    3 +        spec/controllers/tweets_routing_spec.rb      |   71 ++++
     db/example_data.rb                           |    6 +
     db/migrate/20090222155021_create_tweets.rb   |   12 +
     23 files changed, 1442 insertions(+), 0 deletions(-)

The most obvious King of Testing Pain here is the darn controller, clocking in with 576 lines of specs, or 601% bloat compared with the actual controller, which was only 84 generously-distributed lines.

The associated routing tests look much worse as a percentage (over 2300% growth) but the growth in terms of absolute lines is much less frightening at only 71 lines of specs.

The views all show similar patterns: large bloat when viewed as a percentage but nothing too bad in terms of absolute lines, all of them falling within the 30-to-100 line range.

The helper looks like it yielded relatively little pain, with 31 lines of implementation requiring a mere 48 lines of specs, but the number is deceptively low because there were a couple AJAX-y JavaScript things that I couldn't actually test in any sensible way.

The model is a very slim one indeed at only 33 lines (13 of which are comments or blank lines). It required a 138-line spec file, or somewhat over 400% growth. So the pain factor was relatively low here due to the smallish absolute number of lines, but you can see how a complex model could quickly become very painful indeed.

Finally there's the sweeper which is basically untested. Let that be a black mark against my name. But I just can't go back and write any more specs for this feature right now. I need a change of scenery.

I don't really have anything insightful to comment about all this right now. I just wanted to remark about the pain and monotony of this whole process. I seriously found myself wondering whether it was all worth it. In doing all this poring over the code I *did* see a couple of rough edges, not bugs, which I was able to polish up. I also spotted a couple of places where I could make minor enhancements. But still, were these tiny tweaks enough to justify the time investment?

The only thing that kept me going was thinking about how often upstream changes made to Rails break perfectly functional applications. Perhaps that alone is enough to make it all worth it. That, and the hope that if I develop more testing discipline I'll eventually get much faster at churning them out.
