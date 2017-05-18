---
tags: ruby wiki
cache_breaker: 1
---

[This article](http://blog.grayproductions.net/articles/dsl_block_styles) provides an excellent overview of the two main DSL "block styles" available in Ruby:

Either, redefining `self` and using `instance_eval`:

```ruby
adapter.config do
  height 700
  width 500
end
```

Or, passing in a "configurator" object:

```ruby
adapter config do |c|
  c.height 700
  c.width 500
end
```

The advantage of the former is the clean syntax, but the disadvantage is that by changing `self` you might break message sends that rely on an implicit (and different) `self` value; eg:

```ruby
def width_helper
  # complicated calculation...
end

adapter.config do
  height 700
  width width_helper # NoMethodError raised here
end
```

A third style not mentioned in the article is to use subclasses:

```ruby
class MyConfig < Config
  def config
    height 700 # height method defined in Config superclass
    width 500 # width method defined in Config superclass
  end
end
```
