---
tags: jscodeshift javascript wiki
---

# Making an object literal

I had a use case where I wanted to replace the entire file with an object literal, based on a nested object `props`. The easy way:

```
const output = j(file.source)
  .find(j.Program)
  .replaceWith(expression(['(' + JSON.stringify(props) + ')']))
  .toSource();
```

The hard way:

```
const output = j(file.source)
  .find(j.Program)
  .replaceWith(
    function makeObject(fromJS) {
      if (Object.keys(fromJS).length) {
        return j.objectExpression(Object.keys(fromJS).map(key => (
          j.property("init", j.identifier(key), makeObject(fromJS[key]))
        )));
      } else {
        return j.identifier("4")
      }
    }(props)
  )
  .toSource();
```
