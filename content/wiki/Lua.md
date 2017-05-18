---
tags: lua wiki
---

# Official site

* http://lua.org/

# Lua for JavaScript programmers

[This](http://phrogz.net/lua/LearningLua_FromJS.html) is a great resource for people coming to Lua from [JavaScript](/wiki/JavaScript). Much will be familiar:

* Functions (including anonymous functions) as first-class values.
* Closures.
* Only one real data structure, the "table" (analogous to a JavaScript object), which stands in for arrays too.
* Single and double quoted strings.

## Gotchas

* "Arrays" use 1-based indexing.
* Method dispatch can be done via two operators (`.` for normal dispatch, and `:` which transparently passes the initial "self" parameter when working in Object-oriented style).
* No regular expressions; just an "pattern" facility that will seem odd to people coming from Perl-compatible regular expressions.

## Other differences

* Tiny language surface area (eg. no ternaries, for example).
