---
tags: ruby wiki
---

A possible gotcha:

    def my_method(*optional_params)
    end

The optional params are passed in as an array. If there are no optional params, `optional_params` will be an empty array.

    def subclass_method(required_param, *optional_params)
      super optional_params
    end

Note that `optional_params` is already an array, but it is still packed into an array before being sent to `super`. This means that the method in the subclass sees `[]`, the method in the superclass will see `[[]]`. If the subclass sees `[1, 2, 3]`, the superclass will see `[[1, 2, 3]]`.

# The solution

Instead of passing `optional_params` pass `*optional_params`:

    def subclass_method(required_param, *optional_params)
      super *optional_params
    end

The same trick works when you want to pass a block; instead of doing this:

    def subclass_method(&block)
      other_method block
    end

Do this:

    def subclass_method(&block)
      other_method &block
    end

# Alternative workaround

This was the workaround I used before discovering the real solution:

Depending on what kinds of parameters you are prepared to accept the `Array#flatten` method may be useful for handling these quirks, as shown in this [IRB](/wiki/IRB) session:

    irb(main):133:0> [].flatten
    => []
    irb(main):134:0> [1, 2].flatten
    => [1, 2]
    irb(main):135:0> [[[1, 2]]].flatten
    => [1, 2]
    irb(main):136:0> [[]].flatten
    => []
