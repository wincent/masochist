---
tags: ruby wiki
---

Many Ruby methods follow a "bang" pattern to differentiate destructive messages (which alter the object to which they are sent) from non-destructive ones (which do not alter the receiving object).

# Example

The `capitalize` method of the `String` class returns a capitalized *copy* of a string, but the `capitalize!` (bang variant) method directly modifies the string object itself.

# See also

<http://www.rubycentral.com/ref/ref_c_string.html#capitalize>
