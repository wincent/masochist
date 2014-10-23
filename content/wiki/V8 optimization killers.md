---
tags: javascript v8
---

Things which cause the entire containing function to be deoptimized (ie. compiled with the generic compiler instead of the optimizing compiler, which can be 100x slower):

-   generator functions
-   `for`/`of` statements
-   `try`/`catch` statements
-   `try`/`finally` statements
-   compound `let` assignment
-   compound `const` assignment
-   object literals with a `__proto__` property, or `get` or `set` declarations
-   `debugger`
-   `eval()`
-   `with`
-   any use of `arguments` except `arguments.length`, `arguments[i]` (where `i` is an inbounds integer index) and `foo.apply(bar, arguments)`
-   `switch` with more than 128 `case` clauses
-   `for`/`in` if:
    -   "key" is not a strictly local variable
    -   object is in dictionary mode (ie. because of properties added/deleted outside the constructor)
    -   object has enumerable properties in its prototype chain
    -   object has array indices (true for arrays, obviously)

# Source

-   <https://github.com/petkaantonov/bluebird/wiki/Optimization-killers>

