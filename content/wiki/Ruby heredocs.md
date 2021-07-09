---
tags: ruby wiki
title: Ruby heredocs
---

# Basic

```ruby
<<HERE
Hi, #{foo}
HERE
```

# Optionally indented end-marker

```ruby
<<-HERE
Hi, #{foo}
    HERE
```

# Non-interpolating

```ruby
<<'HERE'
#{foo} won't be interpolated
HERE
```
