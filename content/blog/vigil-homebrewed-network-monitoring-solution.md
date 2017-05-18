---
title: Vigil: homebrewed network monitoring solution
tags: vigil blog
cache_breaker: 1
---

With the [server migration over](/blog/server-migration-now-complete) I turned my attention yesterday to [finding a network monitoring solution](/twitter/282). Back when I was with a dedicated server from a managed hosting provider, I left the monitoring entirely in their hands. Now that I'm in [the cloud](/wiki/the_cloud) it's up to me.

So I started by [installing RDDTool](/twitter/284) to generate pretty graphs, and today I've been working on a simple [Sinatra](/wiki/Sinatra) front-end to display them in the browser. Every project needs a name, even mini-projects like this one, so I've christened this one as [Vigil](/wiki/Vigil).

Here's what the [DSL](/wiki/DSL) for defining hosts looks like right now:

```ruby
# 60 seconds is actually the default but you can override it like this
vigil.defaults[:interval] = 60.seconds

host 'wincent.com' do |host|

  # the :every option can be used to override the checking interval
  # for a specific monitoring task
  host.ping :every => 60.seconds do
    alert.when :packet_loss => equals(100.percent) do
      # optional custom code to be run here
    end

    alert.when :packet_loss => greater_than(50.percent),
               :for => more_than(5.minutes),
               :severity => :medium

    alert.when :avg_rtt => greater_than(1000),
               :for => more_than(2.minutes)

    alert.when :avg_rtt => greater_than(500),
               :severity => :medium

    ok.when :packet_loss => less_than_or_equal(10.percent),
            :for => more_than(5.minutes)
  end

  host.https '/heartbeat/ping' do
    alert.when  :status => not_equal_to(200)
    alert.unless :response_body => matches(/I am alive!/)
    # if no "ok" block defined, an implicit "ok" is derived when none of
    # the other conditions matches
  end

  host.http '/a/products/' do
    alert.when  :status => not_equal_to(200)
    alert.unless :response_body => matches(/Install is easily configured/)
  end
end
```

Next step: a simple queuing system to run those monitoring tasks in a background thread.
