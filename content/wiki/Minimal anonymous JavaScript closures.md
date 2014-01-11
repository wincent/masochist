---
tags: javascript iife
---

Putting content inside a closure (ie. by putting it in a function) allows you to create temporary variables without polluting the global scope. However, if you name your function, the name itself will pollute the scope, and if you make your function anonymous, you'll get a syntax error:

```javascript
// not valid syntax!
function() { /* ... */ }();
```

By preceding your anonymous function with a bang, you turn it into a function expression with valid syntax:

```javascript
!function() {
  var foo, bar, baz;
  // etc...
}();
```

This is a byte shorter than the alternatives with valid syntax:

```javascript
(function() { /* ... */ }());
(function() { /* ... */ })();
```

# See also

-   [IIFE](/wiki/IIFE)

