---
tags: ruby
---

Differences between class variables and instance variables:

-   `@@foo`: shared by a class and all its subclasses
-   `@foo`:
    -   on an instance method, becomes an instance variable
    -   on a class method (or an instance method of a metaclass), becomes a class variable visible only to the class (ie. not shared with subclasses)

Example:

```ruby
class Parent
  @@foo = 1

  class << self
    def bar
      @bar ||= 10
    end
  end 
end

class Child < Parent
  def foo
    @@foo # returns 1, the value of @@foo from the superclass
  end

  def self.bar
    @bar ||= 20 # not shared with superclass
  end 
end

Parent.bar # => 10
Child.bar  # => 20
```
