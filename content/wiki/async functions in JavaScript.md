---
tags: javascript wiki
cache_breaker: 1
---

# Sample code

```javascript
#!/usr/bin/env node

require('babel/polyfill');

import Promise from 'bluebird';

async function other() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('value'), 3000);
  });;
}

(async function() {
  console.log('Hello, world!');
  console.log(await other());
  console.log('Hello, world!');
})();
```

Prints:

    Hello, world!
    value
    Hello, world!

## Can a "top-level" function be `async`?

Yes. As the sample code shows, we can mark a top-level function as `async` and call it immediately without anything `await`-ing it; it will run, block while waiting for any internal `await` calls to resolve, and then exit. `async` doesn't mean anything special other than "a function that may use the `await` keyword.

## Do promise rejections and errors get swallowed?

Replace the `resolve` with a `reject` and the sample prints:

    Hello, world!
    undefined
    Hello, world!

`throw` instead of `reject` and get:

    Hello, world!
    [shows error and exits]

Beware of using (the non-standard) `done()` on the promise; this will cause the `await` call to not wait! `catch()` does not break `await` like this, but you can't re-`throw` from the `catch()` and have it bubble up; for example:

```javascript
new Promise((resolve, reject) => {
  setTimeout(() => reject('value'), 1000);
})
.catch(error => {
  throw 'Error: ' + error;
});
```

Will print:

    Hello, world!
    undefined
    Hello, world!

A `throw` in a `then` will get swallowed in the same way, as will a `throw` in the initial function passed to `new Promise()`. Effectively, only errors thrown asynchronously get bubbled up.

**Note:** Things are in flux right now, so the actually observed behavior will very much [depend on the version of Node](http://stackoverflow.com/a/30650609/2103996) that you are using.

If you're using Bluebird, you'll want something like this, which gives you basically sane behavior with both Promises and `async`/`await`:

```javascript
// see: https://github.com/petkaantonov/bluebird/blob/master/API.md#global-rejection-events
// see also: http://jamesknelson.com/are-es6-promises-swallowing-your-errors/
process.on('unhandledRejection', (reason, promise) => {
  throw reason;
});
```
