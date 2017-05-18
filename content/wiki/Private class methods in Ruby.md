---
tags: ruby wiki
---

The `private`, `public` and `protected` visibility methods have no effect for class methods:

```ruby
class Foo
  def self.bar
    puts "I am public!"
  end

private

  def self.baz
    puts "I am public too!"
  end
end
```

There are two ways to make class methods private:

```ruby
class Foo
  def self.bar
    puts "I am private!"
  end
  private_class_method :bar
end
```

Or:

```ruby
class Foo
  class << self
  private
    def bar
      puts "I am private!"
    end
  end
end
```
