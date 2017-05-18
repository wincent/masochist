---
tags: ruby wiki
---

This article describes things that were not immediately obvious to me as a [Cocoa](/wiki/Cocoa) programmer when I started learning [Ruby](/wiki/Ruby). For more general tips, see [Ruby recipes](/wiki/Ruby_recipes).

# Avoiding mutual/circular/recursive requires

See [Avoiding mutual/circular/recursive requires](/wiki/Avoiding_mutual%2fcircular%2frecursive_requires).

# Private methods and `self`

Private methods are available only from within the instances of the class to which they belong. You may not send to private methods from outside. In fact, the protection is so strict that private methods are not allowed to have an explicit receiver at all, *not even `self`*! This means that the following won't work (yields a `NoMethodError`):

    class A
      def initialize
        self.secret # self here is not allowed
      end
    private
      def secret
      end
    end

Personally I find this restriction (not being allowed to use `self` as a receiver unnecessary and confusing. It also means that you can't give private methods names like `<<`:

    class B
    private
      def <<(arg)
        puts "This method can never be called (except by using the send method)."
        puts "The Ruby interpreter issues a parse error 'unexpected tLSHFT' if you try to call this without self."
        puts "But if you call it with self you'll get an NoMethodError"
      end
    end

# Enabling tab-completion in [IRB](/wiki/IRB)

Start [IRB](/wiki/IRB) using:

    irb --readline -r irb/completion

Or add the following to your `~/.bash_profile`:

    alias irb="irb --readline -r irb/completion"

Source: <http://www.caliban.org/ruby/rubyguide.shtml>

# Subclassing `Object`

*All* classes ultimately inherit from `Object` so this:

    class Foo
    end

Is equivalent to:

    class Foo < Object
    end

Proof (using [IRB](/wiki/IRB)):

    class Foo
    end
    Foo.superclass
    => Object

The default `initialize` method of `Object` does nothing, so it is not necessary to call `super` (or `super()`) in a class that directly inherits from `Object`:

    class Foo
      def initialize
        super() # redundant!
      end
    end
