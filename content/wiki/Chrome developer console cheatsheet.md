---
tags: javascript chrome
cache_breaker: 1
---

-   `time('foo')` and `timeEnd('foo')`: print elapsed time
-   `keys(window)`: shows current global variables ([source](https://twitter.com/ChromiumDev/status/423880231758213120))
-   `$_`: the value of the most recently evaluated expression
-   `$0`-`$4`: recently selected DOM elements or JavaScript objects
-   `$(...)`: equivalent to `document.querySelector()`
-   `$$(...)`: equivalent to `document.querySelectorAll()`
-   `$x(...)`: get elements specified by XPath expression
-   `clear()`: clear the console (also, `Command-K` or `Control-L`)
-   `copy(object)`: copy a string representation of `object` to the clipboard
-   `debug(fn)`: break into debugger when `fn` is called
-   `dir(object)`: alias for `console.dir()` (also, not that `%0` can be used as a format specifier to inline the `dir()` representation in the middle of a `console.log()`)
-   `inspect(object)`: show an object in the "Elements" tab
-   `getEventListeners(object)`: does what it says on the tin
-   `keys(object)` and `values(object)`
-   `monitorEvents(object[, events])` and `unmonitorEvents(object[, events])`: logs events (eg. `monitorEvents(window, "resize")`); note there are some aliases defined as well (eg. "mouse", "key", "touch", "control") that stand in for multiple underlying events
-   `profile(name)`, `profileEnd(name)`: start/stop a JavaScript profiling session

# See also

-   <https://developers.google.com/chrome-developer-tools/docs/commandline-api>
-   [Chrome developer tools](/wiki/Chrome_developer_tools)
-   an incredibly comprehensive cheatsheet: <http://anti-code.com/devtools-cheatsheet/>

