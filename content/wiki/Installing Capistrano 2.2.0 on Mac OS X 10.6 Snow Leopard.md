---
tags: capistrano snow.leopard wiki
cache_breaker: 1
---

# Why we need [Capistrano](/wiki/Capistrano) 2.2.0

[Snow Leopard](/wiki/Snow_Leopard) comes with version 2.5.2 of [Capistrano](/wiki/Capistrano), but version 2.2.0 is the last know-working version of [Capistrano](/wiki/Capistrano) for me (successive versions included enough pointless code-churn to break deployment) so I froze my old Capistrano install at 2.2.0.

# Installing

```shell
$ sudo gem install --version 2.2.0 capistrano
Successfully installed capistrano-2.2.0
1 gem installed
Installing ri documentation for capistrano-2.2.0...
Installing RDoc documentation for capistrano-2.2.0...
```

Running `cap`, however, will cause the later version to be used.

```shell
$ cap --version
Capistrano v2.5.2
```

# Short term solution

The older version must be explicitly targeted like this:

```shell
$ cap _2.2.0_ --version
Capistrano v2.2.0
```

# Long term solution

Replace use of Capistrano with something non-brittle. Even a hand-coded shell-script would be better. Wish noted in feature [request \#1376](/issues/1376).
