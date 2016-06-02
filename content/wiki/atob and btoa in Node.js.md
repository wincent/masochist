---
tags: javascript
---

# Base-64 encode

```
new Buffer('Hello World!').toString('base64'); // SGVsbG8gV29ybGQh
```

# Base-64 decode

```
new Buffer('SGVsbG8gV29ybGQh', 'base64').toString(); // Hello World!
```

# Source

* http://stackoverflow.com/questions/23097928/node-js-btoa-is-not-defined-error
