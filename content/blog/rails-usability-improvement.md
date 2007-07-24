---
title: Rails usability improvement
---

[This](http://dev.rubyonrails.org/changeset/7215%20) is a nice example of a minor usability enhancement for Rails.

But an otherwise nice change is marred by a useless comment which clutters the source and impedes readability:





    # Don't validate when there is an :if condition and that condition is false or there is an :unless condition and that condition is true 
    unless (options[:if] && !evaluate_condition(options[:if], record)) || (options[:unless] && evaluate_condition(options[:unless], record))
      ...

Not much better than a comment like this:

    # check if foo is set and it evaluates to true:
    if (foo && foo == true)
      ...

Personally I think the best way to format such a conditional is to split it across two lines for maximum clarity, correct the inconsistent use of braces (the second half of the conditional has them, the first half doesn't) and then just send the comment to `/dev/null`:

    unless (options[:if] && !evaluate_condition(options[:if], record)) ||
            options[:unless] && evaluate_condition(options[:unless], record)
      ...

I still don't like the logic as there are too many negations and you have to pause as you read it to sort them out in your head; and I think it could be made much more readable by factoring out the test-if-set-then-evaluate pattern, seeing as they've already factored out the `evaluate_condition` part.
