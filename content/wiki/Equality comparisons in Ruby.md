---
tags: ruby wiki
---

Being relatively new to [Ruby](/wiki/Ruby) I am constantly forgetting the differences between the different kinds of equality comparisons, so here is a quick "cheat sheet":

-   **==** and **!=**: Determine equivalence of values ("do these two objects have the same value")?

That is: `1.0 == 1` is `true` even though one is a `Float` and the other is a `Fixnum`.

-   `eql?` is stricter, requiring the objects to be of the same class to pass.

So: `1.0.eql? 1.0` is `true` but `1.0.eql? 1` is `false`.

-   `equal?` is the strictest of all, requiring the two objects to be the exact same instance (have the same `object_id`).

So: `1.0.equal? 1.0` is `false` and `1.equal? 1` is only `true` because [Ruby](/wiki/Ruby) re-uses the same `Fixnum` instance for `1` and `1` as an optimization.
