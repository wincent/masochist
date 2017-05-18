---
tags: ruby wiki
---

In addition to using the debugger it can be useful to trace through a Ruby program or a section of it.

# Example: tracing through one section

In this example we filter all but the "line" events (when a line changes):

    require 'tracer'

    t = Tracer.new
    t.add_filter lambda { |event, *rest| event == 'line' }
    t.on do
      something_you_want_to_trace
    end

Or more verbosely (no filtering):

    require 'tracer'

    t = Tracer.new
    t.on do
      something_you_want_to_trace
    end
