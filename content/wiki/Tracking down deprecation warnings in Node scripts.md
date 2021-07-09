---
tags: wiki javascript node
title: Tracking down deprecation warnings in Node scripts
---

Just say some dependency in you enormous `node_modules` folder is causing a deprecation warning to be printed out whenever you run `yarn gulp build`. You can cause a full trace to be emitted like so:

```bash
node --trace-deprecation node_modules/.bin/gulp build
```
