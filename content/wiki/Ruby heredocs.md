---
tags: ruby wiki
---

# Basic

```shell
<<HERE
Hi, #{foo}
HERE
```

# Optionally indented end-marker

```shell
<<-HERE
Hi, #{foo}
    HERE
```

# Non-interpolating

```shell
<<'HERE'
#{foo} won't be interpolated
HERE
```
